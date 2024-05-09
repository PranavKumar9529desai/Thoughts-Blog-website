import './App.css'
import { BrowserRouter , Route, Routes , useLocation  } from 'react-router-dom' ;
import  Home  from './routes/home'
// import Navbar from './components/shadcn/ui/navbar';
import  SignIn  from './routes/signin';
import  SignUp  from './routes/signup';
function Main() {
  // const location = useLocation();

  return (

    <div>
        {/* {location.pathname !== '/' && <Navbar />} */}
        {/* not to show the navbar on home route instead wrap the navabat and home in same component and then render it  */}
        <Routes>
            <Route path="/" element={< Home />}  />
            {/* <Route path="/blogs" element={< Blogs />}  /> */}
            <Route path='/signup' element={ <SignUp /> } />
            <Route path="/signin" element={ <SignIn /> } /> 
        </Routes>
    </div>

  )
}

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App
