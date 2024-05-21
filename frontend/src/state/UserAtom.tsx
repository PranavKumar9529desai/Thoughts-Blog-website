import axios from "axios";
import { atom, selector } from "recoil";

export interface User {
  name: string;
  description : string ,
}

export const UserAtom = atom<User>({
  key: 'User',
  default: { name: '', description: '' }, // Provide a default value for your user state
});

export const UserSelector = selector({
  key: "UserSelector",
  get: async ({get}) => {
    const user = get(UserAtom);
    if(user) return user ;      
    // return the user when user is not empty
    
    console.log(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/blog/author/authorinfo`
    );
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/author/authorinfo`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      }
    );
    console.log(response.data);
    return response.data.User;
  },
});
