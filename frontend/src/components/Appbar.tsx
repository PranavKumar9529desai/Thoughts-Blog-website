import { Link } from "react-router-dom";
import { AvatarDropDown } from "./shadcn/ui/avatar";
export function Appbar() {
  return (
    <div className="z-40 bg-slate-200 w-full flex justify-between items-center h-[4rem] border-b border-slate-400 fixed ">
      <div className="text-3xl font-extrabold ml-10 font-montserrat">
        <Link to="/blogs">Medium</Link>
      </div>
      <div className="mr-20 shadow-md shadow-slate-800 rounded-full   hover:shadow-2xl hover:-translate-y-1  transition-all duration-300 ">
        <AvatarDropDown size="small" />
      </div>
    </div>
  );
}
