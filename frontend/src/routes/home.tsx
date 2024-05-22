import { Link } from "react-router-dom";
import { AvatarDropDown } from "@components/shadcn/ui/avatar";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="h-screen flex flex-col bg-slate-200">
        <div className="">
          <AppBar />
        </div>
        <div className="grid grid-cols-12 mt-20  lg:ml-[70px] ">
          <div className="flex items-center col-span-12 lg:col-span-8 justify-center ">
            <CenterTextComponet />
          </div>
          <div className="hidden lg:flex col-span-4 justify-center items-center">
            {/* "some animation" */}
          </div>
        </div>
        {/* bottom component */}
        <div className="justify-self-end mt-auto ">
          <Bottom />
        </div>
      </div>
    </>
  );
};





const AppBar = () => {
  return (
    <div className="  bg-slate-200 w-full flex justify-between items-center h-[5rem] border-b border-slate-900 ">
      <div className="ml-[70px] text-3xl font-extrabold  font-montserrat flex ">
      <img
          alt="github image"
          src="../src/assets/medium.png "
          className="h-10 w-12 mr-2  hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        ></img> 
        <Link to="/">Medium</Link>
      </div>
      <div className="mr-[70px] shadow-md shadow-slate-800 rounded-full hover:shadow-2xl hover:-translate-y-1  transition-all duration-300 ">
        <AvatarDropDown size="small" />
      </div>
    </div>
  );
};

const CenterTextComponet = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-[300px] flex justify-center flex-col lg:items-start items-center ">
        <div className="animate-rotate-x lg:text-9xl font-md font-dmserif text-6xl ">
          Stay curious.
        </div>
        <div className="m-2 *:font-sm font-mono lg:font-mono py-1 my-8 text-xl text-center  lg:text-2xl lg:text-start">
          Discover stories, thinking, and expertise from writers on any topic.
        </div>

        <button
          onClick={() => navigate("/blogs")}
          type="button"
          className="w-[180px] mt-4  
          m-1 text-lg text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 hover:shadow-3xl hover:-translate-y-1  transition-all duration-300 "
        >
          Start reading
        </button>
      </div>
    </>
  );
};

const Bottom = () => {
  return (
    <div className="flex flex-col bg-white w-full h-[4rem] items-center justify-center border-t border-slate-900  ">
      <div className="flex lg:justify-evenly lg:w-[200px]  ">
        <div className="mx-2">
          <a href="https://github.com/PranavKumar9529desai/Thoughts-Blog-website">
            <img
              alt="github image"
              src="../src/assets/github.png "
              className="h-6 w-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            ></img>
          </a>
        </div>
        <div className="mx-2">
          <a href="https://www.linkedin.com/in/pranavkumar-desai-b27b8a252/">
            <img
              alt="github image"
              src="../src/assets/linkdein.png"
              className="h-6 w-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            ></img>
          </a>
        </div>
        <div className="mx-2">
          <a href="https://x.com/pranavdesa1549">
            <img
              alt="github image"
              src="../src/assets/twiter.png"
              className="h-6 w-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            ></img>
          </a>
        </div>
      </div>
      <div className="ml-7 mt-1 w-[300px] h-min-content font-tinos fon-thin text-slate-400">
        All right are reserved{" "}
        <Link className="underline-offset-4 font-tinos ">
          &nbsp;@PranavKumar
        </Link>
      </div>
    </div>
  );
};
