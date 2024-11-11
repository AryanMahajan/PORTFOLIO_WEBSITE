"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'
import Image from 'next/image';
export default function HeroContent() {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-col lg:flex-row items-center justify-center px-5 mt-20 lg:px-20 lg:mt-28 2xl:mt-44 w-full'
    >
        <motion.div
            variants={slideInFromLeft(0.5)}
            className='block md:hidden w-[200px] border border-slate-500 rounded-full justify-center items-center'
        >
            <Image src="/aryanmahajan.jpg" alt="work icons" height={450}width={450} className='rounded-full' priority/>

        </motion.div>

        <div className='h-full w-full flex flex-col justify-center lg:gap-3 text-start 2xl:ml-20'>
            <motion.div 
            variants={slideInFromLeft(0.5)}
            className='py-[8px] mb-[45px] block lg:hidden w-full text-center mt-10'>
                <h1 className='text-[40px] lg:text-[65px] text-slate-400 font-roboto font-thin'>Aryan Mahajan</h1>
                
            </motion.div>
            <motion.div 
            variants={slideInFromLeft(0.5)}
            className='hidden lg:block py-[8px] lg:px-[10px] lg:mb-[45px]'>
                <h1 className='text-[30px] lg:text-[65px] 2xl:text-[75px] text-slate-400 font-roboto font-thin'>Aryan Mahajan</h1>
                
            </motion.div>
            
            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col text-6xl text-bold text-white max-w-[600px] w-auto h-auto'
            >
                <motion.p
                variants={slideInFromLeft(0.8)}
                className='text-sm font-extralight lg:font-normal text-center lg:text-start lg:text-lg text-gray-400 lg:my-5 lg:max-w-[600px] w-[310px] lg:w-auto h-auto '
                >
                    I&apos;m a student with an interest in Artificial Intelligence, Machine Learning, Data Science, and Blockchain Technology. I am passionate about exploring how these fields can drive innovation and solve real-world problems. Currently, I am focused on developing my skills through coursework and hands-on projects, and I look forward to collaborating with like-minded individuals to further my understanding and contribute to impactful solutions.
                </motion.p>
            </motion.div>
        </div>
        
        <motion.div
        variants={slideInFromRight(0.8)}
        className='hidden xl:block w-full h-full justify-center items-center 2xl:mr-20'
        >
            <Image src="/aryanmahajan.jpg" alt="work icons" height={480}width={480} className='rounded-3xl ml-44'/>

        </motion.div>
    </motion.div>
  )
}