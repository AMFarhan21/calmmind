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
import Image from 'next/image'
import { Angry, BatteryPlus, Bed, Brain, Flame, Frown, Heart, HeartCrack, HeartPulse, ShieldCheck } from 'lucide-react'

const NewCompanion = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [companion_ai, setCompanion_ai] = useState("")
  const [duration, setDuration] = useState(25)
  const [error, setError] = useState<{ [key: string]: string }>({})
  const router = useRouter()


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newError: { [key: string]: string } = {}
    if (title === "") newError.title = "Please enter title"
    if (description === "") newError.description = "Please enter description"
    if (category === "") newError.category = "Please enter category"
    if (companion_ai === "") newError.style = "Please enter ai companion"
    if (duration === 0) newError.duration = "Please enter duration"
    setError(newError)
    if (Object.keys(newError).length > 0) return

    const calmCompanionData = {
      title, description, category, companion_ai, duration
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
      <div className='grid grid-cols-2 gap-2'>
        <div>
          <Select onValueChange={(value) => setCategory(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem style={{ color: "#A8C5DA" }} value="Anxiety"><Frown style={{ color: "#A8C5DA" }} /> Anxiety</SelectItem>
                <SelectItem style={{ color: "#6B6B9F" }} value="Depression"><HeartCrack style={{ color: "#6B6B9F" }} /> Depression</SelectItem>
                <SelectItem style={{ color: "#F4A9A8" }} value="Relationships"><Heart style={{ color: "#F4A9A8" }} /> Relationships</SelectItem>
                <SelectItem style={{ color: "#7FDBFF" }} value="Productivity"><BatteryPlus style={{ color: "#7FDBFF" }} /> Productivity</SelectItem>
                <SelectItem style={{ color: "#C2B280" }} value="Work & Burnout"><Flame style={{ color: "#C2B280" }} /> Work & Burnout</SelectItem>
                <SelectItem style={{ color: "#BFA2DB" }} value="Sleep"><Bed style={{ color: "#BFA2DB" }} /> Sleep</SelectItem>
                <SelectItem style={{ color: "#F88379" }} value="Self-Esteem"><HeartPulse style={{ color: "#F88379" }} /> Self-Esteem</SelectItem>
                <SelectItem style={{ color: "#FFD966" }} value="Motivation"><ShieldCheck style={{ color: "#FFD966" }} /> Motivation</SelectItem>
                <SelectItem style={{ color: "#D9534F" }} value="Anger"><Angry style={{ color: "#D9534F" }} /> Anger</SelectItem>
                <SelectItem style={{ color: "#B7C8B5" }} value="Mindfulness"><Brain style={{ color: "#B7C8B5" }} /> Mindfulness</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className='text-red-600 font-light text-sm ml-3'>{error.category}</div>
        </div>
        <div>
          <Select onValueChange={(value) => setCompanion_ai(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select companion" aria-setsize={200}/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Marvin"><Image src={'/images/Marvin.png'} alt={"Marvin"} width={30} height={30} className="rounded-full object-cover" />Marvin</SelectItem>
                <SelectItem value="Ella"><Image src={'/images/Ella.png'} alt={"Ella"} width={30} height={30} className="rounded-full object-cover" />Ella</SelectItem>
                <SelectItem value="Leon"><Image src={'/images/Leon.png'} alt={"Leon"} width={30} height={30} className="rounded-full object-cover" />Leon</SelectItem>
                <SelectItem value="Adelaide"><Image src={'/images/Adelaide.png'} alt={"Adelaide"} width={30} height={30} className="rounded-full object-cover" />Adelaide</SelectItem>
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