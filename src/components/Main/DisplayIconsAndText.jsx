import { Link } from "react-router-dom";
import { Github, Linkedin, Facebook } from "lucide-react";

function DisplayIconsAndText() {
  return (
    <>
      <div className="m-5 mt-8 flex gap-x-4">
        <Link
          to="/contact"
          className="px-8 py-2 bg-[rgb(5,150,104)] hover:bg-[rgb(30,94,74)] md:px-12 md:py-4 text-white  rounded-full transition duration-200 ease-in-out"
        >
          Hire Me
        </Link>
        <Link
          to="/projects"
          className="px-8 py-2 border-2 border-[rgb(5,150,104)] hover:bg-[rgb(5,150,104)] md:px-12 md:py-4 text-white  rounded-full transition duration-200 ease-in-out"
        >
          View Work
        </Link>
      </div>
      <div className=" flex justify-center gap-x-4 md:ml-8 md:justify-start">
        <a href="https://github.com/dipeshkafle8" target="_blank">
          <Github className="text-white hover:text-green-200" />
        </a>
        <a href="https://www.linkedin.com/in/dipeshkafle/" target="_blank">
          <Linkedin className="text-white hover:text-green-200" />
        </a>
        <a href="https://www.facebook.com/dipesh.tiger.3/" target="_blank">
          <Facebook className="text-white hover:text-green-200" />
        </a>
      </div>
    </>
  );
}

export default DisplayIconsAndText;
