"use client"
import React from 'react'
import { Progress } from "@/components/ui/progress"
import { motion } from 'framer-motion'
export default function DetailedSkillsProgress({ title, value }: {title:string, value: number}) {
  return (
    <motion.div
    whileHover={{scale: 1.1}}
    className='flex flex-col justify-center items-center text-center hover:cursor-pointer w-[90vw] lg:ml-14'>
        <h1 className='text-slate-400 font-nunito mb-2 mt-3 ml-10'>{title}</h1>
        <div className=''>
            <Progress value={value} />
        </div>
    </motion.div>
  )
}
