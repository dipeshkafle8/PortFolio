import Programming from "./Programming";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Tools from "./Developer";

function Skills() {
  return (
    <>
      <div className="mt-32">
        <div>
          <h1 className="text-white text-center text-3xl font-semibold">
            My Skills
          </h1>
        </div>
        <div className="text-white">
          <Programming />
          <FrontEnd />
          <BackEnd />
          <Tools />
        </div>
      </div>
    </>
  );
}

export default Skills;
