'use client'
import { categoriesIcon, getCategoriesColor } from '@/constant';
import { Calendar, ClockIcon, Trash, XIcon } from 'lucide-react';
import React, { useState } from 'react'
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { SelectionCategory } from './SelectionCategory';
import { Input } from './ui/input';
import { Label } from './ui/label';
import Link from 'next/link';
import { Button } from './ui/button';
import { deleteCompanion } from '@/actions/companion.action';

type CalmCompanion = {
    id: string,
    title: string,
    description: string,
    category: string,
    duration: number,
    created_at?: Date | null,
    user_id: string
}
interface CalmCompanionsProps {
    calmCompanions: CalmCompanion[],
    userId?: string
}



const CalmMindCompanion = ({ calmCompanions, userId }: CalmCompanionsProps) => {
    // QUERY AND DATA
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



    const handleDeleteCompanion = async (companionId: string) => {
        try {
            await deleteCompanion(companionId)
        } catch (error) {
            console.error("ERROR deleting companion: ", error)
        }
    }


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
            <div className="mt-4 space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 min-w-full">
                {
                    filteredCompanions.map((companion) => {
                        const IconComponent = categoriesIcon[companion.category as keyof typeof categoriesIcon];

                        return (
                            (
                                <Card
                                    key={companion.id}
                                    className={`flex flex-col sm:flex-row sm:items-center shadow-none overflow-hidden rounded-md hover:bg-foreground/4 min-w-full`}
                                    style={{ borderColor: getCategoriesColor(companion.category) }}
                                >
                                    <CardContent className="px-4 sm:px-6 py-0 flex flex-col min-w-full h-full">
                                        <div className="flex items-center gap-2 justify-between">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <IconComponent style={{ color: getCategoriesColor(companion.category) }} />
                                                <Badge
                                                    className={"text-background hover:bg-primary/5 shadow-none"}
                                                    style={{ backgroundColor: getCategoriesColor(companion.category) }}
                                                >
                                                    {companion.category}
                                                </Badge>
                                            </div>
                                            {
                                                companion.user_id === userId && (
                                                    <div className='border-1 border-red-500 bg-background rounded-sm p-1' onClick={() => handleDeleteCompanion(companion.id)}>
                                                        <Trash className='p-1' style={{color: "red"}}  />
                                                    </div>
                                                )
                                            }
                                        </div>

                                        <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                                            {companion.title}
                                        </h3>
                                        <p className={`mt-1 text-muted-foreground line-clamp-3 text-ellipsis text-sm`}>
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