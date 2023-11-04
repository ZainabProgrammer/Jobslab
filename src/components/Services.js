import React from "react";
import { BsDashLg } from "react-icons/bs";
import Header from "./Header";
import servies from "./data/Services";
import Footer from "./Footer";
const Services = () => {
  return (
    <div>
      <div className="relative">
        <div>
          <Header />
        </div>
        <div className="banner-services">
          <div className="fixed-text-wrapper">
            <div className="fixed-text">
              <div data-aos="slide-up">
                <BsDashLg /> Our Services <BsDashLg />
              </div>
            </div>
            <div className="fixed-text-2">
              <div data-aos="slide-up">
                <blockquote>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eu dui non diam eleifend egestas id a ligula.
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid p-3 my-5">
          <div data-aos="slide-up">
            <h3 className="text-center my-5 py-5">
              {" "}
              <BsDashLg /> What we provide <BsDashLg />
            </h3>
          </div>

          <div className="services container">
            <div className="row mx-3">
              {servies.map((e) => {
                return (
                  <>
                    <div
                      className="col-lg-4   col-md-6 col-sm-6 my-4 "
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        className=" py-2 rounded shadow service-box"
                        style={{ backgroundColor: "#9998" }}
                        data-aos="fade-up"
                      >
                        <div className="fs-3 text-center p-3  ">
                          <span
                            className=" p-3   fw-bold"
                            style={{
                              borderRadius: "50px",
                              backgroundColor: "#9993",
                              color: "#3FB63F",
                            }}
                          >
                            {" "}
                            {e.icon}
                          </span>
                        </div>
                        <h4 className="my-3 text-center">{e.title}</h4>
                        <p className="text-center p-2 ">{e.explanation}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5 ">
        <div
          className="d-flex justify-content-between align-items-center py-3 shadow "
          style={{ backgroundColor: " #3FB63F", borderRadius: "50px" }}
        >
          <p className="ms-5 text-white my-auto">Get Help From the Experts</p>
          <button className="btn custom-btn bg-white text-success  rounded py-3 me-5">
            Contact
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
