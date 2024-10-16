"use client"
import React from 'react'
import { PiCertificateFill } from "react-icons/pi";
import { GoProject } from "react-icons/go";
import { GiSkills } from "react-icons/gi";

import {
    RxGithubLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import MenuButton from './MenuButton';

export default function NavContent() {
    const navigate = useRouter();
    const pathName = usePathname();
    return (
        <>
            <div className="font-nunito text-3xl tracking-wide font-extrabold flex flex-row items-center px-10 lg:px-0 lg:pl-36 justify-between w-full lg:w-auto ">
                <div className='flex hover:cursor-pointer group' onClick={() => {navigate.push('/')}}>
                    <div className={`${pathName === '/' ? 'text-violet-400': 'text-white group-hover:text-violet-400 '}`}>AM</div>
                    <div className="bg-gradient-to-r from-teal-200 to-indigo-600 h-[6px] w-[6px] rounded-2xl ml-[10px] mt-[21.6px] 2xl:text-[77px]"></div>
                </div>
                
                <div className='block lg:hidden'>
                    <MenuButton />
                </div>
                </div><div className='hidden lg:flex flex-row space-x-8 text-slate-100 font-semibold text-sm 2xl:text-base ml-4 '>

                    <div className={`${pathName === '/education' ? 'text-violet-400': 'text-white hover:text-violet-400'} cursor-pointer transition-all duration-150 flex justify-center items-center group`} onClick={() => {navigate.push('/education')}}>
                        <div className='mr-1 2xl:2xl:mb-[5px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048"><path 
                            className={`${pathName === '/education' ? 'fill-violet-400': 'fill-white group-hover:fill-violet-400'} transition-all duration-150`}
                            fill="white" d="M1582 1065q41 72 61 150t21 161v103l-640 321l-640-321q0-60 1-112t9-101t24-98t48-103L256 960v587q29 10 52 28t41 42t26 52t9 59v320H0v-320q0-30 9-58t26-53t40-42t53-28V896L0 832l1024-512l1024 512zM256 1728q0-26-19-45t-45-19t-45 19t-19 45v192h128zm30-896l738 369l738-369l-738-369zm1250 568q0-77-15-143t-53-135l-444 222l-444-222q-33 58-50 122t-18 132v24l512 256z"></path></svg>
                        </div>
                        <p>Education</p>
                    </div>

                    <div className={`${pathName === '/resume' ? 'text-violet-400': 'text-white hover:text-violet-400'} cursor-pointer transition-all duration-150 flex justify-center items-center group`} onClick={() => window.open("/resume.pdf")}>
                        <div className='mr-1 2xl:mb-[5px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                                <path 
                                className={`${pathName === '/resume' ? 'fill-violet-400': 'fill-white group-hover:fill-violet-400'} transition-all duration-150`}                                
                                fill="white" d="m210.78 39.25l-130.25-23A16 16 0 0 0 62 29.23l-29.75 169a16 16 0 0 0 13 18.53l130.25 23a16 16 0 0 0 18.54-13l29.75-169a16 16 0 0 0-13.01-18.51M178.26 224L48 201L77.75 32L208 55ZM89.34 58.42a8 8 0 0 1 9.27-6.48l83 14.65a8 8 0 0 1-1.39 15.88a8.4 8.4 0 0 1-1.4-.12l-83-14.66a8 8 0 0 1-6.48-9.27M83.8 89.94a8 8 0 0 1 9.27-6.49l83 14.66a8 8 0 0 1-1.4 15.89a7.6 7.6 0 0 1-1.41-.13l-83-14.65a8 8 0 0 1-6.46-9.28m-5.55 31.51a8 8 0 0 1 9.27-6.45l41.48 7.29a8 8 0 0 1-1.38 15.88a8.3 8.3 0 0 1-1.4-.12l-41.5-7.33a8 8 0 0 1-6.47-9.27"></path>
                            </svg>
                        </div>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-center">
                            Resume
                        </a>
                    </div>



                    <div className={`${pathName === '/certificates' ? 'text-violet-400': 'text-white hover:text-violet-400'} cursor-pointer transition-all duration-150 flex justify-center items-center`} onClick={() => {navigate.push('/certificates')}}>
                        <div className='mr-1 2xl:mb-[5px]'>
                            <PiCertificateFill />
                        </div>
                        <p>Certificates</p>
                    </div>


                    <div className={`${pathName === '/projects' ? 'text-violet-400': 'text-white hover:text-violet-400'} cursor-pointer transition-all duration-150 flex justify-center items-center `} onClick={() => {navigate.push('/projects')}}>
                        <div className='mr-1 2xl:mb-[5px]'>
                            <GoProject />
                        </div>
                        <p>Project</p>
                    </div>

                    <div className={`${pathName === '/skills' ? 'text-violet-400': 'text-white hover:text-violet-400'} cursor-pointer transition-all duration-150 flex justify-center items-center`} onClick={() => {navigate.push('/skills')}}>
                        <div className='mr-1 2xl:mb-[5px]'>
                            <GiSkills />
                        </div>
                        <p>Skills</p>
                    </div>
                </div>
                <div className='hidden lg:flex space-x-4 text-2xl pr-36'>
                
                    <div className='hover:cursor-pointer' onClick={() => {window.open('https://github.com/AryanMahajan')}}>
                        <RxGithubLogo />
                    </div>
                    <div className='hover:cursor-pointer'>
                        <RxTwitterLogo />
                    </div>
                    <div className='hover:cursor-pointer' onClick={() => {window.open('https://www.linkedin.com/in/aryan-mahajan-b11684258/')}}>
                        <RxLinkedinLogo />
                    </div>
                </div>
        </>
    )
}
