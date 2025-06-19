'use client'
import React, { useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from './ui/button'
import { createCalmCompanion } from '@/actions/companion.action'
import { useRouter } from 'next/navigation'

const NewCompanion = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [voice, setVoice] = useState("")
  const [style, setStyle] = useState("")
  const [duration, setDuration] = useState(25)
  const [error, setError] = useState<{ [key: string]: string }>({})
  const router = useRouter()


  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newError: { [key: string]: string } = {}
    if (title === "") newError.title = "Please enter companion's title"
    if (description === "") newError.description = "Please enter companion's description"
    if (category === "") newError.category = "Please enter companion's category"
    if (voice === "") newError.voice = "Please enter companion's voice"
    if (style === "") newError.style = "Please enter companion's style"
    if (duration === 0) newError.duration = "Please enter companion's duration"
    setError(newError)
    if (Object.keys(newError).length > 0) return

    const calmCompanionData = {
      title, description, category, voice, style, duration
    }

    try {
      await createCalmCompanion(calmCompanionData)
      router.push("/companions")
    } catch (error) {
      console.error("ERROR on creating calm companion: ", error)
    }
  }


  return (
    <form onSubmit={handleSubmit} className='mt-4 space-y-4'>
      <div className='space-y-2'>
        <Label>
          Title
        </Label>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter your companion title ...' />
        <div className='text-red-600 font-light text-sm ml-3'>{error.title}</div>
      </div>
      <div className='space-y-2'>
        <Label>
          Description
        </Label>
        <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Enter your companion description ...' />
        <div className='text-red-600 font-light text-sm ml-3'>{error.description}</div>
      </div>
      <div>
        <Select onValueChange={(value) => setCategory(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Anxiety">Anxiety</SelectItem>
              <SelectItem value="Depression">Depression</SelectItem>
              <SelectItem value="Relationships">Relationships</SelectItem>
              <SelectItem value="Productivity">Productivity</SelectItem>
              <SelectItem value="Work & Burnout">Work & Burnout</SelectItem>
              <SelectItem value="Sleep">Sleep</SelectItem>
              <SelectItem value="Self-Esteem">Self-Esteem</SelectItem>
              <SelectItem value="Motivation">Motivation</SelectItem>
              <SelectItem value="Anger">Anger</SelectItem>
              <SelectItem value="Mindfulness">Mindfulness</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className='text-red-600 font-light text-sm ml-3'>{error.category}</div>
      </div>
      <div className='flex gap-2'>
        <div className='w-[50%]'>
          <Select onValueChange={(value) => setVoice(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select voice type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className='text-red-600 font-light text-sm ml-3'>{error.voice}</div>
        </div>
        <div className='w-[50%]'>
          <Select onValueChange={(value) => setStyle(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select voice style" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="formal">Formal</SelectItem>
                <SelectItem value="informal">Informal</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className='text-red-600 font-light text-sm ml-3'>{error.style}</div>
        </div>
      </div>
      <div className='space-y-2'>
        <Label>
          Duration
        </Label>
        <Input value={duration} onChange={(e) => setDuration(e.target.valueAsNumber)} type='number' placeholder='25' />
        <div className='text-red-600 font-light text-sm ml-3'>{error.duration}</div>
      </div>
      <Button type='submit' className=''>
        Submit
      </Button>
    </form>
  )
}

export default NewCompanion