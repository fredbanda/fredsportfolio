import React from 'react'
import { CircularText } from "./icons"
import Link from "next/link"

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto
    md:bottom-auto md:top-0 md:absolute sm:right-0">
       <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText className={"fill-dark animate-spin-slow dark:fill-light"}/>
        <Link href="mailto:fredcbanda@hotmail.com"
        className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 font-semibold 
        -translate-y-1/2 bg-dark shadow-md border border-solid border-dark w-20 h-20 
        rounded-full text-light dark:bg-light dark:text-dark dark:hover:bg-sky-600
         hover:bg-sky-600 dark:hover:text-light hover:text-white hover:border-sky-600 
         md:w-12 md:h-12 md:text-[10px]">
            Hire Me
        </Link>
       </div>
    </div>

  )
}

export default HireMe;