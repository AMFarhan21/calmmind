import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { LogIn } from 'lucide-react'

const Navbar = () => {
    return (
        <section className='p-2 sticky z-50 bg-background top-0'>
            <div className='justify-between flex items-center'>
                <Image src={"/images/logo1.webp"} alt='logo1' width={60} height={60} className='bg-black aspect-square object-cover rounded-xl' />
                <div className='space-x-2 sm:space-x-4 xl:space-x-8 text-sm sm:text-base font-semibold items-center flex'>
                    <Link href={"/"}>
                        Home
                    </Link>
                    <Link href={"/companions"}>
                        Companions
                    </Link>
                    <Link href={"/myprofile"}>
                        MyProfile
                    </Link>
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
        </section>
    )
}

export default Navbar