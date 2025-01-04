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
    <div className="mt-4">
      <h1 className=" font-semibold text-center text-xl md:text-3xl md:m-8">
        Tools:
      </h1>
      <div className="flex flex-wrap justify-evenly gap-y-4 mx-2 rounded-xl p-4 bg-[#1b1a1a]  md:gap-y-8 md:mx-32">
        {Developer.map((el) => {
          return (
            <div
              key={el.title}
              className="flex  flex-col w-[9rem] items-center justify-center bg-[#242323] rounded-md md:w-[10rem]"
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
