import C from "./logos/c.png";
import Cpp from "./logos/cpp.png";
import Java from "./logos/java.png";
import JS from "./logos/js.png";

const Program = [
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
];

function Programming() {
  return (
    <>
      <div>
        <h1 className=" font-semibold  text-emerald-300 md:text-3xl md:m-8">
          Programming Languages:
        </h1>
        <div className="flex flex-wrap justify-evenly">
          {Program.map((el) => {
            return (
              <div
                key={el.title}
                className="flex flex-col items-center justify-center"
              >
                <img src={el.image} alt={el.title} className="w-32" />
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
