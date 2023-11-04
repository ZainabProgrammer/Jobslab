import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Apply = () => {
  const [emailValue, setemailValue] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [startValue, setstartValue] = useState("");
  const [startErr, setstartErr] = useState("");
  const [endValue, setendValue] = useState("");
  const [endErr, setendErr] = useState("");
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const handleEmail = (e) => {
    setemailValue(e.target.value);
    setemailErr("");
    setUnsavedChanges(true);
  };
  const handleStart = (e) => {
    setstartValue(e.target.value);
    setstartErr("");
    setUnsavedChanges(true);
  };
  const handleEnd = (e) => {
    setendValue(e.target.value);
    setendErr("");
    setUnsavedChanges(true);
  };
  const notify = () => {
    return toast.error("Fill in the required fields !");
  };
  const navigate = useNavigate();
  const success = () => {
    setTimeout(() => {
      navigate("/#jobs");
    }, 5000);
    return toast.success("Application submitted successfully!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUnsavedChanges(false);

    if (
      !emailValue ||
      !startValue ||
      !endValue ||
      endValue < startValue ||
      endValue === startValue
    ) {
      // Show error toast if any of the fields are invalid
      notify();
    } else {
      // Show success toast if all fields are valid
      success();
    }

    if (!emailValue) {
      setemailErr("Required");
    } else if (!emailValue.includes("@gmail.com")) {
      setemailErr("Enter valid Email");
    } else {
      setemailErr("");
    }

    if (!startValue) {
      setstartErr("Required");
    }
    if (!endValue) {
      setendErr("Required");
    } else if (endValue < startValue) {
      setendErr("End date should not less than start date");
    } else if (endValue === startValue) {
      setendErr("Start and End dates should not be same");
    } else setendErr("");
  };
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (unsavedChanges) {
        e.preventDefault();
        e.returnValue = ""; // This is required for Chrome
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [unsavedChanges]);

  return (
    <div className="container-fluid ">
      <div className="container ">
        <div className="container text-center py-4">
          <h2>Have an account?</h2>
          <div className="d-flex  align-items-center justify-content-center gap-3">
            <div className="d-flex align-items-center justify-content-center gap-3 p-4 my-border">
              <Link to="/Signup">
                <button className="btn custom-btn">Sign Up</button>
              </Link>
              <div>If you don't have any account. Please create a new</div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="d-flex align-items-center justify-content-around flex-row-reverse"
        >
          <h2>Create Your Resume</h2>
          <img
            src="https://img.freepik.com/free-vector/tiny-cartoon-worker-holding-huge-pencil-resume_778687-1184.jpg?w=2000"
            className="w-50 mb-5 py-5 "
          />
        </div>

        <div>
          <form className="post-form" onSubmit={handleSubmit}>
            <div className="row" data-aos="fade-up">
              <h3 className="my-4">Personal Information</h3>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <lable for="email"></lable>
                <input
                  className="w-100 p-2 rounded"
                  type="text"
                  placeholder="Your Full Name"
                  style={{
                    backgroundColor: "transparent",
                    color: "currentcolor",
                  }}
                />
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <input
                  type="email"
                  className="w-100 p-2 rounded"
                  placeholder="Your Email"
                  required
                  value={emailValue}
                  onChange={handleEmail}
                  style={{
                    backgroundColor: "transparent",
                    color: "currentcolor",
                  }}
                />
                <span
                  className="text-danger mt-0 mx-2"
                  style={{ fontSize: ".8rem" }}
                >
                  {" "}
                  {emailErr}
                </span>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <input
                  type="text"
                  className="w-100 p-2 rounded"
                  placeholder="Professional Title"
                  style={{
                    backgroundColor: "transparent",
                    color: "currentcolor",
                  }}
                />
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <input
                  type="text"
                  className="w-100 p-2 rounded"
                  placeholder="Location"
                  style={{
                    backgroundColor: "transparent",
                    color: "currentcolor",
                  }}
                />
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <lable className="">
                  {" "}
                  Date of Birth:
                  <input
                    type="date"
                    className="w-100 p-2 rounded "
                    placeholder="Date of Birth"
                    style={{
                      backgroundColor: "transparent",
                      color: "currentcolor",
                    }}
                  />
                </lable>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <lablel className="">
                  {" "}
                  Gender:
                  <input
                    type="text"
                    className="w-100 p-2 rounded "
                    placeholder="Male or Female"
                    style={{
                      backgroundColor: "transparent",
                      color: "currentcolor",
                    }}
                  />
                </lablel>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <input
                  type="url"
                  className="w-100 p-2 rounded "
                  placeholder="LinkedIn Url"
                  style={{
                    backgroundColor: "transparent",
                    color: "currentcolor",
                  }}
                />
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <input
                  type="url"
                  className="w-100 p-2 rounded "
                  placeholder="Github Url"
                  style={{
                    backgroundColor: "transparent",
                    color: "currentcolor",
                  }}
                />
              </div>
              <div className="col-sm-7 col-md-7 col-lg-7 my-2">
                <textarea
                  className="w-100 p-2 rounded "
                  placeholder="Tell us something unique about you"
                  cols={6}
                  rows={5}
                  style={{
                    backgroundColor: "transparent",
                    color: "currentcolor",
                  }}
                />
              </div>
              <h2 className="my-3" data-aos="fade-up">
                Education
              </h2>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <input
                  type="text"
                  className="w-100 p-2 rounded "
                  placeholder="Institution Name"
                  style={{
                    backgroundColor: "transparent",
                    color: "currentcolor",
                  }}
                />
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <input
                  type="text"
                  className="w-100 p-2 rounded "
                  placeholder="Qualification"
                  style={{
                    backgroundColor: "transparent",
                    color: "currentcolor",
                  }}
                />
              </div>
              <div className="col-sm-6  col-md-6 col-lg-6 my-2">
                Start date
                <input
                  type="date"
                  className="w-100 p-2 rounded "
                  placeholder="Start Date"
                  required
                  value={startValue}
                  onChange={handleStart}
                  style={{
                    backgroundColor: "transparent",
                    color: "currentcolor",
                  }}
                />
                <span
                  className="text-danger mt-0 mx-2"
                  style={{ fontSize: ".8rem" }}
                >
                  {" "}
                  {startErr}
                </span>
              </div>
              <div className="col-sm-6  col-md-6 col-lg-6 my-2">
                End date
                <input
                  type="date"
                  className="w-100 p-2 rounded "
                  placeholder="Start Date"
                  required
                  value={endValue}
                  onChange={handleEnd}
                  style={{
                    backgroundColor: "transparent",
                    color: "currentcolor",
                  }}
                />
                <span
                  className="text-danger mt-0 mx-2"
                  style={{ fontSize: ".8rem" }}
                >
                  {" "}
                  {endErr}
                </span>
              </div>
              <div className="col-sm-7 col-md-7 col-lg-7 my-2">
                <textarea
                  className="w-100 p-2 rounded"
                  placeholder="Tell us something about co-curricular activities"
                  cols={6}
                  rows={5}
                  style={{
                    backgroundColor: "transparent",
                    color: "currentcolor",
                  }}
                />
              </div>{" "}
              <h2 data-aos="fade-up" className="my-3">
                Work Experience
              </h2>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <input
                  type="text"
                  className="w-100 p-2 rounded "
                  placeholder="Empoloyer Name"
                  style={{
                    backgroundColor: "transparent",
                    color: "currentcolor",
                  }}
                />
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2">
                <input
                  type="text"
                  className="w-100 p-2 rounded "
                  placeholder="Job Title"
                  style={{
                    backgroundColor: "transparent",
                    color: "currentcolor",
                  }}
                />
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2 ">
                Start Date
                <input
                  type="date"
                  className="w-100 p-2 rounded "
                  placeholder=""
                  style={{
                    backgroundColor: "transparent",
                    color: "currentcolor",
                  }}
                />
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 my-2 ">
                End Date
                <input
                  type="date"
                  className="w-100  p-2 rounded "
                  placeholder=""
                  style={{
                    backgroundColor: "transparent",
                    color: "currentcolor",
                  }}
                />
              </div>
              <div className="col-sm-7 col-md-7 col-lg-7 my-2">
                <textarea
                  className="w-100 p-2 rounded "
                  placeholder="Tell us something about your projects"
                  cols={6}
                  rows={5}
                  style={{
                    backgroundColor: "transparent",
                    color: "currentcolor",
                  }}
                />
              </div>{" "}
            </div>
            <div data-aos="fade-up" className="col-sm-6 col-md-6 col-lg-6 my-2">
              <label>
                {" "}
                <div className="container">Upload Your Resume</div>
                <input
                  type="file"
                  className="w-100 p-2 mx-1"
                  placeholder="Upload Resume"
                  style={{
                    backgroundColor: "transparent",
                    color: "currentcolor",
                  }}
                />
              </label>
              <div className="container ">Maximum file Size: 2MB</div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn custom-btn my-3"
              >
                Submit
              </button>
              <ToastContainer autoClose={4000} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;
