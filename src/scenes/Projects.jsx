import { motion } from "framer-motion";
import PageBreak from "../components/PageBreak";
import ConsultantProfile from "../assets/consultantprofile.png";
import SMP from "../assets/smp1.png";
import Portfolio from "../assets/portfolio.png";

const Projects = () => {
  const overlayStyle = `absolute h-[300px] w-[600px] opacity-0 hover:opacity-90 transition duration-500
  bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  return (
    <section id="projects" className="pt-10 pb-24 h-full">
      <div className="md:flex  justify-center md:gap-16 mt-12">
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
          <p className="font-playfiar font-semibold text-4xl mb-5 text-center">
            <span className="text-blue">PROJECTS</span>
          </p>
          <PageBreak className="w-1/3" />
        </motion.div>
      </div>
      <div className="flex flex-row flex-wrap justify-center mt-16 gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className={overlayStyle}>
            <p className="text-2xl font-playfair">Maternity Pay Calculator</p>
            <p className="mt-7">
              I leveraged Google's Flutter framework to build a highly
              functional and intuitive widget-based application, complete with
              multiple pages and components. With this application, our HR team
              could accurately calculate employee benefits and ensure that our
              policies remain compliant with legal requirements.
            </p>
          </div>
          <img className="h-[300px] w-[600px]" src={SMP} alt="portfolio" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className={overlayStyle}>
            <p className="text-2xl font-playfair">Consultant Profile App</p>
            <p className="mt-7">
              I worked with a team to develop a full-stack profile vizualisation
              application with TypeScript React for the front-end and Go for the
              back-end, which was deployed on an AWS EC2 Instance.
            </p>
          </div>
          <img
            className="h-[300px] w-[600px]"
            src={ConsultantProfile}
            alt="portfolio"
          />
        </motion.div>
        <motion.div
          className="border border-blue"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className={overlayStyle}>
            <p className="text-2xl font-playfair">Portfolio</p>
            <p className="mt-7">
              This website was created with ReactJS, Tailwind CSS and Framer
              Motion. I created this web app to be responive to multiple screen
              sizes. Hosted on Netlify.
            </p>
          </div>
          <img
            className="h-[300px] w-[600px]"
            src={Portfolio}
            alt="portfolio"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
