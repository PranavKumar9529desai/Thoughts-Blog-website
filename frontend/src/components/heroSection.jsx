import React from "react";
export function HeroSection(){
return <>
<section className="w-full  py-12 md:py-24 lg:py-32 ">
    <div className="container px-4 z-10 relative md:px-6">
      <div className="grid gap-20 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
        <div className="flex flex-col justify-center space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Share Your Thoughts with the World</h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our blog platform empowers you to express your ideas and connect with like-minded individuals.
            </p>
          </div>
          <button className="inline-flex h-12 items-center justify-center rounded-full bg-gray-900  text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300" href="#">
            Post a Blog
          </button>
        </div>
        {/* image in the hero section */}
        {/* <img alt="Hero" className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last  border-gray-200 " height="500" src="src/assets/character.jpg" width="550" /> */}
      </div>
    </div>
  </section>

</>
}