import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { RiMenu3Line, RiMenuFill } from "react-icons/ri";
import { SlLocationPin, SlClock } from "react-icons/sl";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DarkMode from "./DarkMode";
import { NavHashLink } from "react-router-hash-link";
import Sidebar from "./Sidebar";
import { AiOutlineClose } from "react-icons/ai";
import { auth } from "../config/firebaseConfig";
import { FiLogOut } from "react-icons/fi";
import { deleteUser } from "firebase/auth";
const Header = () => {
  const [menu, setmenu] = useState(false);
  const [plus, setplus] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const isDarkMode = useSelector((state) => state.jobs.darkMode);
  const [currentUser, setcurrentUser] = useState(null);
  const sidebarRef = useRef(null);
  const user = auth.currentUser;
  useEffect(() => {
    user && setcurrentUser(user && user.email);
    //eslint-disable-next-line
  }, []);
  let name =
    currentUser &&
    currentUser
      .replace(currentUser.charAt(0), currentUser.charAt(0).toUpperCase())
      .slice(0, 1);

  const handleLogOut = () => {
    deleteUser(user)
      .then(() => {
        setcurrentUser(null);
      })
      .catch((error) => {});
  };
  const handleEnter = () => {
    setmenu(true);
  };
  const handleLeave = () => {
    setmenu(false);
  };
  const handlePlus = () => {
    setplus(true);
  };
  const handleMinus = () => {
    setplus(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
      document.body.removeEventListener("click", handleBodyClick);
    };
  });
  const closeSide = () => {
    let sidebar = document.body.querySelector(".side-bar");
    if (isOpen) {
      sidebar.classList.remove("side-nav");
    }
    setisOpen(false);
  };
  const openSide = () => {
    let sidebar = document.body.querySelector(".side-bar");
    if (menu) {
      sidebar.classList.add("side-nav");
    }
    setisOpen(true);
  };

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".main");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  const handleBodyClick = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      closeSide();
    }
  };

  return (
    <div>
      <div data-aos="fade-right" className="side-nav-wrapper ">
        <div
          className={`side-bar ${
            isDarkMode ? "dark-sidebar" : "light-sidebar"
          } }`}
          ref={sidebarRef}
        >
          {isOpen && (
            <div className="close-side-wrapper ">
              <button className="close-side btn " onClick={closeSide}>
                <AiOutlineClose />
              </button>

              <div className="my-4 ">
                <Sidebar closeSide={closeSide} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className="d-flex align-items-center  container gap-4 p-2 mt-0 text-success"
        id="time"
      >
        <div className="d-flex align-items-center gap-2 ">
          <span>
            <SlLocationPin />
          </span>
          27/55 Avenue, NY USA 685.
        </div>
        <div className="d-flex align-items-center gap-2 ">
          <span>
            <SlClock />
          </span>
          Mon-Sat 8.00-18.00.
        </div>
      </div>

      <div
        className="main container-fluid mx-auto  d-flex justify-content-between align-items-center py-3 mt-4"
        id="main"
      >
        <Link to="/">
          <div style={{ position: "relative" }}>
            <img
              src="/assets/jobsLogo.png"
              style={{ width: "200px", objectFit: "cover" }}
              alt="logo"
            />
          </div>
        </Link>

        <div className="items">
          <ul className="d-flex nav gap-5  align-items-center text-white">
            <NavHashLink to="/#jobs" style={{ textDecoration: "none" }}>
              <li style={{ color: "white" }}>Jobs</li>
            </NavHashLink>
            <NavHashLink to="/#candidates" style={{ textDecoration: "none" }}>
              <li className="text-white">Candidates</li>
            </NavHashLink>
            <li
              onMouseEnter={handlePlus}
              onMouseLeave={handleMinus}
              className="page"
            >
              Pages
              <span className="mx-1 plus">
                {!plus ? <AiOutlinePlus /> : <AiOutlineMinus />}
              </span>
              {plus && (
                <div data-aos="fade-up" className="drop-down nav">
                  <ul className="menu-down w-100 ">
                    <Link
                      to="/about"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <li className="">About</li>
                    </Link>
                    <Link
                      to="/services"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <li className="">Services</li>
                    </Link>
                    <Link
                      to="/contact"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <li className="">Contact</li>
                    </Link>
                  </ul>
                </div>
              )}
            </li>{" "}
          </ul>
        </div>

        <div
          className="d-flex align-items-center justify-content-between  gap-0 text-white"
          style={{ fontSize: "1.5rem" }}
        >
          <div className="d-flex justify-content-center align-items-center w-100 gap-sm-0 gap-md-4 ">
            {!user ? (
              <Link to="/login">
                <FaRegUser fontSize={17} cursor="pointer" color="whitesmoke" />
              </Link>
            ) : (
              <>
                <div
                  cursor="pointer"
                  style={{
                    background: "#07bc0c",
                    paddingLeft: ".6rem",
                    paddingRight: ".6rem",
                    paddingBottom: ".1rem",
                    borderRadius: "50%",
                    verticalAlign: "middle",
                  }}
                  color="whitesmoke"
                >
                  <span style={{}}>{name}</span>
                </div>
                <button
                  className="btn btn-sm fw-bold text-white "
                  onClick={handleLogOut}
                  style={{ fontSize: 19 }}
                >
                  <FiLogOut />
                </button>
              </>
            )}

            <DarkMode />
          </div>
          <div
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="d-flex align-items-center "
          >
            {!menu ? (
              <RiMenu3Line className="icon" />
            ) : (
              <RiMenuFill className="icon" onClick={openSide} />
            )}
          </div>
        </div>
        <Link to="/Post">
          <button className="custom-btn btn go ">Post Job</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
