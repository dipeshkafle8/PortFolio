import linkedln from "../assets/linkedln.png";
import github from "../assets/github.png";
import facebook from "../assets/facebook.png";

function DisplayIconsAndText() {
  return (
    <>
      <div className="icons-with-text m-5 mt-4">
        {/* <p className="text-white text-wrap">
          I am full stack developer.Having problem solvings skills.I am from
          Nepal currently pursuing my BE.CSE at Chitkara University.
        </p> */}
        <div className=" icons-section flex justify-between gap-x-1 lg:w-[30rem] xl:w-[100%]">
          <div>
            <button className="text-white bg-blue-500 hover:bg-blue-700 font-semibold px-4 py-2  md:text-lg md:px-4 md:py-2 lg:px-10 lg:py-4 rounded-full">
              GET IN TOUCH &rarr;
            </button>
          </div>
          <div className="flex items-center  gap-x-2 md:mr-12 lg:mr-10 xl:mr-20">
            <a href="#">
              {" "}
              <img
                src={linkedln}
                alt="linkedln-logo"
                className=" w-10 lg:w-12 border-2  bg-white rounded-full"
              />
            </a>
            <a href="#">
              <img
                src={github}
                alt="github-logo"
                className="w-10 lg:w-12 border-2 border-white bg-white rounded-full"
              />{" "}
            </a>
            <a href="#">
              <img
                src={facebook}
                alt="facebook-logo"
                className="w-10 lg:w-12 border-2 border-white rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayIconsAndText;
