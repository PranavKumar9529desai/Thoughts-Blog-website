import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./routes/signin";
import { Blogs } from "./routes/blogs";
import SignUp from "./routes/signup";
import { RecoilRoot } from "recoil";
import { BlogPage } from "./routes/blogpage";
import { CreateBlog } from "./routes/createBlog";
import { Home2 } from "./routes/home2";
function Main() {
  return (
    <div>
      {/* {location.pathname !== '/' && <Navbar />} */}
      {/* not to show the navbar on home route instead wrap the navabat and home in same component and then render it  */}
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
        <Route path="blogs/createblog" element={<CreateBlog />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Home2 />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
