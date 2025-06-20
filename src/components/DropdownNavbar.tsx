import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import Link from "next/link"


export function DropdownNavbar() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline"> <Menu /> </Button>
            </DropdownMenuTrigger>
            {/* Navbar content */}
            <DropdownMenuContent className="w-56" align="start">
                <Link href={"/home"}>
                    <DropdownMenuItem>
                        Home
                    </DropdownMenuItem>
                </Link>
                <Link href={"/companions"}>
                    <DropdownMenuItem>
                        Companions
                    </DropdownMenuItem>
                </Link>
                <Link href={"/myprofile"}>
                    <DropdownMenuItem>
                        MyProfile
                    </DropdownMenuItem>
                </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
