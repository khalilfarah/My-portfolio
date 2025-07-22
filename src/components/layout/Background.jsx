import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* gradient background*/}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950 via-purple-800 to-purple-500"></div>

      {/* squares lines network */}
      <div
        className="absolute inset-0 bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d1d5db' fill-opacity='0.2'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
          opacity: 0.5,
        }}
      ></div>

      {/* waves*/}
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-pink-900 rounded-full  mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-1/3 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default Background;
