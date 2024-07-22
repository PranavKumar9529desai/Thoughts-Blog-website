import { Appbar } from "@components/Appbar";
import { CustomSkelton } from "@components/loaders/customSkelton";
import { Editblog } from "@components/button";
import { useFetchBlogs } from "@hooks/FetchBlogs";
import { AllBlogs } from "@components/AllblogsComponent";
import { useRecoilValue } from "recoil";
import { TagsAtom } from "@state/atoms/TagsAtom";
import { Tags } from "@components/BlogSelctor";
import { useState } from "react";
import { SuggestFollowers } from "@components/SuggestFollowers";

export function Blogs() {
  const { Loading, Blogs } = useFetchBlogs();
  const alltags: any = useRecoilValue<Tags>(TagsAtom);

  const Tags: string[] = [];
  let key: string;
  for (key in alltags) {
    console.log("key is ", key);
    Tags.push(key);
  }
  console.log("value of tags is ", Tags);
  console.log("what does the blogs have", Blogs);
  return (
    <>
      <div>
        <Appbar />
      </div>
      <div className="lg:grid grid-cols-12">
        <div className="col-span-8 ">
          <div className="mt-12 lg:flex  lg:items-center lg:flex-col max relative">
            {Loading ? (
              <div className="flex flex-col w-full px-4 lg:mt-10 lg:justify-center mt-24 lg:ml-64">
                <CustomSkelton blogCount={3} />
              </div>
            ) : (
              // <div className="flex lg:mt-10 flex-col w-full px-4 mt-10 ml-[300px]">
              //   <CustomSkelton blogCount={3} />
              // </div>
              <div className="">
                <AllBlogs Blogs={Blogs} />
              </div>
            )}
          </div>
        </div>
        <div className="col-span-4 lg:mt-24 h-screen border-l-2 border-gray-100">
          <div>
            <TagsComponent Tags={Tags} />
          </div>
          <div className="mx-5 mt-5">
            <SuggestFollowers />
          </div>
        </div>
      </div>

      <div className=" top-[520px] right-[90px] lg:top-[600px] lg:right-[100px] rounded-full fixed ">
        <Editblog />
      </div>
    </>
  );
}

const TagsComponent = ({ Tags }: { Tags: string[] }) => {
  const [slicefactor, setSlicefactor] = useState<number>(2);
  const modifiedTags = Tags.slice(0, slicefactor);
  return (
    <div>
      <div className="flex">
        <div className="flex justify-start w-full ml-5 mt-5">
          <h1 className="text-md font-semibold">Recommended Topics </h1>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 px-4 mt-5 ">
        {modifiedTags.map((tag: string) => {
          return (
            <div className="w-fit bg-gray-200 px-5 py-2 rounded-2xl">{tag}</div>
          );
        })}
      </div>

      <div className="flex w-fit mt-5 ml-5">
        <button
          className="text-md text-blue-700 font-montserrat "
          onClick={() => {
            setSlicefactor(slicefactor + 4);
          }}
        >
          see more options
        </button>
      </div>
    </div>
  );
};
