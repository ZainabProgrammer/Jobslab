import React from "react";
import { BsDashLg } from "react-icons/bs";
import Header from "./Header";
import Footer from "./Footer";
import { BiSolidSend } from "react-icons/bi";
const Contact = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <div>
            <Header />
          </div>
          <div className="banner-contact">
            <div className="fixed-text-wrapper">
              <div className="fixed-text">
                <div data-aos="slide-up">
                  <BsDashLg /> Contact US <BsDashLg />
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
                <BsDashLg /> Connect With Us <BsDashLg />
              </h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex  align-items-center">
            <div className="col-md-6">
              <div class="mapouter">
                {/* <div class="gmap_canvas">
                  <iframe
                    class="gmap_iframe w-100 rounded"
                    style={{ height: "500px" }}
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Indeed&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </div> */}
                <div className="gmap_canvas">
                  <iframe
                    class="gmap_iframe w-100 rounded"
                    style={{ height: "500px" }}
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    title="iframe"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  >
                    <a href="https://www.gps.ie/">gps devices</a>
                  </iframe>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <form className="post-form">
                <h3 className="py-4 ">Feel free to ask any query!</h3>
                <div className="mb-3">
                  <label
                    className="form-label"
                    htmlFor="form3Example3c"
                    style={{
                      color: "currentcolor",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="form3Example3c"
                    className="form-control "
                    style={{
                      backgroundColor: "transparent",
                      color: "#07bc0c",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label
                    className="form-label"
                    htmlFor="form3Example3c"
                    style={{
                      color: "currentcolor",
                    }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="form3Example3c"
                    className="form-control "
                    style={{
                      backgroundColor: "transparent",
                      color: "#07bc0c",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                    style={{
                      color: "currentcolor",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control "
                    id="exampleFormControlTextarea1"
                    rows="3"
                    style={{
                      backgroundColor: "	transparent",
                      color: "#07bc0c",
                    }}
                  ></textarea>
                </div>
                <button className="btn custom-btn px-4 py-2 mt-3">
                  <BiSolidSend />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="container my-5 ">
          <div
            className="d-flex justify-content-between align-items-center py-3 shadow "
            style={{ backgroundColor: " #3FB63F", borderRadius: "50px" }}
          >
            <p className="ms-5 text-white my-auto">
              Want to read our newsletter in your inbox?
            </p>
            <button className="btn custom-btn bg-white text-success  rounded py-3 me-5">
              Subscribe
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
