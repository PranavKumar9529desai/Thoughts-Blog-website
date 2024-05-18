import { Appbar } from "../components/Appbar";
import { BlogsCard } from "../components/BlogsCard";
import { useFetchBlogs } from "../hooks/FetchBlogs";
import { CustomSkelton } from "../components/loaders/customSkelton";
import { Link } from "react-router-dom";
import {  Editblog } from "../components/button";

export function Blogs() {
  const { Loading, Blogs } = useFetchBlogs();

  return (
    <>
      <Appbar />
      <div className=" flex justify-center items-center flex-col max">
        {Loading ? (
          <>
            <div className="mt-8">
              <CustomSkelton blogCount={3} />
            </div>
          </>
        ) : (
          <>
            {Blogs.map((blog, index) => (
              <div
                key={index}
                className="w-[720px] pb-6 px-4 border-b border-slate-300"
              >
                {/* TODO make the publishedDate dynamic  */}
                <Link to={"/blogs/" + blog.id}>
                  <BlogsCard
                    AuthorName={blog.author.name ? blog.author.name : "Anonymous"}
                    publishedDate="aaj ki tareek"
                    title={blog.title} 
                    description={blog.content}
                  />
                </Link>
              </div>
            ))}
          </>
        )}

      </div>
      <div className="absolute top-[600px] right-[50px] shadow-lg rounded-full shadow-slate-600   hover:-translate-y-1  transition-all duration-300 overflow-hidden "><Editblog /></div>


    </>
  );
}

