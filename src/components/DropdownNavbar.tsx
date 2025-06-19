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
                <DropdownMenuItem>
                    <Link href={"/"}>
                        Home
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={"/companions"}>
                        Companions
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={"/myprofile"}>
                        MyProfile
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
