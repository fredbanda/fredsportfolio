import React, { useRef } from 'react';
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import article1 from "../../public/images/articles/articlelink.jpg";
import article2 from "../../public/images/projects/CryptoLane.png";
import {easeInOut, motion, useMotionValue} from "framer-motion";
import article3 from "../../public/images/projects/CryptoLane.png";
import article4 from "../../public/images/projects/game.jpg";
import article5 from "../../public/images/projects/youtubelearn.jpg";
import article6 from "../../public/images/projects/domman.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image) 

const MovingImage = ({title,img, link }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imgRef = useRef(null)

    function handleMouse(event){
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event){
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return(
        <Link href={link} target="_blank"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
            <h2 className="capitalize text-xl font-semi-bold hover:underline">
                {title}
            </h2>
            <FramerImage
            style={{x:x, y:y}}
            initial={{opacity: 0}}
            whileInView={{opacity: 1, transition: 0.2}}
             ref={imgRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden" />
        </Link>
    )
}
const Article = ({img, title, date, link}) => {
    return(
        <motion.li 
        initial={{y:200}}
        whileInView={{y:0, transition: {duration: 0.2, ease: easeInOut} }}
        viewport={{once: true}}
        className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center 
        bg-light dark:text-light dark:bg-dark text-dark justby-between first:mt-0 border 
        border-solid border-dark dark:border-light border-r-4 border-b-4 sm:flex-col">
                <MovingImage title={title} img={img} link={link} />
            <span className="text-primary dark:text-primaryDark font-semibold p-2 px-6 mr-2 sm:self-start sm:pl-0 xs:text-sm ">{date}</span>
        </motion.li>
    )

}

const FeaturedArticle = ({img, title, time, summary, link}) => {
    
    return(
        <li className="relative col-span-1 w-full p-4 bg-light border 
        border-solid border-dark dark:bg-dark dark:border-light dark:text-light rounded-2xl border-r-8 border-b-8">

            <Link 
            href={link}
            target="_blank"
            className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
            >
            <FramerImage src={img} alt={title} className="w-full h-auto"
            whileHover={{scale: 1.05}}
            transition={{duration: 0.2}}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            
            />
            </Link>

            <Link href={link} target="_blank" className="">
                <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">{title}</h2>
                <p className="text-sm mb-2">{summary}</p>
                <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
            </Link>
        </li>
    )
}

const Articles = () => {
  return (
    <>
    <Head>
        <title>Fred Banda | Articles</title>
        <meta name="description" content="Articles page " />
    </Head>
    <TransitionEffect />
    <main className=" my-12 w-full flex flex-col items-center dark:text-light justify-center mb-16 overflow-hidden">
            <Layout className="pt-16">
            <AnimatedText text="Technology Updates For Everyone" 
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" 
            />
            <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16 ">
            <FeaturedArticle 
           title="Getting the Best Out of AI: Harnessing the Power of Effective Prompt" 
            summary="Artificial Intelligence (AI) has revolutionized the way we interact 
            with technology, enhancing various aspects of our lives. One of the key 
            components that shape the output of AI models is the prompt. 
            A prompt is a user-inputted instruction or question that serves 
            as a starting point for the AI to generate responses or complete tasks."
           time="9 min read" 
           link="https://www.linkedin.com/pulse/getting-best-out-ai-harnessing-power-effective-prompt-fred-banda/?trackingId=rsC78UfBRua4MtprPGJTUQ%3D%3D"
           img={article1}
            />
            <FeaturedArticle 
           title="Build A Custom Pagination Component In Reactjs From Scratch" 
            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
           time="9 min read" 
           link="/"
           img={article2}
            />
            </ul>
            <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">Articles and Page Components</h2>
            <ul>
                <Article 
                title="Shopping Cart with Reactjs Hooks and Authentication"
                date="27th September, 2022"
                link="https://fredbanda.github.io/cart/"
                img={article3}
                />
                <Article 
                title="Enjoy this spinning Navbar on your website and make it attractive"
                date="20th September, 2023"
                link="https://spinningnavbar.netlify.app/"
                img={article4}
                />
                <Article 
                title="Enjoy the entry level black Jack"
                date="7th September, 2023"
                link="https://fbblackjack.netlify.app"
                img={article5}
                />
                <Article 
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="27th September, 2023"
                link="/"
                img={article6}
                />
                <Article 
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="27th September, 2023"
                link="/"
                img={article3}
                />
                <Article 
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="27th September, 2023"
                link="/"
                img={article3}
                />
                <Article 
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="27th September, 2023"
                link="/"
                img={article3}
                />
            </ul>
        </Layout>
    </main>

    </>
  )
}

export default Articles
