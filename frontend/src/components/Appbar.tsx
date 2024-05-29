import { Link } from "react-router-dom";
import { AvatarDropDown } from "./shadcn/ui/avatar";
import medium from "@assets/medium.png";

export function Appbar() {
  return (
    <nav className="z-50 bg-slate-200 lg:w-full w-screen flex justify-between items-center h-[4rem] border-b border-slate-600 fixed top-0 ">
      <div className="text-3xl font-extrabold lg:ml-10 ml-5 font-montserrat flex">
        <img
          alt="medium logo"
          src={medium}
          className="h-10 w-110 mr-2  hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        ></img>
        <Link to="/">Medium</Link>
      </div>
      <div className="lg:mr-20 mr-12 shadow-md shadow-slate-800 rounded-full   hover:shadow-2xl hover:-translate-y-1  transition-all duration-300 ">
        <AvatarDropDown size="small" />
      </div>
    </nav>
  );
}
