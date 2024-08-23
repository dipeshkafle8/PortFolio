import profile from "../assets/dipesh.png";
import DisplayText from "./DisplayText";
function Main() {
  return (
    <>
      <div className="flex flex-col-reverse items-center justify-center gap-y-6 mt-8 lg:flex-row lg:mt-20 lg:justify-between">
        <div className="lg:block lg:ml-[17%] xl:ml-[15%]">
          <DisplayText />
        </div>

        <div className="moving-border border-[8px] border-double border-blue-500 w-[30%] rounded-full overflow-hidden lg:mr-[3%] xl:mr-[5%] ">
          <img src={profile} className=" bg-white " alt="Profile" />
        </div>
      </div>
    </>
  );
}
export default Main;
