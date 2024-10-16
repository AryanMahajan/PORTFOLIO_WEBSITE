import type { Metadata } from "next";
import React from 'react'
import Skills from '@/components/main/Skills'
export const metadata: Metadata = {
  title: "Aryan Mahajan - Skills",
};

export default function page() {
  return (
    <Skills />
  )
}
