import React from "react";

export default function About() {
  return (
    <div name="about" className="w-full h-screen ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1008px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-black">
              About
            </p>
          </div>

          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Nice to meet you. Please take a look around.</p>
          </div>

          <div>
            <p>
              &quot;I am a skilled software developer with a strong focus on
              front-end development. I have a quick learning ability and I am
              currently expanding my expertise to back-end development to become
              a full-stack developer. If you had a software expert available at
              your fingertips, what would you do?&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
