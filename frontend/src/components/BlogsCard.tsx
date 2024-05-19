import { Avatar } from "./shadcn/ui/avatar";
interface BlogsProps {
  AuthorName: string;
  publishedDate: string;
  title: string;
  description: string;
}

export const BlogsCard = ({
  AuthorName,
  publishedDate,
  title,
  description,
  
}: BlogsProps) => {
  return (
    <>
      <div className="w-full  m-4 relative ">
        <div className="flex items-center">
          <div className="flex text-s font-anton">
            <Avatar name={AuthorName} size="small" />
          </div>
          <div className="flex m-3 text-md">
            {AuthorName}
            {/* dot bwtween the avatra name  */}
            <div className="flex mx-1">&#x2022;</div>
            <div className="text-slate-600 ">{publishedDate}</div>
          </div>
        </div>
        <div className="">
          <div className="text-2xl font-bold my-2 font-montserrat">{title}</div>
          {/* TODO note this  */}
          <div className="text-md leading-7 my-2 font-anton" dangerouslySetInnerHTML={{ __html: description.slice(0, 300) + ". . . . ." }} />

          <div className="text-slate-600 font-semibold font-anton">{`${Math.ceil(
            description.length / 100
          )} min(s) read`}</div>
        </div>
      </div>
    </>
  );
};
