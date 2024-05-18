import { Avatar } from "./shadcn/ui/avatar";
import { blog } from "../hooks/FetchBlogs";

// TOOD make it rePonsive
export const SingleBlog = ({ blog }: { blog: blog }) => {
  return (
    <>
      <div className="grid grid-cols-12 w-full ">
        <div className="col-span-8 ">
          <div className="text-6xl font-montserrat font-extrabold ">
            {blog.title}
          </div>
          <div className="text-slate-400  my-3">
            {"Posted on 16 May 2024" || blog.published}
          </div>
          {/*  TODO note this */}
          <div className="text-lg leading-10 font-ubuntu mt-5" dangerouslySetInnerHTML={{__html :blog.content}}>
          </div>
        </div>
        <div className="col-span-4 mx-auto hidden lg:block">
          <AuthorCard authorName={blog.author.name} />
        </div>
      </div>
    </>
  );
};

const AuthorCard = ({ authorName }: { authorName: string }) => {
  return (
    <>
      <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       <div className="flex justify-start ml-4 mt-2 font-bold">Author
        </div> 
        <div className="flex items-center justify-between p-4 ">
          <Avatar name={authorName} size="big" />
          <div className="mx-5">
            <div className="text-xl font-bold ">
              {" "}
              {authorName ?  authorName.charAt(0).toUpperCase() + authorName.slice(1) : "A" }
            </div>
            <div className="text-slate-400 font-sm mt-1">
              {authorName} is best devloper that ever lived on this planet.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
