import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head"
import Image from "next/image"
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/devpro.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";


const AnimatedNumbers = ({value}) => {
  const ref = useRef(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {duration: 3000})
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}


const About = () => {
  return (
    <>
    <Head>
      <title>Fred Banda | About Meee</title>
      <meta name="description" content="Portfolio of work for Fred Banda" />
    </Head>

    <TransitionEffect />
    <main className="flex w-full flex-col items-center justify-center my-12 dark:text-light mb-[-150px]">
      <Layout className="pt-16 ">
      <AnimatedText text="Scallable Web Applications That Work"  className="text-7xl mb-16 lg:!text-7xl 
      sm:!text-6xl xs:!text-4xl sm:mb-8" />
      <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 xl:items-center ">
        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
          <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
          <p className="font-medium">
          Experienced Full Stack Principal Developer with a rich history at The First Pitch Group since 2013. Proficient in a multitude of stacks including MERN, MEAN, MEVN, Serverless, LAMP, PERN, and Ruby on Rails.
          </p>
          <p className=" my-4 font-medium">
          Over 9 years of mastery in ASP.NET Core, Blazor, ASP.NET Web API, complemented by a decade of expertise in Java, Springboot, Python (Django, Flask). Adept in crafting user-friendly applications with a keen focus on both server and serverless architectures. Extensive database experience encompassing SQL (MySQL, Postgres) and NoSQL (MongoDB).
          </p>
          <p className="font-medium">
          Recent passion for GraphQL and Apollo, leveraging their versatility and precision in queries. A lifelong learner, committed to personal development, and actively contributing to open source communities on platforms like StackOverflow and GitHub. Proven track record of successful mentorship and training initiatives. Ready to bring my diverse skill set and innovative mindset to drive web development excellence for your organization.
          </p>
        </div>

        <div className="col-span-3 relative h-max rounded-2xl border-2 border-r-8 
        border-b-8 border-solid dark:bg-slate-400 border-dark bg-light p-8 xl:col-span-4 md:order-1
        md:col-span-8">
          <Image 
          src={profilePic} 
          alt="Fred Banda" 
          loading="eager" 
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-auto rounded-2xl" />
        </div>

        <div className="col-span-2 flex flex-col items-end justify-between
        xl:col-span-8 xl:flex-row md:order-3"> 
          <div className="flex flex-col items-end justify-center xl:items-center ">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
              <AnimatedNumbers value={50} /> +
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light
            xl:text-center md:text-l sm:text-base xs:text-sm">
              happy clients</h2>
          </div>

          <div className="flex flex-col items-end justify-center xl:items-center ">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
            <AnimatedNumbers value={40} /> +
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light
            xl:text-center md:text-l sm:text-base xs:text-sm">projects completed</h2>
          </div>

          <div className="flex flex-col items-end justify-center xl:items-center ">
            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
            <AnimatedNumbers value={10} /> +
            </span>
            <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light
            xl:text-center md:text-l sm:text-base xs:text-sm">years of experience</h2>
          </div>
        </div>
      </div>
      
      <Skills />
      <Experience />
      <Education /> 
      </Layout>
    </main>
    </>
  )
}

export default About;