import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Categories = () => {
  const state = useSelector((state) => state.jobs.data);
  console.log(state, "from home");
  const uniqueCategories = new Set();

  // Filter out duplicates and add only unique categories to the array
  const filteredData = state.filter((categoryItem) => {
    if (!uniqueCategories.has(categoryItem.category)) {
      uniqueCategories.add(categoryItem.category);
      return true;
    }
    return false;
  });

  return (
    <div>
      <div className="container" style={{ marginTop: "-10%" }}>
        <div data-aos="slide-up" className=" pb-5">
          <h2>Categories:</h2>
        </div>

        <div class="row mt-5">
          {filteredData.map((e) => {
            return (
              <div
                class="col-sm-6 col-md-4  my-4 "
                key={e.id}
                data-aos="slide-up"
              >
                <div style={{ background: "transparent" }}>
                  <div class="thumbnail mx-3">
                    <Link to={`/Job_des/${e.id}`} key={e.id}>
                      <div className="arrow">
                        <FaArrowRight />
                      </div>
                    </Link>

                    <img
                      src={e.image}
                      className="w-100 cat-img"
                      style={{ height: "18rem" }}
                    />
                    <div
                      class="caption  cat-text p-2"
                      style={{ background: "transparent" }}
                    >
                      <div className="cat-items" key={e.id}>
                        <h3 className="p-3 ">{e.title}</h3>
                        <p className="p-3 pt-2 ">
                          Jobs posted{" "}
                          <span className="bg-success text-white px-3 py-1 rounded">
                            {e.total}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
