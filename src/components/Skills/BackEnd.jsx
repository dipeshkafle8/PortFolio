import NodeJs from "./logos/nodejs.png";
import ExpressJs from "./logos/express-js.png";

const backEnd = [
  {
    title: "NodeJS",
    image: NodeJs,
  },
  {
    title: "ExpressJS",
    image: ExpressJs,
  },
];
function BackEnd() {
  return (
    <>
      <div>
        <h1 className=" font-semibold  text-emerald-300 md:text-3xl md:m-8">
          BackEnd:
        </h1>
        <div className="flex flex-wrap justify-evenly">
          {backEnd.map((el) => {
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

export default BackEnd;
