import { newCompanionPermissions } from '@/actions/companion.action'
import NewCompanion from '@/components/NewCompanion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const user = await currentUser()

  const canCreateNewCompanion = await newCompanionPermissions()

  if (!user) redirect("/sign-in")
  if (canCreateNewCompanion) {
    return (
      <div className='p-4'>
        <h1 className='text-xl font-bold font-mono'>Create your Calm Companion</h1>
        <NewCompanion />
      </div>
    )
  } else {
    return (
      <div className='flex flex-col items-center justify-center p-4'>
        <Image src={"/images/logo2.webp"} alt='logo' width={300} height={300} />
        <Badge className='-mt-12'>
          Upgrade your plan
        </Badge>
        <div className='flex flex-col items-center justify-center text-center'>
          <h2 className='text-2xl font-bold'>
            You&apos;ve Reached Your Basic Plan Limit
          </h2>
          <p>
            Upgrade to create more companions
          </p>
        </div>
        <Link href={"/pricing"}>
        <Button className='mt-2 font-semibold'>
          Discover Calm Mind Plus
        </Button>
        </Link>
      </div>
    )
  }
}

export default page