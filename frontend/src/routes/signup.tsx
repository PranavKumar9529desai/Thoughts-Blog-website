import { Auth } from '@components/Auth'
import Quote from '@components/Quote'
import { useRecoilValue } from 'recoil'
import { blogsState } from '@components/BlogSelctor'

function signUp() {
  const blogs = useRecoilValue(blogsState);
  console.log( "blogs are : ", blogs.length) //
  return (
      <div className='lg:grid grid-cols-2 flex justify-center items-center h-screen bg-slate-200'>
          <div className='flex justify-center items-center'><Auth type='signup'/></div>
          <div className='hidden lg:block'><Quote /></div>
      </div> 
   
  )
}

export default signUp