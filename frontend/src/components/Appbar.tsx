import { Link } from 'react-router-dom';
import { Avatar, AvatarDropDown } from './shadcn/ui/avatar'
import { User, UserSelector } from '../state/UserAtom';
import { useRecoilValue } from 'recoil'; 
export function Appbar() {
  const user : User = useRecoilValue(UserSelector) as User
  console.log("user name of the author is :",user.name);
  return (
    // TODO add the logout and signin and add profile dropdown 
    <div className='bg-slate-200 w-full flex justify-between items-center h-[4rem] border-b border-slate-400 sticky '>
       <div className='text-3xl font-extrabold ml-10 font-montserrat'>
        <Link to="/blogs">Medium</Link></div>
       <div className='mr-20 shadow-md shadow-slate-800 rounded-full   hover:shadow-2xl hover:-translate-y-1  transition-all duration-300 '><AvatarDropDown  name={user.name} size='small' /></div>
    </div>
  )
}

