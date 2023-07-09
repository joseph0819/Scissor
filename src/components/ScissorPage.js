// import React from 'react'
// import wand from '../assets/magic wand.svg'

// const ScissorPage = () => {
//   return (
//     <div className='w-full h-[350px] border-customBlue outline-none pt-6 mt-4 flex justify-center items-center rounded-md'>
//       <div>
//         <div className=' bg-white flex justify-center  w-[300px] h-[250px] px-8 rounded md:w-[600px] '>
//            <form action="" className='flex flex-col  gap-4'>

//             <input type="text" name="text" placeholder='Paste URL here...' id="" className='outline-none placeholder:text-customBlue text-gray-600 px-4 py-2 border-[1px] font-semibold  rounded-xl border-customBlue' />
//             <div className='flex justify-between gap-2'>
//                 <select name="" id="" className='outline-none placeholder:text-customBlue text-customBlue  text-gray-600  w-[100px] md:w-[220px] sm:text-md font-bold border-[1px] rounded-xl p-2 border-customBlue text-[11px]'>
//                     <option value="" >Choose Domain</option>
//                     <option value="">yes</option>
//                     <option value="">yes</option>
//                     <option value="">yes</option>
//                 </select>
//                 <input type="text" name="" placeholder='Type Alias here' id=""className='text-gray-600  outline-none w-[100px] md:w-[220px] sm:text-md font-bold placeholder:text-customBlue p-2 border-[1px] rounded-xl border-customBlue text-[11px]' />

//                 </div>
//                 <div className='flex justify-center items-center relative  bg-customBlue rounded-xl hover:opacity-75 '>
//               <button className='w-full  text-white  py-1 '>Trim URL</button>
//               <img src={wand} alt="wand" className='right-14 absolute md:right-44'  />
//                 </div>

//                 <p className=' text-customBlue px-2 text-xs text-center'>By clicking TrimURL, I agree to the Terms of Service, Privacy Policy and Use of Cookies.</p>

//             </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ScissorPage

import React, { useState } from "react";
import { databases } from "../appwrite/appwriteConfig";
import { ClipboardIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import wand from "../assets/magic wand.svg";
import { v4 as uuidv4 } from 'uuid';

const ScissorPage = ({ setAddedLink, user }) => {
  const [inputUrl, setInputUrl] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const addLink = (shortenedLink) => {
    const promise = databases.createDocument(
      "64aac5bf5e9a0e012656",
      "64aac5d503def5ad66df", 
      uuidv4(),
      {
        link: shortenedLink,
        user_id: user?.$id,
      }
      
    );
    promise
      .then(function (response) {
        console.log(response);
        setAddedLink();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  async function postUrl(link) {
    setLoading(true);
    try {
      const requestObj = {
        url: link,
      };
      const response = await fetch(
        "https://url-shortener-service.p.rapidapi.com/shorten",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json;charset=utf-8",
            "x-rapidapi-host": "url-shortener-service.p.rapidapi.com",
            "x-rapidapi-key":
              "04a1f72586mshc6316760c3ac7c2p168b5cjsn6034ad522b33",
          },
          body: JSON.stringify(requestObj),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      setLoading(false);
      setData(responseData.result_url);
      addLink(responseData.result_url);
      setInputUrl("");
    } catch (error) {
      console.error(error);
    }
  }

  const copyText = () => {
    navigator.clipboard.writeText(data);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleTrimButton = (e) => {
    e.preventDefault();
    postUrl(inputUrl);
  };

  return (
    <div className="mt-10 py-10 shadow-md max-w-sm md:max-w-3xl justify-center mx-auto md:h-[350px] md:py-6 my-4 flex items-center border-[1px] rounded-md">
      <div>
        <div className="relative flex justify-center">
          {copied && (
            <p className="absolute bottom-2 sm:bottom-5 text-sm text-center text-green-500 font-semibold">
              link copied to clipboard✅
            </p>
          )}
        </div>
        <div className="flex justify-center w-[300px] px-8 rounded md:w-[600px] ">
          <form action="" className="flex flex-col gap-4">
            <input
              onChange={(e) => setInputUrl(e.target.value)}
              type="text"
              name="text"
              value={inputUrl}
              placeholder="Paste URL here..."
              id=""
              className="outline-none placeholder:text-customBlue text-gray-600 px-4 py-2 border-[1px] font-semibold rounded-xl "
            />
            <div className="flex justify-between gap-2">
              <select
                name=""
                id=""
                className="outline-none placeholder:text-customBlue text-customBlue text-customBlue md:w-[220px] sm:text-md font-bold border-[1px] rounded-xl p-2 text-[11px]"
              >
                <option value="">Choose Domain</option>
                <option value="">.org</option>
                <option value="">.net</option>
                <option value="">.com</option>
              </select>
              <input
                type="text"
                name=""
                placeholder="Type Alias here"
                id=""
                className="text-gray-600 outline-none md:w-[220px] sm:text-md font-bold placeholder:text-customBlue p-2 border-[1px] rounded-xl text-[11px]"
              />
            </div>
            <div className="flex justify-center items-center relative bg-customBlue rounded-xl hover:opacity-75 my-4">
              <button
                onClick={handleTrimButton}
                className="w-full text-white py-1 "
                disabled={loading}
              >
                {loading ? (
                  <ArrowPathIcon
                    className="h-6 w-6 text-white mx-auto animate-spin"
                    aria-hidden="true"
                  />
                ) : (
                  "Trim URL"
                )}
              </button>
              <img
                src={wand}
                alt="wand"
                className="right-14 absolute md:right-40"
              />
            </div>
            {data ? (
              <div className="flex justify-between items-center">
                <hr />
                <p className="text-gray-600 font-bold">
                  <a href={data}>{data || "No pasted link"}</a>
                </p>
                <ClipboardIcon
                  onClick={copyText}
                  className="h-6 w-6 text-gray-600"
                  aria-hidden="true"
                />
              </div>
            ) : (
              <div />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScissorPage;
