import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Sidebar = ({ closeSide }) => (
  <>
    <div
      className=" relative shadow  d-flex  mt-5"
      style={{ minHeight: "100vh" }}
    >
      <ul className="d-flex ml-0 me-5 flex-column  w-100 gap-4 text-white py-5 justify-content-center   fs-4">
        <div
          style={{
            marginTop: "-5rem",
            marginBottom: "2rem",
            color: "green",
            fontWeight: "bold",
          }}
        >
          JobsLab
        </div>
        <HashLink
          data-aos="fade-up"
          to="/#jobs"
          className="w-100 custom-list rounded "
          onClick={closeSide}
        >
          <li className="p-2 ">Jobs</li>
        </HashLink>
        <HashLink
          to="/#candidates "
          className="rounded w-100 custom-list"
          data-aos="fade-up"
        >
          <li className="  p-2 " onClick={closeSide}>
            Candidates
          </li>
        </HashLink>
        <HashLink
          data-aos="fade-up"
          to="/about"
          className=" rounded custom-list  w-100"
        >
          <li className="  p-2 " onClick={closeSide}>
            About Us
          </li>
        </HashLink>

        <HashLink
          data-aos="fade-up"
          to="/services"
          className=" custom-list rounded w-100 "
        >
          <li className=" p-2 " onClick={closeSide}>
            Our Services
          </li>
        </HashLink>
        <HashLink
          data-aos="fade-up"
          to="/contact"
          className="custom-list rounded w-100"
        >
          <li className=" p-2" onClick={closeSide}>
            Contact Us
          </li>
        </HashLink>
      </ul>
    </div>
  </>
);

export default Sidebar;
