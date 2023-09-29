import Layout from "@/components/Layout"
import Head from 'next/head'
import Image from "next/image"
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import { LinkArrow } from "@/components/icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fred Banda | Wed Dev Portfolio</title>
        <meta name="description" content="Portfolio of work for Fred Banda" />
      </Head> 
      <TransitionEffect />
      
      <main className="flex items-center sm:mt-2 text-dark w-full min-h-screen dark:text-light">
      <Layout className="pt-0 md:pt-16 sm:pt-2">
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-1/2 mg:w-full">
            <Image 
            src={profilePic} 
            alt="Fred Banda"
            loading="eager" 
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-auto lg:hidden md:inline-block md:w-full" />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedText text="Turning Vision Into Reality With Code And Design." 
            className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl
            sm:!text-3xl " />
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
            Explore my latest projects and articles, showcasing my expertise in full stack web development.
            </p>
            <div className="flex items-center self-start mt-2 lg:self-center">
              <Link href="/resume.pdf" target={"_blank"}
              className="flex items-center dark:bg-yellow-500 dark:hover:border-yellow-500 bg-black text-white 
              p-2.5 px-6 rounded-lg text-lg font-semibold md:p-2 md:px-4 md:text-base
              hover:bg-cyan-600 hover:text-white border-2 border-solid dark:hover:bg-lime-600 border-transparent hover:border-cyan-600"
              >Resume
              <LinkArrow />
              </Link>
              <Link href="mailto:fredcbanda@hotmail.com"
              className="ml-4 text-lg font-semibold bg-green-500 text-white p-2.5 px-6 
              rounded-lg hover:bg-green-600 bg-indigo-500 md:text-base"
              >Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>

      <HireMe  />

      <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden lg:hidden">
        <Image src={lightBulb} alt="Fred Banda" className="w-full h-auto" />
      </div>
      </main>
    </>
  )
}
