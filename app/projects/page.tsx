import Projects from '@/components/main/Projects'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aryan Mahajan - Projects",
};

export default function page() {
  return (
    <div className='h-full'>
        <Projects />
    </div>
  )
}
