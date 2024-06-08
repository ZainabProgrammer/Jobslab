import React, { useEffect } from "react";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import { useSelector } from "react-redux";
import { toggleDarkMode } from "../features/JobSlice";
import { useDispatch } from "react-redux";
const DarkMode = () => {
  const isDarkMode = useSelector((state) => state.jobs.darkMode);
  const dispatch = useDispatch(); // Get the dispatch function
  console.log(isDarkMode, "dark mode?");
  useEffect(() => {
    // Check if user has a preferred theme (light or dark) stored in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch(toggleDarkMode()); // Dispatch an action based on saved theme
    } else {
      // If no preference, check the user's system preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        dispatch(toggleDarkMode());
      }
    }
  }, [dispatch]);

  const toggleTheme = () => {
    dispatch(toggleDarkMode());
    const newTheme = isDarkMode ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="btn btn-lg fw-bold text-white"
        style={{ outline: "none", border: "none" }}
      >
        {!isDarkMode ? (
          <MdOutlineLightMode />
        ) : (
          <CiDark className="text-black fw-bold " />
        )}
      </button>
    </div>
  );
};

export default DarkMode;
