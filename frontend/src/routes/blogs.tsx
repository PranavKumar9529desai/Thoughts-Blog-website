import { Appbar } from "@components/Appbar";
import { BlogsCard } from "@components/BlogsCard";
import { useFetchBlogs } from "@hooks/FetchBlogs";
import { CustomSkelton } from "@components/loaders/customSkelton";
import { Link } from "react-router-dom";
import { Editblog } from "@components/button";

function extractImage(content: any) {
  const imgRegex = /<img.*?src="(.*?)"/;
  const match = content.match(imgRegex);
  return match ? match[1] : null;
}

export function Blogs() {
  const { Loading, Blogs } = useFetchBlogs();

  console.log("from the blogs", Blogs);
  return (
    <>
      <div>
        <Appbar />
      </div>
      <div className="mt-12 flex  items-center flex-col max">
        {Loading ? (
          <>
            <div className="lg:mt-10 lg:ml-[800px] lg:flex  flex-col  items-center w-full px-4 mt-10">
              <CustomSkelton blogCount={3} />
            </div>
          </>
        ) : (
          // <div className="lg:mt-10 lg:ml-[800px] lg:flex  flex-col  items-center w-full px-4 mt-10">
          //   <CustomSkelton blogCount={3} />
          // </div>
          <div className="mt-6">
            {/* sort blog according to their likes */}
            {/* {Blogs.sort((a, b) => b.Likes.length - a.Likes.length) */}
            {Blogs.map((blog, index) => {
              const imageUrl = extractImage(blog.content);
              const contentWithoutImage = blog.content.replace(/<img.*?>/g, "");
              return (
                <div
                  key={index}
                  className="lg:w-[900px] py-1 border-b border-slate-400"
                >
                  <div className="flex justify-between rounded-xl overflow-hidden">
                    <Link to={"/blogs/" + blog.id}>
                      <BlogsCard
                        AuthorName={
                          blog.author.name ? blog.author.name : "Anonymous"
                        }
                        // date with specific format
                        publishedDate={new Date(
                          blog.createdAt
                        ).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                        title={blog.title}
                        // passing down the text without image
                        description={contentWithoutImage}
                        Likes={blog.Likes}
                        id={blog.id}
                        imageUrl={imageUrl}
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className=" top-[520px] right-[90px] lg:top-[600px] lg:right-[100px] rounded-full fixed ">
        <Editblog />
      </div>
    </>
  );
}
