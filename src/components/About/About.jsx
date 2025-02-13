import aboutpic from "../assets/aboutpic.jpg";
import ListDetails from "./ListDetails";
function About() {
  return (
    <>
      <div className=" flex justify-center   my-4 md:mx-2 lg:mt-44 xl:mt-32">
        <div className="flex flex-col w-[90%] rounded-lg bg-[#1B1B1B] gap-y-4 items-center text-white  lg:flex-row lg:justify-between lg:gap-x-8 ">
          <div className=" border-2  border-[rgb(32,123,90)] sm:w-[16rem] rounded-3xl overflow-hidden mt-4 lg:ml-12 lg:mt-[-2rem] lg:w-[21rem]">
            <img
              src={aboutpic}
              className=" w-[16rem] sm:w-[18rem] lg:w-[21rem]"
              alt="picture_speaking"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-xl w-full    gap-y-4 md:m-2 md:ml-14 lg:items-start lg:w-[60%] lg:mr-12 lg:mt-4">
            <span className="text-2xl md:text-5xl font-bold  mr-6 lg:text-left">
              About Me!
            </span>
            <p className="text-lg px-2 md:p-0 md:mr-4 text-justify  text-[#c1bdbd]  md:mt-2 md:text-[1.2rem]">
              My name is{" "}
              <span className="text-[rgb(53,212,153)] font-semibold">
                Dipesh Kafle
              </span>
              , a MERN stack developer and problem-solver currently pursuing a
              BE in Computer Science at Chitkara University, Himachal Pradesh. I
              enjoy building full-stack web applications and tackling complex
              challenges. Outside of coding, I love dancing and watching movies.
            </p>
            <ListDetails />
            <div className="flex w-full  justify-center mb-4">
              <a
                href="https://drive.google.com/file/d/1rVQdDpX7LlDnz8b1yupxWwd8-1E0GDgP/view?usp=drive_link"
                target="_blank"
                className=" text-lg px-6 py-1 border-2 border-[rgba(5,150,104,0.95)]  hover:bg-[rgb(5,150,104)] rounded-full transition duration-200 ease-in-out md:px-8 md:py-2 md:text-xl "
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
