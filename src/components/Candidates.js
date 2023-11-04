import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Candidates = () => {
  const state = useSelector((state) => state.candidates.candidates);
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="container my-5 ">
        <div data-aos="slide-up">
          <h3 className="">Expert Candidates:</h3>
        </div>
        <div data-aos="fade-up">
          <p className="p-5">
            Meet our world class Candidates who are placed on to the top class
            companies.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {state.map((e, index) => {
              return (
                <div
                  className=" d-flex align-items-center justify-content-center pb-5 mb-5"
                  key={index}
                >
                  <div class="card candi-card" style={{ width: "18rem" }}>
                    <img className="img-top candi-top" src={e.image} />

                    <div class="card-body candi-body">
                      <div>
                        <h4>{e.name}</h4>
                      </div>
                      <div className="text-secondary ">{e.role}</div>
                      <div className="details">
                        <div class="card-text candi-text  text-secondary">
                          <span>Work Experience: {e.experience} Years</span>
                          <br />
                          <span>Location: {e.location}</span>
                          <br />
                          <span>
                            Company:{" "}
                            <span className="text-success">{e.company}</span>
                          </span>
                        </div>
                      </div>
                      <Link
                        to={`/Profile/${e.id}`}
                        class="btn res-btn custom-btn "
                      >
                        View Resume
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Candidates;
