'use client'
import React from 'react'
import { Badge } from './ui/badge'
import { categoriesIcon, getCategoriesColor } from '@/constant'
import Image from 'next/image'
import { Button } from './ui/button'
import { Mic, Play } from 'lucide-react'
import VapiWidget from './VapiWidget'

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

const CalmMindCompanionById = ({ calmCompanion, userImage, username }: CalmMindCompanionByIdProps) => {
    const GetIcon = categoriesIcon[calmCompanion?.category as keyof typeof categoriesIcon]
    return (
        <div className="w-full max-w-screen-lg mx-auto py-12 px-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl leading-10 sm:text-2xl md:text-[40px] md:leading-[3.25rem] font-bold tracking-tight">
                    {calmCompanion?.title}
                </h2>
                <Badge
                    className="font-semibold px-4 h-8"
                    style={{ backgroundColor: getCategoriesColor(calmCompanion?.category as string) }}
                >
                    {calmCompanion?.category}
                </Badge>
            </div>
            <p className="-mt-0.5 text-xs sm:text-sm md:text-base text-justify">
                {calmCompanion?.description}
            </p>
            <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-6">
                <div className="hidden md:flex border border-border/80 bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2 justify-center items-center">
                    <GetIcon size={100} style={{ color: getCategoriesColor(calmCompanion?.category as string) }} />
                </div>
                <div className="bg-muted rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
                    <div className="md:hidden mb-6 aspect-video w-full bg-background border rounded-xl justify-center items-center flex">
                        <GetIcon size={60} style={{ color: getCategoriesColor(calmCompanion?.category as string) }} />
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
                    <Button variant={"secondary"} className="w-full text-background"> <Mic /> </Button>
                    <Button className="mt-2 w-full items-center">
                        Start your sesson <Play />
                    </Button>
                </div>
                <VapiWidget
                    apiKey={process.env.VAPI_PUBLIC_API_KEY!}
                    assistantId={process.env.ASSISTANT_ID!}
                />
            </div>
        </div>
    )
}

export default CalmMindCompanionById