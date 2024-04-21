import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[900px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="font-bold">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold">Nikhil Ojha</h1>
        <h2 className="text-4xl sm:text-7xl font-bold">
          I&apos;m a full stack developer.
        </h2>
        <p className="py-4 max-w-[600px]">
          I find great joy in creating user-friendly experiences and building
          robust, scalable backend systems. Let&apos;s collaborate to build something
          awesome!
        </p>
        <div>
          <button className="group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300 ml-1">
              {" "}
              <HiArrowNarrowRight />{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
