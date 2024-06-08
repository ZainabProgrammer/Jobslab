import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaStarOfLife } from "react-icons/fa";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getUsers } from "../features/JobSlice";
import { Dispatch } from "react";
const Login = () => {
  const users = useSelector((state) => state.jobs.users);
  const [userErr, setuserErr] = useState("");
  const [user, setuser] = useState("");

  const [email, setemail] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [passwordErr, setpasswordErr] = useState("");
  const [success, setsuccess] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setshowPassword] = useState("");
  const [eye, seteye] = useState("");
  const navigate = useNavigate();
  const togglePassword = () => {
    setshowPassword(!showPassword);
    seteye(!eye);
  };
  const dispatch = useDispatch();
  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
    setpasswordErr("");
  };
  const handleEmailChange = (e) => {
    setemail(e.target.value);
    setemailErr("");
  };
  const submit = (e) => {
    e.preventDefault();
    if (!email) {
      setemailErr("Enter your email");
    }
    if (!password) {
      setpasswordErr("Enter your password");
    }
    if (email && password) {
      setemail("");
      setpassword("");
      setuserErr("");
      // setloading(false);

      const auth = getAuth();
      // setloading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch(
            getUsers({
              _id: user.uid,
              userName: user.displayName,
              image: user.photoURL,
              email: user.email,
            })
          );
          // setloading(false);
          setsuccess("Logged in successfully! ");
          setTimeout(() => {
            navigate("/");
          }, 3000);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/invalid-email")) {
            setemailErr("Invalid Email");
            // setloading(false);
          }
          if (errorCode.includes("auth/wrong-password")) {
            setpasswordErr("Wrong password.Try again");
            // setloading(false);
          }
          if (errorCode.includes("auth/user-not-found")) {
            setuserErr("User not found!");
            // setloading(false);
          }
        });
    }
  };

  return (
    <section
      data-aos="fade-up"
      className="vh-100"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center ">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Login
                    </p>
                    <div data-aos="slide-up">
                      <p className="text-success text-center">{success}</p>
                    </div>

                    <form className="mx-1 mx-md-4 post-form" onSubmit={submit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0 ms-3">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            required
                            onChange={handleEmailChange}
                            value={email}
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
                          {emailErr && (
                            <div className="error ">
                              {emailErr}{" "}
                              <span style={{ fontStyle: "italic" }}>!</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0 ms-3">
                          <input
                            type={showPassword ? "text" : "password"}
                            id="form3Example4c"
                            className="form-control"
                            required
                            value={password}
                            onChange={handlePasswordChange}
                          />
                          <div className=" ms-3 show-password-wrapper ">
                            <span
                              className="show-password "
                              defaultValue={showPassword}
                              onClick={togglePassword}
                            >
                              {" "}
                              {eye ? <BsEyeFill /> : <BsEyeSlashFill />}
                            </span>
                          </div>
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            <div className="d-flex">
                              Password
                              <div className=" mx-1 star text-danger ">
                                <FaStarOfLife />
                              </div>
                            </div>
                          </label>
                          {passwordErr && (
                            <div className="error" data-aos="slide-up">
                              {passwordErr}
                              <span style={{ fontStyle: "italic" }}> !</span>
                            </div>
                          )}

                          <div className=" mt-3 error" data-aos="slide-up">
                            {userErr}
                          </div>
                        </div>
                      </div>
                      <div className="mb-5 justify-content-center d-flex form-label">
                        Don't have any account?{" "}
                        <span className="mx-1 ">
                          <Link to="/Signup">Sign up</Link>
                        </span>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn custom-btn rounded btn-lg px-4"
                          onClick={submit}
                        >
                          Login
                        </button>
                      </div>
                      {/* <p>----or----</p>
                      <button className=" btn-lg px-4 mx-auto">
                        Login with Google
                      </button> */}
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
        </div>
      </div>
    </section>
  );
};

export default Login;
