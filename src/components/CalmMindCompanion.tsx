'use client'
import { categoriesIcon, getCategoriesColor } from '@/constant';
import { Calendar, ClockIcon, XIcon } from 'lucide-react';
import React, { useState } from 'react'
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { SelectionCategory } from './SelectionCategory';
import { Input } from './ui/input';
import { Label } from './ui/label';
import Link from 'next/link';
import { Button } from './ui/button';

type CalmCompanion = {
    id: string,
    title: string,
    description: string,
    category: string,
    duration: number,
    created_at?: Date | null
}

interface CalmCompanionsProps {
    calmCompanions: CalmCompanion[]
}

const CalmMindCompanion = ({ calmCompanions }: CalmCompanionsProps) => {
    const [searchQuery, setSearchQuery] = useState("")
    const [searchCategory, setSearchCategory] = useState("")

    const filteredCompanions = calmCompanions.filter((companion) => {
        return (
            (
                companion.title.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
                companion.description.toLowerCase().includes(searchQuery.trim().toLowerCase())
            ) &&
            companion.category.includes(searchCategory)
        )
    }).sort((a, b) => new Date(b.created_at!).getTime() - new Date(a.created_at!).getTime())

    return (
        <div className='space-y-2'>
            <h2 className="text-4xl font-bold tracking-tight font-mono">Calm Mind Companions</h2>
            <div className='flex gap-2'>
                <Input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search companion' className='w-[50%]' />
                <SelectionCategory searchCategory={searchCategory} setSearchCategory={setSearchCategory} />
            </div>
            {
                searchCategory && (
                    <div className='flex items-center just gap-2'>
                        <p>Filter:</p>
                        <Label className='bg-foreground text-background px-2 h-6 text-sm rounded-lg' onClick={() => setSearchCategory("")}>{searchCategory} <XIcon className='p-1' /></Label>
                    </div>
                )
            }
            <div className="mt-4 space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {
                    filteredCompanions.map((companion) => {
                        const IconComponent = categoriesIcon[companion.category as keyof typeof categoriesIcon];

                        return (
                            (
                                <Card
                                    key={companion.id}
                                    className={`flex flex-col sm:flex-row sm:items-center shadow-none overflow-hidden rounded-md hover:bg-foreground/4`}
                                    style={{ borderColor: getCategoriesColor(companion.category) }}
                                >
                                    <CardContent className="px-4 sm:px-6 py-0 flex flex-col w-full h-full">
                                        <div className="flex items-center gap-6">
                                            <div className="flex items-center gap-6">
                                                <IconComponent style={{ color: getCategoriesColor(companion.category) }} />
                                                <Badge
                                                    className={"text-background hover:bg-primary/5 shadow-none"}
                                                    style={{ backgroundColor: getCategoriesColor(companion.category) }}
                                                >
                                                    {companion.category}
                                                </Badge>
                                            </div>
                                        </div>

                                        <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                                            {companion.title}
                                        </h3>
                                        <p className={`mt-2 text-muted-foreground line-clamp-3 text-ellipsis`}>
                                            {companion.description}
                                        </p>
                                        <div className="mt-2 flex flex-wrap justify-between items-center gap-2 text-muted-foreground text-sm font-medium w-full">
                                            <div className="flex items-center gap-2">
                                                <ClockIcon className="h-4 w-4" /> {companion.duration} min
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4" /> {companion.created_at ? new Date(companion.created_at).toDateString() : "Unknown Date"}
                                            </div>
                                            <Link href={`/companions/${companion.id}`} className=''>
                                                <Button className='mt-2'>
                                                    Launch Session
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        )
                    })}
            </div>
            <Link href={"/companions/newCalmCompanion"} className=''>
                <Button variant={'secondary'} className="z-50 font-semibold text-background hidden sm:flex fixed bottom-10 left-20 text-xl py-6">
                    ➕ Create New Companion
                </Button>
                <Button variant={'secondary'} className="z-50 font-semibold text-background flex sm:hidden fixed bottom-10 right-10 text-lg rounded-full aspect-square w-16 h-16 ">
                    ➕
                </Button>
            </Link>
        </div>
    )
}

export default CalmMindCompanion