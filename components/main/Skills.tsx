"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromSide2 } from '@/utils/motion'
import DetailedSkillsProgress from '../sub/DetailedSkillsProgress'
import Technologies from '../sub/Technologies'

export default function Skills() {
    return (
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideInFromSide2}
        viewport={{ once: true, amount: 0.3 }} 
        className='w-full h-full'>
          <Technologies />
          <div className='mb-32'>
            <DetailedSkillsProgress title="Python" value={85} />
            <DetailedSkillsProgress title="Java Dsa" value={65} />
            <DetailedSkillsProgress title="Block Chain & NFT's" value={75} />
            <DetailedSkillsProgress title="HTML" value={80} />
            <DetailedSkillsProgress title="CSS" value={70} />
            <DetailedSkillsProgress title="MY SQL" value={78} />
            <DetailedSkillsProgress title="Probability & Statistics" value={83} />
          </div>
        </motion.div>
      )
}
