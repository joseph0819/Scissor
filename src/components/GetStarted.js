import React from 'react'
import Button from './Button'

const GetStarted = () => {
  return (
    <div className='bg-[#1E3448] flex flex-col justify-center items-center py-6 h-[250px]'>
        <p className='text-white text-2xl font-bold sm:font-bold py-3 text-center'>Revolutionizing Link Optimization</p>
        <Button blue={true} padding={6}>Get Started</Button>
    </div>
  )
}

export default GetStarted