import React from "react";
import Nikflix from "../assets/image/nikflix-ss.png";
import Quill from "../assets/image/quill-ss.png";

export default function Work() {
  return (
    <div name="work" className="w-full md:h-screen ">
      <div className="max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Work
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div
            style={{ backgroundImage: `url(${Nikflix})` }}
            className="shadow-lg shadow-[#040c16] group  container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-white font-bold tracking-wider bg-black rounded-md p-2">
                {" "}
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://nikflix-app.web.app/"
                  target="_blank"
                  rel=" noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700  text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700  text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Quill})` }}
            className="shadow-lg shadow-[#040c16] group  container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-white font-bold tracking-wider bg-black rounded-md p-2">
                {" "}
                MERN Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://quillblog.netlify.app/"
                  target="_blank"
                  rel=" noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700  text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700  text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
