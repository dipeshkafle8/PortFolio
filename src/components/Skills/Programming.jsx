import C from "./logos/c.png";
import Cpp from "./logos/cpp.png";
import Java from "./logos/java.png";
import JS from "./logos/js.png";
import HTML from "./logos/html.png";
import CSS from "./logos/css.png";
import ReactJs from "./logos/reactjs.png";
import TailwindCSS from "./logos/tailwind.png";
import NodeJs from "./logos/nodejs.png";
import ExpressJs from "./logos/express-js.png";

const SKILLS = [
  {
    title: "C",
    image: C,
  },
  {
    title: "CPP",
    image: Cpp,
  },
  {
    title: "Java",
    image: Java,
  },
  {
    title: "JavaScript",
    image: JS,
  },
  { title: "HTML", image: HTML },
  { title: "CSS", image: CSS },
  { title: "ReactJS", image: ReactJs },
  { title: "TailwindCSS", image: TailwindCSS },
  {
    title: "NodeJS",
    image: NodeJs,
  },
  {
    title: "ExpressJS",
    image: ExpressJs,
  },
];

function Programming() {
  return (
    <>
      <div>
        <h1 className=" font-semibold text-center text-2xl md:text-3xl md:m-8">
          My Skills:
        </h1>
        <div className="flex flex-wrap justify-evenly gap-y-4 mx-2 rounded-xl p-4 bg-[#1b1a1a] md:gap-x-16 md:gap-y-8 md:mx-32">
          {SKILLS.map((el) => {
            return (
              <div
                key={el.title}
                className="flex  flex-col w-[9rem] items-center justify-center bg-[#242323] rounded-md md:w-[10rem]"
              >
                <img src={el.image} alt={el.title} className="w-28" />
                <h2 className="text-xl font-bold">{el.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Programming;
