import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profilePic from "../assets/profile-pic5.png";
import SocialIcons from "../components/SocialIcons";

const Home = ({ setCurrentPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* PROFILE IMAGE */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
          before:w-full before:max-w-[600px] before:h-full before:border-2 before:border-white before:z-[-1]"
          >
            <img
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
          max-w-[400px] md:max-w-[500px] "
              src={profilePic}
              alt="profile-pic"
            />
          </div>
        ) : (
          <img
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
          max-w-[400px] md:max-w-[500px] "
            src={profilePic}
            alt="profile-pic"
          />
        )}
      </div>
      <div className="z-30 basis-2/5 mt-12 md:mt-26">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair font-bold z-10 text-center md:text-start">
            Adam Deen
          </p>
          <p className="mt-10 mb-7 text-center md:text-start">
            Junior web developer with one and a half years of experience. I have
            a passion for front-end development, while also being keen to try
            out new tech stacks and learn new skills.
          </p>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-blue text-deep-blue rounded-sm py-3 px-7 font-semibold
          hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setCurrentPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
