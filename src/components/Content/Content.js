import React, { useState } from "react";
import './Content.css';
import resume from "../../assets/files/ConnerThompsonResume.pdf"

const Content = () => {
  const [currentTitle, setCurrentTitle] = useState("Full Stack Developer");

  const handleClick = () => {
    const titles = [
      "Full Stack Developer",
      "Front End Master",
      "Back End Wizard",
      "Gamer",
      "Novel Enjoyer",
      "Go Programmer",
      "JavaScript Enthusiast",
      "C# Lover",
      "Anime Lover",
      "TypeScript Tinkerer",
      "Python Developer",
      "React Specialist",
      "Node.js Nurturer",
      "SQL Scholar",
      "MongoDB Maven",
      "Django Developer",
      "Express.js Expert",
      "Creative Coder",
      "Tech Enthusiast",
      "AI Innovator",
      "E-Learning Platform Builder",
      "GitHub Collaborator",
      "Open Source Contributor",
      "Memphis Coder"
    ];
    const randomIndex = Math.floor(Math.random() * titles.length);
    setCurrentTitle(titles[randomIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center pb-6">
        Conner Thompson
      </h1>

      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center cursor-pointer pb-6" onClick={handleClick}>
        {currentTitle}
      </h2>
      <a href={resume} download className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg cursor-pointer">
        Download Resume
      </a>
    </div>
  );
};

export default Content;