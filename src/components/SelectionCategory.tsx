import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectionCategory({ searchCategory, setSearchCategory }: { searchCategory: string, setSearchCategory: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <Select value={searchCategory} onValueChange={setSearchCategory}>
      <SelectTrigger className="w-[50%]">
        <SelectValue placeholder="Search category" />
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
  )


}
