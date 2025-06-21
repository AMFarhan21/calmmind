import { getCalmMindCompanionByUser } from '@/actions/companion.action'
import CalmMindCompanion from '@/components/CalmMindCompanion'
import { Button } from '@/components/ui/button'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const companions = async () => {
  const user = await auth()
  const userId = user.userId
  console.log(userId)
  if (!user) redirect("/sign-in")

  // console.log(calmMindCompanion)
  const calmMindCompanion = await getCalmMindCompanionByUser(userId!)
  if (calmMindCompanion?.length === 0) {
    return (
      <div className='p-4 flex flex-col justify-center mx-0 text-center items-center space-y-2 h-screen'>
        <h1 className='font-bold text-xl'>You don&apos;t have any companion yet!</h1>
        <p className='font-semibold text-sm'>Add one</p>
        <Link href={"/companions/newCalmCompanion"}>
          <Button>➕ Add</Button>
        </Link>
      </div>
    )
  } else {
    return (
      <div className='p-4'>
        <CalmMindCompanion title={"Your Calm Mind Companions"} calmCompanions={calmMindCompanion} userId={userId!} />
      </div>
    )
  }

}

export default companions