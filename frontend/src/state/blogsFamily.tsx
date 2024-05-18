import axios from 'axios';
import { selector , selectorFamily } from 'recoil'


interface SingleBlogProps {
  Title: string;
  Description: string;
  pusblishedate: string;
  AuhtorName: string;
  Authordescription: string;
}

export const blogSelector = selector({
  key : 'blogsFamily',
  get : async () => {
   const response = await  axios .get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
    console.log(response.data.blogs);
    return response.data.blogs;
      
  }
})

// selector to fetch a single blog 
export const useSingleBlog = selectorFamily({
  key: 'SingleBlog',
  get: (id: string) => async ({get}) => {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    });
    console.log(response.data.blog);
    return response.data.blog;
  },
});