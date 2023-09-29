import React from 'react'
import Layout from "./Layout"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium 
    dark:text-light dark:border-light text-large sm:text-base ">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
       <div className="flex items-center lg:py-2">
        Built With <span className="text-red-600 text-2xl px-1">&#9825;</span>
        by&nbsp;<Link href="mailto:fredcbanda@hotmail.com" 
        className="underline underline-offset-2">  Fred Banda</Link>
        </div> 
        <Link href="mailto:fredcbanda@hotmail.com" target={"_blank"} className="underline underline-offset-2">Lets Talk</Link>
      </Layout>
    </footer>
  )
}

export default Footer;