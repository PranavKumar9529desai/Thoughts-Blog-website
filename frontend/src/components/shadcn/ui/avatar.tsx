import { useState } from "react";
import profileImage from "../../../assets/profileImage.png";

export function Avatar({
  name,
  size,
}: {
  name: string;
  size: "small" | "big";
}) {
  console.log("name is from the avatar : ", name);
  console.log(
    name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
  );
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

export function AvatarDropDown({
  name,
  size,
}: {
  name: string;
  size: "small" | "big";
}) {
  const [isOpen, setIsOpen] = useState(false);
  const initials =
    name == null
      ? "A"
      : name
          .split(" ")
          .map((word) => word[0])
          .join("")
          .toUpperCase();
  console.log(isOpen);
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
        {/* <span
          className={`size == "big" ? "font-medium" : "font-sm" text-slate-600 dark:text-gray-300 `}
        >
          {initials}
        </span> */}

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
          <div className="px-4 py-3 w-full border hover:text-white">
            Description
          </div>
        </div>
      )}
    </div>
  );
}

function HandleLogout() {
  console.log("logout clicked");
  localStorage.removeItem("token");
  window.location.assign("/signin");
}
