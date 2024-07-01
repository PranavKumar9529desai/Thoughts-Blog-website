import axios from "axios";


export async function handleDescriptionSubmit( value : string ){
    const auhtorDescription = value;
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}api/v1/blog/author/authorinfo`);
}