import Typewriter from "typewriter-effect";
function DisplayText() {
  return (
    <>
      <div className="designed-text flex flex-col items-center md:block">
        <h6 className="name-inSmall  text-center lg:text-left m-5">
          <span className="text-[#ffffffc4] bg-[#3d3c3c] tracking-wide p-2 lg:text-[1rem]">
            DIPESH KAFLE
          </span>
        </h6>

        <h2 className="simple-intro text-center lg:text-left">
          <span className="text-3xl text-white  font-bold md:text-4xl lg:text-5xl m-4">
            Hey!! I&apos;m Dipesh
          </span>
        </h2>

        {/* animated text */}
        <h1
          className="overflow-hidden block
        whitespace-nowrap text-[rgb(7,136,255)] font-bold text-4xl text-center m-4 md:text-5xl  lg:text-[3.5rem] lg:text-left  xl:text-7xl"
        >
          <Typewriter
            options={{
              strings: [
                " I am a Developer",
                "I am a Designer",
                "I am a Creator",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 50,
            }}
          />
        </h1>
      </div>
    </>
  );
}
export default DisplayText;
