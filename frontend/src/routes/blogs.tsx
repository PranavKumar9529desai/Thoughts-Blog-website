import { Appbar } from "../components/Appbar";
import { BlogsCard } from "../components/BlogsCard";
import { useFetchBlogs } from "../hooks/FetchBlogs";
import { CustomSkelton } from "../components/loaders/customSkelton";
import { Link } from "react-router-dom";
import { Editblog } from "../components/button";

export function Blogs() {
  const { Loading, Blogs } = useFetchBlogs();

  return (
    <>
      <Appbar />
      <div className="flex  items-center flex-col max">
        {Loading ? (
          <>
            <div className="mt-8">
              <CustomSkelton blogCount={3} />
            </div>
          </>
        ) : (
          <div className="mt-20">
            {Blogs.map((blog, index) => (
              <div
                key={index}
                className="w-[720px] pb-6 px-4 border-b border-slate-300"
              >
                {/* TODO make the publishedDate dynamic  */}
                <Link to={"/blogs/" + blog.id}>
                  <BlogsCard
                    AuthorName={
                      blog.author.name ? blog.author.name : "Anonymous"
                    }
                    publishedDate={new Date(blog.createdAt).toLocaleDateString(
                      "en-GB",
                      { day: "2-digit", month: "short", year: "numeric" }
                    )}
                    title={blog.title}
                    description={blog.content}
                  />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="absolute top-[600px] right-[100px] rounded-full ">
        <Editblog />
      </div>
    </>
  );
}
