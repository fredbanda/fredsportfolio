import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col
    item-center justify-between md:w-[80%] mt-[-10px]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-medium text-dark/75 xs:text-sm dark:text-yellow-500">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm whitespace-pre-line">
          {work}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-32">
      <h2
        className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl
        md:mb-16"
      >
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 mt-[-100px]">
          <Details
            position="Principal Software Engineer"
            company="First Pitch"
            companyLink="https://www.thefirstpitch.co.za/"
            time="2013 - Present"
            address="Cape Town, South Africa"
            work={`=> Developed and optimized core application features using Ruby on Rails, improving performance by 35% and reducing load time by 11 seconds (from 13s to 2s).
            => Enhanced front-end with JavaScript, Stimulus, Tailwind CSS, Hotwire, and jQuery, improving UX by 29%.
            => Engineered robust backend using Ruby, Active Record, and ORM to handle 55% more concurrent users.
            => Tracked and resolved software issues via Bugzilla, cutting resolution time by 22%.
            => Optimized MongoDB schema, improving query efficiency by 33% and boosting retention by 33%.
            => Used Git, GitHub, AWS EC2, and Heroku to streamline deployments, cutting deployment time by 33 minutes.
            => Led Agile/Scrum ceremonies and client interactions, driving 32 successful feature releases.
            => Sustained automated test suites with RSpec and Cucumber, improving code quality and reducing bugs by 35%.
            => Conducted Unit, Integration, and Web testing with RSpec, Capybara, Minitest, and Guard, reducing critical defects by 41%.
            => Enhanced search with ElasticSearch in a school app, reducing search time by 22 seconds.
            => Tuned DB performance with normalization/denormalization, cutting query times by 33%.`}
          />
          <Details
            position="Internal Sales Representative"
            company="Sanlic Bidvest"
            companyLink="/"
            time="2010 to 2013"
            address="Cape Town South Africa"
            work={`=> Customer Relationship Building: Cultivate strong relationships with existing clients to understand their needs and provide tailored solutions.
                => Product Knowledge: Master in-depth knowledge of the company's products/services to effectively educate and upsell to customers.
                => Sales Quota Achievement: Consistently meet or exceed sales targets and quotas set by the organization.
                `}
          />
          <Details
            position="Sales Driver"
            company="BBL"
            companyLink="/"
            time="2007 - 2010"
            address="Cape Town South Africa"
            work={`=> Safe Transportation: Safely operate company vehicles, following traffic rules and ensuring the secure delivery of goods.
                => Timely Deliveries: Ensure on-time delivery of products to customers, maintaining reliability and punctuality.
                => Vehicle Maintenance: Perform routine vehicle checks, maintenance, and report any issues promptly to maintain fleet integrity.

`}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
