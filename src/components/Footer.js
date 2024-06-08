import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container-fluid footer ">
      <footer className=" container ">
        <div className="row container-fluid   d-flex justify-content-evenly align-items-center">
          <div className="col my-5">
            <Link to="/">
              <div style={{ position: "relative" }}>
                <div data-aos="fade-up">
                  <img
                    src="/assets/jobsLogo.png"
                    style={{ width: "200px", objectFit: "cover" }}
                    alt="logo"
                  />
                </div>
              </div>
            </Link>
            <div data-aos="fade-up">
              <p className="my-4 ">
                ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantiu doloremque laudantium
              </p>
            </div>
          </div>
          <div className="col my-5">
            <div data-aos="fade-up">
              <h3 className="text-white font-bold ms-4">Useful Links</h3>
            </div>

            <ul>
              <Link
                to="/About"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <div data-aos="fade-up">
                  <li>About</li>
                </div>
              </Link>
              <Link
                to="/Services"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <div data-aos="fade-up">
                  <li>Services</li>
                </div>
              </Link>
              <Link
                to="/Contact"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <div data-aos="fade-up">
                  <li>Contact</li>
                </div>
              </Link>
              <a
                href="/#jobs"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <div data-aos="fade-up">
                  <li>Browse Jobs</li>
                </div>
              </a>
              <a
                href="/#candidates "
                className="link"
                style={{ textDecoration: "none" }}
              >
                <div data-aos="fade-up">
                  <li>Candidates</li>
                </div>
              </a>
            </ul>
          </div>
          <div className="col my-5">
            <div data-aos="fade-up">
              <h3 className="text-white font-bold ms-4">Useful Links</h3>
            </div>

            <ul>
              <Link
                to="/About"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <div data-aos="fade-up">
                  <li>About</li>
                </div>
              </Link>
              <Link
                to="/Services"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <div data-aos="fade-up">
                  <li>Services</li>
                </div>
              </Link>
              <Link
                to="/Contact"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <div data-aos="fade-up">
                  <li>Contact</li>
                </div>
              </Link>
              <a
                href="/#jobs"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <div data-aos="fade-up">
                  <li>Browse Jobs</li>
                </div>
              </a>
              <a
                href="/#candidates "
                className="link"
                style={{ textDecoration: "none" }}
              >
                <div data-aos="fade-up">
                  <li>Candidates</li>
                </div>
              </a>
            </ul>
          </div>
          <div className="col my-5">
            <div data-aos="fade-up">
              <h3 className="text-white font-bold ms-4">Useful Links</h3>
            </div>

            <ul>
              <Link
                to="/About"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <div data-aos="fade-up">
                  <li>About</li>
                </div>
              </Link>
              <Link
                to="/Services"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <div data-aos="fade-up">
                  <li>Services</li>
                </div>
              </Link>
              <Link
                to="/Contact"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <div data-aos="fade-up">
                  <li>Contact</li>
                </div>
              </Link>
              <a
                href="/#jobs"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <div data-aos="fade-up">
                  <li>Browse Jobs</li>
                </div>
              </a>
              <a
                href="/#candidates "
                className="link"
                style={{ textDecoration: "none" }}
              >
                <div data-aos="fade-up">
                  <li>Candidates</li>
                </div>
              </a>
            </ul>
          </div>
        </div>
        <div className="p-4 border-top border-secondary">
          <div className="text-center ">
            &copy; by <span className="text-success">Jobslab</span>. All Rights
            Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
