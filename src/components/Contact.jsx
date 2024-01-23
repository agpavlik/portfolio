import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaDiscord } from "react-icons/fa";
import { ImMail } from "react-icons/im";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full px-0 lg:px-5 2xl:px-40 py-10 dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e]"
    >
      <div className="w-full flex flex-col px-8 md:px-10 gap-10 lg:py-20 ">
        <div className="w-1/2 flex flex-col">
          <p className="text-3xl font-bold text-black dark:text-white pb-4">
            Get in Touch
          </p>
          <p className="text-lg text-black dark:text-gray-400 leading-10">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be a part of your
            visions.
          </p>
        </div>
        <div
          className="lg:w-1/2 sm:w-full mt-5 2xl:mt-10 flex items-center justify-center flex-wrap gap-20"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <a
            href="https://www.linkedin.com/in/alex-pavlyk/"
            className="h-[60px] flex gap-3 items-center justify-center rounded-[8px] shadow-lg bg-[#030a1c] cursor-pointer hover:bg-blue-800"
          >
            <RxLinkedinLogo size={60} color={"white"} />
          </a>
          <a
            href="https://github.com/agpavlik"
            className="h-[60px] flex gap-3 items-center justify-center rounded-[8px] shadow-lg bg-[#030a1c] text-white cursor-pointer hover:bg-blue-800"
          >
            <FaGithubSquare size={60} />
          </a>
          <a
            href="https://github.com/agpavlik"
            className="h-[60px] w-[60px] flex gap-3 items-center justify-center rounded-[8px] shadow-lg bg-[#030a1c] text-white cursor-pointer hover:bg-blue-800"
          >
            <FaDiscord size={50} />
          </a>
          <a
            href="https://github.com/agpavlik"
            className="h-[60px] w-[60px] flex gap-3 items-center justify-center rounded-[8px] shadow-lg bg-[#030a1c] text-white cursor-pointer hover:bg-blue-800"
          >
            <ImMail size={52} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;