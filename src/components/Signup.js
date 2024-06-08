import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FaStarOfLife } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../config/firebaseConfig";
import { useDispatch } from "react-redux";
import { getUsers } from "../features/JobSlice";
const Signup = () => {
  const [password, setPassword] = useState("");
  const [user, setuser] = useState([]);
  const [error, seterror] = useState("");
  const [name, setname] = useState("");
  const [passwordLengErr, setpasswordLengErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [eye, seteye] = useState("");
  const [secEye, setsecEye] = useState("");
  const [repeatPass, setrepeatPass] = useState("");
  const [showRepPass, setshowRepPass] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setemail] = useState("");
  const [emailErr, setemailErr] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setpasswordLengErr("");
  };
  const handleRepeatPassChange = (e) => {
    setrepeatPass(e.target.value);
    setPasswordError("");
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
    seteye(!eye);
  };
  const handleEmailChange = (e) => {
    setemail(e.target.value);
    setemailErr("");
  };
  const handleRepeatToggle = () => {
    setsecEye(!secEye);
    setshowRepPass(!showRepPass);
  };
  const notify = () => {
    return toast.error("Fill in the required fields !");
  };
  // const dispatch = useDispatch(getUsers);
  const submit = async (e) => {
    e.preventDefault();
    if (repeatPass !== password) {
      setPasswordError("Password not matched!");
      e.preventDefault();
    } else if (!name || !email || !password) {
      notify();
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        setuser(userCredential.user);
        dispatch(getUsers(userCredential.user));

        onAuthStateChanged(auth, (user) => {
          if (user) {
          } else {
          }
        });

        navigate("/login");
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode.includes("auth/email-already-in-use")) {
          setemailErr("Email already in use. Try another ");
        }
        if (errorCode.includes("auth/weak-password")) {
          setpasswordLengErr("Password should be atleast 6 character long");
        }

        seterror(error.message);
      }
    }
  };

  return (
    <>
      <section
        data-aos="fade-up"
        className="vh-100 "
        style={{ backgroundColor: "#eee" }}
      >
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center flex-row-reverse">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form
                        className="mx-1 mx-md-4 post-form"
                        onSubmit={submit}
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0 ms-3">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              required
                              value={name}
                              onChange={(e) => setname(e.target.value)}
                            />
                            <label
                              className="form-label "
                              htmlFor="form3Example1c"
                            >
                              <div className="d-flex">
                                Your Name
                                <div className=" mx-1 star text-danger ">
                                  <FaStarOfLife />
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0 ms-3">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              required
                              value={email}
                              onChange={handleEmailChange}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              <div className="d-flex">
                                Your Email
                                <div className=" mx-1 star text-danger ">
                                  <FaStarOfLife />
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0 ms-3">
                            <input
                              type={showPassword ? "text" : "password"}
                              id="password"
                              className="form-control"
                              value={password}
                              onChange={handlePasswordChange}
                              required
                            />
                            <div className=" ms-3 show-password-wrapper ">
                              <span
                                className="show-password "
                                defaultValue={showPassword}
                                onClick={handleShowPasswordToggle}
                              >
                                {" "}
                                {eye ? <BsEyeFill /> : <BsEyeSlashFill />}
                              </span>
                            </div>
                            <label className="form-label" htmlFor="password">
                              <div className="d-flex">
                                Password
                                <div className=" mx-1 star text-danger ">
                                  <FaStarOfLife />
                                </div>
                              </div>
                            </label>
                            {passwordLengErr && (
                              <div className="error" data-aos="slide-up">
                                {passwordLengErr}
                                <span style={{ fontStyle: "italic" }}> !</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0 ms-3">
                            <div data-aos="slide-up" className="error ">
                              {passwordError}
                            </div>
                            <input
                              type={showRepPass ? "text" : "password"}
                              id="repeat-password"
                              className="form-control"
                              value={repeatPass}
                              onChange={handleRepeatPassChange}
                              required
                            />
                            <div className=" ms-3 show-password-wrapper ">
                              <span
                                className="show-password "
                                defaultValue={showPassword}
                                onClick={handleRepeatToggle}
                              >
                                {" "}
                                {secEye ? <BsEyeFill /> : <BsEyeSlashFill />}
                              </span>
                            </div>

                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              <div className="d-flex">
                                Repeat password
                                <div className=" mx-1 star text-danger ">
                                  <FaStarOfLife />
                                </div>
                              </div>
                            </label>

                            <div className="error">{emailErr}</div>
                          </div>
                        </div>
                        <div className="mb-5 justify-content-center d-flex form-label">
                          Already have an account?{" "}
                          <span className="mx-1 ">
                            <Link to="/Login">Login</Link>
                          </span>
                        </div>
                        {/* <div className="text-danger">{error}</div> */}

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn custom-btn rounded btn-lg"
                            onClick={submit}
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ToastContainer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
