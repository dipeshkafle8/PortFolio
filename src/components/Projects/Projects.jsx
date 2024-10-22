import ProjectsData from "./Data/Projects.json";
import StudentSathiPic from "./assets/StudentSathi.png";
import { useRef } from "react";
function Projects() {
  const projectContainerRef = useRef(null);
  console.log(ProjectsData);
  return (
    <>
      <div className="mt-12 pt-4  text-white flex flex-col justify-center items-center lg:mt-20 lg:pt-8">
        <div>
          <span className="text-3xl font-bold">RECENT PROJECTS</span>
        </div>
        <div
          ref={projectContainerRef}
          className="flex flex-wrap flex-1 justify-evenly"
        >
          {ProjectsData.length != 0
            ? ProjectsData.map((project) => (
                <div
                  key={project.id}
                  className="bg-[rgb(32,57,80)] m-4 p-4 rounded-lg w-[25rem] transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                  <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg hover:cursor-pointer">
                    <img
                      src={StudentSathiPic}
                      className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 "
                      alt={project.title}
                    />
                  </div>
                  <h3 className="text-xl font-bold  mt-4 mb-2">
                    {project.title}
                  </h3>
                  <p>{project.desc}</p>
                  <div className="ml-32 mt-2">
                    <a
                      href="#"
                      target="_blank"
                      className="bg-[rgb(4,30,53)] px-6 py-2 justify-end rounded-lg m-2 hover:bg-[rgb(8,15,22)] hover:px-[1.54rem] hover:py-[0.52rem]"
                    >
                      Github
                    </a>
                    <button className="bg-[rgb(4,30,53)]  px-6 py-[0.30rem] rounded-lg hover:bg-[rgb(8,15,22)] hover:px-[1.54rem] hover:py-[0.32rem]">
                      Details
                    </button>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
}

export default Projects;
