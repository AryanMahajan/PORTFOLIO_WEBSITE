"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

export default function MenuButton() {
    const navigate = useRouter();
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger><GiHamburgerMenu/></DropdownMenuTrigger>
                <DropdownMenuContent className="mr-3">
                    <DropdownMenuLabel>Contents</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => {navigate.push('/education')}}>Education</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {window.open('/resume.pdf')}}>Resume</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {navigate.push('/certificates')}}>Certificates</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {navigate.push('/projects')}}>Projects</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {navigate.push('/skills')}}>Skills</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
   