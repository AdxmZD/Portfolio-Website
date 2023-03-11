import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ currentPage, setCurrentPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6
    before:rounded-full before:border-2 before:border-yellow before:left-[-50%]
    before:top-[-50%]`;
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        className={`${currentPage === "home" ? selectedStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
        href={`#home`}
        onClick={() => setCurrentPage("home")}
      />
      <AnchorLink
        className={`${
          currentPage === "skills" ? selectedStyles : "bg-dark-grey"
        }
        w-3 h-3 rounded-full`}
        href={`#home`}
        onClick={() => setCurrentPage("skills")}
      />
      <AnchorLink
        className={`${
          currentPage === "projects" ? selectedStyles : "bg-dark-grey"
        }
        w-3 h-3 rounded-full`}
        href={`#home`}
        onClick={() => setCurrentPage("projects")}
      />
      <AnchorLink
        className={`${
          currentPage === "contact" ? selectedStyles : "bg-dark-grey"
        }
        w-3 h-3 rounded-full`}
        href={`#home`}
        onClick={() => setCurrentPage("contact")}
      />
    </div>
  );
};

export default DotGroup;
