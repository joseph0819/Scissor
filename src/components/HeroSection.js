import React from "react";
import slash from "../assets/slash.svg"
import angle from '../assets/angle.svg'
import link from '../assets/link.svg'
import line from '../assets/Line 7.svg'
import Button from "./Button";
import { Link } from "react-router-dom";



const HeroSection = () => {
  return (
    <div className="py-4">
      <div className="sm:px-24 sm:flex sm:items-center justify-center flex-col">
        <p className="text-3xl font-extrabold sm:font-bold sm:text-2xl lg:text-4xl py-3 text-center">
          Optimize Your Online Experience with Our
        </p>
        <span><p className="text-3xl font-extrabold sm:font-bold sm:text-2xl lg:text-4xl text-center">
          Advanced <span className="text-customBlue">URL</span>
          {" "}<span className="text-customBlue inline-flex flex-col">
            Shortening <img className="w-24 lg:w-auto" src={slash} alt="url shortening text" />
          </span>{" "}
          Solution
        </p>
        </span>
        <div className="sm:w-3/4 text-center py-4">
          <p>
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs, branded links, and domain customization
            options to reinforce your brand presence and enhance user
            engagement.
          </p>
        </div>

        <div className="flex justify-center items-center">
        <Link to='/signup'><Button blue={true} padding={6}>Sign Up</Button></Link>
          <button className="text-customBlue py-3 ml-6">
            learn more
          </button>
        </div>
      </div>

    {/* hero footer */}
      <div className="sm:w-3/4 sm:mx-auto sm:my-16 sm:relative sm:flex">
        <img src={angle} alt='angle' className="sm:absolute sm:-top-9 left-4 z-10 w-[220px] h-[300px] hidden sm:block"/>

        <div className="border border-customBlue py-6 px-10 rounded-[24px] sm:w-[60%] sm:mx-auto mt-6 z-30 bg-[#FEFEFE1A]">
            <div className="flex items-center justify-center mb-4">
                <img src={link} alt="link-icon" className="w-12"/>
                <img src={link} alt="link-icon" className="w-12"/>
                <img src={link} alt="link-icon" className="w-12"/>
                <img src={line} alt="arrow" className="px-3"/>
                <img src={link} alt="link-icon" className="w-12"/>
            </div>
            <div className="text-center">
                <p>Seamlessly transform your long URLs into concise and shareable links with just few clicks.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;