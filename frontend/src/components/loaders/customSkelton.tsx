export const CustomSkelton = ({ blogCount }: { blogCount: number }) => {
  return (
    <>
      {Array.from({ length: blogCount }).map((_, index) => (
        <div
          key={index}
          role="status"
          className="w-full sm:w-[720 px]  animate-pulse order-1 "
        >
          <div>
            <div className="flex">
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
            <div className="lg:flex">
              <div className="flex-col lg:w-[500px] lg:mr-8">
                <div className="bg-slate-300 dark:bg-gray-600 lg:w-[500px] sm:w-700 w-720 h-6 my-5"></div>
                {/* <div className="bg-slate-300 dark:bg-gray-600 lg:w-[500px] sm:w-700 w-720 h-6 my-5"></div> */}
                <div className="bg-slate-300 dark:bg-gray-600 lg:w-[500px] h-4 my-3"></div>
                <div className="bg-slate-300 dark:bg-gray-600 lg:w-[500px] h-4 my-3"></div>
                <div className="bg-slate-300 dark:bg-gray-600 lg:w-[500px] h-4 my-3"></div>
                <div className="bg-slate-300 dark:bg-gray-600 lg:w-[500px] h-4 my-3"></div>
                <div className="border-b border-slate-300 my-8 sm:w-[720px]"></div>
              </div>
              <div className="hidden lg:block mt-6">
                <div className=" w-[150px] h-[140px] bg-slate-300 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
