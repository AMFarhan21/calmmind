import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center'>
        <SignIn />
    </div>
  )
}

export default page