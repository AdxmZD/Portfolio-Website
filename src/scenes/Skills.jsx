import PageBreak from "../components/PageBreak";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skillsPic from "../assets/skills-image.png";

const Skills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
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
            As a junior developer I am constantly attaining new skills and
            experiences. In my one and a half years as a developer, I have had
            the opportunity to use a wide range of tools, languages and
            frameworks to implement solutions. I am an excellent team player who
            enjoys peer programming and adapting to new teams and development
            environments. I consider myself to be very flexible and keen to dive
            into new tech stacks where possible.
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-white before:z-[-1]"
            >
              <img className="z-10" src={skillsPic} alt="profile-pic" />
            </div>
          ) : (
            <img className="z-10" src={skillsPic} alt="profile-pic" />
          )}
        </div>
      </div>
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Before entering this industry, I tought secondary level Maths for a
            year to attain my teaching qualification. I credit this experience
            with greatly improving my confidence and communication skills, as I
            am now very proficient in giving presentations and building a
            rapport with clients. I am currently employed by a consultancy where
            I've contributed to numerous internal projects, as well as being
            placed in a team at NatWest for 7 months.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Tools/Frameworks
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <div className="flex flex-wrap flex-row gap-2 mt-5">
            <p className="rounded border border-white p-2">JavaScript</p>
            <p className="rounded border border-white p-2">React</p>
            <p className="rounded border border-white p-2">TypeScript</p>
            <p className="rounded border border-white p-2">Bash</p>
            <p className="rounded border border-white p-2">Flutter</p>
            <p className="rounded border border-white p-2">SQL</p>
            <p className="rounded border border-white p-2">NoSQL</p>
            <p className="rounded border border-white p-2">MongoDB</p>
            <p className="rounded border border-white p-2">Postgresql</p>
            <p className="rounded border border-white p-2">Express</p>
            <p className="rounded border border-white p-2">Next</p>
            <p className="rounded border border-white p-2">JIRA</p>
            <p className="rounded border border-white p-2">ServiceNow</p>
            <p className="rounded border border-white p-2">Git</p>
            <p className="rounded border border-white p-2">Tailwind CSS</p>
            <p className="rounded border border-white p-2">HTML</p>
            <p className="rounded border border-white p-2">Docker</p>
            <p className="rounded border border-white p-2">Terraform</p>
          </div>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Projects
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            In my current employment, I have contributed to numerous development
            projects in an Agile environment. Following this, I have been
            working on various projects to refine my skills. Over time, I
            revisit these projects to implement a new tool for optimisation -
            for example, unit and e2e testing, containerising the app in a
            docker image for deployment, connecting to a new databse. Some
            snapshots of these projects can be found below, with the code
            repositories being available on my GitHub.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
