import axios, { AxiosResponse } from "axios";
import { selector, selectorFamily } from "recoil";
import { blog } from "@hooks/FetchBlogs";
import { RecoilValueReadOnly } from "recoil";

interface AllBlogs {
  msg: string;
  "number of blogs": string;
  blogs: blog[];
}

interface SingleBlog {
   "msg" : string ,
   "blog" : blog
}
// selector to fetch all the blogs
export const blogSelector:RecoilValueReadOnly<blog[]> = selector({
  key: "blogsFamily",
  get: async () => {
    const response: AxiosResponse<AllBlogs> = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/bulk`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      }
    );
    console.log(response.data.blogs);
    return response.data.blogs;
  },
});

// selector to fetch a single blog
export const SingleBlogSelectorFamily : (id: string) => RecoilValueReadOnly<blog>= selectorFamily({
  key: "SingleBlog",
  get:
    (id: string) =>
    async ({}) => {
      const response : AxiosResponse<SingleBlog> = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/${id}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        }
      );
      console.log(response.data.blog);
      return response.data.blog;
    },
});
