import React, { useState, useEffect } from "react";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import { useSelector } from "react-redux";
import { toggleDarkMode } from "../features/JobSlice";
import { useDispatch } from "react-redux";
const DarkMode = () => {
  const isDarkMode = useSelector((state) => state.jobs.darkMode);
  const dispatch = useDispatch(); // Get the dispatch function

  useEffect(() => {
    // Check if user has a preferred theme (light or dark) stored in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch(toggleDarkMode()); // Dispatch an action based on saved theme
    } else {
      // If no preference, check the user's system preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        dispatch(toggleDarkMode()); // Dispatch an action to enable dark mode
      }
    }
  }, [dispatch]);

  const toggleTheme = () => {
    // Dispatch the action to toggle dark mode in Redux
    dispatch(toggleDarkMode());

    // Store the theme preference in localStorage
    const newTheme = isDarkMode ? "light" : "dark";
    localStorage.setItem("theme", newTheme);

    // Toggle the dark mode class on the body
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <div>
      <button onClick={toggleTheme} className="btn btn-lg fw-bold text-white ">
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
