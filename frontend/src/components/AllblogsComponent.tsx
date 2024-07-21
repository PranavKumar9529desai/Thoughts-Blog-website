import { TageNavigation } from "./TagNavigation";
import { useState } from "react";
import { Tags } from "./BlogSelctor";
import { blog } from "@hooks/FetchBlogs";
import { BlogsCard } from "./BlogsCard";
import { Link } from "react-router-dom";

export const AllBlogs= ( { Blogs } : { Blogs : blog[] }) => {
  const [Tag, SetTag] = useState<Tags>("React" as Tags);
//   console.log("from the state", Tag);
  console.log("blogs are " , Blogs);
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
      <div className="flex w-full justify-center">
        <TageNavigation SetTag={SetTag} />
      </div>
      <div className="mt-6">
        {/* sort blog according to their likes or tagnnavigation*/}
        {/* {Blogs.sort((a, b) => b.Likes.length - a.Likes.length) */}
        {FilteredBlogs.map((blog, index) => {
          const imageUrl = extractImage(blog.content);
          const contentWithoutImage = blog.content.replace(/<img.*?>/g, "");
          return (
            <div
              key={index}
              className="lg:w-[900px] py-1 border-b border-gray-150"
            >
              <div className="flex justify-between rounded-xl overflow-hidden">
                <Link to={"/blogs/" + blog.id}>
                  <BlogsCard
                    AuthorName={
                      blog.author.name ? blog.author.name : "Anonymous"
                    }
                    // date with specific format
                    publishedDate={new Date(blog.createdAt).toLocaleDateString(
                      "en-GB",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    )}
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
    </>
  );
};

function extractImage(content: any) {
  const imgRegex = /<img.*?src="(.*?)"/;
  const match = content.match(imgRegex);
  return match ? match[1] : null;
}
