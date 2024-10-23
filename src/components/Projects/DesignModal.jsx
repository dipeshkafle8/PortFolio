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
          <div className="bg-white p-8 rounded-lg shadow-lg text-center w-[80%] lg:w-[80%] relative top-8">
            <button
              onClick={() => handleClose()}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <div className="flex justify-evenly">
              <div>
                <img
                  src={images[project.image]}
                  className="w-[35rem]"
                  alt={project.title}
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <p className="text-lg text-justify">{project.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DesignModal;
