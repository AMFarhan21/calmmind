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

        <Table className="table-fixed">
            <TableHeader>
                <TableRow >
                    <TableHead className="text-sm sm:text-base">Title</TableHead>
                    <TableHead className="text-sm sm:text-base">Category</TableHead>
                    <TableHead className="text-sm sm:text-base">Duration</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="">
                {
                    getUserCompanionSessionHistory.map((history) => {
                        const GetIcon = categoriesIcon[history.category as keyof typeof categoriesIcon]
                        return (
                            (
                                <TableRow key={history.id} className="items-center">
                                    <TableCell className="truncate">
                                        <Link href={`/companions/${history.id}`} key={history.id}>
                                            <div className="truncate items-center text-xs sm:text-base">
                                                {history.title}
                                            </div>
                                        </Link>
                                    </TableCell>
                                    <TableCell className="">
                                        <GetIcon style={{ color: getCategoriesColor(history.category) }} className="p-1 sm:hidden" />
                                        <Badge
                                            className={"text-background hover:bg-primary/5 shadow-none hidden sm:inline"}
                                            style={{ backgroundColor: getCategoriesColor(history.category) }}
                                        >
                                            {history.category}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="flex items-center text-xs sm:text-base"> <Clock className="p-2 sm:p-1" /> {history.duration}</TableCell>
                                </TableRow>
                            )
                        )
                    })
                }
            </TableBody>
        </Table>
    )
}

export default SessionHistory