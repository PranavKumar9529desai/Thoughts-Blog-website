import React from 'react'
import { Auth } from '../components/Auth'
import Quote from '../components/Quote'

function SignIn() {
  return (
      <div className='lg:grid grid-cols-2'>
          <div className='flex justify-center items-center'><Auth type='signin'/></div>
          <div className='hidden lg:block'><Quote /></div>
      </div> 
   
  )
}

export default SignIn