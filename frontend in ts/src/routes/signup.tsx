import React from 'react'
import { Auth } from '../components/Auth'
import Quote from '../components/Quote'

function signUp() {
  return (
      <div className='lg:grid grid-cols-2'>
          <div className='flex justify-center items-center'><Auth type='signup'/></div>
          <div className='hidden lg:block'><Quote /></div>
      </div> 
   
  )
}

export default signUp