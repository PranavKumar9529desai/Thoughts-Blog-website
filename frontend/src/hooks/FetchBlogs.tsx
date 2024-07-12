import { Loadable, useRecoilState, useRecoilValueLoadable } from "recoil";
import { useEffect, useState } from "react";
import { blogSelector } from "../state/blogsFamily";
import { blogsState } from "../components/BlogSelctor";
import { useSingleBlog } from "../state/blogsFamily";
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

export const useFetchBlogs = () => {
  const blogsLoadable: Loadable<blog[]> = useRecoilValueLoadable(blogSelector);
  const [Loading, SetLoading] = useState(false);
  const [Blogs, SetBlogs] = useRecoilState<blog[]>(blogsState);

  useEffect(() => {
    if (Blogs.length === 0) {
      // Only fetch blogs if Blogs is empty
      switch (blogsLoadable.state) {
        case "hasValue":
          SetBlogs(blogsLoadable.contents);
          SetLoading(false);
          break;
        case "loading":
          SetLoading(true);
          break;
        case "hasError":
          console.error(blogsLoadable.contents);
          SetLoading(true);
          break;
      }
    } else {
      // Blogs have already been fetched, so set Loading to false
      SetLoading(false);
    }
  }, [blogsLoadable]);

  return { Loading, Blogs };
};

export const useFetchSingleBlog = (id: string) => {
  const singleBlogLoadable: Loadable<blog> = useRecoilValueLoadable(
    useSingleBlog(id)
  );

  switch (singleBlogLoadable.state) {
    case "hasValue":
      return { blog: singleBlogLoadable.contents, isLoading: false };
    case "loading":
      return { blog: null, isLoading: true };
    case "hasError":
      throw singleBlogLoadable.contents;
  }
};
