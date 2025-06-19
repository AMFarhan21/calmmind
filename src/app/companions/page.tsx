import { getCalmMindCompanion } from '@/actions/companion.action'
import CalmMindCompanion from '@/components/CalmMindCompanion'
import React from 'react'

const companions = async() => {

  const calmMindCompanion = await getCalmMindCompanion()
  console.log(calmMindCompanion)

  return (
    <div className='p-4'>
      <CalmMindCompanion calmCompanions={calmMindCompanion}  />
    </div>
  )
}

export default companions