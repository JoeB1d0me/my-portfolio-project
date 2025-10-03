'use client'
import React from "react"

type EvilButtonProps = {
    text: string
}

const EvilButton: React.FC<EvilButtonProps> = ({text}) =>{
    return(
        <a
        href="https://www.youtube.com/watch?v=BNIUi3CbYaA"
        target="_self"
        rel="noopener noreferrer"
        className="hover:text-orange-600 transition-colors">
            {text}
        </a>
    );
};

export default EvilButton;