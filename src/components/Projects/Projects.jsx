import ProjectsData from "./Data/Projects.json";
import StudentSathi from "./assets/StudentSathi.png";
import { useRef, useState } from "react";
import DesignModal from "./DesignModal";
import { motion } from "framer-motion";
import { Info, Github, ExternalLink } from "lucide-react";

const images = {
  StudentSathi: StudentSathi,
};

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const projectContainerRef = useRef(null);

  const handleOpenModal = (project) => {
    setShowModal(true);
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className="mt-14 pt-4  text-white flex flex-col justify-center items-center lg:mt-20 lg:pt-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div
            ref={projectContainerRef}
            className="flex flex-wrap flex-1 justify-evenly"
          >
            {ProjectsData.length !== 0
              ? ProjectsData.map((project) => (
                  <div
                    key={project.id}
                    className="relative bg-[#1B1B1B] m-4 p-4 rounded-lg md:w-[26rem] transition-shadow duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                  >
                    <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg hover:cursor-pointer">
                      <img
                        src={images[project.image]}
                        className="w-[95%] h-auto mx-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110 "
                        alt={project.title}
                      />
                    </div>
                    <div className="absolute top-2 right-2">
                      <button onClick={() => handleOpenModal(project)}>
                        <Info className="text-[rgb(53,212,153)] hover:text-white" />
                      </button>
                    </div>
                    <h3 className="text-xl font-bold  mt-4 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[#a9a8a8]">{project.short_desc}</p>
                    <div className="flex justify-between  mt-4">
                      <a
                        href="#"
                        target="_blank"
                        className="px-4 py-2 bg-[#353535] rounded-md hover:bg-[#020101]"
                      >
                        <ExternalLink className="inline-block mr-2" size={18} />{" "}
                        Demo
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="px-4 py-2 bg-[#353535] rounded-md hover:bg-[#020101]"
                      >
                        <Github />
                      </a>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </motion.div>
      </div>
      {showModal ? (
        <DesignModal handleClose={handleCloseModal} project={selectedProject} />
      ) : null}
    </>
  );
}

export default Projects;
