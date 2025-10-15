// components/Navbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "./button";

export default function Navbar() {
  const pathname = usePathname();
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    setIsHome(pathname === "/"); // if on homepage, allow #scroll links
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50"> 
    <div className="max-w-4xl mx-auto flex justify-between items-center py-4 px-6">
      {isHome ? (
        // On homepage → use anchor links
        <>
        <h1>Kingsley Ulinfun</h1>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </>
      ) : (
        // On other pages → navigate normally
        <>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/projects" className="hover:text-blue-500">Projects</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </>
      )}
      </div>
    </nav>
  );
}
