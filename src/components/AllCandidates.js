import React from "react";
// import { useSelector } from "react-redux";
import { TbChecklist } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
const AllCandidates = ({
  selectedCandiCate,
  setselectCompany,
  setselectLocation,
  setselectCate,
  setselectExp,
}) => {
  // const state = useSelector((state) => state.candidates.candidates);

  const handleClear = () => {
    setselectLocation("");
    setselectCate("");
    setselectCompany("");
    setselectExp("");
  };
  return (
    <div className="container-fluid  my-5 pt-5" id="candidates">
      <div className="container py-5">
        <div data-aos="slide-up">
          <h3 className="mb-4 pb-5"> Meet our Candidates</h3>
        </div>

        <div className="row text-md-start text-center ">
          {selectedCandiCate.length > 0 ? (
            selectedCandiCate.map((e) => {
              return (
                <>
                  <div
                    className="col-ms-8 box  my-border p-2 my-2"
                    data-aos="fade-up"
                  >
                    <div className="bar-wrapper">
                      <div className="bar"></div>
                    </div>
                    <div className="d-md-flex aling-items-center justify-content-between">
                      <div className="d-md-flex align-items-center gap-5 ">
                        <img
                          src={e.image}
                          style={{ width: "6rem" }}
                          alt="img"
                        />

                        <div>
                          <p className="mb-0 mt-3 mt-md-0">{e.role}</p>
                          <h4>{e.name}</h4>
                          <div className="d-flex  justify-content-start-md justify-content-center gap-1 mb-0 text-secondary">
                            {" "}
                            <span className="">
                              <TbChecklist />
                            </span>
                            {e.skills.map((s) => {
                              return <div className="text-secondary">{s}</div>;
                            })}
                          </div>
                          <div className="d-md-flex gap-1 mt-0 text-secondar ">
                            <div className="text-secondary ">
                              <span>
                                <MdLocationOn />
                              </span>
                              {e.location}
                            </div>
                            <span className="text-secondary">
                              <span>@ </span>
                              {e.company}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-center">
                        {" "}
                        <Link to={`/Profile/${e.id}`}>
                          <button className="custom-btn mt-2 mt-md-0">
                            View Resume
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <>
              <h5 className="mt-3 text-secondary">No candidates matched</h5>
            </>
          )}
        </div>
        <div>
          {selectedCandiCate.length <= 3 && (
            <button className="custom-btn mt-4" onClick={handleClear}>
              Clear filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCandidates;
