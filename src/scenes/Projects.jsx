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
              As part of my work at GlobalLogic, I developed a custom project to
              calculate maternity and paternity pay for our employees. To
              achieve this, I leveraged Google's Flutter framework to build a
              highly functional and intuitive widget-based application, complete
              with multiple pages and components. With this application, our HR
              team can accurately calculate employee benefits and ensure that
              our policies remain compliant with legal requirements.
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
              With the development team I created a full-stack profile navigator
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
              I developed a full-stack Todo application using the PERN
              (PostgreSQL, Express, React, Node.js) stack. The application
              features a user-friendly interface that allows users to add, edit,
              and delete items from their to-do list. The application uses a
              RESTful Express API to communicate with a PostgreSQL database,
              which stores the state of the to-do list. With this application,
              users can easily keep track of their tasks and manage them
              efficiently.
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
              This app shows the weather for a location entered by the user,
              with recent locations saved for future reference. It uses React
              and Tailwind CSS for building the interface and styling. It
              includes functionality to convert temperature and round numbers.
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
              I created a Kanban board that mirrors JIRA's functionality,
              allowing me to work efficiently in sprints and complete projects.
              Built with the MERN stack (MongoDB, Express.js, React, and
              Node.js), this app sends and receives tickets from a Mongo
              cluster. I incorporated the react-beautiful-dnd library to enable
              smooth drag-and-drop animations and handle drag events.
            </p>
          </div>
          <img className="h-[300px] w-[600px]" src={Kanban} alt="portfolio" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
