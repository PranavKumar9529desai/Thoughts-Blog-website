import { Link } from "react-router-dom";
import editblogincon from "../assets/editblogicon.png";

export const Editblog = () => {
  return (
    <>
      <Link to={"createblog"}>
        <button
          type="button"
          className="fixed text-white bg-emerald-400 p-4 rounded-full
          shadow-lg shadow-gray-600 hover:shadow-2xl hover:-translate-y-1  transition-all duration-300 overflow-hidden"
        >
          <img
            src={editblogincon}
            alt="Edit blog"
            className="w-8 h-8  "
          />
        </button>
      </Link>
    </>
  );
};
