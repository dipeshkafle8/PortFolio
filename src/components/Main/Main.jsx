import profile from "../assets/dipesh.png";
import DisplayText from "./DisplayText";
import DisplayIconsAndText from "./DisplayIconsAndText";

import About from "../About/About";
function Main() {
  return (
    <>
      <div className=" w-[100%] flex flex-col-reverse items-center justify-center gap-y-6 mt-28 lg:flex-row lg:mt-44 lg:justify-between">
        <div className=" md:w-[30rem] lg:block lg:w-[38rem] lg:ml-[14%] xl:ml-[15%]">
          <DisplayText />
          <DisplayIconsAndText />
        </div>

        <div className="moving-border border-[8px] border-double border-[rgb(60,134,203)] w-[20rem] rounded-full overflow-hidden lg:w-[23rem] lg:mr-[3%] xl:w-[28rem] xl:mr-[5%] ">
          <img src={profile} className=" bg-white " alt="Profile" />
        </div>
      </div>

      <About />
    </>
  );
}
export default Main;
