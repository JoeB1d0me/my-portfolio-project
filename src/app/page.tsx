import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import placeholder from "../../public/goober-cat.gif"
import Script from "next/script";
import Button from "@/components/button";
import EvilButton from "@/components/evilbutton";



export default function Home(){

  return(
    <main>
    <div  className="min-h-screen bg-gray-800 text-white flex items-center justify-start flex-col ">
      <nav className="flex justify-between py-8 w-full max-w-4xl">
        <h1 className="font-bold text-lg">Kingsley Ulinfun</h1>
        <Button text="Resume" href="/resume.pdf" />
        {/*< EvilButton text="Don't click me" /> */}
      </nav>
      <section id="about">
      <header className="w-full max-w-prose space-y-8">
        <figure className="size-48 overflow-auto rounded-3xl">
        <Image src={placeholder} alt="Placeholder-image" />
        </figure>
        <h1 className="font-bold text-4xl">About</h1>
        <p className="text-lg"> Hey there! I'm Kingsley Ulinfun</p>
        <p className="text-lg">I'm a 3rd year transfer student at The University of Georgia</p>
        <p className="text-lg"> </p>
        <ul className="flex text-4xl gap-4">
          <li><a href="https://github.com/JoeB1d0me" target="_blank"><FaGithub /></a></li>
          <li> <a href="https://linkedin.com"  target="_blank"><FaLinkedin /></a></li>

        </ul>
      </header>
      </section>
      <section className="w-full max-w-prose space-y-8" >
        <h2 className="text-2xl text-sky-400 font-bold">Education</h2>

        <div className="flex">
          <article className="flex-1">
            <p><b>The University of Georgia</b> </p>
            <p><i>Franklin College,</i> Athens, GA</p>
            <p>Bachelor of Science, Computer Science</p>
          </article>
          <article className="text-right">
            <p>Expected Graduation: May 2027</p>
            <p>GPA: 3.72</p>
          </article>
        </div>
        <div className="flex">
          <article className="flex-1">
            <p><b>Georgia State University</b></p>
            <p><i>College of Arts and Sciences,</i> Atlanta, GA</p>
            <p>Bachelor of Science, Computer Science</p>
          </article>
          <article className="text-right">
            <p>August 2023 - July 2025</p>
            <p>GPA: 3.81</p>
          </article>

        </div>
      </section>

      <section className="w-full max-w-prose space-y-4" id="projects">
        <h2 className="text-2xl text-sky-400 font-bold">Projects</h2>

        <div className="grid-cols-2 gap-4">
          <a href="https://github.com/agreene5/Loads-O-Money" className=" bg-gray-700 gap-2 shadow-md transition-shadow hover:shadow-lg rounded-md px-6 py-4 flex flex-col" target="_blank">
            <span className="font-bold text-xl">Project Title </span>
            <span>Project DescriptionDescriptionDescriptionDescription</span>
          </a>
        </div>
      </section>

        <footer className="flex justify-between py-8 w-full max-w-4xl border-t border-gray-500">
        <p className="text-gray-400 text-sm">
          &copy; 2025 Kingsley Ulinfun
          </p>
          <ul className="flex text-xl gap-4">
          <li><a href="https://github.com/JoeB1d0me"><FaGithub /></a></li>
          <li> <a href="https://linkedin.com"><FaLinkedin /></a></li>

        </ul>
      </footer>


    </div>
    </main>
  );
}
