"use client"
import React from 'react';
import { BackgroundGradient } from './ui/backgroundGradient';
import Image from 'next/image';
import { projects } from '@/data';
import MagicButton from './ui/MagicButton';

const RecentProject = () => {
  return (
    <div id='projects'>
       <h1 className="heading text-center text-5xl underline text-[#5DC5D9]">
     My Projects
      </h1>
      <div className='min-h-screen flex justify-center items-center'>
      <div  className='grid grid-cols-1 md:grid-cols-2 gap-16'>

        {projects.map((p, index) => (
          <BackgroundGradient key={index} className="rounded-[22px] max-w-sm p-2 bg-white dark:bg-[rgb(4,7,29)] mx-auto">
            <Image
              src= {p.img}
              alt= {p.img}
              height="400"
              width="400"
              className="object-contain"
            />
            <p className="text-base sm:text-xl text-black mt-2 mb-2 dark:text-neutral-200">
               {p.title} 
            </p>
            <p className="text-base sm:text-sm text-black mt-2 mb-2 dark:text-white-100">
               {p.des} 
            </p>
            <div className="flex items-center gap-1">
            {p.iconLists.map((icon, index) => (

                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full  bg-black lg:w-8 lg:h-8 w-8 h-8 flex flex-row justify-center items-center sform: `translateX(-${5 * index + 2}px)" >
                  
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                  </div>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <a href= {p.git} target="_blank">  <span> View </span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">github 
              </span></a> 
              { p.link != "" && <a target="_blank" href= {p.link}><span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">live   </span></a> }
            </button>
          </BackgroundGradient>
        ))}
        
      </div>
    
    </div>
    {/* <div className='flex justify-center items-center'>
    <MagicButton title={'more projects'} icon={undefined} />
    </div> */}
    </div>
   
  );
}

export default RecentProject;
