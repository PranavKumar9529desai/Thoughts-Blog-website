import { Appbar } from "../components/Appbar";
import { SingleBlog } from "../components/singleBlog";
import { useFetchSingleBlog } from "../hooks/FetchBlogs";
import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

// navbar should only be seen at screeen it should disappear after first scroll
export const BlogPage = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <div>No ID provided</div>;
  }
  const { blog, isLoading } = useFetchSingleBlog(id);
  return (
    <>
      {isLoading ? (
        <>
          <div className="mb-8 sticky">
            <Appbar />
          </div>  
          <div className="flex justify-center items-center h-screen ">
            <ScaleLoader color="#36d7b7" height={50} width={5} />
          </div>
        </>
      ) : (
        blog && (
          <>
            <div className="mb-8 sticky">
              <Appbar />
            </div>
            <div className="mt-3 ml-10">
              <SingleBlog blog={blog} />
            </div>
          </>
        )
      )}
    </>
  );
};


