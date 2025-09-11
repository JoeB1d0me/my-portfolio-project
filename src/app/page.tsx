import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import placeholder from "../../public/goober-cat.gif"


export default function Home(){
  return(
    <div className="min-h-screen bg-gray-800 text-white flex items-center justify-start flex-col ">
      <nav className="flex justify-between py-8 w-full max-w-4xl">
        <h1 className="font-bold text-lg">Kingsley Ulinfun</h1>
        <a className="bg-sky-700 px-4 py-1 rounded-sm border-b-2 border-sky-800 ring ring-sky-900 hover:bg-white hover:text-sky-700 transition-colors focus:border-b-0 focus:mt-0.5" href="/kingsley_ulinfun_resume.pdf"> Resume</a>
      </nav>

      <header className="w-full max-w-prose space-y-8">
        <figure className="size-48 rounded-full overflow-hidden">
        <Image src={placeholder} alt="Placeholder-image" />
        </figure>
        <h1 className="font-bold text-4xl">Hey there! I'm Kingsley!</h1>
        <p className="text-lg">Computer Science student at UGA</p>
        <ul className="flex text-4xl gap-4">
          <li><a href="https://github.com/JoeB1d0me"><FaGithub /></a></li>
          <li> <a href="https://linkedin.com"><FaLinkedin /></a></li>

        </ul>
      </header>
      <section className="w-full max-w-prose space-y-8">
        <h2 className="text-2xl text-sky-400 font-bold">Education</h2>

        <div className="flex">
          <article className="flex-1">
            <p><b>The University of Georgia</b> </p>
            <p><i>Franklin College, Athens, GA</i></p>
            <p>Bachelor of Science, COmputer Science</p>
          </article>
          <article className="text-right">

          </article>
        </div>
      </section>

      <section className="w-full max-w-prose space-y-4">
        <h2 className="text-2xl text-sky-400 font-bold">Projects</h2>

        <div className="grid-cols-2">
          <a href="https://github.com/agreene5/Loads-O-Money" className=" bg-gray-50 gap-2 shadow-md transition-shadow">
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
  );
}
