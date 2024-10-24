/* eslint-disable react/prop-types */
import Modal from "../../Modal";
import { X } from "lucide-react";
import StudentSathi from "./assets/StudentSathi.png";
const images = {
  StudentSathi: StudentSathi,
};

const DesignModal = ({ handleClose, project }) => {
  return (
    <>
      <Modal>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center w-[80%] lg:w-[80%] relative ">
            <button
              onClick={() => handleClose()}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col sm:flex-row justify-evenly">
              <div>
                <img
                  src={images[project.image]}
                  className="w-[35rem]"
                  alt={project.title}
                />
              </div>
              <div className="flex flex-col w-[25rem] ">
                <h2 className="text-2xl font-bold mb-4 border-b-2 w-[100%] text-left">
                  {project.title}
                </h2>
                <p className="text-lg text-left w-[60%] sm:w-[100%] text-[rgb(135,138,140)]">
                  {project.desc}
                </p>
                <table className="mt-12 text-left">
                  <tr>
                    <td>Type:</td>
                    <td className="text-[rgb(135,138,140)]">Website</td>
                  </tr>
                  <tr>
                    <td>Languages:</td>
                    <td className="text-[rgb(135,138,140)]">
                      {project.technology.join(",")}
                    </td>
                  </tr>
                  <tr>
                    <td>URL:</td>
                    <td className="text-[rgb(135,138,140)]">www.abc.com</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DesignModal;
