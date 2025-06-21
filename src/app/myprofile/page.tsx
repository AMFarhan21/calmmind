import { auth, currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import SessionHistory from '@/components/SessionHistory'
import { getCalmMindCompanionByUser, getSessionHistory } from '@/actions/companion.action'
import CalmMindCompanion from '@/components/CalmMindCompanion'
import { Check, GraduationCap } from 'lucide-react'

const myprofile = async () => {
  const { userId } = await auth()
  const user = await currentUser()
  if (!user) redirect("/sign-in")

  const getUserSessionHistory = await getSessionHistory(userId!)
  const getUserCompanionSessionHistory = getUserSessionHistory?.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).map((history) => (
    history.calmCompanion
  ))

  const getAllUserCalmMindCompanions = await getCalmMindCompanionByUser(userId!)

  return (
    <div className='p-2'>
      <div className='justify-between flex flex-wrap gap-2'>
        <div className='flex items-center gap-2'>
          <Image src={user.imageUrl} alt='profilePic' width={60} height={60} />
          <div>
            <h1 className='text-xl font-bold'> {user.fullName} </h1>
            <p className='text-lg text-muted-foreground'> {user.emailAddresses[0].emailAddress} </p>
          </div>
        </div>
        <div>
          <div className='flex gap-2 items-center'>
            <span className='flex'>
              <Check /> {getUserCompanionSessionHistory?.length}
              </span> 
            <p>Lessons completed</p>
          </div>
          <div className='flex gap-2 items-center'>
            <span className='flex'>
              <GraduationCap /> {getAllUserCalmMindCompanions?.length}

            </span>
            <p>Companion created</p>
          </div>
        </div>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className='text-lg font-bold'>Session History</AccordionTrigger>
          <AccordionContent>
            {/* @ts-expect-error: asdf */}
            <SessionHistory getUserCompanionSessionHistory={getUserCompanionSessionHistory} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className='text-lg font-bold'>Your Companion</AccordionTrigger>
          <AccordionContent>
            {/* @ts-expect-error: asdf */}
            <CalmMindCompanion title='' calmCompanions={getAllUserCalmMindCompanions} userId={userId} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default myprofile