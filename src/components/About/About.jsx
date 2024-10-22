import aboutpic from "../assets/aboutpic.jpg";
function About() {
  return (
    <>
      <div className="bg-[rgb(21,16,48)]  rounded-lg my-4  lg:mt-44 xl:mt-32">
        <div className="flex flex-col gap-y-4 items-center text-white  lg:flex-row lg:justify-between lg:gap-x-8 ">
          <div className=" border-4  border-[rgb(7,35,60)] sm:w-[16rem] rounded-3xl overflow-hidden mt-4 lg:ml-12 lg:mt-[-2rem] lg:w-[20rem]">
            <img
              src={aboutpic}
              className=" w-[14rem] sm:w-[18rem] lg:w-[20rem]"
              alt="picture_speaking"
            />
          </div>
          <div className=" flex flex-col items-center text-xl w-[100%] m-2 ml-14  gap-y-4 lg:items-start lg:w-[60%] lg:mr-12 lg:mt-4">
            <span className="text-3xl md:text-5xl font-bold  mr-6 lg:text-left">
              About Me!
            </span>
            <p className="md:text-1xl mr-4 text-justify pr-4 text-[#c1bdbd]">
              My name is{" "}
              <span className="text-white font-bold">Dipesh Kafle</span>, a MERN
              stack developer and problem-solver currently pursuing a BE in
              Computer Science at Chitkara University, Himachal Pradesh. I enjoy
              building full-stack web applications and tackling complex
              challenges. Outside of coding, I love dancing and watching movies.
            </p>
            <div className=" md:px-4">
              <table className="flex flex-col gap-y-4 ">
                <tbody>
                  <tr>
                    <td className="md:pr-12 text-[#c1bdbd]">Name</td>
                    <td className="md:pr-4">:</td>
                    <td>Dipesh Kafle</td>
                  </tr>
                  <tr>
                    <td className="pl-0 md:pr-12 text-[#c1bdbd]">
                      Nationality
                    </td>
                    <td className="md:pr-4">:</td>
                    <td>Nepali</td>
                  </tr>
                  <tr>
                    <td className="md:pr-12 text-[#c1bdbd]">Phone No</td>
                    <td className="md:pr-4">:</td>
                    <td>(+91) 9317128221</td>
                  </tr>
                  <tr>
                    <td className="md:pr-12 text-[#c1bdbd]">Email</td>
                    <td className="md:pr-4">:</td>
                    <td>abc@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="md:pr-12 text-[#c1bdbd]">Language</td>
                    <td className="md:pr-4">:</td>
                    <td> Nepali, English , Hindi</td>
                  </tr>
                  <tr>
                    <td className="md:pr-12 text-[#c1bdbd]">Freelance</td>
                    <td className="md:pr-8">:</td>
                    <td>Available</td>
                  </tr>
                  <tr>
                    <td className="md:pr-12 text-[#c1bdbd]">Hobbies</td>
                    <td className="md:pr-4">:</td>
                    <td> Dacing, Watching movies etc.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
