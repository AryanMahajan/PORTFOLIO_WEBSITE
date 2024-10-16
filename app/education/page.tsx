import Education from '@/components/main/Education'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aryan Mahajan - Education",
};

export default function page() {
  return (
    <main className="min-h-screen w-full">
      <Education />
    </main>
  )
}
