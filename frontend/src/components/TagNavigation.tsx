import { Tags } from "@components/BlogSelctor";
import React, { useState } from "react";

interface TagButtonProps {
  tag: Tags;
  ActiveTag: boolean;
  SetActiveTag: (tag: Tags) => void;
}

function TagButton({ tag, ActiveTag, SetActiveTag }: TagButtonProps) {
  return (
    <button
      className={` opacity-80 hover:opacity-100 border-b-2 border-transparent  transition ease-in-out duration-300 font-montserrat 
         ${
        ActiveTag ? "border-gray-950" : " "
      }`}
      onClick={() => {
        SetActiveTag(tag);
        console.log("valuw of active tag is",ActiveTag);
        console.log("from button", tag);
      }}
    >
      {tag}
    </button>
  );
}

export function TageNavigation({
  SetTag,
}: {
  SetTag: React.Dispatch<React.SetStateAction<Tags>>;
}) {
  const [ActiveTag, SetActiveTag] = useState<Tags | null>("React");
 
  const handleClick = (tag: Tags) => {
    SetTag(tag);
    SetActiveTag(tag);
  };

  return (
    <>
      <div className="flex lg:w-[600px] w-[300px] h-12 rounded-full bg-slate-100 mt-10 justify-evenly items-center px-2 lg:px-0">
        <TagButton
          tag="React"
          ActiveTag={ActiveTag === "React"}
          SetActiveTag={handleClick}
        />
        <TagButton
          tag="Ai"
          ActiveTag={ActiveTag === "Ai"}
          SetActiveTag={handleClick}
        />
        <TagButton
          tag="Coding"
          ActiveTag={ActiveTag === "Coding"}
          SetActiveTag={handleClick}
        />
        <TagButton
          tag="Tech"
          ActiveTag={ActiveTag === "Tech"}
          SetActiveTag={handleClick}
        />
      </div>
    </>
  );
}

// hard coding the values of the shubject
