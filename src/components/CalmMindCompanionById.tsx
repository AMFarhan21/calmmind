'use client'
import React, { useEffect, useState } from 'react'
import { categoriesIcon, getCategoriesColor } from '@/constant'
import Image from 'next/image'
import { Button } from './ui/button'
import { Mic, MicOff, Play } from 'lucide-react'
import { vapi } from '@/lib/vapi'
import { configureAssistant } from '@/constant/assistant'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { cn } from '@/lib/utils'
import { createSessionHistory } from '@/actions/companion.action'

type CalmCompanion = {
    id: string;
    style: string | null;
    title: string | null;
    description: string | null;
    category: string | null;
    voice: string | null;
    duration: bigint | null;
    user_id: string | null;
    created_at: Date;
} | null | undefined

interface CalmMindCompanionByIdProps {
    calmCompanion: CalmCompanion,
    userImage?: string,
    username?: string | null
}


enum CallStatus {
    INACTIVE = "INACTIVE",
    ACTIVE = "ACTIVE",
    CONNECTING = "CONNECTING",
    FINISHED = "FINISHED"
}

interface SavedMessages {
    role: string,
    content: string
}

const CalmMindCompanionById = ({ calmCompanion, userImage, username }: CalmMindCompanionByIdProps) => {
    // VAPI
    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE)
    const [isSpeaking, setIsSpeaking] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [messages, setMessages] = useState<SavedMessages[]>([])

    useEffect(() => {
        const onCallStart = () => setCallStatus(CallStatus.ACTIVE)
        const onCallEnd = () => setCallStatus(CallStatus.FINISHED)
        const onMessage = (message) => {
            if (message.type === "transcript" && message.transcriptType === 'final') {
                const newMessage = {
                    role: message.role,
                    content: message.transcript
                }
                setMessages((prev) => [newMessage, ...prev])
            }
        }
        const onSpeechStart = () => setIsSpeaking(true)
        const onSpeechEnd = () => setIsSpeaking(false)
        const onError = (error: Error) => console.error("ERROR on call: ", error)

        vapi.on("call-start", onCallStart)
        vapi.on("call-end", onCallEnd)
        vapi.on("message", onMessage)
        vapi.on("error", onError)
        vapi.on("speech-start", onSpeechStart)
        vapi.on("speech-end", onSpeechEnd)

        return () => {
            vapi.off("call-start", onCallStart)
            vapi.off("call-end", onCallEnd)
            vapi.off("message", onMessage)
            vapi.off("error", onError)
            vapi.off("speech-start", onSpeechStart)
            vapi.off("speech-end", onSpeechEnd)
        }

    }, [])


    const toggleMic = () => {
        const isMuted = vapi.isMuted()
        vapi.setMuted(!isMuted)
        setIsMuted(!isMuted)
        console.log(isMuted ? "ACTIVE" : "NOT ACTIVE")
    }

    const handleCall = () => {
        setCallStatus(CallStatus.CONNECTING)

        const assistantOverrides = {
            variableValues: {
                category: calmCompanion?.category,
                description: calmCompanion?.description,
                style: calmCompanion?.style
            },
            clientMessages: ['transcript']
        }

        // @ts-expect-error: assistantOverrides
        vapi.start(configureAssistant(calmCompanion?.voice as string, calmCompanion?.style as string), assistantOverrides)
    }

    const handleDisconnect = async () => {
        setCallStatus(CallStatus.FINISHED)
        vapi.stop()
        await createSessionHistory(calmCompanion?.id as string)
    }


    const GetIcon = categoriesIcon[calmCompanion?.category as keyof typeof categoriesIcon]
    return (
        <div className='w-full'>
            <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-6">
                <div className="hidden md:flex border border-border/80 bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2 justify-center items-center">
                    {
                        callStatus === CallStatus.ACTIVE ? (
                            <DotLottieReact
                                src="https://lottie.host/1027f286-54d0-4ba1-a9cf-f15f58d5b785/ZLJIe9jlG8.lottie"
                                loop={true}
                                autoplay={true}
                                className='p-10'
                            />

                        ) : (
                            <GetIcon size={100} style={{ color: getCategoriesColor(calmCompanion?.category as string) }} />
                        )
                    }
                </div>
                <div className="bg-muted rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
                    <div className="md:hidden mb-6 aspect-video w-full bg-background border rounded-xl justify-center items-center flex">
                        {
                            callStatus === CallStatus.ACTIVE ? (
                                <DotLottieReact
                                    src="https://lottie.host/1027f286-54d0-4ba1-a9cf-f15f58d5b785/ZLJIe9jlG8.lottie"
                                    loop
                                    autoplay
                                    className='p-10'
                                />

                            ) : (

                                <GetIcon size={60} style={{ color: getCategoriesColor(calmCompanion?.category as string) }} />
                            )
                        }
                    </div>
                    <div className="text-2xl font-semibold tracking-tight px-auto mx-auto">
                        {username}
                    </div>
                    <ul className="mt-6 space-y-4">
                        <li>
                            <div className="flex items-start gap-3 justify-center">
                                <Image src={userImage!} alt={userImage!} width={80} height={80} className="rounded-full" />
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center justify-center gap-3">
                            </div>
                        </li>
                    </ul>
                    {
                        isMuted ? (
                            <Button onClick={toggleMic} variant={"secondary"} className="w-full text-background items-center">
                                <MicOff />
                                <p className='hidden sm:inline'>Turn on mic</p>
                            </Button>
                        ) : (
                            <Button onClick={toggleMic} variant={"secondary"} className="w-full text-background items-center">
                                <Mic />
                                <p className='hidden sm:inline'>Turn off mic</p>
                            </Button>
                        )
                    }
                    <Button
                        className="mt-2 w-full items-center"
                        disabled={callStatus === CallStatus.CONNECTING}
                        onClick={callStatus === CallStatus.ACTIVE ? handleDisconnect : handleCall}
                    >
                        {callStatus === CallStatus.ACTIVE ? "End call" : callStatus === CallStatus.CONNECTING ? "Connecting" : "Start your session"}
                        <span className={cn("inline", callStatus !== CallStatus.INACTIVE && "hidden")}>
                            <Play />
                        </span>
                    </Button>
                </div>
            </div>
            <div>
                {
                    messages.map((message, idx) => {
                        if (message.role === "assistant") {
                            return (
                                (
                                    <p key={idx}>
                                        <span className='text-green-400'> {message.role}: </span> {message.content}
                                    </p>
                                )
                            )
                        } else {
                            return (
                                (
                                    <p key={idx}>
                                        <span className='text-blue-400'> {message.role}: </span> {message.content}
                                    </p>
                                )
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default CalmMindCompanionById