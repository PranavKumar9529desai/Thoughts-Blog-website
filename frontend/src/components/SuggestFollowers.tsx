import { AuthorData } from "@state/Selectors/AuthorsSelector";
import { FetchAllauthors } from "@hooks/FetchAllauthors";
import { Avatar } from "./shadcn/ui/avatar";
import { useState } from "react";
export const SuggestFollowers = () => {
  const { hasError, allAuthors, isLoading } = FetchAllauthors();
  console.log(hasError, isLoading);

  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <div className="w-fit font-montserrat font-bold mb-5">Who to follow</div>
      {allAuthors?.map((user: AuthorData) => {
        return (
          <div className="flex mb-2">
            <AuhthorComponent name={user.name} userInfo={user.userInfo} />
          </div>
        );
      })}
    </div>
  );
};

const AuhthorComponent = ({
  name,
  userInfo,
}: {
  name: string;
  userInfo: string;
}) => {
  const [isClicked, setCliked] = useState<boolean>(false);
  return (
    <>
      <div className="grid grid-cols-10 flex-col gap-4">
        <div className="col-span-1 ">
          <Avatar name={name} size="extra-small" />
        </div>
        <div className="col-span-6">
          <div className="flex w-fit flex-col tex-md font-anton">
            {name}
          </div>
          <div className="flex text-sm font-ubuntu mt-1 text-gray-500 leading-6">
            {userInfo}
          </div>
        </div>
        <div className="col-span-3 ">
          {isClicked ? (
            <button
              className="bg-gray-800 text-sm border-2 border-gray-500 text-white rounded-2xl py-2 px-3 font-sans"
              onClick={() => {
                setCliked(!isClicked);
              }}
            >
              following
            </button>
          ) : (
            <button
              className=" text-black text-sm border-[1px] border-gray-400 py-2  px-3 rounded-2xl font-sans"
              onClick={() => {
                setCliked(!isClicked);
              }}
            >
              follow
            </button>
          )}
        </div>
      </div>
    </>
  );
};
