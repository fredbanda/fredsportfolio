import React from 'react';
import {motion} from "framer-motion";

const Skill = ({name, x, y}) => {

  return (
    <motion.div className="flex items-center justify-center rounded-full font-semibold
     bg-dark text-light px-6 shadow-dark cursor-pointer absolute py-3
     dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:px-3 xs:bg-transparent xs:dark:bg-transparent
     xs:text-dark xs:dark:text-light xs:text-bold xs:dark:text-bold  "

    whileHover={{scale: 1.05}}
    initial={{x:0, y:0}}
    whileInView={{ x:x, y:y, transition: {duration: 1.5}}}
    >
      {name}
    </motion.div>
  )
  
}

const Skills = () => {
  return (
    <>
    <h2 className="font-bold text-8xl mt-32 w-full text-center md:text-6xl md:mt32">Skills</h2>
    <div className="w-full h-screen relative flex items-center justify-center rounded-full 
    bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[40vh] 
    lg:bg-circularLightLg lg:dark:bg-circularDarkLg
    md:bg-circularLightMd md:dark:bg-circularDarkMd
    sm:bg-circularLightSm sm:dark:bg-circularDarkSm
    ">
      <motion.div className="flex items-center justify-center rounded-full 
      font-semibold bg-dark text-light p-8 px-6 shadow-dark cursor-pointer dark:text-dark dark:bg-light
      lg:p-6 md:p-4 xs:text-sm xs:p-2 "

      whileHover={{scale: 1.05}}
      >
        Web
      </motion.div>

      <Skill name="HTML" x="-20vw" y="-5vw"/>
      <Skill name="Bootstrap" x="-33vw" y="-5vw"/>
      <Skill name="CSS" x="-5vw" y="-10vw"/>
      <Skill name="Angular" x="4vw" y="-19vw"/>
      <Skill name="JavaScript" x="20vw" y="6vw"/>
      <Skill name="FastAPI" x="30vw" y="15vw"/>
      <Skill name="Reactjs" x="-20vw" y="-15vw"/>
      <Skill name="Nextjs" x="15vw" y="-12vw"/>
      <Skill name="Java" x="14vw" y="-20vw"/>
      <Skill name="Ruby on Rails" x="-9vw" y="-19vw"/>
      <Skill name="Web Design" x="33vw" y="-2vw"/>
      <Skill name="Postgres" x="-28vw" y="4vw"/>
      <Skill name="MongoDB" x="2vw" y="10vw"/>
      <Skill name="mySQL" x="13vw" y="20vw"/>
      <Skill name="CyberSecurity" x="-19vw" y="9vw"/>
      <Skill name="RestAPI" x="-15vw" y="20vw"/>
      <Skill name="Tailwindcss" x="26vw" y="-17vw"/>

    </div>
    </>
  )
}

export default Skills;