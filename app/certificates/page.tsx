import type { Metadata } from "next";
import Certificate from '@/components/main/Certificate'
import React from 'react'

export const metadata: Metadata = {
  title: "Aryan Mahajan - Certificate",
};

export default function page() {
  return (
    <main className="min-h-screen w-full">
      <Certificate />
    </main>
  )
}
