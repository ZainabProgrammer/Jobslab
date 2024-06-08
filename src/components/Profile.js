import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AiOutlinePhone,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";

import { BiLogoLinkedin } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { fetchCandidates } from "../api";
import { getSelectedCandidate } from "../features/CandidateSlice";
const Profile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const state = useSelector((state) => state.candidates.candidates);

  const cand_id = state.filter((e) => e.id === id);

  useEffect(() => {
    const bringCandidates = async () => {
      const cand_description = await fetchCandidates();
      dispatch(getSelectedCandidate(cand_description));
    };
    bringCandidates();
    window.scrollTo(0, 0);
  }, [dispatch, cand_id]);

  if (!cand_id) {
    return (
      <>
        <h4>loading....</h4>
      </>
    );
  }
  return (
    <div>
      <div className="container-fluid   ">
        <div className="row d-flex justify-content-center ">
          {cand_id.map((e) => {
            return (
              <>
                <div
                  data-aos="fade-up"
                  className="col-md-4 p-2  my-border my-3 mx-2 "
                  key={e.id}
                >
                  <div className="text-center  mt-2">
                    <img
                      style={{ width: "6rem", borderRadius: "50%" }}
                      src={e.image}
                    />
                    <h3>{e.name}</h3>
                    <h5>{e.role}</h5>
                    <div className="d-md-flex gap-3 justify-content-center align-items-center">
                      <span className="contact-icons">
                        <AiOutlineMail />
                      </span>
                      <span className="contact-icons">
                        <AiOutlineTwitter />
                      </span>
                      <span className="contact-icons">
                        <BiLogoLinkedin />
                      </span>
                      <span className="contact-icons">
                        <AiOutlinePhone />
                      </span>
                    </div>
                  </div>
                  <div className="my-border my-2 ">
                    <h3 className="mx-2 my-3">Professional Skills</h3>
                    <div className="d-flex gap-3 mx-2 ">
                      <div className="  p-1   my-2">
                        {e.skills.map((s) => {
                          return (
                            <div className="mx-1   ">
                              <li className="fs-5">{s}</li>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="my-border p-2  ">
                    <h3 className="">Profile Overview</h3>
                    <div>
                      <p className="fs-0">Title : {e.role}</p>
                      <p className="fs-0">Gender : {e.gender}</p>
                      <p className="fs-0">Experience : {e.experience} Years</p>
                      <p className="fs-0">Salary : ${e.salary}k</p>
                      <p className="fs-0">Qualification : Bachelors</p>
                      <p className="fs-0">Location : {e.location}</p>

                      <button className="w-100 custom-btn">Hire Me</button>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="col-md-7  p-2 my-border my-3 mx-4 px-5"
                >
                  <h3>About Me</h3>
                  <div>
                    <div className="">
                      I am an <span>{e.role}</span> is responsible for
                      developing applications for mobile devices powered by
                      Apple's iOS operating system. Ideally,I am a good person
                      in this field developer having proficiency with one of the
                      many skills like {e.skills} for this platform.
                    </div>
                    <h3 className="mt-3">Work Experience</h3>
                    <div className="my-3">
                      <div className="mb-2 mx-4  ">Microsoft (2012-2015)</div>

                      <div className="golu-wrapper d-flex my-3">
                        <div className="golu-line"></div>
                        <div className="golu"></div>
                        <div className=" mx-5  explanation-wrapper">
                          <p className="explanation   ">{e.roles[0]}</p>
                          <div>
                            There are many variations of passages of available,
                            but the majority alteration in some form. As a
                            highly skilled and successfull product development
                            and design specialist with more than 4 Years of My
                            experience. There are many variations of passages of
                            available, but the majority alteration in some form.
                            As a highly skilled and successfull product
                            development and design specialist with more than 4
                            Years of My experience.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-3">
                      <div className="mb-2 mx-4  ">
                        {e.company} (20015-2018)
                      </div>

                      <div className="golu-wrapper d-flex my-3">
                        <div className="golu-line"></div>
                        <div className="golu"></div>
                        <div className=" mx-5  explanation-wrapper">
                          <p className="explanation   ">{e.roles[1]}</p>
                          <div>
                            There are many variations of passages of available,
                            but the majority alteration in some form. As a
                            highly skilled and successfull product development
                            and design specialist with more than 4 Years of My
                            experience. There are many variations of passages of
                            available, but the majority alteration in some form.
                            As a highly skilled and successfull product
                            development and design specialist with more than 4
                            Years of My experience.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3>Education</h3>
                  <div>
                    <div className="my-3">
                      <div className="mb-2 mx-4  ">{e.uni} (2018-2023)</div>

                      <div className="golu-wrapper d-flex my-3">
                        <div className="golu-line"></div>
                        <div className="golu"></div>
                        <div className=" mx-5  explanation-wrapper">
                          <p className="explanation   ">Bachelors</p>
                          <div>Graduated from {e.uni} with cgpa of 4.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
