import { useEffect } from "react";
import Swal from "sweetalert2";
import {DescriptionModal} from "../components/customAlerts"

// or via CommonJS

function Home() {
  // swal("Hello world!")

  return (
    <>
       <DescriptionModal />
    </>
  );
}

const CustomAlert = ( {message } : {message : string }) => {
  useEffect(() => {
    Swal.fire({
      title: "Error!",
      text: message,
      icon: "success",
      confirmButtonText: "Cool",
    });
  }, [message]);
  return null;
};

export default Home;
