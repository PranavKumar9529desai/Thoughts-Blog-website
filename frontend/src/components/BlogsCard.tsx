import { Avatar } from "./shadcn/ui/avatar";
import { LikeButton } from "./LikeButton";

interface BlogsProps {
  AuthorName: string;
  id: string;
  publishedDate: string;
  title: string;
  description: string;
  imageUrl: string;
  Likes: [
    {
      blogsId: string;
      userId: string;
    }
  ];
}

export const BlogsCard = ({
  AuthorName,
  id,
  publishedDate,
  title,
  description,
  imageUrl,
  Likes,
}: BlogsProps) => {
  console.log("from the blogcard component id is ", id);
  return (
    <>
      <div className="w-full  m-3 flex ">
        <div className="grid grid-cols-10 ">
          <div className="lg:col-span-8 col-span-6 ">
            <div className="flex items-center ml-3">
              <div className="flex text-s font-anton">
                <Avatar name={AuthorName} size="small" />
              </div>
              <div className="flex ml-2 m-1 text-md w-full">
                {AuthorName}
                {/* dot bwtween the avatra name  */}
                <div className="flex mx-1">&#x2022;</div>
                <div className="text-slate-600 ">{publishedDate}</div>
              </div>
            </div>
            <div className="flex flex-col w-full px-4">
              <div className="lg:w-[500px] w-full text-lg lg:text-xl font-extrabold my-2 font-montserrat">
                {title}
              </div>
              <div
                className="lg:w-[500px] w-full text-md leading-7 my-2 font-anton text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: description.slice(0, 100).trim() + ". . . . .",
                }}
              />

              <div className="flex ">
                <div className="w-fit text-slate-600 font-semibold font-anton">{`${Math.ceil(
                  description.length / 100
                )} min(s) read`}</div>

                {/* the like button */}
                <div className="w-fit ml-5 flex">
                  <LikeButton
                    numofLikes={Likes.length}
                    Size="small"
                    blogId=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 col-span-4">
            <div className="  rounded-xl ">
              <img
                src={imageUrl}
                className=" lg:w-[170px] lg:h-[140px] w-[130px] h-[100px] rounded-lg shadow-lg shadow-slate-600 lg:mt-10 mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
