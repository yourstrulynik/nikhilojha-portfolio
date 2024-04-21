import React from "react";
import MongoDb from "../assets/icons/mongodb-svgrepo-com.svg";
import Express from "../assets/icons/express-svgrepo-com.svg";
import ReactImg from "../assets/icons/react-svgrepo-com.svg";
import Node from "../assets/icons/node-js-svgrepo-com.svg";
import Firebase from "../assets/icons/firebase-svgrepo-com.svg";
import Github from "../assets/icons/github-142-svgrepo-com.svg";
import Tailwind from "../assets/icons/tailwind-svgrepo-com.svg";
import Cloudinary from "../assets/icons/cloudinary-svgrepo-com.svg";

export default function Skill() {
  return (
    <div name="skills" className="w-full h-full ">
      {/* container */}
      <div className="max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-blod  inline border-b-4 border-b-black">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with. </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="">
            <img className=" w-20 mx-auto" src={MongoDb} alt="" />
            <p className="my-4">Mongo DB</p>
          </div>
          <div className="">
            <img className=" w-20 mx-auto" src={Express} alt="" />
            <p className="my-4">Express JS</p>
          </div>
          <div className="">
            <img className=" w-20 mx-auto" src={ReactImg} alt="" />
            <p className="my-4">React JS</p>
          </div>
          <div className="">
            <img className=" w-20 mx-auto" src={Node} alt="" />
            <p className="my-4">Node JS</p>
          </div>
          <div className="">
            <img className=" w-20 mx-auto" src={Cloudinary} alt="" />
            <p className="my-4">Cloudinary</p>
          </div>
          <div className="">
            <img className=" w-20 mx-auto" src={Tailwind} alt="" />
            <p className="my-4">Tailwind CSS</p>
          </div>
          <div className="">
            <img className=" w-20 mx-auto" src={Firebase} alt="" />
            <p className="my-4">Firebase</p>
          </div>
          <div className="">
            <img className=" w-20 mx-auto" src={Github} alt="" />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
}
