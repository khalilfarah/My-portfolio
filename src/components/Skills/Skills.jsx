import skill from "./skill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Skills() {
  return (
    <div className="mt-2 mb-2">
      {/** title*/}
      <h1 className="text-center  text-[#BBBCBD] text-2xl md:text-4xl font-bold md:font-extrabold animate-pulse">
        My Skills
      </h1>

      {/**skills */}
      <div className="grid md:grid-cols-3 grid-cols-2 gap-3 mx-auto mt-4 mb-4 lg:w-[90%] px-4 ">
        {skill.map((skills, index) => (
          <div
            key={index}
            className="hover:-rotate-z-3 hover:bg-purple-950 hover:duration-500 bg-[rgba(182,120,237,30%)]  outline-[0.2px] outline-[rgb(182,120,237)] text-white font-bold rounded-2xl h-[120px] hover:transition hover:scale-[1.1]"
          >
            {" "}
            <div className="text-center h-full  md:text-xl  flex justify-between px-2 items-center">
              <h1>{skills.name}</h1>
              {skills.name === "TYPESCRIPT" || skills.name === "TAILWIND" ? (
                <img
                  src={skills.icon}
                  className=" h-[20px] w-[20px] md:h-[30px] md:w-[30px] rounded-lg  "
                />
              ) : (
                <FontAwesomeIcon icon={skills.icon} size="xl" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
