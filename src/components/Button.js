import React from "react";

const Button = ({ blue, blueText, padding, children }) => {
  return (
    <button
      className={`px-${padding} border border-customBlue rounded-full py-2 hover:opacity-70 text-base font-medium ${blue ? 'bg-customBlue' : ""} ${blueText ? 'text-customBlue' : 'text-white'}`}
    >
      {children}
    </button>
  );
};

export default Button;