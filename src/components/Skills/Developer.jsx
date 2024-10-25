import VsCode from "./logos/vscode.png";
import Postman from "./logos/postman.png";
import Git from "./logos/git.png";
import GitHub from "./logos/github.png";

const Developer = [
  {
    title: "Vs Code",
    image: VsCode,
  },
  {
    title: "Postman",
    image: Postman,
  },
  {
    title: "Git",
    image: Git,
  },
  {
    title: "GitHub",
    image: GitHub,
  },
];

function Tools() {
  return (
    <div>
      <h1 className=" font-semibold  text-emerald-300 md:text-3xl md:m-8">
        Tools:
      </h1>
      <div className="flex flex-wrap justify-evenly">
        {Developer.map((el) => {
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
  );
}

export default Tools;
