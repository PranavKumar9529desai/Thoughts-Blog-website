import { Link } from "react-router-dom";
import { AvatarDropDown } from "./shadcn/ui/avatar";
import medium from "@assets/medium.png";

export function Appbar() {
  return (
    <nav className="fixed top-0 z-40 bg-gray-200 w-full lg:w-full  flex justify-between items-center h-[4rem] border-b border-gray-200 ">
      
      <div className="text-3xl font-extrabold lg:ml-10 ml-5 font-montserrat flex">
        <img
          alt="medium logo"
          src={medium}
          className="h-10 w-110 mr-2  hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        ></img>
        <Link to="/blogs">VICHAR</Link>
      </div>
      <div className="z-50 absolute right-10 rounded-full ">
        <AvatarDropDown size="small" />
      </div>
    </nav>
  );
}
