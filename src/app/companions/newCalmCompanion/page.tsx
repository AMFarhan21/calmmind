import NewCompanion from '@/components/NewCompanion'
import React from 'react'

const page = () => {
  return (
    <div className='p-4'>
        <h1 className='text-xl font-bold font-mono'>Create your Calm Companion</h1>
        <NewCompanion />
    </div>
  )
}

export default page