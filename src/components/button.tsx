'use client'
import React from "react";

type ButtonProps = {
    text: string
    href: string
}

const Button: React.FC<ButtonProps> = ({ text, href}) => {
    return(
 <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-sky-700 px-4 py-1 rounded-sm border-b-2 border-sky-800 ring ring-sky-900 hover:bg-white hover:text-sky-700 transition-colors focus:border-b-0 focus:mt-0.5"
    >
      {text}
    </a>
    );
};

//Exporting to be used by other files
export default Button