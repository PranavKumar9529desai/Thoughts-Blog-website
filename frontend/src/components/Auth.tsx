import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { signupInput } from "@common/src/index";
import axios from "axios";
import { BarLoader } from "react-spinners";
import { coustomAlert } from "./customAlerts";

export function Auth({ type }: { type: "signup" | "signin" }) {
  let [loading, setLoading] = useState(false);
  const [postInputs, setpostInput] = useState<signupInput>({
    email: "",
    password: "",
    username: "",
  });
  const navigate = useNavigate();

  async function SendData(postInputs: signupInput) {
    try {
      setLoading(true);
      console.log("function is called");
      console.log(import.meta.env.VITE_BACKEND_URL);
      const newReq = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user${
          type == "signup" ? "/signup" : "/signin"
        }`,
        postInputs
      );
      console.log(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/${
          type == "signup" ? "signup" : "signin"
        }`
      );
      const response = newReq.data;
      console.log(newReq.data.msg);
      const jwt = response.token;
      localStorage.setItem("jwt", jwt);
      navigate("/blogs");
      const message =
        type == "signup" ? "User created Sucessfully" : "Logged in Sucessfully";
      coustomAlert("success", message);
    } catch (error: any) {
      console.log(error.response.data.msg);
      // add the custom alert here
      coustomAlert("error", error.response.data.msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          SendData(postInputs);
          //send the data when the form is submitted
          // using form makes code much much cleaner html5 makes it much cleaner
        }}
      >
        {/* this div is nessary to quote appear on rigth side */}
        <div className="relative max-w-lg  bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1  transition-all duration-300 overflow-hidden">
          <BarLoader color="#36d7b7" height={4} width={450} loading={loading} />

          <div className="flex justify-center items-center  flex-col my-10 mx-12">
            <div className="text-4xl font-extrabold ">
              {type == "signup" ? "Create account" : "Login"}
            </div>
            <div className="flex mt-4 ">
              <div className="flex justify-center flex-col ">
                {/* when signup show Username field */}
                {type === "signup" ? (
                  <LabeledInput
                    label="Username"
                    placeholder="Pranav"
                    onChange={(e) => {
                      setpostInput((c) => ({
                        ...c,
                        username: e.target.value,
                      }));
                    }}
                    type="text"
                  />
                ) : (
                  ""
                )}

                <LabeledInput
                  label="Email"
                  placeholder="xyz@gmail.com    "
                  onChange={(e) => {
                    setpostInput((c) => ({
                      ...c,
                      email: e.target.value,
                    }));
                  }}
                  type="email"
                />

                {/* palceholder dots  */}
                <LabeledInput
                  label="Password"
                  placeholder="&#9679;&#9679;&#9679;&#9679;"
                  onChange={(e) => {
                    setpostInput((c) => ({
                      // overidng the previous input
                      ...c,
                      password: e.target.value,
                    }));
                  }}
                  type="password"
                />
                <button
                  type="submit"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-5 w-full pd-2 hover:shadow-md hover:-translate-y-1.5 transition-all"
                >
                  {type == "signup" ? "Sign up" : "Sign in"}
                </button>
              </div>
            </div>
            <div className="font-ligh mt-1 text-slate-400">
              {type == "signup"
                ? "Already have an account ? "
                : "Don't have an account ? "}
              <Link
                to={type == "signup" ? "/signin" : "/signup"}
                className="underline text-blue-500 font-semibold"
              >
                {type == "signup" ? "Login" : "Sign Up"}
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

interface LabeledInput {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export function LabeledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabeledInput) {
  return (
    <>
      <div className="flex flex-col justify-start w-80 mt-2">
        <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
          {label}
        </label>
        <input
          required
          onChange={onChange}
          id="first_name"
          type={type || "text"}
          autoComplete="on"
          className=" border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none focus:ring focus:ring-blue-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-900 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500     shadow hover:shadow-md hover:-translate-y-1.5 transition-all"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
