import { useState } from "react";
import Logo from "../assets/Logo.svg";
import Button from "./Button";
import { Link } from "react-router-dom";


const NavBar = () => {

  const [menu, setMenu] = useState(false);
 
  

  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <nav class="sticky top-0 z-10 w-full bg-white ">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md p-2 text-grey-600"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg
                class={`h-6 w-6 ${menu ? 'hidden' : 'block'}`}
                onClick={toggleMenu}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                class={`h-6 w-6 ${menu ? 'block' : 'hidden'}`}
                onClick={toggleMenu}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <Link to='/'>
              <img
                class="block h-8 w-auto lg:hidden"
                src={Logo}
                alt="Your Company"
              />
              <img
                class="hidden h-8 w-auto lg:block"
                src={Logo}
                alt="scissor"
              />
              </Link>
              
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <a
                href="#"
                class="text-customBlue rounded-md px-3 py-2 text-sm font-medium hover:opacity-70"
                aria-current="page"
              >
                My URLs
              </a>
              <a
                href="#"
                class="px-3 py-2 text-sm font-medium hover:opacity-70"
              >
                Features
              </a>
              <a href="#"
                class="px-3 py-2 text-sm font-medium hover:opacity-70"
              >
                Pricing
              </a>
              <a
                href="#"
                class="px-3 py-2 text-sm font-medium hover:opacity-70"
              >
                Analytics
              </a>
              <a
                href="#"
                class="px-3 py-2 text-sm font-medium hover:opacity-70"
              >
                FAQs
              </a>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button
              type="button"
              class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="sr-only">View notifications</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button> */}
            <Link to='/login'>
            <button className="text-customBlue md:mr-3 hover:opacity-70 sm:block rounded-md text-base font-medium hidden">
              Login
            </button>
            </Link>

            {/* <!-- Profile dropdown --> */}
            <div class="relative ml-3 hidden sm:block ">
              <div>
                {/* <button
                  type="button"
                  class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button> */}
              <Button blue={true} padding={6}>
                Try for free
              </Button>
              </div>

              {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
              <div
                className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg focus:outline-none hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className={`sm:hidden bg-gray-900 ${menu ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-6 pb-3 pt-2">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <a
            href="#"
            className="hover:bg-gray-700 hover:pl-2 text-white block rounded-md py-2 text-base font-medium"
            aria-current="page"
          >
            My URLs
          </a>
          <a
            href="#"
            className="hover:bg-gray-700 hover:pl-2 text-white block rounded-md py-2 text-base font-medium"
          >
            Features
          </a>
          <a
            href="#"
            className="hover:bg-gray-700 hover:pl-2 text-white block rounded-md py-2 text-base font-medium"
          >
            Analytics
          </a>
          
          <Link to='/login'>
          <button className=" text-white block rounded-md py-2 text-base font-medium">
            Login
          </button></Link>
          <div className="flex justify-center">
            <Button blue={true} blueText={false} padding={6}>
              Try for free
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;