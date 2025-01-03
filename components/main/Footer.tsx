"use client"
import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-[200px] lg:w-full pl-[120px] lg:pl-0 h-full bg-transparent text-gray-200 shadow-lg lg:p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center lg:m-auto">
            <div className="w-[400px] lg:w-full h-full grid grid-cols-1 items-center justify-around lg:grid-cols-2">
                

                <div className="w-full justify-center items-center h-auto flex flex-col  pl-8 lg:ml-28">
                    <div className="font-bold text-[16px]">Get connected</div>
                    
                    <p onClick={() => window.open("https://github.com/AryanMahajan")} className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </p>
                    <div onClick={() => window.open("https://www.linkedin.com/in/aryan-mahajan-b11684258/")} className="text-white">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>    
                        </p>
                    </div>
                    
                </div>
                
                <div className="flex-col pb-11 items-center justify-start hidden lg:flex lg:mr-20">
                    <div className="font-bold text-[16px]">Contact Details</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">aryanmahajan0409@gmail.com</span>    
                    </p>
                </div>
            </div>
            <div className="min-w-[200px] min-h-[175px] flex flex-col items-center justify-start lg:hidden mt-16 pl-5">
                    <div className="font-bold text-[16px]">Contact Details</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">aryanmahajan0409@gmail.com</span>    
                    </p>
                </div>
            <div className="mb-[20px] mt-[20px] w-96 pl-10 text-[14px] text-center ">
                &copy; Aryan Mahajan Portfolio
            </div>
        </div>
    </div>
  )
}

export default Footer