import { motion } from "framer-motion";
import PageBreak from "../components/PageBreak";
import ConsultantProfile from "../assets/consultantprofile.png";
import SMP from "../assets/smp1.png";
import Portfolio from "../assets/portfolio.png";
import WhaTodo from "../assets/WhaTodo.png";
import WeatherApp from "../assets/weatherApp.png";
import Kanban from "../assets/KanBanFinal.png";

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
              This draft project was created to be used internally. I used
              Google's Flutter framework to create a widget focused app with
              multiple pages and components.
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
              This draft project was also created for internal use to showcase
              the company's consultants on a styled profile template. Created in
              TypeScript React with styled-components.
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
              The web page that you are currently visiting was created from
              scratch with ReactJS, Tailwind CSS and Framer Motion. I created
              this web app to be responive to multiple screen sizes.{" "}
            </p>
          </div>
          <img
            className="h-[300px] w-[600px]"
            src={Portfolio}
            alt="portfolio"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className={overlayStyle}>
            <p className="text-2xl font-playfair">Todo List</p>
            <p className="mt-7">
              This is a basic React Todo App. Uses Hooks to allow the user to
              create/edit/delete a todo task.{" "}
            </p>
          </div>
          <img className="h-[300px] w-[600px]" src={WhaTodo} alt="portfolio" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className={overlayStyle}>
            <p className="text-2xl font-playfair">Weather API App</p>
            <p className="mt-7">
              Basic Front-End React weather app that fetches weather data from a
              free weather API. The data returned from the API is dependant on
              the location entered by the user.
            </p>
          </div>
          <img
            className="h-[300px] w-[600px]"
            src={WeatherApp}
            alt="portfolio"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className={overlayStyle}>
            <p className="text-2xl font-playfair">Kanban Board</p>
            <p className="mt-7">
              This Kanban board was created to replicate aspects of the JIRA
              Kanban board. I have used this to help me work in sprints to get
              projects completed. This makes use of the MERN stack (Mongodb,
              Express.js, React, Node.js) to send and recieve tickets from a
              Mongo cluster. I also used the react-beautiful-dnd library to add
              smooth drag and drop animations and handle onDragEnd function
              calls.
            </p>
          </div>
          <img className="h-[300px] w-[600px]" src={Kanban} alt="portfolio" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
