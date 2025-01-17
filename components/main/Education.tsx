"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromSide } from '@/utils/motion'
export default function Education() {
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    variants={slideInFromSide}
    viewport={{ once: true, amount: 0.1 }}
    className='flex flex-row items-center justify-center pt-10 w-full'
    >
        <div className='h-full w-full flex flex-col justify-center gap-3 text-start'>
            <motion.div 
            variants={slideInFromLeft(0.5)}
            className='text-center'>
                <h1 className='text-[45px] mt-4 lg:text-[55px] mb-7 text-slate-400 font-roboto font-extralight '><span className='text-slate-500'>Education</span></h1>
                
            </motion.div>
            
            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col text-6xl text-bold text-white text-center w-full h-auto'
            >
                <motion.div
                variants={slideInFromLeft(0.8)}
                className='text-lg text-gray-400 h-auto lg:w-full lg:px-96 flex flex-col justify-center items-center'
                >
                    <div className='px-10 lg:px-[50px]'>BTech in Computer Science and Engineering (AI & ML Specialization) Sushant University, Gurugram (2023 - 2027)</div>
                    <div className='text-center mt-6 grid grid-cols-2 gap-y-4 gap-x-2'>
                        <motion.div whileHover={{ scale: 1.1 }} className='mx-4 rounded-[30px] border border-purple-200 shadow-sm p-4'>Semester 1 SGPA: 8.76 / 10</motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className='mx-4 rounded-[30px] border border-purple-200 shadow-sm p-4'>Semester 2 SGPA: 8.77 / 10</motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className='mx-4 rounded-[30px] border border-purple-200 shadow-sm p-4'>Semester 3 SGPA: 9.30 / 10</motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className='mx-4 rounded-[30px] border border-purple-200 shadow-sm p-4'>Semester 4 SGPA: 0 / 0</motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className='mx-4 rounded-[30px] border border-purple-200 shadow-sm p-4'>Semester 5 SGPA: 0 / 0</motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className='mx-4 rounded-[30px] border border-purple-200 shadow-sm p-4'>Semester 6 SGPA: 0 / 0</motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className='mx-4 rounded-[30px] border border-purple-200 shadow-sm p-4'>Semester 7 SGPA: 0 / 0</motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className='mx-4 rounded-[30px] border border-purple-200 shadow-sm p-4'>Semester 8 SGPA: 0 / 0</motion.div>
                    </div>

                    <div className='px-[50px] mt-16' >High School Graduation Shaurya International School, Jammu (2023) </div>
                    <div className='text-center mt-6 grid grid-cols-1 gap-y-4 gap-x-2 mb-20'>
                        <motion.div whileHover={{ scale: 1.1 }} className='mx-4 rounded-[30px] border border-purple-200 shadow-sm p-4'>Class 12 Percentage: 90.2%</motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className='mx-4 rounded-[30px] border border-purple-200 shadow-sm p-4'>Class 10 Percentage: 92%</motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
        
    </motion.div>
  )
}
