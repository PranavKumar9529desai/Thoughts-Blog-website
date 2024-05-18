import { Link } from "react-router-dom";
import editblogincon from "../assets/editblogicon.png";

export const Editblog = () => {
  return (
    <>
      <Link to={"createblog"}>
        <button
          type="button"
          className=" text-white bg-emerald-400	 hover:bg-emerald-500 p-4 rounded-full
           "
        >
          <img
            src={editblogincon}
            alt="Edit blog"
            className="w-8 h-8 hover:-translate-y-1  transition-all duration-300 overflow-hidden "
          />
        </button>
      </Link>
    </>
  );
};
