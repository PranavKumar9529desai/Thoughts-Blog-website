
  export const CustomSkelton = ( {blogCount} : { blogCount : number}) => {
    return (
    <>
      {Array.from({ length: blogCount }).map((_, index) => (
        <div
          key={index}
          role="status"
          className="w-full sm:w-[720px]  animate-pulse order-1 "
        >
          <div className="flex items-center">
            <div className="flex text-sm sm:text-s">
              <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-slate-300 rounded-full dark:bg-gray-600">
                <span className="font-sm text-slate-600 dark:text-gray-300"></span>
              </div>
            </div>
            <div className="flex m-3 text-md">
              <div className="bg-slate-300 dark:bg-gray-600 w-20 h-4"></div>
              <div className="bg-slate-300 dark:bg-gray-600 w-20 h-4 mx-1"></div>
            </div>
          </div>
          <div className="bg-slate-300 dark:bg-gray-600 w-full sm:w-700 w-720 h-5 my-2"></div>
          <div className="bg-slate-300 dark:bg-gray-600 w-full h-3 my-3"></div>
          <div className="bg-slate-300 dark:bg-gray-600 w-full h-3 my-3"></div>
          <div className="bg-slate-300 dark:bg-gray-600 w-full h-3 my-3"></div>
          <div className="bg-slate-300 dark:bg-gray-600 w-full h-3 my-3"></div>
          <div className="border-b border-slate-300 my-8 sm:w-[720px]"></div>
        </div>
      ))}
    </>
  );
};
