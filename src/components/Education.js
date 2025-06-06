import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col
    item-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}&nbsp;
        </h3>
        <span className="capitalize text-medium text-dark/75 xs:text-sm dark:text-yellow-500">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-32 mt-[-100px]">
      <h2
        className="font-bold text-8xl mb-16 w-full text-center md:text-6xl xs:text-4xl
        md:mb-16"
      >
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Certificate in DevOps Engineering "
            place="Udemy"
            time="2024 "
            info="DevOps with Jenkins Terraform GIT Docker Maven Kubernetes Ansible Automation Docker Swarm"
          />

          <Details
            type="Certificate in AWS Cloud Computing "
            place="Udemy"
            time="2024 "
            info="AWS Cloud Architecture, Design, Development, DevOps, SysOps - EC2, ECS, EKS, Elastic Beanstalk, Lambda, S3, Glacier, Storage Gateway, RDS, DynamoDB, ElastiCache, Redshift, VPC, ELB, Route 53, CloudWatch, CloudFormation, CloudTrail, OpsWorks, Elastic MapReduce, Kinesis, Data Pipeline, SWF, SQS, SNS"
          />

          <Details
            type="Certificate Business Analysis"
            place="SkillUp"
            time="2020"
            info="Business Analysis"
          />

          <Details
            type="Certificate in Digital Marketing"
            place="Google"
            time="2020"
            info="Digital Marketing and online advertising"
          />

          <Details
            type="Bachelor of Business Administration"
            place="University of South Africa"
            time="2011 - 2014"
            info="Business Management, Marketing, Strategic Management, Accounting,
                Economics"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
