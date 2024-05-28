import { useState } from "react";
import profileImage from "@assets/profileImage.png";
import { coustomLogoutAlert, DescriptionModal } from "@components/customAlerts";
import { useNavigate } from "react-router-dom";
export function Avatar({
  name,
  size,
}: {
  name: string;
  size: "small" | "big";
}) {
  const initials =
    name == null
      ? "A"
      : name
          .split(" ")
          .map((word) => word[0])
          .join("")
          .toUpperCase();

  return (
    <>
      <div>
        <div
          className={`relative inline-flex items-center justify-center font-anton ${
            size === "small" ? "w-10 h-10" : "w-14 h-14"
          }  overflow-hidden bg-slate-100 rounded-full dark:bg-gray-600`}
        >
          <span
            className={`size == "big" ? "font-medium" : "font-sm" text-slate-600 dark:text-gray-300 `}
          >
            {initials}
          </span>
        </div>
      </div>
    </>
  );
}

export function AvatarDropDown({ size }: { size: "small" | "big" }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function HandleLogout() {
    console.log("logout clicked");
    coustomLogoutAlert(navigate);
  }

  return (
    <div
      onClick={() => {
        console.log("div clicked");
        setIsOpen(!isOpen);
      }}
      className="relative"
    >
      {" "}
      <button
        id="dropdownHoverButton"
        className={`z-10 inline-flex items-center justify-center font-anton ${
          size === "small" ? "w-10 h-10" : "w-14 h-14"
        }   bg-slate-100 rounded-full dark:bg-gray-600`}
      >
        <img src={profileImage} alt="Edit blog" className="w-8 h-8  " />
      </button>
      {isOpen && (
        <div
          id="dropdownHover"
          className="absolute z-20 right-[-45px] rounded-lg  bg-slate-600 dark:bg-gray-700 top-full  text-center border font-mono mt-2 "
        >
          <div
            className="z-20 px-4 py-3 w-full border hover:text-white"
            onClick={() => HandleLogout()}
          >
            Logout
          </div>
          <div
            className="px-4 py-3 w-full border hover:text-white"
            onClick={() => HandleDescription()}
          >
            Description
          </div>
        </div>
      )}
    </div>
  );
}

function HandleDescription() {
  console.log("description is clicked");
  DescriptionModal();
}
