import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import placeholder from "../../public/goober-cat.gif";
import Button from "@/components/button";
import EvilButton from "@/components/evilbutton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-800 text-white">
      {/* About Section */}
      <section
        id="about"
        className="w-full max-w-4xl px-6 py-20 flex flex-col items-center text-center space-y-6"
      >
        <figure className="size-48 rounded-3xl overflow-hidden">
          <Image
            src={placeholder}
            alt="Placeholder image"
            className="object-cover w-full h-full"
          />
        </figure>
       
        <h1 className="font-bold text-4xl">Hey there! I'm Kingsley Ulinfun!</h1>
        <h2 className="font-bold text-sky-400 text-2xl text-left">About me</h2>
        <div className="prose w-full">
        <p className="text-lg text-gray-300 content-center">
          Hi! I'm third year computer science transfer student at the University of Georgia with a passion for fullstack development and game development.
          I have been learning to code since I was about 12 years old. I started out with Youtube videos and online tutorials before I ever took any classes.
          I'm most experienced with Python and Java as a result of my coursework. <br /> Currently, I'm learning how to build web apps with Next.js, which is what I'm creating this website with.
        </p>
        {/* <EvilButton text="Don't click" /> */}
        </div>
        <ul className="flex text-4xl gap-6">
          <li>
            <a
              href="https://github.com/JoeB1d0me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kingsley-ulinfun-031833294/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>

        <Button text="Resume" href="https://v2qis4ebbdo4c1yr.public.blob.vercel-storage.com/resume.pdf" />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="w-full max-w-4xl px-6 py-16 space-y-6 text-left"
      >
        <h2 className="text-2xl text-sky-400 font-bold">Projects</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <a
            href="https://github.com/agreene5/Loads-O-Money"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 rounded-lg p-6 transition-shadow shadow-md hover:shadow-lg flex flex-col gap-2"
          >
            <span className="font-bold text-xl">Loads o' Money</span>
            <span>
             A 2D top-down shooter built in Godot where the player character's currency serves as both health and ammunition.
             <br /><li>I designed the health system to manage damage interactions between player and cpu enemies.</li>
             Featured at GSU's Fall 2024 CMII Student Showcase.
            </span>
            <span className="text-sm text-gray-400 mt-2">
              <b>Technologies: </b> Godot, GitHub
            </span>
          </a>
          <a
          href="https://github.com/ntdog36/Twin_Generals"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-600 rounded-lg p-6 transition-shadow shadow-md hover:shadow-lg flex flex-col gap-2"
          >
            <span className="font-bold text-xl">Twin Generals</span>
            <span>
              A turn-based strategic multiplayer game that allows the player to command a single army over a campaign against another player or AI.
              Players work to capture strategic points on the map and lead their armies in fights against each other.
              <br /><li>Currently implementing battle mechanics including victories and post battle mechanics. </li>
            </span>
            <span className="text-sm text-gray-400 mt-2">
              <b>Technologies: </b> Unity, C#, GitHub
            </span>

          </a>
          <a href="https://github.com/DevDogs-UGA/Community-Resource-Forum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 rounded-lg p-6 transition-shadow shadow-md hover:shadow-lg flex flex-col gap-2"

          >
            <span className="font-bold text-xl"> DevDogs UGA <i>Community Resource Forum</i></span>
            <span>
              Project for DevDogs 2025-2026 that serves as a resource forum for computer science students at the University of Georgia.
              <br /><li>As part of the images and embed handling team, I have been focusing on implementing media uploads to user posts on the forum site</li>
            </span>
            <span className="text-sm text-gray-400 mt-2">
              <b>Technologies: </b> Next.js, 
            </span>
          </a>
        </div>
      </section>


      {/* Education Section */}
      <section
        id="education"
        className="w-full max-w-4xl px-6 py-16 space-y-6 text-left"
      >
        <h2 className="text-2xl text-sky-400 font-bold">Education</h2>

        <div className="space-y-4">
          <div className="flex justify-between">
            <div>
              <p className="font-bold">The University of Georgia</p>
              <p className="italic">Franklin College, Athens, GA</p>
              <p>Bachelor of Science, Computer Science</p>
            </div>
            <div className="text-right">
              <p>Expected Graduation: May 2027</p>
              <p>GPA: 3.72</p>
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="font-bold">Georgia State University</p>
              <p className="italic">College of Arts and Sciences, Atlanta, GA</p>
              <p>Bachelor of Science, Computer Science</p>
            </div>
            <div className="text-right">
              <p>August 2023 - July 2025</p>
              <p>GPA: 3.81</p>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section
        id="contact"
        className="w-full max-w-4xl px-6 py-16 text-center space-y-4"
      >
        <h2 className="text-2xl text-sky-400 font-bold">Contact</h2>
        <p className="text-gray-300">
          Feel free to reach out via{" "}
          <a
            href="mailto:ulinkingsley@gmail.com"
            className="text-sky-400 hover:underline"
          >
            email
          </a>{" "}
          or connect on{" "}
          <a
            href="https://www.linkedin.com/in/kingsley-ulinfun-031833294/"
            className="text-sky-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-4xl px-6 py-6 border-t border-gray-700 text-center text-gray-400 text-sm">
       <p className="text-gray-400 text-sm">&copy; 2025 Kingsley Ulinfun</p> 
       <ul className="flex text-xl gap-4">
        <li>
            <a
              href="https://github.com/JoeB1d0me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400"
            >
              <FaGithub />
            </a>
            </li>
            <li>
            <a
              href="https://www.linkedin.com/in/kingsley-ulinfun-031833294/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400"
            >
              <FaLinkedin />
            </a>
            </li>
       </ul>



        
      </footer>
    </div>
  );
}
