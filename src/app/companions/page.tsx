import { getCalmMindCompanionByUser } from '@/actions/companion.action'
import CalmMindCompanion from '@/components/CalmMindCompanion'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const companions = async () => {
  const user = await auth()
  const userId = user.userId
  console.log(userId)

  // console.log(calmMindCompanion)
  const calmMindCompanion = await getCalmMindCompanionByUser(userId!)
  
  if (!user) redirect("/sign-in")
  return (
    <div className='p-4'>
      <CalmMindCompanion calmCompanions={calmMindCompanion} userId={userId!} />
    </div>
  )
}

export default companions