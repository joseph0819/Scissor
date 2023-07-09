import React from 'react';
import avatar from '../assets/avatar.svg'
import { useState } from 'react';
import { account } from "../appwrite/appwriteConfig";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function ProfileCard() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const toogleMenu  = () => {
    setMenuVisible(!isMenuVisible)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
     
      // Click outside the menu, close it
      setMenuVisible(false);
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const navigate = useNavigate();
  const deleteUser = (e) => { 
    e.preventDefault();
    try {
      account.deleteSession("current");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
    <button
    className="bg-red-400 text-white rounded-md mt-8 p-1"
    onClick={deleteUser}
  >
    logout
  </button>

    <div onClick={toogleMenu}  className="w-[40px] h-[40px]  hover:opacity-90 bg-gray-300 rounded-full cursor-pointer flex place-items-center justify-center ">
      <img
        className="w-[600px] h-[60px] p-4 rounded-full "
        src={avatar}
        alt="Profile"
        
      />

      {isMenuVisible && (
        <div className='relative '>
        <div className='absolute right-0 z-10 mt-6 w-28 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none '>
          <ul className=''>
            <li    className='className="block px-4 py-2 text-sm text-gray-700 hover:bg-customBlue"'>
              <button onClick={deleteUser}>
              logout
              </button>
             
            </li>
            <li className='className="block px-4 py-2 text-sm text-gray-700'>Settings</li>
          </ul>
        </div>
        </div>
      )}

    </div>
    </div>
  );
}

export default ProfileCard;
