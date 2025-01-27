/* eslint-disable react/prop-types */
import Modal from "../../Modal";
import { X } from "lucide-react";

const DesignModal = ({ handleClose, project, images }) => {
  return (
    <>
      <Modal>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center w-[80%] relative ">
            <button
              onClick={() => handleClose()}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col mt-2 md:mt-0 md:flex-row md:justify-evenly md:gap-x-2">
              <div>
                <img
                  src={images[project.image]}
                  className="w-[35rem]"
                  alt={project.title}
                />
              </div>
              <div className="flex flex-col w-[15rem] md:w-[25rem] ">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 border-b-2 w-[100%] text-left">
                  {project.title}
                </h2>
                <p className="sm:text-lg text-left sm:w-[100%]  text-[rgb(135,138,140)]">
                  {project.desc}
                </p>
                <div className="flex flex-col mt-2 md:mt-6 items-start">
                  <span className="w-full text-left font-semibold md:text-[1.20rem]">
                    Technologies:
                  </span>
                  <span className="w-full text-left text-[rgb(135,138,140)]">
                    {project.technology.join(",")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DesignModal;
