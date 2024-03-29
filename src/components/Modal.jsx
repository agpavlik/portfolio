import React from "react";
import { projects } from "../data";
import { BsGlobe } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Modal = ({ activeID, setShowModal }) => {
  const project = projects.find((project) => project.id === activeID);

  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-[#04133e] bg-opacity-70">
      <div className="xs:w-4/5 sm:w-4/5 md:w-1/2 lg:w-1/3 h-auto absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div>
          <figure>
            <img
              className="rounded-[8px] max-h-full max-w-full object-contain border border-gray-700"
              src={project.img}
              // Could be changed to 'project.video' when a problem with a modal window flashing would be solved
              alt=""
            />
          </figure>
        </div>
        <div>
          <div className="flex flex-raw">
            <div className="w-1/2">
              <h2 className="text-2xl text-black font-[700] my-5">
                {project.title}
              </h2>
            </div>
            <div className="flex w-1/2 items-center justify-center">
              <a href={project.url} target="_blank" rel="noreferrer">
                {project.url && (
                  <button className="py-1 px-1 my-5 mr-10 rounded-[20px] font-[500] bg-[#04133e] hover:bg-blue-600 animate-pulse">
                    <BsGlobe size={24} color={"white"} />
                  </button>
                )}
              </a>
              <a href={project.git} target="_blank" rel="noreferrer">
                <button className="py-1 px-1 my-5 rounded-[20px] font-[500] bg-[#04133e] hover:bg-blue-600 animate-pulse">
                  <BsGithub size={24} color={"white"} />
                </button>
              </a>
            </div>
          </div>
          <div>
            <p className="text-[15px] leading-7 text-black">
              {project.description}
            </p>
          </div>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            {project.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setShowModal(false)}
          className="w-[1.5rem] h-[1.5rem] bg-white absolute -top-[1.3rem] -right-[1.3rem] text-[25px] flex items-center justify-center rounded-[20px] leading-0"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
