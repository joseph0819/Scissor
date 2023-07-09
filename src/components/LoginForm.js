import React, { useState, useEffect } from "react";
import google from "../assets/google_logo.svg";
import { useNavigate, Link } from "react-router-dom";
import { account } from "../appwrite/appwriteConfig";
import { Client } from "appwrite";
import eyes from '../assets/eye-svgrepo-com.svg'


const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64aac541b63dc35aced5");

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [showErrorNotification, setShowErrorNotification] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const userLogin = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailSession(email, password);
      setShowSuccessNotification(true);
      setShowErrorNotification(false);
      navigate("/dashboard");
    } catch (error) {
      setShowSuccessNotification(false);
      setShowErrorNotification(true);
      console.log(error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const googleAuth = (e) => {
    e.preventDefault();
    account.createOAuth2Session(
      "google",
      "http://localhost:3000/dashboard",
      "http://localhost:3000/login"
    );
  };

  useEffect(() => {
    if (showSuccessNotification || showErrorNotification) {
      const notificationTimeout = setTimeout(() => {
        setShowSuccessNotification(false);
        setShowErrorNotification(false);
      }, 4000);

      return () => clearTimeout(notificationTimeout);
    }
  }, [showSuccessNotification, showErrorNotification]);

  const successBorderStyle = showSuccessNotification ? "border-green-500" : "";
  const errorBorderStyle = showErrorNotification ? "border-red-500" : "";

  return (
    <div>
      <div className="flex flex-col gap-4 justify-center items-center py-8 mt-4">
        <div className="">
          {showSuccessNotification && (
            <div className="bg-green-500 text-white p-2 mt-4">
              Login successful!
            </div>
          )}
          {showErrorNotification && (
            <div className="bg-red-500 text-center rounded-lg text-white mx-4 p-2 mt-4">
              Login failed. Please check your credentials ❌.
            </div>
          )}
          <p className="flex justify-center items-center text-center py-2 text-[#A0B1C0] ">
            Log in with:
          </p>
          <div className="flex justify-center items-center text-center gap-4 py-2">
            <div
              className="flex bg-customBlue px-6 py-2 rounded-lg gap-2 hover:opacity-70 cursor-pointer"
              onClick={(e) => googleAuth(e)}
            >
              <img src={google} alt="" />{" "}
              <span className="text-white font-xl">Google</span>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <hr className="flex-grow border-gray-300 mr-2" />
            <span className="text-gray-500">or</span>
            <hr className="flex-grow border-gray-300 ml-2" />
          </div>
          <form action="" onSubmit={userLogin} className="flex flex-col">
            <div className="flex flex-col px-4 gap-7">
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                id=""
                className={`outline-none placeholder:text-customBlue px-4 py-1 border-[1px] font-md rounded-md ${successBorderStyle} ${errorBorderStyle}`}
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  id=""
                  className={`outline-none  w-full placeholder:text-customBlue px-4 py-1 border-[1px] font-md rounded-md ${successBorderStyle} ${errorBorderStyle}`}
                />
                <img
                  src={eyes}
                  alt="visible"
                  className="hover:opacity-30 w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 bg-customBlue "
                  onClick={toggleShowPassword}
                />
              </div>
            </div>
            <div className="flex flex-col px-4 gap-4 mt-2">
              <p className="text-customBlue flex text-center justify-end font-semibold cursor-pointer text-[14px]">
                Forgot your password?
              </p>
              <button
                onClick={userLogin}
                className="p-2 bg-customBlue hover:opacity-70 text-white rounded-lg opacity-70"
              >
                Log in
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 text-center px-4 justify-center font-semibold mt-4">
                <p className="text-[#5C6F7F]">Don't have an account?</p>
                <Link to="/signup">
                  <span className="text-customBlue cursor-pointer">
                    Sign up
                  </span>{" "}
                </Link>
              </div>
              <div className="flex flex-col gap-2 text-center px-4 justify-center">
                <p className="text-[#A0B1C0]">By signing up, you agree to </p>
                <p className="text-[#5C6F7F]">
                  <span className="text-[#A0B1C0]">Sciccor's</span> Terms of
                  Service, Privacy Policy{" "}
                  <span className="text-[#A0B1C0]">and</span> Acceptable Use
                  Policy.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
