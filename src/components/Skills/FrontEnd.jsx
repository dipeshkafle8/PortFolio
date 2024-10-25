import HTML from "./logos/html.png";
import CSS from "./logos/css.png";
import ReactJs from "./logos/reactjs.png";
import TailwindCSS from "./logos/tailwind.png";

const frontEnd = [
  { title: "HTML", image: HTML },
  { title: "CSS", image: CSS },
  { title: "ReactJS", image: ReactJs },
  { title: "TailwindCSS", image: TailwindCSS },
];
function FrontEnd() {
  return (
    <>
      <div>
        <h1 className=" font-semibold  text-emerald-300 md:text-3xl md:m-8">
          Frontend:
        </h1>
        <div className="flex flex-wrap justify-evenly">
          {frontEnd.map((el) => {
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

export default FrontEnd;
