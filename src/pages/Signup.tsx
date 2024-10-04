import { Icon } from "@iconify/react";
import img from "../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [reg, setReg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmitClick = (e: any) => {
    e.preventDefault();

    const validateEmail = (email: string) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    if (!validateEmail(email)) {
      setError("Invalid Email");
    }

    if (password.length < 8) {
      setError("Password must be at least 8 chars long");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white px-16 py-20 shadow-2xl  rounded-md border-2 flex  flex-col justify-  items-center gap-8 text-center">
        <figure>
          <img src={img} alt="login" className="h-20 w-32" />
        </figure>
        <div className="flex flex-col gap-4 min-w-[23rem]">
          <p className="text-black text-[20px]">Welcome Back !</p>
          <p className="text-gray-400">
            Sign in to continue to yourDigital Library
          </p>
          <form
            action=""
            className="flex  flex-col  justify-between items-center text-start w-full gap-4"
            onSubmit={handleSubmitClick}
          >
            <p className="w-full">
              <label htmlFor="regno" className="font-medium">
                Reg No.
              </label>{" "}
              <br />
              <input
                type="text"
                name="regno"
                id="regno"
                className="w-full py-2 px-4 border-2 "
                placeholder="College Reg. No."
                value={reg}
                onChange={(e) => setReg(e.target.value)}
              />
            </p>
            <p className="w-full">
              <label htmlFor="email" className="font-medium">
                Email
              </label>{" "}
              <br />
              <input
                type="email"
                name="email"
                id="email"
                className="w-full py-2 px-4 border-2 "
                placeholder="username@collegename.ac.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <p className="w-full">
              <label htmlFor="password" className="font-medium">
                Password
              </label>{" "}
              <br />
              <p className="w-full px-4 border-2 flex  justify-between items-center">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="........."
                  className="py-2  outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Icon icon="mdi:eye-off" className="cursor-pointer" />
              </p>
            </p>
            <p className="w-full">
              <label htmlFor="password" className="font-medium">
                Confirm Password
              </label>{" "}
              <br />
              <p className="w-full px-4 border-2 flex  justify-between items-center">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="........."
                  className="py-2  outline-none"
                  value={cpassword}
                  onChange={(e) => setCPassword(e.target.value)}
                />
                <Icon icon="mdi:eye-off" className="cursor-pointer" />
              </p>
            </p>
            <div className="flex justify-between  w-full">
              <p>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="cursor-pointer"
                />
                <span>Remember me</span>
              </p>
              <p>
                <a href="#" className="underline">
                  Forgot Password
                </a>
              </p>
            </div>
            <div className="h-3">
              {error && <span className="text-red-500 ">{error}</span>}
            </div>
            <button
              type="submit"
              className="bg-[#FA7C54] w-full py-2 text-white rounded-md"
            >
              Login
            </button>
          </form>

          <div className="flex justify-between w-full">
            <p>
              <span>Already a User?</span>{" "}
              <Link to="/" className="underline">
                {" "}
                Login now
              </Link>
            </p>
            <p>
              <a href="#">Use as Guest</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
