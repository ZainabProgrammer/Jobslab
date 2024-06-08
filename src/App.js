import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Header from "./components/Header";
import Home from "./components/Home";
import Jobs_FY from "./components/Jobs_FY";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebaseConfig from "./config/firebaseConfig";
import Categories from "./components/Categories";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./features/JobSlice";
import Jobs from "./components/Jobs";
import Fixed_img from "./components/Fixed_img";
import { Routes, Route } from "react-router-dom";
import Job_des from "./components/Job_des";
import Apply from "./components/Apply";
import { fetchJobsData } from "./api";
import Candidates from "./components/Candidates";
import { getCandidates } from "./features/CandidateSlice";
import { fetchCandidates } from "./api";
import AllCandidates from "./components/AllCandidates";
import Profile from "./components/Profile";
import PostJob from "./components/PostJob";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import About from "./components/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "./components/Services";
import Contact from "./components/Contact";
function App() {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom",
  });
  const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch(getData);
  const state = useSelector((state) => state.jobs.data);
  const [candidates, setcandidates] = useState([]);
  const [loading, setloading] = useState(true);
  const candState = useSelector((state) => state.candidates.candidates);

  useEffect(() => {
    const fetchData = async () => {
      const jobsData = await fetchJobsData(); // Use the fetchJobsData function
      setJobs(jobsData);

      dispatch(getData(jobsData));
      setloading(false);
    };
    fetchData();
  }, [dispatch]);

  const [selectTitle, setselectTitle] = useState("");
  const [selectCategory, setselectCategory] = useState("");
  // Filter out the jobs on the basis of selected title and category

  const selectedJob = state.filter((job) => {
    const titleMatch = job.title
      .toLowerCase()
      .includes(selectTitle.toLowerCase());
    const categoryMatch = job.category
      .toLowerCase()
      .includes(selectCategory.toLowerCase());
    return titleMatch && categoryMatch;
  });

  useEffect(() => {
    const bringCandidates = async () => {
      const allCandidates = await fetchCandidates();
      setcandidates(allCandidates);
      dispatch(getCandidates(allCandidates));
    };
    bringCandidates();
  }, [dispatch]);

  const [selectCate, setselectCate] = useState("");
  const [selectCompany, setselectCompany] = useState("");
  const [selectLocation, setselectLocation] = useState("");
  const [selectExp, setselectExp] = useState("");
  const selectedCandiCate = candState.filter((e) => {
    const cateMatch = e.category
      .toLowerCase()
      .includes(selectCate.toLowerCase());
    const compMatch = e.company
      .toLowerCase()
      .includes(selectCompany.toLowerCase());
    const locMatch = e.location
      .toLowerCase()
      .includes(selectLocation.toLowerCase());
    const expMatch = e.experience
      .toLowerCase()
      .includes(selectExp.toLowerCase());

    return cateMatch && compMatch && locMatch && expMatch;
  });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home
                    selectTitle={selectTitle}
                    selectCategory={selectCategory}
                    setselectCategory={setselectCategory}
                    setselectTitle={setselectTitle}
                  />
                  <Jobs_FY />
                  <Categories />
                  <Jobs
                    selectedJob={selectedJob}
                    setselectCategory={setselectCategory}
                    setselectTitle={setselectTitle}
                  />
                  <Fixed_img
                    selectedCandiCate={selectedCandiCate}
                    selectCompany={selectCompany}
                    setselectCompany={setselectCompany}
                    setselectLocation={setselectLocation}
                    selectLocation={selectLocation}
                    selectCate={selectCate}
                    setselectCate={setselectCate}
                    setselectExp={setselectExp}
                    selectExp={selectExp}
                  />
                  <Candidates />
                  <AllCandidates
                    selectedCandiCate={selectedCandiCate}
                    setselectCompany={setselectCompany}
                    setselectLocation={setselectLocation}
                    setselectCate={setselectCate}
                    setselectExp={setselectExp}
                  />
                  <Footer />
                </>
              }
            />

            <Route
              path="/Job_des/:id"
              element={
                <>
                  <Header />
                  <Job_des />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <About />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Apply"
              element={
                <>
                  <Header />
                  <Apply />
                  <Footer />
                </>
              }
            />

            <Route
              path="/Profile/:id"
              element={
                <>
                  <Header />
                  <Profile />

                  <Footer />
                </>
              }
            />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/Post"
              element={
                <>
                  <Header />
                  <PostJob />
                  <Footer />
                </>
              }
            />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
