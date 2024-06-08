import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdTime } from "react-icons/io";
import { LiaMoneyCheckSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const Jobs = ({ selectedJob, setselectTitle, setselectCategory }) => {
  const state = useSelector((state) => state.jobs);

  const [activeButton, setActiveButton] = useState(0);
  const [jobType, setjobType] = useState("");
  const handleButtonClick = (index) => {
    setActiveButton(index);
    if (index === 0) {
      // If "All" button is clicked, reset the job type filter and active button
      setjobType("");
      setselectCategory("");
      setselectTitle("");
      setActiveButton(0);
    } else if (index === 1) {
      setjobType("Full Time");
    } else if (index === 2) {
      setjobType("Part Time");
    } else if (index === 3) {
      setjobType("Internship");
    }
  };

  const selectedType = selectedJob.filter((job) => {
    if (jobType === "") {
      return true; // Return all jobs if no job type filter is selected
    }
    return job.type.toLowerCase().includes(jobType.toLowerCase());
  });

  return (
    <div className="container-fluid my-5 pt-5 " id="jobs">
      <div className="container  my-5 ">
        <div data-aos="slide-up">
          <h2 className="p-4">Latest Jobs:</h2>
        </div>

        <div className="d-flex justify-content-center">
          <div
            className="btn-group bg-white text-success my-5 "
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <label
              className={`btn btn-outline-success p-2 px-4 ${
                activeButton === 0 ? "active" : ""
              }`}
              onClick={() => {
                handleButtonClick(0);
              }}
            >
              All
            </label>

            <label
              className={`btn btn-outline-success p-2 px-4 ${
                activeButton === 1 ? "active" : ""
              }`}
              onClick={() => {
                handleButtonClick(1);
              }}
            >
              Full Time
            </label>

            <label
              className={`btn btn-outline-success p-2 px-4 ${
                activeButton === 2 ? "active" : ""
              }`}
              onClick={() => {
                handleButtonClick(2);
              }}
            >
              Part Time
            </label>

            <label
              className={`btn btn-outline-success p-2 px-4 ${
                activeButton === 3 ? "active" : ""
              }`}
              onClick={() => {
                handleButtonClick(3);
              }}
            >
              Internship
            </label>
          </div>
        </div>

        <div class="row">
          {Array.isArray(selectedType) && selectedType.length > 0 ? (
            selectedType.map((e) => {
              return (
                <div class="col-md-6 my-4 " key={e.id} data-aos="fade-up">
                  <div
                    class="card "
                    style={{
                      border: "1px solid #e0e0e0",
                    }}
                  >
                    <div className="d-flex justify-content-center align-items-center gap-0">
                      <div
                        className="mx-1 mx-md-4 logo-wrapper "
                        style={{ border: "1px solid #e0e0e0" }}
                      >
                        <img src={e.logo} className="w-100 logo" />
                      </div>
                      <div class="card-body ">
                        <Link
                          to={`/Job_des/${e.id}`}
                          key={e.id}
                          style={{ textDecoration: "none" }}
                        >
                          <h5 class="card-title text-success fw-bold ">
                            {e.title}
                          </h5>
                        </Link>
                        <p class="card-text text-secondary">{e.company}</p>
                      </div>
                      <div
                        className="p-4 pt-5 pb-5 "
                        style={{ borderLeft: "1px solid #e0e0e0" }}
                      >
                        <Link to="/Apply">
                          <button
                            className=" mx-3 p-2 bg-white apply-btn text-secondary"
                            style={{ border: "1px solid #e0e0e0 " }}
                          >
                            Apply
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="d-flex  mb-4  align-items-center text-secondary"
                      style={{
                        borderTop: "1px solid #e0e0e0",
                      }}
                    >
                      <div className="p-3 pb-1  job-item">
                        <span className="mx-1">
                          <SlLocationPin />
                        </span>
                        {e.location}
                      </div>
                      <div className="p-3 pb-1 job-item">
                        {" "}
                        <span className="mx-1">
                          <LiaMoneyCheckSolid />
                        </span>
                        ${e.salary}00
                      </div>
                      <div className="p-3 pb-1 job-item">
                        <span className="mx-1">
                          <IoMdTime />
                        </span>
                        {e.type}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="pt-5">No jobs matcheds</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
