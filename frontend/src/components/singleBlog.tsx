import { Avatar } from "./shadcn/ui/avatar";
import { blog } from "@hooks/FetchBlogs";
import { UserAtom } from "@state/UserAtom";
import { useRecoilValue } from "recoil";

// TOOD make it rePonsive
export const SingleBlog = ({ blog }: { blog: blog }) => {
  const date = new Date(blog.createdAt);
  const createdAt = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return (
    <>
      <div className="lg:grid lg:grid-cols-12 w-full ">
        <div className="lg:col-span-8 lg:m-1 px-9 pt-4" >
          <div className="lg:text-6xl text-3xl font-montserrat font-extrabold ">
            {blog.title}
          </div>
          <div className="text-slate-400  my-3">
            {`Posted on ${createdAt}` || "16 May 2024"}
          </div>
          <div
            className="text-lg leading-10 font-ubuntu mt-5"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
        </div>
        <div className="col-span-4 mx-auto hidden lg:block">
          <AuthorCard authorName={blog.author.name} />
        </div>
      </div>
    </>
  );
};

const AuthorCard = ({ authorName }: { authorName: string }) => {
  const UserInfo = useRecoilValue(UserAtom);
  console.log(UserInfo);
  return (
    <>
      <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-start ml-4 mt-2 font-bold">Author</div>
        <div className="flex items-center justify-between p-4 ">
          <Avatar name={authorName} size="big" />
          <div className="mx-5">
            <div className="text-xl font-bold ">
              {" "}
              {authorName
                ? authorName.charAt(0).toUpperCase() + authorName.slice(1)
                : "A"}
            </div>
            <div className="text-slate-400 font-sm mt-1">
              {authorName} "is the best developer is have ever meet"
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
