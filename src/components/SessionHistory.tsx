import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { categoriesIcon, getCategoriesColor } from "@/constant"
import { Clock } from "lucide-react"
import React from 'react'
import { Badge } from "./ui/badge"
import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"

type CalmCompanion = {
    id: string,
    title: string,
    description: string,
    category: string,
    duration: number,
    created_at?: Date | null,
    user_id: string
}
interface SessionHistoryProps {
    getUserCompanionSessionHistory: CalmCompanion[],
    userId?: string
}

const SessionHistory = ({ getUserCompanionSessionHistory }: SessionHistoryProps) => {
    return (
        <div className="sticky top-47 w-full xl:w-auto md:mr-[-172px] space-y-4">
            <div className="w-full items-center flex flex-col justify-center bg-muted-background rounded-2xl p-4">
                <Image src={"/images/logo2.webp"} alt="go premium" width={120} height={120} className="-mt-10"  />
                <Button variant={"secondary"} className="-mt-6 font-semibold"> Go Premium </Button>
            </div>
            <div className="border-1 border-foreground rounded-2xl py-4 sm:px-4 max-w-screen xl:w-[520px]">
                <h1 className="text-2xl font-bold font-mono w-full ml-2">Session History</h1>
                <Table className="">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="">Title</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Duration</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            getUserCompanionSessionHistory.map((history) => {
                                const GetIcon = categoriesIcon[history.category as keyof typeof categoriesIcon]
                                return (
                                    (
                                        <TableRow key={history.id}>
                                            <Link href={`/companions/${history.id}`} key={history.id}>
                                                <TableCell className="flex w-50 sm:w-full xl:w-50 truncate items-center">{history.title}</TableCell>
                                            </Link>
                                            <TableCell className="">
                                                <GetIcon style={{ color: getCategoriesColor(history.category) }} className="sm:hidden mx-auto text-center items-center justify-center flex" />
                                                <Badge
                                                    className={"text-background hover:bg-primary/5 shadow-none hidden sm:inline"}
                                                    style={{ backgroundColor: getCategoriesColor(history.category) }}
                                                >
                                                    {history.category}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="flex items-center"> <Clock className="p-1" /> {history.duration}</TableCell>
                                        </TableRow>
                                    )
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default SessionHistory