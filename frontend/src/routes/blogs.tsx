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

  return (
    <>
      <Appbar />
      <div className="flex  items-center flex-col max">
        {Loading ? (
          <>
            <div className="lg:mt-20 lg:flex  flex-col items-center w-full px-4 mt-20">
              <CustomSkelton blogCount={3} />
            </div>
          </>
        ) : (
          // <div className="lg:mt-20 lg:flex  flex-col items-center w-full px-4 mt-20">
          //   <CustomSkelton blogCount={3} />
          // </div>
            <div className="mt-20">
              {Blogs.map((blog, index) => {
                const imageUrl = extractImage(blog.content);
                const contentWithoutImage = blog.content.replace(/<img.*?>/g, "");
                return (
                  <div
                    key={index}
                    className="lg:w-[900px] py-1 border-b border-slate-400"
                  >
                    {/* TODO make the publishedDate dynamic  */}
                    <div className="flex justify-between rounded-xl">

                    <div className="grid grid-cols-12 ">
                        <div className="col-span-8 ">
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
                            />
                          </Link>
                        </div>
                        <div className="hidden lg:flex col-span-4 w-full h-full  justify-center items-center rounded-xl ">
                          <img
                            src={imageUrl}
                            className=" w-[170px] h-[140px] rounded-lg shadow-lg shadow-slate-600 mx-auto mt-2"
                          />
                        </div>
                      </div>
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
