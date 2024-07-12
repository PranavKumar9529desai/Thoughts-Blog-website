import { Appbar } from "@components/Appbar";
import { BlogsCard } from "@components/BlogsCard";
import { useFetchBlogs } from "@hooks/FetchBlogs";
import { CustomSkelton } from "@components/loaders/customSkelton";
import { Link } from "react-router-dom";
import { Editblog } from "@components/button";
import { TageNavigation } from "@components/TagNavigation";
import { Tags } from "@components/BlogSelctor";
import { useState } from "react";
import { blog } from "@hooks/FetchBlogs";

function extractImage(content: any) {
  const imgRegex = /<img.*?src="(.*?)"/;
  const match = content.match(imgRegex);
  return match ? match[1] : null;
}

export function Blogs() {
  const { Loading, Blogs } = useFetchBlogs();
  const [Tag, SetTag] = useState<Tags>("React" as Tags);
  console.log("from the state", Tag);

  // ToDo note that you can create a shallow copy of the Blogs array before sorting it
  const FilteredBlogs: blog[] = [...Blogs].sort((a, b) => {
    const aHasTag = a.Tags.includes(Tag);
    const bHasTag = b.Tags.includes(Tag);
  
    if (aHasTag && !bHasTag) {
      return -1; // a comes before b
    } else if (!aHasTag && bHasTag) {
      return 1; // b comes before a
    } else {
      return 0; // no change in order
    }
  });

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
          <div>
            <div className="flex w-full justify-center">
              <TageNavigation SetTag={SetTag}  />
            </div>
            <div className="mt-6">
              {/* sort blog according to their likes or tagnnavigation*/}
              {/* {Blogs.sort((a, b) => b.Likes.length - a.Likes.length) */}
              {FilteredBlogs.map((blog, index) => {
                const imageUrl = extractImage(blog.content);
                const contentWithoutImage = blog.content.replace(
                  /<img.*?>/g,
                  ""
                );
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
          </div>
        )}
      </div>
      <div className=" top-[520px] right-[90px] lg:top-[600px] lg:right-[100px] rounded-full fixed ">
        <Editblog />
      </div>
    </>
  );
}
