import React from "react";
import Projects from "./Projects";
import { useState } from "react";
import { Github, View, EyeClosed, EyeIcon } from "lucide-react";

export default function MyProjects() {
  const [showAll, setShowAll] = useState(false);
  const [isClick, setIsClick] = useState(-1);
  const ProjectPart = showAll ? Projects : Projects.slice(0, 6);

  return (
    <div className="mx-auto p-3  ">
      {/*title*/}
      <h1 className="text-center  text-[#BBBCBD] text-2xl md:text-4xl font-bold md:font-extrabold animate-pulse">
        -Projects-
      </h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full mx-auto px-2 ">
        {ProjectPart.map((data) => (
          <div
            key={data.id}
            className=" relative mb-8 m-4 border-none outline-[0.2px] outline-[rgb(182,120,237)] text-white  bg-[rgba(182,120,237,30%)]  rounded-xl  h-[350px] mx-auto hover:bg-[#28004B]   "
          >
            <img
              src={data.imgUrl}
              alt={data.name}
              className={`h-full rounded-xl   `}
            />
            <div className="flex  mt-2 pb-2 ">
              <a href={data.githubUrl} target="_blank" title="Link of Github">
                <button className="absolute top-2 left-2 cursor-pointer bg-purple-900 text-white border-1 border-purple-900 px-4 py-2 rounded-lg flex items-center gap-2  font-bold hover:-rotate-z-2 hover:bg-[#28004B] hover:scale-[1.2] hover:duration-300">
                  Github <Github size={20} />
                </button>
              </a>
              <button
                title="the project details"
                onClick={() => {
                  setIsClick(data.id);
                }}
                className="absolute top-2 right-2 cursor-pointer bg-purple-900 text-white border-1 border-purple-900 px-4 py-2 rounded-lg flex items-center gap-2  font-bold hover:-rotate-z-2 hover:bg-[#28004B] hover:scale-[1.2] hover:duration-300"
              >
                Details <View size={20} />
              </button>
            </div>

            <div
              className={` ${
                isClick == data.id ? " flex" : "animateclose"
              } z-1 animatview absolute top-25 bg-purple-900 text-white  h-[250px] w-full rounded-xl overflow-hidden  flex-col
                `}
            >
              {" "}
              <div className="flex justify-around items-center pt-5 mx-auto gap-8 ">
                <h1 className="text-center  font-bold text-xl font-serif">
                  {data.name}
                </h1>
                <div
                  title="close"
                  onClick={() => {
                    setIsClick(-1);
                  }}
                >
                  <EyeClosed
                    size={30}
                    className="bg-[rgba(182,120,237,30%)] text-white px-1   cursor-pointer rounded-lg hover:text-purple-900 hover:bg-white hover:duration-300 hover:transition hover:scale-[1.1] hover:-rotate-z-2 "
                  />
                </div>
              </div>
              <p className="text-wrap text-center pt-5 mx-auto px-2 h-[80px] ">
                {data.description}
              </p>
              <div className=" w-[70%] mx-auto mt-8">
                <a href={data.href} target="_blank" className="border-none">
                  <button
                    title="go to project"
                    className=" w-full px-4 py-2  flex items-center justify-center gap-2  text-center bg-white mx-auto cursor-pointer font-serif text-purple-900 rounded-lg hover:text-white hover:bg-neutral-950 hover:-rotate-z-2 hover:transition hover:duration-500 hover:scale-[1.1] "
                  >
                    View <EyeIcon size={20} />
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[40%] md:w-1/4 mx-auto mt-3">
        <button
          className="px-6 py-3 w-full cursor-pointer border-none text-white outline-0  bg-[hsl(270,58%,5%)] rounded-[8px] hover:bg-[#28004B] hover:-rotate-1 hover:transition hover:duration-500 hover:scale-[1.1]"
          onClick={() => {
            setShowAll(!showAll);
          }}
        >
          {showAll ? "Show less" : "show more"}
        </button>
      </div>
    </div>
  );
}
