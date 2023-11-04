import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PostJob = () => {
  const [value, setvalue] = useState("");
  const [valueErr, setvalueErr] = useState("");
  const [email, setemail] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [compErr, setcompErr] = useState("");
  const [webErr, setwebErr] = useState("");
  const [compWeb, setcompWeb] = useState("");
  const [title, settitle] = useState("");
  const [titleErr, settitleErr] = useState("");
  const [salary, setsalary] = useState("");
  const [salaryErr, setsalaryErr] = useState("");
  const [unsavedChanges, setunsavedChanges] = useState(false);
  const required = "Required!";
  const handleChange = (e) => {
    setvalue(e.target.value);
    setvalueErr("");
    setunsavedChanges(true);
  };
  const handleSalary = (e) => {
    setsalary(e.target.value);
    setsalaryErr("");
    setunsavedChanges(true);
  };
  const handleEmail = (e) => {
    setemail(e.target.value);
    setemailErr("");
    setunsavedChanges(true);
  };
  const handleComp = (e) => {
    setcompanyName(e.target.value);
    setcompErr("");
    setunsavedChanges(true);
  };
  const handleWeb = (e) => {
    setcompWeb(e.target.value);
    setwebErr("");
    setunsavedChanges(true);
  };
  const handleTitle = (e) => {
    settitle(e.target.value);
    settitleErr("");
    setunsavedChanges(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setunsavedChanges(true);
    !value || !email || !compWeb || !companyName ? notify() : success();

    if (!value) {
      setvalueErr(required);
    } else setvalueErr("");
    if (!email) {
      setemailErr(required);
    } else if (!email.includes("@gmail.com")) {
      setemailErr("Enter valid email!");
    }
    if (!salary) {
      setsalaryErr(required);
    } else if (salary <= 0) {
      setsalaryErr("Please enter positive numbers only!");
    }
    if (!compWeb) {
      setwebErr(required);
    } else if (!compWeb.includes(".com" || ".org" || ".inc")) {
      setwebErr("Enter valid URL!");
    }
    if (!companyName) {
      setcompErr(required);
    }
    if (!title) {
      settitleErr(required);
    }
  };
  const notify = () => {
    return toast.error("Fill in the required fields !");
  };

  const navigate = useNavigate();
  const success = () => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
    return toast.success("Job posted successfully!");
  };

  // implementing accessibility
  const inputsRef = useRef([]);
  const handleArrowNavigation = (e) => {
    const currentIndex = inputsRef.current.findIndex(
      (ref) => ref === document.activeElement
    );

    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      const nextIndex = currentIndex + 1;
      if (nextIndex < inputsRef.current.length) {
        inputsRef.current[nextIndex].focus();
      }
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      const prevIndex = currentIndex - 1;
      if (prevIndex >= 0) {
        inputsRef.current[prevIndex].focus();
      }
    }
  };

  useEffect(() => {
    // Add the event listener for arrow key navigation
    document.addEventListener("keydown", handleArrowNavigation);
    window.scrollTo(0, 0);
    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("keydown", handleArrowNavigation);
    };
  }, []);

  // implementing the unsaved changes trigger:

  useEffect(() => {
    const handleUnsavedChanges = (e) => {
      if (unsavedChanges) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleUnsavedChanges);
    return () => {
      window.removeEventListener("beforeunload", handleUnsavedChanges);
    };
  }, [unsavedChanges]);

  return (
    <div className="container-fluid ">
      <div className="container  ">
        <div className="container text-center py-4">
          <div data-aos="slide-up">
            <h2 className="py-3">Have an account?</h2>
          </div>

          <div className="d-flex  align-items-center justify-content-center gap-3">
            <div className="d-flex align-items-center justify-content-center gap-3 p-4 my-border">
              <Link to="/Signup">
                <button className="btn custom-btn">Sign Up</button>
              </Link>
              <div>If you don't have any account. Please create a new.</div>
            </div>
          </div>
        </div>
        <div className="d-flex mb-5 flex-row-reverse justify-content-around align-items-center">
          <h2>Post Jobs Here</h2>
          <img
            src="https://thumbs.dreamstime.com/b/job-vacancy-screen-vector-illustration-man-woman-person-search-work-online-business-worker-candidate-look-job-vacancy-228957320.jpg"
            className="w-50"
          />
        </div>

        <h2>Job Informations</h2>
        <div>
          <form className="post-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <input
                  style={{ color: "inherit" }}
                  className="w-100 p-2 bg-transparent"
                  type="text"
                  placeholder="Job Title"
                  value={title}
                  onChange={handleTitle}
                  required
                  ref={(element) => (inputsRef.current[0] = element)}
                />
                <div className="text-danger pt-1" style={{ fontSize: ".8rem" }}>
                  {titleErr}
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <input
                  style={{ color: "inherit" }}
                  type="email"
                  className="w-100 p-2 bg-transparent"
                  placeholder="Your Email"
                  value={email}
                  onChange={handleEmail}
                  required
                  ref={(element) => (inputsRef.current[1] = element)}
                />
                <div className="text-danger pt-1" style={{ fontSize: ".8rem" }}>
                  {emailErr}
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <input
                  style={{ color: "inherit" }}
                  type="text"
                  className="w-100 p-2 bg-transparent"
                  placeholder="Job Location"
                  ref={(element) => (inputsRef.current[2] = element)}
                />
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <input
                  style={{ color: "inherit" }}
                  type="number"
                  className="w-100 p-2 bg-transparent"
                  placeholder="Expected Salary"
                  onChange={handleSalary}
                  value={salary}
                  required
                  ref={(element) => (inputsRef.current[3] = element)}
                />
                <div
                  className="text-danger pt-1 "
                  style={{ fontSize: ".8rem" }}
                >
                  {salaryErr}
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <label className="">
                  {" "}
                  Date of Joining:
                  <input
                    type="date"
                    className="w-100 p-2 bg-transparent"
                    style={{ color: "inherit" }}
                    placeholder="Date of Joining"
                    ref={(element) => (inputsRef.current[4] = element)}
                  />
                </label>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <label className="">
                  {" "}
                  Gender:
                  <input
                    style={{ color: "inherit" }}
                    type="text"
                    className="w-100 p-2 bg-transparent"
                    placeholder="Male or Female"
                    ref={(element) => (inputsRef.current[5] = element)}
                  />
                </label>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <input
                  style={{ color: "inherit" }}
                  type="url"
                  className="w-100 p-2 bg-transparent"
                  placeholder="LinkedIn Url"
                  ref={(element) => (inputsRef.current[6] = element)}
                />
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <input
                  style={{ color: "inherit" }}
                  type="url"
                  className="w-100 p-2 bg-transparent"
                  placeholder="Github Url"
                  ref={(element) => (inputsRef.current[7] = element)}
                />
              </div>
              <div className="col-sm-7 col-md-7 col-lg-7 my-2">
                <textarea
                  style={{ color: "inherit" }}
                  className="w-100 p-2 bg-transparent"
                  placeholder="Disucss Job Requirements"
                  cols={6}
                  rows={5}
                  ref={(element) => (inputsRef.current[8] = element)}
                />
              </div>
              <h2 className="my-3">Company Informations</h2>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <input
                  style={{ color: "inherit" }}
                  type="text"
                  className="w-100 p-2 bg-transparent"
                  placeholder="Company Name"
                  required
                  value={companyName}
                  onChange={handleComp}
                  ref={(element) => (inputsRef.current[9] = element)}
                />
                <div className="pt-1 text-danger" style={{ fontSize: ".8rem" }}>
                  {compErr}
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <input
                  style={{ color: "inherit" }}
                  type="text"
                  className="w-100 p-2 bg-transparent"
                  placeholder="Company Website"
                  required
                  value={compWeb}
                  onChange={handleWeb}
                  ref={(element) => (inputsRef.current[10] = element)}
                />
                <div className="pt-1 text-danger" style={{ fontSize: ".8rem" }}>
                  {webErr}
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <input
                  style={{ color: "inherit" }}
                  type="text"
                  className="w-100 p-2 bg-transparent"
                  placeholder="Company Video URL"
                  ref={(element) => (inputsRef.current[11] = element)}
                />
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <input
                  style={{ color: "inherit" }}
                  type="text"
                  className="w-100 p-2 bg-transparent"
                  placeholder="LinkedIn Username"
                  ref={(element) => (inputsRef.current[12] = element)}
                />
              </div>
              <div className="col-sm-7 col-md-7 col-lg-7 my-2">
                <textarea
                  style={{ color: "inherit" }}
                  className="w-100 p-2 bg-transparent"
                  placeholder="Company Description"
                  cols={6}
                  rows={5}
                  ref={(element) => (inputsRef.current[13] = element)}
                />
              </div>{" "}
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <label>
                  {" "}
                  <div className="container">Company Logo (optional)</div>
                  <input
                    style={{ color: "inherit" }}
                    type="file"
                    className="w-100 p-2 mx-1 bg-transparent"
                    placeholder="Upload Resume"
                    ref={(element) => (inputsRef.current[14] = element)}
                  />
                </label>
                <div className="container text-secondary">
                  Maximum file Size: 2MB
                </div>
                <button className="btn custom-btn my-3" onClick={handleSubmit}>
                  Post A Job
                </button>
                <ToastContainer />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
