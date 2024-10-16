"use client"
import { RiHtml5Line } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiJavaFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { motion } from 'framer-motion';
import { SiBlockchaindotcom } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import React from 'react'
import { slideInFromSide2 } from "@/utils/motion";
import { SiNumpy } from "react-icons/si";


export default function Technologies() {
  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    variants={slideInFromSide2}
    viewport={{ once: true, amount: 0.1 }}
    className='pb-24 mt-20 w-full'>
        <div className='justify-center text-center'>
            <h1 className='text-[35px] lg:text-[52px] text-slate-400 font-roboto font-extralight mb-10 '>My <span className="text-slate-500">Skills</span></h1>
        </div>
        
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            initial={{ y: -10 }}
            animate={{ y: [10, -10] }} 
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }}
            className='border-4 border-neutral-800 text-[50px] lg:text-7xl p-2 rounded-2xl text-red-600'>
                <RiHtml5Line />
            </motion.div>



            <motion.div 
            initial={{ y: 10 }}
            animate={{ y: [-10, 10] }} 
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }}
            className='border-4 border-neutral-800 text-[50px] lg:text-7xl p-2 rounded-2xl text-cyan-500'>
                <FaCss3Alt />
            </motion.div>


            <motion.div
            initial={{ y: -10 }}
            animate={{ y: [10, -10] }} 
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }} 
            className='border-4 border-neutral-800 text-[50px] lg:text-7xl p-2 rounded-2xl text-blue-500'>
                <FaPython />
            </motion.div>

            <motion.div 
            initial={{ y: 10 }}
            animate={{ y: [-10, 10] }} 
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }}
            className='border-4 border-neutral-800 text-[50px] lg:text-7xl p-2 rounded-2xl text-cyan-500'>
                <GrMysql />
            </motion.div>

            
            <motion.div 
            initial={{ y: -10 }}
            animate={{ y: [10, -10] }} 
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }}
            className='border-4 border-neutral-800 text-[50px] lg:text-7xl p-2 rounded-2xl text-yellow-500'>
                <RiJavaFill />
            </motion.div>


            <motion.div
            initial={{ y: 10 }}
            animate={{ y: [-10, 10] }} 
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }} 
            className='border-4 border-neutral-800 text-[50px] lg:text-7xl p-2 rounded-2xl text-orange-500'>
                <SiTensorflow />
            </motion.div>



            <motion.div 
            initial={{ y: -10 }}
            animate={{ y: [10, -10] }} 
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }}
            className='border-4 border-neutral-800 text-[50px] lg:text-7xl p-2 rounded-2xl text-green-600'>
                <SiBlockchaindotcom />
            </motion.div>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-4 mt-7'>
            <motion.div 
            initial={{ y: 10 }}
            animate={{ y: [-10, 10] }} 
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }}
            className='border-4 border-neutral-800 text-[50px] lg:text-7xl p-2 rounded-2xl text-amber-800'>
                <SiPandas />
            </motion.div>

            <motion.div 
            initial={{ y: -10 }}
            animate={{ y: [10, -10] }} 
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }}
            className='border-4 border-neutral-800 text-[50px] lg:text-7xl p-2 rounded-2xl text-violet-500'>
                <SiNumpy />
            </motion.div>
        </div>
    </motion.div>
  )
}
