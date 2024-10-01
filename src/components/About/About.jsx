import aboutpic from "../assets/aboutpic.jpg";
function About() {
  return (
    <>
      <div className="bg-[rgb(5,48,88)]  border-1 rounded-lg m-4 lg:mt-44 xl:mt-32">
        <div className="flex  flex-col gap-y-4 items-center text-white lg:flex-row lg:justify-between lg:gap-x-8 ">
          <div className=" border-2 w-[20rem]  rounded-3xl overflow-hidden  lg:ml-12 lg:mt-[-2rem]">
            <img src={aboutpic} className="w-[20rem]" alt="picture_speaking" />
          </div>
          <div className=" flex flex-col text-xl w-[100%] m-2 gap-y-4 lg:w-[60%] lg:mr-12 lg:mt-4">
            <span className="text-left text-5xl font-bold">About Me!</span>
            <p className="text-1xl">
              My name is Dipesh Kafle, a MERN stack developer and problem-solver
              currently pursuing a BE in Computer Science at Chitkara
              University, Himachal Pradesh. I enjoy building full-stack web
              applications and tackling complex challenges. Outside of coding, I
              love dancing and watching movies.
            </p>
            <table className="flex flex-col gap-y-4">
              <tbody>
              <tr>
              <td className="pr-4">Name</td>      <td>:Dipesh Kafle</td>
              </tr>
              <tr>
              <li>Nationality :Nepali</li>
              </tr>
              <li>Phone No :(+91) 9317128221</li>
              <li>Experience:1 Year (Student)</li>
              <li>Email:abc@gmail.com</li>
              <li>Language: Nepali, English , Hindi</li>
              <li>Freelance: Available</li>
              <li>Hobbies: Dacing, Watching movies etc.</li>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
