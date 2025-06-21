import { PricingTable } from '@clerk/nextjs'

export default function Page() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
      <h1 className='text-4xl font-bold text-center mb-4'>
        Select Your Plan
      </h1>
      <PricingTable />
    </div>
  )
}