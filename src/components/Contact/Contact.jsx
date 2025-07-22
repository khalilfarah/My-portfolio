import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import SocialContact from "./SocilaContact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  const notify1 = () => toast("thank you , successfuly send to khalil ");
  const notify2 = () => toast("Connection Failed  ");

  var d = new Date();

  const [send, setSend] = useState(true);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_vxs7wmm", "template_n4rg599", form.current, {
        publicKey: "VmnQKXvEsljr_6B60",
      })
      .then(
        () => {
          setSend(true);
          notify1();
          console.log("SUCCESS!");
        },
        (error) => {
          setSend(false);
          notify2();
          console.log("FAILED...", error.text);
        }
      );
  };
  const [isFill, setIsFill] = useState({
    name: "",
    email: "",
    text: "",
  });

  return (
    <div className="bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 mt-6 pb-3  ">
      <h1 className="text-center  text-[#BBBCBD] text-2xl md:text-4xl font-bold md:font-extrabold animate-pulse pt-8">
        -Contact me-
      </h1>
      {/* contact*/}
      <div className="md:flex justify-between items-center mx-auto">
        {/*contact with social media*/}
        <div>
          <h1 className="text-white text-center font-bold pt-8 pb-8 text-xl">
            contact with me{" "}
          </h1>

          <div className="md:flex md:gap-2 grid grid-cols-3 gap-x-[0.1px] md:ml-4 justify-self-center  ">
            {SocialContact.map((data) => (
              <div key={data.id}>
                <a href={data.link} target={data.target} title={data.name}>
                  {data.name !== "Whatsapp" ? (
                    <data.icon size={data.size} className={data.style} />
                  ) : (
                    <FontAwesomeIcon
                      icon={data.icon}
                      size="2x"
                      className={data.style}
                    />
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/*contact with email*/}
        <div>
          <h1 className="text-center text-white font-bold text-xl pt-8 pb-8 ">
            Send a message to me
          </h1>
          <form className=" m-4" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="your name"
              required
              value={isFill.name}
              onChange={(event) => {
                setIsFill({ ...isFill, name: event.target.value });
              }}
              className="bg-white py-2 px-4 w-full rounded-lg text-purple-900 focus:outline-2 focus:outline-pink-900 focus:valid:outline-cyan-400 mx-auto"
            />
            <input
              type="text"
              placeholder="your email"
              required
              value={isFill.email}
              onChange={(event) => {
                setIsFill({ ...isFill, email: event.target.value });
              }}
              className="bg-white py-2 px-4 w-full mt-5 rounded-lg text-purple-900 focus:outline-2 focus:outline-pink-900 focus:valid:outline-cyan-400 mx-auto"
            />
            <textarea
              placeholder="your message"
              rows={4}
              value={isFill.text}
              onChange={(event) => {
                setIsFill({ ...isFill, text: event.target.value });
              }}
              className="bg-white text-purple-800 mt-5 w-full rounded-xl px-4 py-2 focus:outline-2 focus:outline-pink-900 focus:valid:outline-cyan-400"
            />
            <div className="w-[40%] md:w-1/4 mx-auto mt-3">
              <button
                type="submit"
                className="px-2 py-3 w-full cursor-pointer border-none text-white outline-0  bg-[hsl(270,58%,5%)] rounded-[8px] hover:bg-white hover:text-purple-900 hover:-rotate-1 hover:transition hover:duration-500 hover:scale-[1.1]"
              >
                Send
              </button>
            </div>
          </form>
          <ToastContainer
            autoClose={3000}
            limit={1}
            position="top-center"
            pauseOnHover
          />
        </div>
      </div>

      {/*foteer*/}
      <div>
        <p className="text-center text-sm mt-1 mb-2 text-white">
          © All rigths reserved | by Eng-Khalil Farah{" "}
          <code className="text-cyan-400"> -{d.getFullYear()} </code>
        </p>
      </div>
    </div>
  );
}
