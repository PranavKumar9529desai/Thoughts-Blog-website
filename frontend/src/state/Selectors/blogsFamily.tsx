import axios, { AxiosResponse } from "axios";
import { selector, selectorFamily } from "recoil";
import { RecoilValueReadOnly } from "recoil";
import { Tags } from "@components/BlogSelctor";

export interface blog {
  id: string;
  title: string;
  content: string;
  published: false;
  createdAt: string;
  author: {
    name: string;
    userInfo: string;
  };
  Likes: [
    {
      blogsId: string;
      userId: string;
    }
  ];
  Tags: Tags;
}

interface BackendData {
  msg: string;
  "number of blogs": string;
  blogs: blog[];
  tags : Tags,
}

interface SingleBlog {
   "msg" : string ,
   "blog" : blog
}

export interface BlogsDataType { 
   blogs : blog[] ,
   tags :  Tags,
}

// selector to fetch all the blogs
export const blogSelector:RecoilValueReadOnly<BlogsDataType> = selector({
  key: "blogsFamily",
  get: async () => {
    const response: AxiosResponse<BackendData> = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/bulk`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      }
    );
    const TagsArray : Tags = response.data.tags;
 
    return {
      blogs : response.data.blogs , 
      tags : TagsArray,
    };

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
