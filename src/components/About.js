import Header from "./Header";
import { BsDashLg, BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
import teamMembers from "./data/Team";
import { useSelector } from "react-redux";

const About = () => {
  const isDarkMode = useSelector((state) => state.jobs.darkMode);
  return (
    <div className="relative">
      <div>
        <Header />
      </div>
      <div className="banner-about">
        <div className="fixed-text-wrapper">
          <div className="fixed-text">
            <div data-aos="slide-up">
              <BsDashLg /> About Us <BsDashLg />
            </div>
          </div>
          <div className="fixed-text-2">
            <div data-aos="slide-up">
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                dui non diam eleifend egestas id a ligula.
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-3 my-5">
        <div data-aos="slide-up">
          <h3 className="text-center my-5 py-5">
            {" "}
            <BsDashLg /> Our Story <BsDashLg />
          </h3>
        </div>

        <div className="row d-flex justify-content-center my-5 mx-auto py-5 story-wrapper">
          <div className="col">
            <div data-aos="slide-up">
              <img
                src="https://images.unsplash.com/photo-1603357465999-241beecc2629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxjb21wYW55fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                className="w-100 "
              />
            </div>
          </div>
          <div className="col text-secondary ">
            <div className="p-4">
              <div data-aos="fade-up">
                <h4 className=" mt-4">We are Jobslab!</h4>
              </div>
              <div data-aos="fade-up">
                <p className="my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  eget lectus eu ex ornare porta euismod a libero. Phasellus
                  vehicula placerat enim at egestas. Aliquam suscipit felis in
                  massa hendrerit tristique. In augue diam, pellentesque nec
                  pulvinar in, sagittis ac nulla. Sed eu lectus vitae justo
                  vehicula viverra. massa hendrerit tristique. In augue diam,
                  pellentesque nec pulvinar in, sagittis ac nulla. Sed eu lectus
                  vitae justo vehicula viverra. vehicula viverra. massa
                  hendrerit tristique. In augue diam, pellentesque nec pulvinar
                  in, sagittis ac nulla. Sed eu lectus vitae justo vehicula
                  viverra. tristique. In augue diam, pellentesque nec pulvinar
                  in, sagittis ac nulla. Sed eu lectus vitae justo vehicula
                  viverra.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div data-aos="slide-up">
            <h3 className="text-center my-5 py-5">
              <BsDashLg /> Our Team <BsDashLg />
            </h3>
          </div>

          <div className="d-flex row  py-5 bg-amazing-wrapper align-items-center justify-content-center gap-5 mx-5">
            <div className="bg-amazing"></div>
            {teamMembers.map((e) => {
              return (
                <div
                  className="card col-sm-6 col-md-2 card-bg"
                  style={{ width: "18rem" }}
                  data-aos="fade-up"
                >
                  <img src={e.src} className="pt-3 card-img-top " alt="..." />
                  <div className="card-body text-center">
                    <p className="card-text text-success fw-bold">{e.name}</p>
                    <p className="card-text text-secondary">
                      <BsDashLg /> {e.role} <BsDashLg />
                    </p>
                    <div className="d-flex gap-5 justify-content-center">
                      <span className="text-secondary insta fs-4">
                        <BsInstagram />
                      </span>
                      <span className="text-secondary insta fs-4">
                        <BsLinkedin />
                      </span>
                      <span className="text-secondary insta fs-4">
                        <BsFacebook />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="container mt-5 py-4 "
        style={{ backgroundColor: isDarkMode ? "#333" : "white" }}
      >
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
    </div>
  );
};

export default About;
