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
        <div className="sub-header-text">
          <h2>Discover the books, podcasts, and videos that changed lives</h2>
        </div>
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
            Start Reading
          </button>
        </section>
        <section className="down-arrow">
          <img src={downarrow} alt="" width="40px" />
        </section>
      </header>
    </>
  );
};
