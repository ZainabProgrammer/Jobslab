import React from "react";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";
const Home = ({
  selectCategory,
  selectTitle,
  setselectCategory,
  setselectTitle,
}) => {
  const state = useSelector((state) => state.jobs.data);
  const uniqueCategories = new Set();

  // Filter out duplicates and add only unique categories to the array
  const filteredData = state.filter((categoryItem) => {
    if (!uniqueCategories.has(categoryItem.category)) {
      uniqueCategories.add(categoryItem.category);
      return true;
    }
    return false;
  });

  return (
    <>
      <div className=" home d-flex container justify-content-between">
        <div className="col banner ">
          {/* <PiTriangleFill className="triangle" /> */}{" "}
          <img src="/assets/back.png" className="triangle" alt="bean-bag" />
          <img
            src="/assets/personWithLaptop.png"
            style={{ width: "25rem", objectFit: "cover" }}
            className="boy-img"
            alt="boy"
          />
        </div>
        <div className="col-md-5 description ">
          <div data-aos="fade-up">
            <h2 className="fw-bold p-4 pb-2 " style={{ fontSize: "1.4rem" }}>
              Our Excellent candidates find Job
              <div className="my-text">
                <TypeAnimation
                  sequence={[
                    "Offers", // Types 'One'
                    2000, // Waits 1s
                    " Placements", // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    " benefits", // Types 'Three' without deleting 'Two'
                    2000,
                    () => {},
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: "2em", display: "inline-block" }}
                />
              </div>
            </h2>
          </div>
          <div data-aos="fade-up">
            <p className="p-4 pt-1" style={{ fontSize: "1.4rem" }}>
              There are many variations passages of Lorem Ipsum Fasts by
              injected humour, or randomised words which...
            </p>
          </div>

          {/* starting search area */}

          <div data-aos="slide-up" className="search  rounded">
            <div className=" w-100 ">
              <div className="container mt-4 p-4">
                <div className="row">
                  <div className="col-md-6  offset-md-3">
                    <div className="form-group ">
                      <label htmlFor="exampleSelect" className="mb-2">
                        Job Title:
                      </label>

                      <select
                        className="form-control"
                        id="exampleSelect"
                        value={selectTitle}
                        onChange={(e) => setselectTitle(e.target.value)}
                      >
                        <option value="select" selected>
                          Select
                        </option>
                        {filteredData.map((e) => {
                          return (
                            <option value={e.title} key={e.id}>
                              {e.title}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="form-group mt-4 ">
                      <label htmlFor="exampleSelect" className="mb-2">
                        Categories:
                      </label>
                      <select
                        className="form-control"
                        id="exampleSelect"
                        value={selectCategory}
                        onChange={(e) => setselectCategory(e.target.value)}
                      >
                        <option value="select" selected>
                          Select
                        </option>
                        {filteredData.map((e) => {
                          return (
                            <option value={e.category} key={e.id}>
                              {e.category}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <a href="/#jobs">
                      <button className="btn custom-btn w-100 mt-5 mb-3 ">
                        Search
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
