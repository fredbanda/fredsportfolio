import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { GitCommit, Hammer, FlaskConical, Rocket } from "lucide-react";

const stages = [
  {
    name: "Commit",
    icon: GitCommit,
    description:
      "Ensure code changes are committed to the repository and are passing all tests and checks. Tools used mostly git and github.",
  },
  {
    name: "Build",
    icon: Hammer,
    description: "Compile and package the application.Here I have used Jenkins, Docker and AWS.",
  },
  {
    name: "Test",
    icon: FlaskConical,
    description: "Run automated tests to validate the build. Tools like SonarQube, Jest, Cypress, and Selenium.",
  },
  {
    name: "Deploy",
    icon: Rocket,
    description: "Deploy the build to the production environment. Tools like Docker, AWS, and Terraform, ArgoCD.",
  },
];

const CICDPipeline = () => {
  const controls = useAnimation();
  const [currentStage, setCurrentStage] = useState(0);

  const sequence = async () => {
    for (let i = 0; i < stages.length; i++) {
      setCurrentStage(i); // update current stage
      await controls.start((index) => ({
        opacity: index <= i ? 1 : 0.3,
        scale: index === i ? 1.1 : 1,
        transition: { duration: 0.5 },
      }));
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  };

  useEffect(() => {
    sequence();
  }, [controls]);

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">
        CI-CD Pipeline
      </h2>
      <div className="flex justify-between items-center max-w-3xl mx-auto flex-col gap-4">
        {stages.map((stage, index) => (
          <motion.div
            key={stage.name}
            className="flex flex-col items-center p-4 bg-gray-100 rounded-lg w-32"
            custom={index}
            animate={controls}
            initial={{ opacity: 0.3, scale: 1 }}
          >
            <div className="mb-2 text-blue-600">
              <stage.icon size={36} />
            </div>
            <p className="text-sm font-medium">{stage.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Description display */}
      <div className="mt-6 text-gray-800 dark:text-gray-300 text-base max-w-xl mx-auto min-h-[60px]">
        {stages[currentStage]?.description}
      </div>

      <button
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        onClick={() => {
          controls.start({ opacity: 0.3, scale: 1 });
          sequence();
        }}
      >
        Replay The Process
      </button>
    </div>
  );
};

export default CICDPipeline;
