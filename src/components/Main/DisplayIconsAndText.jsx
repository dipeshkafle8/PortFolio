import linkedln from "../assets/linkedln.png";
import github from "../assets/github.png";
import facebook from "../assets/facebook.png";
import { Link } from "react-router-dom";

function DisplayIconsAndText() {
  return (
    <>
      <div className="icons-with-text m-5 mt-4">
        {/* <p className="text-white text-wrap">
          I am full stack developer.Having problem solvings skills.I am from
          Nepal currently pursuing my BE.CSE at Chitkara University.
        </p> */}
        <div className="w-[80vw]  icons-section flex justify-between gap-x-1 lg:w-[30rem] xl:w-[95%]">
          <Link
            to="/contact"
            className="text-white bg-[rgb(47,137,144)] hover:bg-[rgb(39,114,119)] font-semibold px-4 py-2  md:text-lg md:px-4 md:py-2 lg:px-10 lg:py-4 rounded-md"
          >
            Get in Touch &rarr;
          </Link>

          <div className=" flex items-center gap-x-2 md:mr-12 lg:mr-10 xl:mr-16">
            <a href="#">
              {" "}
              <img
                src={linkedln}
                alt="linkedln-logo"
                className="w-8 md:w-10 lg:w-12 border-2  bg-white rounded-full"
              />
            </a>
            <a href="#">
              <img
                src={github}
                alt="github-logo"
                className="w-8 md:w-10 lg:w-12 border-2 border-white bg-white rounded-full"
              />{" "}
            </a>
            <a href="#">
              <img
                src={facebook}
                alt="facebook-logo"
                className="w-8 md:w-10 lg:w-12 border-2 border-white rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayIconsAndText;
