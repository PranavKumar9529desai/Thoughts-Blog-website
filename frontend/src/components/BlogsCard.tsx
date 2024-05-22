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
      <div className="w-full  m-3 relative ">
        <div className="flex items-center">
          <div className="flex text-s font-anton">
            <Avatar name={AuthorName} size="small" />
          </div>
          <div className="flex m-1 text-md w-full">
            {AuthorName}
            {/* dot bwtween the avatra name  */}
            <div className="flex mx-1">&#x2022;</div>
            <div className="text-slate-600 ">{publishedDate}</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="lg:w-[500px] w-screen text-2xl font-bold my-2 font-montserrat">{title}</div>
          <div
            className="lg:w-[500px] w-screen text-md leading-7 my-2 font-anton"
            dangerouslySetInnerHTML={{
              __html: description.slice(0, 200) + ". . . . .",
            }}
          />

          <div className=" text-slate-600 font-semibold font-anton">{`${Math.ceil(
            description.length / 100
          )} min(s) read`}</div>
        </div>
      </div>
    </>
  );
};
