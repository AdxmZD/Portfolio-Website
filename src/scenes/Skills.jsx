import PageBreak from "../components/PageBreak";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import profilePic from "../assets/profile-pic5.png";

const Skills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfiar font-semibold text-4xl mb-5">
            MY <span className="text-blue">SKILLS</span>
          </p>
          <PageBreak className="w-1/3" />
          <p className="mt-10 mb-7">
            This is the skills section. Here I will talk about the different
            skills I have and how I have used them.
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-white before:z-[-1]"
            >
              <img className="z-10" src={profilePic} alt="profile-pic" />
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
