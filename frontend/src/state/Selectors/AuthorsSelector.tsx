import axios, { AxiosResponse } from "axios";
import { selector } from "recoil";

export interface AuthorData {
  name: string;
  userInfo: string;
}

interface allAuthorsData {
  msg: string;
  allUserInfo: AuthorData[];
}

export const AllAuthor = selector({
  key: "allauthors",
  get: async () => {
    const response: AxiosResponse<allAuthorsData> = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/authors/allauthorsinfo`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      }
    );
    const AllauthorsInfo: AuthorData[] = response.data.allUserInfo;
    return AllauthorsInfo;
  },
});
