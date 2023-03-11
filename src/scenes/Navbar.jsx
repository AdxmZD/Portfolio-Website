import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from "../assets/menu-icon.svg";
import closeMenuIcon from "../assets/close-icon.svg";

const Link = ({ page, currentPage, setCurrentPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        currentPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setCurrentPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, currentPage, setCurrentPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navBg = isTopOfPage ? "" : "bg-blue";

  return (
    <nav className={`z-40 w-full fixed top-0 py-6 ${navBg}`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">AD</h4>

        {/* {DESKTOP} */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <Link
              page="Skills"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <Link
              page="Projects"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <Link
              page="Contact"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-blue p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img src={menuIcon} alt="open-menu" />
          </button>
        )}

        {/* SMALL SCREEN MENU */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* CLOSE MENU BUTTON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img src={closeMenuIcon} alt="close-menu" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link
                page="Home"
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
              <Link
                page="Skills"
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
              <Link
                page="Projects"
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
              <Link
                page="Contact"
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
