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
                  className="bg-gray-200 m-4 p-4 rounded-lg w-[25rem] transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                  <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg hover:cursor-pointer">
                    <img
                      src={StudentSathiPic}
                      className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 "
                      alt={project.title}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black mt-4 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-black">
                    Website for Student to help them find suitable college
                    according to their choice!.
                  </p>
                  <div className="ml-32 mt-2">
                    <a
                      href="#"
                      target="_blank"
                      className="bg-blue-600 px-6 py-2 justify-end rounded-lg m-2"
                    >
                      Github
                    </a>
                    <button className="bg-blue-600  px-6 py-[0.30rem] rounded-lg">
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
