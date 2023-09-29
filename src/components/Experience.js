import { useScroll, motion } from "framer-motion";
import React, { useRef } from 'react';
import LiIcon from "./LiIcon";

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null)
    return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col
    item-center justify-between md:w-[80%]">
        <LiIcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration: 0.5, type: "spring"}}
        >
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
            {position}&nbsp;
            <a href={companyLink} 
            target="_blank" 
            className="text-primary capitalize"
            >
            @{company}
            </a>
            </h3>
            <span className="capitalize text-medium text-dark/75 xs:text-sm dark:text-yellow-500">
                {time} | {address}
            </span>
            <p className="font-medium w-full md;text-sm">
                {work}
            </p>
        </motion.div>
    </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"],
        }
    )
  return (
    <div className="my-32">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl
        md:mb-16">
        Experience   
        </h2>

        <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

            <motion.div
            style={{scaleY: scrollYProgress}}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]" />

            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                <Details 
                position="Principal Software Engineer "
                company="First Pitch"
                companyLink="https://www.thefirstpitch.co.za/"
                time="2014 - Present"
                address="Cape Town South Africa"
                work="
                Developed and maintained responsive web applications using modern front-end frameworks such as Ruby on Rails, JavaScript, Next.js and React.js
                Designed and implemented back-end functionalities utilizing technologies such as Node.js, Express.js, and MongoDB, Postgresql, mySQ
                Collaborated with UX/UI designers to create intuitive user interfaces and enhance user experiences
                Implemented RESTful APIs and now FastAPI and integrated third-party services to enhance application functionality.
                Utilized version control systems (e.g., Git, Gitlab) for code collaboration and managed project workflows using agile methodologies.
                 "
                 />

                <Details 
                position="Internal Sales Representative"
                company="Sanlic Bidvest"
                companyLink="/"
                time="2010 to 2014"
                address="Cape Town South Africa"
                work="
                Customer Relationship Building: Cultivate strong relationships with existing clients to understand their needs and provide tailored solutions.

                Product Knowledge: Master in-depth knowledge of the company's products/services to effectively educate and upsell to customers.
                
                Sales Quota Achievement: Consistently meet or exceed sales targets and quotas set by the organization.
                
                Sales Support: Collaborate with the external sales team, marketing, and other departments to provide comprehensive support in the sales process.
                
                Reporting and Analytics: Generate regular reports and analyze sales data to identify trends and opportunities for improvement in sales strategies." />

                <Details 
                position="Sales Driver"
                company="BBL"
                companyLink="/"
                time="2007 - 2010"
                address="Cape Town South Africa"
                work="
  
                Safe Transportation: Safely operate company vehicles, following traffic rules and ensuring the secure delivery of goods.

                Timely Deliveries: Ensure on-time delivery of products to customers, maintaining reliability and punctuality.

                Vehicle Maintenance: Perform routine vehicle checks, maintenance, and report any issues promptly to maintain fleet integrity.

                Documentation: Maintain accurate delivery records, receipts, and invoices, and assist with inventory management.

                Customer Service: Provide excellent customer service by assisting with unloading, addressing inquiries, and maintaining a professional demeanor.
                " />
            </ul>
        </div>
    </div>
  )
}

export default Experience;