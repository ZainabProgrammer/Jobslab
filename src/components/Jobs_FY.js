import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineNotificationsActive, MdPhoneCallback } from "react-icons/md";
const Jobs_FY = () => {
  return (
    <div className="container-fluid  mt-2 mb-3">
      <div
        className="w-100 container py-5 team d-flex justify-content-between align-items-center gap-5"
        style={{ marginTop: "20%", marginBottom: "20%" }}
      >
        <div className="col my-5">
          <div data-aos="slide-up">
            <h2>Jobs For You:</h2>
          </div>

          <div
            className="p-2 mt-3 mb-3"
            style={{ borderLeft: "3.7px solid #07bc0c", fontSize: "1.1rem" }}
            data-aos="fade-up"
          >
            There are many variations of passages of Lorem Ipsum Fasts Fastsby
            humour, by injected humour, or coved ceilings.
          </div>
          <div data-aos="fade-up">
            <ul className="p-3 ps-0">
              <div className="d-flex gap-2" style={{ fontSize: "1.1rem" }}>
                <span style={{ color: "#07bc0c" }}>
                  <CiEdit />
                </span>
                <li> Apply to latest jobs</li>
              </div>
              <div className="d-flex gap-2" style={{ fontSize: "1.1rem" }}>
                <span style={{ color: "#07bc0c" }}>
                  <MdOutlineNotificationsActive />
                </span>
                <li>Get notified</li>
              </div>
              <div className="d-flex gap-2" style={{ fontSize: "1.1rem" }}>
                <span style={{ color: "#07bc0c" }}>
                  <MdPhoneCallback />
                </span>
                <li>Reach to millions of recruitors</li>
              </div>
            </ul>
          </div>
          <div data-aos="fade-up">
            <a href="#jobs">
              <button className="jobs-btn rounded">Browse Jobs</button>
            </a>
          </div>
        </div>
        <div className="col">
          <div data-aos="fade-up">
            <img src="/assets/team.png" className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs_FY;
