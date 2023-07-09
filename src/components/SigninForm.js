import React, { useState } from "react";
import google from "../assets/google_logo.svg";
import { useNavigate, Link } from "react-router-dom";
import { account } from "../appwrite/appwriteConfig";
import { Client, Account, ID } from "appwrite";
import eyes from '../assets/eye-svgrepo-com.svg'


const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64aac541b63dc35aced5");

const SigninForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showUserExistsNotification, setShowUserExistsNotification] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const postUserForm = (e) => {
    e.preventDefault();
    const account = new Account(client);
    account
      .create(ID.unique(), email, password, name)
      .then(
        (response) => {
          console.log(response);
          navigate("/dashboard");
        },
        (error) => {
          console.log(error);
          if (error.code === 1101) {
            setShowUserExistsNotification(true);
          }
        }
      );
  };

  const handlePasswordInput = (event) => {
    const { name, value } = event.target;

    if (name === "password") {
      setPassword(value);
      setPasswordError("");
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const passwordsMatch = password === confirmPassword;
  const retypePasswordClassName = passwordsMatch
    ? "outline-none placeholder:text-customBlue px-4 py-1 border-[1px] font-md rounded-md border-green-500 w-full  text-gray-600 font-semibold "
    : "outline-none placeholder:text-customBlue px-4 py-1 border-[1px] font-md rounded-md border-red-500 w-full  text-gray-600 font-semibold  ";

  const passwordIsValid =
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password);

  const googleAuth = (e) => {
    e.preventDefault();
    account.createOAuth2Session(
      "google",
      "http://localhost:3000/dashboard",
      "http://localhost:3000/login"
    );
  };

  const isDisabled =
    name.trim() === "" ||
    email.trim() === "" ||
    password.trim() === "" ||
    confirmPassword.trim() === "" ||
    !passwordIsValid;

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter");
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter");
    } else if (!/\d/.test(password)) {
      setPasswordError("Password must contain at least one number");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center py-8 mt-4">
      <div className="">
        {showUserExistsNotification && (
          <div className="bg-red-500 text-white p-2">
            User with this email already exists. Please sign in instead.
          </div>
        )}
        <p className="flex justify-center items-center text-center py-2 text-[#A0B1C0]">
          Sign in with:
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
        <form action="" onSubmit={postUserForm} className="flex flex-col">
          <div className="flex flex-col px-4 gap-4">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Username"
              id=""
              className="outline-none placeholder:text-customBlue px-4 py-1 border-[1px] rounded-md text-gray-600 font-semibold "
            />
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              id=""
              className="outline-none placeholder:text-customBlue px-4 py-1 border-[1px] text-gray-600 font-semibold rounded-md"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handlePasswordInput}
                onBlur={validatePassword}
                placeholder="Password"
                id=""
                className="outline-none w-full placeholder:text-customBlue px-4 py-1 border-[1px] font-md rounded-md text-gray-600 font-semibold "
              />
              
              <img 
                src={eyes}
                alt="visible"
                className=" hover:opacity-30  w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={toggleShowPassword}
              />
            </div>
            <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handlePasswordInput}
              placeholder="Confirm password"
              id=""
              className={retypePasswordClassName}
              class="outline-none w-full placeholder:text-customBlue px-4 py-1 border-[1px] font-md rounded-md text-gray-600 font-semibold"
            />
            <img
                src={eyes}
                alt="visible"
                className="hover:opacity-30 w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={toggleShowConfirmPassword}
              />
            </div>
           
          </div>
          <div className="flex flex-col px-4 gap-4">
            <p className="text-[#A0B1C0] flex text-center justify-center text-xs md:text-[14px] mt-2">
              6 or more characters, one number, one uppercase & one lowercase.
            </p>
            {passwordError && <p className="text-red-500">{passwordError}</p>}
            <button
              onClick={postUserForm}
              disabled={isDisabled}
              className="bg-customBlue hover:opacity-70 rounded-lg p-2 text-white"
            >
              Sign Up with Email
            </button>
            {passwordsMatch && !passwordError && (
              <p className="text-green-500">Passwords match</p>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 text-center justify-center font-semibold mt-4">
              <p className="text-[#5C6F7F]">Already have an account?</p>
              <Link to="/login">
                <span className="text-customBlue cursor-pointer">Log in</span>
              </Link>
            </div>
            <div className="flex flex-col gap-2 text-center justify-center">
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
  );
};

export default SigninForm;
