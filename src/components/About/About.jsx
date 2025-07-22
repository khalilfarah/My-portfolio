import React from "react";
import DataAbout from "./DataAbout";

export default function About() {
  return (
    <div>
      <div className="w-full mx-auto ">
        <h1 className="text-center  text-[#BBBCBD] text-2xl md:text-4xl font-bold md:font-extrabold animate-pulse">
          -About me <code className="text-rose-800">&&</code> Education-
        </h1>
      </div>
      <div className="md:flex mx-auto gap-8 md:w-full lg:w-[80%] px-4 ">
        {DataAbout.map((data) => (
          <div
            key={data.id}
            className="m-4 border-none outline-[0.2px] outline-[rgb(182,120,237)] text-white  bg-[rgba(182,120,237,30%)]  rounded-xl  w-full md:w-[600px] md:h-[340px] h-[360px] mx-auto hover:bg-[#28004B] hover:-rotate-1 hover:transition hover:duration-500 hover:scale-[1.1] "
          >
            <div className="flex text-center font-bold text-xl pt-5 items-center justify-center gap-2">
              <data.imgcon size={20} />
              <h1>{data.title}</h1>
            </div>
            <p className="text-center  p-2 text-sm">
              {data.content1}
              <code className="text-rose-800 font-bold text-sm">
                {data.id === 1 ? "React-Js && React-Native" : ""}
              </code>
            </p>
            <p className="text-center p-1  text-sm">{data.content2}</p>
            <p className="text-center p-[0.3px] px-1  text-sm">
              {data.content3}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
