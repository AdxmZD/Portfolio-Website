import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-5 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/adam-deen/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin size={42} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/AdxmZD?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub size={42} />
      </a>
    </div>
  );
};

export default SocialIcons;
