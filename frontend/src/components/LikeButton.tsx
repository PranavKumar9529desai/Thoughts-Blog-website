import { useState } from "react";
import clap from "@assets/clap.png";
import axios from "axios";
import { Tooltip } from "./Tooltip";

type ButtonSize = "small" | "medium" | "big";

interface LikeButtonProps {
  numofLikes: number;
  Size: ButtonSize;
  blogId: string;
}
// hrere is what we do j
export function LikeButton({ numofLikes, Size, blogId }: LikeButtonProps) {
  const [effect, setEffect] = useState<boolean>(false);
  console.log("blogId from the likButton", blogId);
  const [like, setLike] = useState<number>(numofLikes);
  return (
    <div className="group relative flex">
      <div className="">
        <button className={`${effect && "animate-wiggle"}`}>
          <img
            src={clap}
            alt="Like Icon"
            className={`
            ${
              Size === "big" ? "h-8 w-8" : "h-5 w-5"
            } text-center m-auto flex items-center relative`}
            onClick={() => {
              setEffect(true);
              console.log(effect);
              console.log("button is cliked");
              HandleClick(blogId);
              setLike(numofLikes + 1);
              console.log(numofLikes);
            }}
            onAnimationEnd={() => setEffect(false)}
          />
        </button>
        {/* tooltip element */}
        <Tooltip text="claps" numberofLikes={numofLikes} />
      </div>
      <div className="text-gray-400 text-xs flex items-center ml-1">{like}</div>
    </div>
  );
}

async function HandleClick(id: string) {
  console.log(localStorage.getItem("jwt"));
  const response = await axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/addlike/${id}`,
    {},
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    }
  );
  console.log(response.data);
}
