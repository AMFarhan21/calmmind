import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Angry, BatteryPlus, Bed, Brain, Flame, Frown, Heart, HeartCrack, HeartPulse, ShieldCheck } from "lucide-react"

export function SelectionCategory({ searchCategory, setSearchCategory, setCurrentPage }: { searchCategory: string, setSearchCategory: React.Dispatch<React.SetStateAction<string>>, setCurrentPage: React.Dispatch<React.SetStateAction<number>> }) {
  return (
    <Select value={searchCategory} onValueChange={(value) => {
      setSearchCategory(value)
      setCurrentPage(1)
    }}>
      <SelectTrigger className="md:w-[50%]">
        <SelectValue placeholder="Search category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem style={{color: "#A8C5DA"}} value="Anxiety"><Frown style={{color: "#A8C5DA"}} /> Anxiety</SelectItem>
          <SelectItem style={{color: "#6B6B9F"}} value="Depression"><HeartCrack style={{color: "#6B6B9F"}} /> Depression</SelectItem>
          <SelectItem style={{color: "#F4A9A8"}} value="Relationships"><Heart style={{color: "#F4A9A8"}} /> Relationships</SelectItem>
          <SelectItem style={{color: "#7FDBFF"}} value="Productivity"><BatteryPlus style={{color: "#7FDBFF"}} /> Productivity</SelectItem>
          <SelectItem style={{color: "#C2B280"}} value="Work & Burnout"><Flame style={{color: "#C2B280"}} /> Work & Burnout</SelectItem>
          <SelectItem style={{color: "#BFA2DB"}} value="Sleep"><Bed style={{color: "#BFA2DB"}} /> Sleep</SelectItem>
          <SelectItem style={{color: "#F88379"}} value="Self-Esteem"><HeartPulse style={{color: "#F88379"}} /> Self-Esteem</SelectItem>
          <SelectItem style={{color: "#FFD966"}} value="Motivation"><ShieldCheck style={{color: "#FFD966"}} /> Motivation</SelectItem>
          <SelectItem style={{color: "#D9534F"}} value="Anger"><Angry style={{color: "#D9534F"}} /> Anger</SelectItem>
          <SelectItem style={{color: "#B7C8B5"}} value="Mindfulness"><Brain style={{color: "#B7C8B5"}} /> Mindfulness</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )


}
