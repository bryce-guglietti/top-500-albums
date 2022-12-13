import React from "react";

const About = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <>
        <h2 className="head-text">About</h2>
        <div className="flex flex-col h-[500px] w-full justify-center items-center">
            <p className="justify-center text-center mt-10">This page holds all top 500 albums ranked by Rolling Stone Magazine.</p>
            <p className = "justify-center text-center mb-5" >Each album is able to be clicked to view the wikipedia details on the album.</p>
            <p className = "justify-center p-2 font-semibold" >Note: Data is pulled from Rolling Stone Magazines 2022 rankings.</p>
            <div className="flex flex-col h-[50px] w-[200px] bg-black text-primary justify-center text-center rounded-lg mt-5 hover:scale-105 hover:shadow-[0_30px_60px_rgba(0,136,204,0.6)] cursor-pointer" onClick={() => openInNewTab('https://bryceguglietti.netlify.app/')}>Visit My Portfolio</div>
        </div>
    </>
  )
}

export default About;