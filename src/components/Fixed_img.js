import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Fixed_img = ({
  selectedCandiCate,
  selectCompany,
  setselectCompany,
  selectLocation,
  setselectLocation,
  selectCate,
  setselectCate,
  selectExp,
  setselectExp,
}) => {
  const state = useSelector((state) => state.candidates.candidates);
  const uniqueCategories = new Set();
  const filteredData = state.filter((categoryItem) => {
    if (!uniqueCategories.has(categoryItem.category)) {
      uniqueCategories.add(categoryItem.category);
      return true;
    }
    return false;
  });
  const uniqueLocation = new Set();
  const filteredLoc = state.filter((location) => {
    if (!uniqueLocation.has(location.location)) {
      uniqueLocation.add(location.location);
      return true;
    }
    return false;
  });
  const uniqueCom = new Set();
  let filteredCom = state.filter((company) => {
    if (!uniqueCom.has(company.company)) {
      uniqueCom.add(company.company);
      return true;
    }
    return false;
  });
  let uniqueExp = new Set();
  let filteredExp = state.filter((exp) => {
    if (!uniqueExp.has(exp.experience)) {
      uniqueExp.add(exp.experience);
      return true;
    }
    return false;
  });
  console.log(selectedCandiCate, "selcted");
  return (
    <div>
      <div className="fixed-img"></div>
      <div className="content container bg-danger">
        <span className="bg-white p-2 find my-border text-black">
          FIND YOUR CANDIDATES
        </span>
      </div>
      <div className="container bg-white shadow ">
        <div className="d-md-flex  align-items-center justify-content-around gap-5">
          <form className="post-form">
            <div className="row py-4" data-aos="fade-up">
              <div className="col-sm-6 pt-md-5 py-1 ">
                <select
                  class="form-select  "
                  aria-label="Default select example"
                  value={selectCate}
                  onChange={(e) => setselectCate(e.target.value)}
                >
                  <option selected>Select Category</option>
                  {filteredData.map((e) => {
                    return (
                      <>
                        <option>{e.category}</option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div className="col-sm-6 pt-md-5 py-1 mt-md-0 mt-2">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  value={selectLocation}
                  onChange={(e) => setselectLocation(e.target.value)}
                >
                  <option selected>Select Location</option>
                  {filteredLoc.map((e) => {
                    return (
                      <>
                        <option>{e.location}</option>
                      </>
                    );
                  })}
                </select>
              </div>

              <div className="col-sm-6 pt-md-5 py-1  mt-md-0 mt-2 ">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  value={selectCompany}
                  onChange={(e) => setselectCompany(e.target.value)}
                >
                  <option selected>Select Company</option>
                  {filteredCom.map((e) => {
                    return (
                      <>
                        <option>{e.company}</option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div className="col-sm-6 pt-md-5 py-1 mt-md-0 mt-2 ">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  value={selectExp}
                  onChange={(e) => setselectExp(e.target.value)}
                >
                  <option selected>Select Experience </option>
                  {filteredExp.map((e) => {
                    return (
                      <>
                        <option>{e.experience} </option>
                      </>
                    );
                  })}
                </select>
              </div>
            </div>
          </form>
          <div style={{ width: "20rem" }}>
            <a href="/#candidates">
              <button className="w-100 custom-btn">Search</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fixed_img;
