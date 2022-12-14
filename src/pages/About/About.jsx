import React from "react";
import {motion} from 'framer-motion';
const About = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <>
      <div class="about">
        <h2 className="head-text">About</h2>
        <motion.div
          whileInView={{ y: [10, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col h-[800px] w-full justify-center items-center animate-slideright">
              <p className="justify-center text-center mt-10 mb-6 text-xl font-semibold max-sm:mt-0 max-sm:p-5">This page holds all top 500 albums ranked by Rolling Stone Magazine.</p>
              <p className = "justify-center text-center mb-6 font-semibold max-sm:mb-0 max-sm:p-5" >Each album is able to be clicked to view the wikipedia details on the album.</p>
              <p className = "justify-center p-2 font-extrabold text-center max-sm:p-5" >Note: Data is pulled from Rolling Stone Magazines 2022 rankings.</p>
              <div className="flex flex-col h-[50px] w-[200px] bg-black text-primary justify-center max-sm:justify-center text-center rounded-lg mt-5 hover:scale-105 hover:shadow-[0_30px_60px_rgba(0,136,204,0.6)] cursor-pointer" onClick={() => openInNewTab('https://bryceguglietti.netlify.app/')}>Visit My Portfolio</div>
          </div>
        </ motion.div>
        </div>
    </>
  )
}

export default About;