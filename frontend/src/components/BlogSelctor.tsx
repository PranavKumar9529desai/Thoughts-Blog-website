import { atom } from "recoil";

interface blog {
  id: string;
  title: string;
  content: string;
  published: false,
  createdAt : string,
  author: {
    name: string;
    userInfo: string
  };
  }
  
  // Define your `atom`
  export const blogsState = atom<blog[]>({
    key: 'blogsState',
    default: [],
  });