import { atom } from "recoil";

export type Tags = "React" | "Ai" | 'Coding' | 'Tech';


interface blog {
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

// Define your `atom`
export const blogsState = atom<blog[]>({
  key: "blogsState",
  default: [],
});
