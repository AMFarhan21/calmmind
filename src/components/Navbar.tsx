import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { LogIn } from 'lucide-react'
import { ModeToggle } from './ModeToggle'
import { DropdownNavbar } from './DropdownNavbar'

const Navbar = () => {
    return (
        <section className='p-2 sticky top-0 z-50 bg-background'>
            <div className='justify-between flex items-center'>
                <Link href={"/"} className='flex items-center gap-2'>
                    <Image src={"/images/logo1.webp"} alt='logo1' width={60} height={60} className='bg-black aspect-square object-cover rounded-xl border-1 border-foreground' />
                    <p className='font-bold font-mono sm:text-lg md:text-xl'>Calm Mind</p>
                </Link>
                <div className='hidden sm:flex flex-wrap sm:space-x-4 xl:space-x-6 text-sm sm:text-base items-center'>
                    <Link href={"/home"}>
                        <Button variant={'ghost'}>
                            Home
                        </Button>
                    </Link>
                    <Link href={"/companions"}>
                        <Button variant={'ghost'}>
                            Companions
                        </Button>
                    </Link>
                    <Link href={"/myprofile"}>
                        <Button variant={'ghost'}>
                            MyProfile
                        </Button>
                    </Link>
                    <div className='gap-2 flex items-center'>
                        <ModeToggle />
                        <SignedOut>
                            <Link href={"/sign-in"}>
                                <Button>
                                    <LogIn />
                                    <span className='hidden sm:inline'>
                                        Sign In
                                    </span>
                                </Button>
                            </Link>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>
                <div className='flex sm:hidden gap-2'>
                    <DropdownNavbar />
                    <div className='sm:hidden gap-2 flex items-center'>
                        <ModeToggle />
                        <SignedOut>
                            <Link href={"/sign-in"}>
                                <Button>
                                    <LogIn />
                                    <span className='hidden sm:inline'>
                                        Sign In
                                    </span>
                                </Button>
                            </Link>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar