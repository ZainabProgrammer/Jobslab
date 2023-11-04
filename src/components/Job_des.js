import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchJobsData } from "../api";
import { selectedJobReducer } from "../features/JobSlice";
import { useParams } from "react-router-dom";
const Job_des = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const selectedOne = useSelector((state) => state.jobs.selectedJob);
  const allJobs = useSelector((state) => state.jobs.data);
  const job_id = allJobs.filter((e) => e.id === id);
  console.log(job_id, "job_id");
  // console.log(selectedOne, "one cate");
  useEffect(() => {
    const fetchJobDescription = async () => {
      const jobDescription = await fetchJobsData(); // Replace this with your actual function to fetch data from Firebase.
      dispatch(selectedJobReducer(jobDescription));
    };
    console.log(id, "id");
    fetchJobDescription();
    window.scrollTo(0, 0);
  }, [job_id, dispatch]);

  if (!job_id) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div class="my-border mt-3 container">
        <div class="card-body">
          <div class="row my-5">
            {job_id.map((e) => {
              return (
                <>
                  <div class="col-lg-7 col-md-7 col col-sm-6">
                    <div className="d-flex align-items-center ">
                      <div
                        className="mt-2"
                        style={{ width: "100px", border: "1px solid #0101" }}
                      >
                        <img src={e.logo} className="w-100 p-2" />
                      </div>
                      <div className="mx-3 mt-2">
                        <span className="fs-4">{e.title}</span>
                        <br />
                        <span>{e.total} Vacancies</span>
                      </div>
                    </div>
                    <div>
                      <ul className="d-flex flex-md-row flex-column align-items-center-md align-itmes-start-sm gap-5 mt-5">
                        <li className="my-border p-2">Experience: 2 year</li>
                        <li className="my-border p-2 ">
                          Employee Type:{e.type}
                        </li>
                        <li className="my-border p-2">
                          Offered salary:${e.salary}
                        </li>
                      </ul>
                    </div>

                    <h4 class="box-title my-5">Job Details</h4>

                    <div class="accordion " id="accordionExample">
                      <div class="accordion-item bg-transparent text-success">
                        <h2 class="accordion-header" id="headingOne ">
                          <button
                            class="accordion-button bg-transparent text-secondary outline-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Job Description
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">
                            <p>{e.description}</p>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item bg-transparent text-success">
                        <h2 class="accordion-header" id="headingTwo">
                          <button
                            class="accordion-button collapsed bg-transparent text-secondary"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Skills
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">skills</div>
                        </div>
                      </div>
                      <div class="accordion-item bg-transparent text-success">
                        <h2 class="accordion-header" id="headingThree">
                          <button
                            class="accordion-button collapsed bg-transparent text-secondary"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Qualifications
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body">Bachelors</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-5 col-md-5 col-sm-6">
                    <div class="white-box ">
                      <h2>Job Overview:</h2>
                      <div>
                        <img className="w-100" src={e.image} />
                      </div>
                      <div className="w-100 my-4">
                        <ul>
                          <li className="my-2 ">Title: {e.title}</li>
                          <li className="my-2 ">Experience: 2 Years</li>
                          <li className="my-2 ">Location: {e.location}</li>
                          <li className="my-2 ">Salary: ${e.salary}</li>
                          <li className="my-2 ">Qualifications: Bachelors</li>
                          <li className="my-2 ">Posted: {e.time} hours ago</li>
                          <Link to="/Apply">
                            <button
                              className="apply-btn p-2 px-4 my-3"
                              style={{ border: "none" }}
                            >
                              Apply
                            </button>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <Link to="/">
          <button className="btn mb-4 bg-success text-white my-5">
            Go back to Jobs
          </button>
        </Link>
      </div>
    </>
  );
};

export default Job_des;
