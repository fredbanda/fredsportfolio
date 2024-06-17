import React from 'react';
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/icons";
import project2 from "../../public/images/projects/CryptoLane.png";
import project1 from "../../public/images/projects/jetsetter.jpg";
import project3 from "../../public/images/projects/youtubelearn.jpg";
import project4 from "../../public/images/projects/game.jpg";
import project5 from "../../public/images/projects/random.jpg";
import project6 from "../../public/images/projects/domman.jpg";
import eunnyai from "../../public/images/projects/eunnyai.jpg";
import EunnyTech from "../../public/images/projects/eunnytech.jpg";
import {motion} from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article 
    className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl
    border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:ps-4 border-r-8 border-b-8">

        <Link href={link} 
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        >
            <FramerImage src={img} alt={title} className="w-full h-auto" 
            whileHover={{scale: 1.05}}
            transition={{duration: 0.2}}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
        </Link>

        <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full
        lg:pl-0 lg:pt-6" >

            <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
            <Link href={link} 
            target="_blank" 
            className="hover:underline underline-offset-2">
                <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">{title}</h2>
            </Link>
            <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
            <div className="mt-2 flex items-center justify-between w-full">
                <Link href={github} target="_blank" className="w-10">
                    {" "}
                    <GithubIcon/>
                </Link>
                <Link href={link} 
                target="_blank" 
                className="ml-2 rounded-lg bg-dark dark:bg-light dark:text-dark hover:bg-cyan-600
                 text-light p-2 px-6 mr-2 text-lg font-semibold sm:px-4 sm:text-base ">
                    Visit Project
                </Link>
            </div>
        </div>
    </article> 
  );
};

const Project = ({title, type, img, link, github}) => {

    return (
        <article className="w-full flex flex-col items-center border-r-8 border-b-8 rounded-2xl border border-solid
        border-dark bg-light dark:bg-dark dark:border-light p-6 relative xs:p-4">

            <Link href={link} target="_blank"
            className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage 
                src={img} 
                alt={title} 
                className="w-full h-auto"
                whileHover={{scale: 1.05}}
                transition={{duration: 0.2}}
                />
            </Link>
    
            <div className="w-ful flex flex-col items-start justify-between mt-4 ">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
                {type}
                </span>
                <Link href={link} 
                target="_blank" 
                className="hover:underline dark:text-light underline-offset-2"
                >
                <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">
                {title}
                </h2>
                </Link>
                <div className="mt-2 flex items-center justify-between w-full">
                    <Link href={link} 
                    target="_blank" 
                    className="text-lg font-semibold underline dark:text-light md:text-base">
                    Visit Site 
                    </Link>
                    <Link href={github} target="_blank" className="w-8 dark:text-light md:w-6">
                        {" "}
                        <GithubIcon/> {" "}
                    </Link>
                </div>
            </div>
        </article> 
      );
    };

const Projects = () => {
  return (
    <>
    <Head>
    <title>Fred Banda | Some Of My Work</title>
    <meta name="description" content="Portfolio of work for Fred Banda" />
  </Head>

    <TransitionEffect />
    <main className="w-full mb-16 flex flex-col items-center justify-center my-12
    dark:text-light "> 
        <Layout className="pt-16">
            <AnimatedText text="Innovative Minds @Work"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl "
            />

            <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                <div className="col-span-12">
                   <FeaturedProject
                   title="EunnyAI: Starts With Your Image"
                   img={eunnyai}
                   summary="
                   Introducing our revolutionary app! Harnessing cutting-edge AI technology, it effortlessly removes backgrounds, performs generative fills, eliminates unwanted elements, and even recolors images with just a few taps. Say goodbye to tedious editing – unleash your creativity with our all-in-one image manipulation powerhouse
                   "
                   link="https://eunnyai.vercel.app/"
                   github="https://github.com/fredbanda/eunnyai.git"
                   type="Featured Project"
                   />
                </div>
                <div className="col-span-6 sm:col-span-12">
                <Project
                   title="A Workshop Ticket App"
                   img={EunnyTech}
                   summary="
                   Embark on a journey of entrepreneurial excellence with our Artisan Workshop Ticketing App! Seamlessly manage and book business workshops tailored for artisans. Streamline ticketing, connect with experts, and empower your craft. Elevate your skills effortlessly – the ultimate platform for artisans to thrive and succeed!
                   "
                   link="https://eunnytech.onrender.com/"
                   github="https://github.com/fredbanda/eunnytech.git"
                   type="Project"
                   />
                </div>
                <div className="col-span-6 sm:col-span-12">                
                <Project
                   title="Let's Hunt the Ace"
                   img={EunnyTech}
                   summary="
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard dummy text ever since the 
                   1500s, when an unknown printer took a galley of type and scrambled it 
                   to make a type specimen book. It has survived not only five centuries, 
                   but also the leap into electronic
                   "
                   link="https://matchingace.netlify.app/"
                   github="https://github.com/fredbanda/acematching.git"
                   type="Project"
                   />
                </div>
                <div className="col-span-12">
                   <FeaturedProject
                   title="JetSetters Do not sleep"
                   img={project1}
                   summary="
                   I developed a full CRUD app where users can share pictures with descriptions.
                    Built using MongoDB for data storage, Node.js with Express.js for the 
                    backend, React with React Hooks for the frontend, Bcrypt for secure 
                    authentication, and CSS for styling.
                   "
                   link="https://jetsetter.onrender.com/"
                   github="https://github.com/fredbanda/jetset-frontend.git"
                   type="Featured Project"
                   />
                </div>
                <div className="col-span-6 sm:col-span-12">
                <Project
                   title="Enjoy Curated YouTube"
                   img={project3}
                   summary="
                   I've created a YouTube video aggregator app, ad-free. 
                   Powered by Next.js 13 and React with TypeScript, it uses Tailwind CSS for 
                   sleek UI, and a REST API to fetch and display YouTube content seamlessly.
                   "
                   link="https://youtubelearn.netlify.app/"
                   github="https://github.com/fredbanda/youlearn.git"
                   type="Project"
                   />
                </div>
                <div className="col-span-6 sm:col-span-12">                
                <Project
                   title="Let's Hunt the Ace"
                   img={project4}
                   summary="
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard dummy text ever since the 
                   1500s, when an unknown printer took a galley of type and scrambled it 
                   to make a type specimen book. It has survived not only five centuries, 
                   but also the leap into electronic
                   "
                   link="https://matchingace.netlify.app/"
                   github="https://github.com/fredbanda/acematching.git"
                   type="Project"
                   />
                </div>

                <div className="col-span-12 sm:col-span-12">
                <FeaturedProject
                   title="Exchange Ethereum Safely"
                   img={project2}
                   summary="
                   I designed an app enabling users to transfer crypto coins using MetaMask. 
                   Developed with Vite and React, it utilizes React Hooks for a responsive interface, 
                   CSS for styling, and integrates Web3 and Three.js for seamless crypto transactions 
                   and interactive visuals.
                   "
                   link="https://cryptolane.netlify.app/"
                   github="https://github.com/fredbanda/cryptolane.git"
                   type="Featured Project"
                   />
                </div>
                <div className="col-span-6 sm:col-span-12">
                <Project
                   title="Random Picker"
                   img={project5}
                   summary="
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard dummy text ever since the 
                   1500s, when an unknown printer took a galley of type and scrambled it 
                   to make a type specimen book. It has survived not only five centuries, 
                   but also the leap into electronic
                   "
                   link="https://randomizefred.netlify.app"
                   github="https://github.com/fredbanda/randompicker.git"
                   type="Project"
                   />
                </div>
                <div className="col-span-6 sm:col-span-12">
                <Project
                   title="DOM Manipulation"
                   img={project6}
                   summary="
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard dummy text ever since the 
                   1500s, when an unknown printer took a galley of type and scrambled it 
                   to make a type specimen book. It has survived not only five centuries, 
                   but also the leap into electronic
                   "
                   link="https://fredbanda.github.io/scheduler/"
                   github="https://fredbanda.github.io/scheduler/"
                   type="Project"
                   />
                </div>
                </div>
        </Layout>
    </main>
    </>

  )
}

export default Projects;