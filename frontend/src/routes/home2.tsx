import "../App.css";
import downarrow from "@assets/downarrow.png";
import { useNavigate } from "react-router-dom";
export const Home2 = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <section className="background-blur"></section>
        <section className="header-section">
          <h1 className="header-title js-animate-letters">
            <span>V</span>
            <span>I</span>
            <span>C</span>
            <span>H</span>
            <span>A</span>
            <span>R</span>
          </h1>
        </section>
        <section className="navigate-button">
          <button
            onClick={() => {
              const jwt = localStorage.getItem("jwt");
              if (jwt) {
                navigate("/blogs");
              } else {
                navigate("/signin");
              }
            }}
            type="button"
            className="btn"
          >
            Start reading
          </button>
        </section>
        <section className="down-arrow">
          <img src={downarrow} alt="" width="40px" />
        </section>
      </header>
    </>
  );
};
