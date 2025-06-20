import SwirlingEffectSpinner from '@/components/spinner-06'
import React from 'react'

const loading = () => {
    return (
        <div className='flex justify-center items-center text-center mx-auto my-auto min-h-screen'>
            <SwirlingEffectSpinner />
        </div>
    )
}

export default loading