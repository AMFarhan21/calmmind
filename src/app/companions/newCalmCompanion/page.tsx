import NewCompanion from '@/components/NewCompanion'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async() => {
  const user = await currentUser()

  if(!user) redirect("/sign-in")
  return (
    <div className='p-4'>
        <h1 className='text-xl font-bold font-mono'>Create your Calm Companion</h1>
        <NewCompanion />
    </div>
  )
}

export default page