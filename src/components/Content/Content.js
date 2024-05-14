import React from "react";
import './Content.css';

const Content = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center pb-6">
        Conner Thompson
      </h1>
      <a
        href="../../assets/files/ConnerThompsonResumeNew-1.pdf"
        download="Conner_Thompson_Resume.pdf"
        className="card-wrapper w-full md:w-64 btn mt-4 md:mt-6"
        style={{ maxWidth: '200px' }} // Set max width for the button container
      >
        <div className="card-content flex items-center justify-center text-sm sm:text-xs">
          <h1>Download CV</h1>
        </div>
      </a>
    </div>
  );
};

export default Content;
