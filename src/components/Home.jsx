import React, { useEffect, useRef, useState } from 'react';
import hero from '../assets/image.svg';
import { FaFileDownload } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import { MdArrowOutward } from "react-icons/md";
import cv from "../assets/CV_Nancy.pdf";
import './imageHoverAnimation.css';
import './customMedia.css';


const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  function handleType(count, number) {
  }
  const handleDone = () => {
  }

  const emailAddress = 'nancysit616@gmail.com';
  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  }

  const handleCvDownload = () => {
    const pdfPath = cv;
    window.open(pdfPath, '_blank');
  };

  return (
    <div name="home" className='page-1 w-full h-screen bg-gradient-to-b from-black via-black to-black'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center md:justify-between h-full px-4 md:flex-row md:gap-40 z-10'>
        <div className='flex flex-col pt-20 justify-center w-full mb-10 h-full'>
        <h1 className="text-white title-font font-bold sm:text-5xl text-5xl mb-10">
            Hi,
            <br className="hidden font-bold lg:inline-block mt-7" />
            I'm <span className="text-white font-bold">Nancy Gupta</span>
            <br className="hidden lg:inline-block mb-7" />

          <h2 className='text-3xl sm:text-5xl h-20 font-bold text-white z-10 mt-10 mb-7'>
            <span className='text-red-600 z-10'>
              <Typewriter
                words={['React Front-End Development', 'Designing', ' Web Developer', ' Front-End Developer']}
                loop={Infinity}
                cursor
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </h2>
        </h1>
          {/* <p className='text-gray-300 py-4 text-lg max-w-md md:my-6 md:leading-7 text-justify z-10'>
            I'm an Experienced Web Developer with a strong focus on Front-End development. Proficiency in HTML, CSS, JavaScript, C++ with a deep understanding of modern web standards and best practices..
            <p className='text-gray-300 max-w-md md:my-6 md:leading-7 hidden lg:block z-10'>
              As a Web Developer and fervent Tech Enthusiast, I am driven by the exploration of the boundless opportunities within the realm of Web Development. 🌐🚀
            </p>
          </p> */}

          <div className='flex gap-6'>
            <button onClick={handleEmailClick} className='btn group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer z-10'>
              Contact <span className='ml-2 group-hover:translate-x-1 group-hover:translate-y-[-0.25rem] duration-500 z-12'><MdArrowOutward />
              </span>
            </button>
            <a href={cv} download="CV_Nancy.pdf">
              <button onClick={handleCvDownload} className='btn group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 cursor-pointer z-12'>
                Resume <span className='ml-2 group-hover:translate-y-1 duration-500'><FaFileDownload /> </span>
              </button>
            </a>
          </div>
        </div>
        <div className={`avatar rounded-3xl border-4 border-slate-400 mx-auto w-1/2 md:w-full mt-2 mb-10 image-container ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ perspective: "500px", perspectiveOrigin: "100% 100%" }}>
          <img src={hero} alt="" className='rounded-2xl object-center'
            style={{ perspective: "500px", perspectiveOrigin: "100% 100%" }}
          />
        </div>
      </div>
    </div >
  )
};

export default Home;
