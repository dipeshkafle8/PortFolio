function DisplayText() {
  return (
    <>
      <div className="designed-text">
        <h6 className="name-inSmall  text-center lg:text-left m-5">
          <span className="text-[#ffffff98] bg-[rgb(6,53,97)] tracking-wide p-2 lg:text-[1rem]">
            DIPESH KAFLE
          </span>
        </h6>

        <h2 className="simple-intro">
          <span className="text-4xl text-white  font-bold md:text-5xl m-4 lg:text-5xl xl:text-6xl">
            Hey!! I&apos;m Dipesh
          </span>
        </h2>

        {/* animated text */}
        <h1
          className="animate-typing overflow-hidden inline-block
        whitespace-nowrap border-r-4 border-r-[rgb(7,136,255)]  text-[rgb(7,136,255)] font-bold text-4xl md:text-5xl m-4 lg:text-[3.5rem] lg:leading-[1] xl:text-6xl"
        >
          I am a Developer
        </h1>
      </div>
    </>
  );
}
export default DisplayText;
