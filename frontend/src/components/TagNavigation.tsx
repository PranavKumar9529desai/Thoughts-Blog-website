function TagButton({ tag , SetTag }: { tag: Tags , SetTag : React.Dispatch<React.SetStateAction<Tags>> }) {
  return (
    <button className="opacity-60 hover:opacity-100 border-b-4 border-transparent hover:border-gray-900 transition ease-in-out duration-300 "
     onClick={()=>{
        SetTag(tag);
        console.log("from button",tag);
     }}>
      {tag}
    </button>
  );
}

export function TageNavigation({
  SetTag,
}: {
  SetTag: React.Dispatch<React.SetStateAction<Tags>>;
}) {
  return (
    <>
      <div className="flex lg:w-[600px] w-[250px] h-10 rounded-full bg-slate-100 mt-10 justify-evenly items-center px-2 lg:px-0">
        <TagButton tag="React" SetTag={SetTag} />
        <TagButton tag="Ai" SetTag={SetTag} />
        <TagButton tag="Coding" SetTag={SetTag}/>
        <TagButton tag="Tech" SetTag={SetTag} />
      </div>
    </>
  );
}

// hard coding the values of the shubject
export type Tags = "React" | "Tech" | "Ai" | "Coding";
