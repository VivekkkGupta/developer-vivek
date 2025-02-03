import React from 'react'
import { APP_NAME } from "@/lib/constants";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FlaskConical, BookOpen, GraduationCap } from 'lucide-react';

export default function HomePage() {

    const buttons = [
        {
            icon: <FlaskConical className="text-green-400" />,
            text: "What I built",
            linkText: "Projects →",
            link: "/projects",
            glow: "shadow-green-500",
        },
        {
            icon: <BookOpen className="text-pink-400" />,
            text: "Read my story",
            linkText: "About →",
            link: "/about",
            glow: "shadow-pink-500",
        },
        {
            icon: <GraduationCap className="text-purple-400" />,
            text: "Hire me!",
            linkText: "Resume →",
            link: "/resume",
            glow: "shadow-purple-500",
        },
    ];

    return (
        <div className='w-full px-5 py-10 overflow-auto flex flex-col gap-10'>

            {/* Introduction */}
            <div className="flex flex-col gap-5">
                <h1 className="font-extrabold tracking-wide text-3xl py-5">Hi, I am Vivek Kumar Gupta</h1>
                <p className=''>
                    I am a Software Engineer with 1+ years of Industry experience. Worked on various projects and have experience in building scalable and complex web applications.
                </p>
                <p className=''>
                    This is my place for sharing my thoughts, projects, and experiences. Have a good read!
                </p>
            </div>

            {/* QuickButtons */}
            <div className="flex flex-col py-10 items-center gap-4">

                {buttons.map((btn, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-between w-full max-w-sm px-6 py-4 bg-black rounded-xl border border-gray-800 ${btn.glow} hover:shadow-md transition-all`}
                    >
                        <div className="flex items-center space-x-2 text-white">
                            {btn.icon}
                            <span className="text-lg">{btn.text}</span>

                        </div>
                        |
                        <Link href={btn.link} className="text-yellow-400 text-lg font-semibold">
                            {btn.linkText}
                        </Link>
                    </div>
                ))}

            </div>

            {/* My Skills */}
            <div className="flex flex-col gap-5">
                <h2 className="font-extrabold tracking-wide text-3xl">My skills</h2>
                <p className=''>
                    I am a Software Engineer with 1+ years of Industry experience. Worked on various projects and have experience in building scalable and complex web applications.
                </p>
            </div>

            {/* Selected projects */}
            <div className="flex flex-col gap-5">
                <h2 className="font-extrabold tracking-wide text-3xl">Selected Projects</h2>
                <p className=''>
                    I am a Software Engineer with 1+ years of Industry experience. Worked on various projects and have experience in building scalable and complex web applications.
                </p>
            </div>

            {/* Latest Articles */}
            <div className="flex flex-col gap-5">
                <h2 className="font-extrabold tracking-wide text-3xl">Latest Articles</h2>
                <p className=''>
                    I am a Software Engineer with 1+ years of Industry experience. Worked on various projects and have experience in building scalable and complex web applications.
                </p>
            </div>

        </div>
    )
}
