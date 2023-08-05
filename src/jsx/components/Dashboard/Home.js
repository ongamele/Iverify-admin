import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

//Import Components
import { ThemeContext } from "../../../context/ThemeContext";
import ReservationStats from "./Dashboard/ReservationStats";
import LatestReview from "./Dashboard/LatestReview";
import RecentBooking from "./Dashboard/RecentBooking";

const Home = () => {
  const { changeBackground } = useContext(ThemeContext);
  useEffect(() => {
    changeBackground({ value: "light", label: "Light" });
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="row">
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-3 col-sm-6">
                  <div className="card booking">
                    <div className="card-body">
                      <div className="booking-status d-flex align-items-center">
                        <span>
                          <i
                            className="fas fa-book"
                            style={{ fontSize: "22px", color: "#E23428" }}
                          />
                        </span>
                        <div className="ms-4">
                          <h2 className="mb-0 font-w600">3,331</h2>
                          <p className="mb-0 text-nowrap">Total Requests</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="card booking">
                    <div className="card-body">
                      <div className="booking-status d-flex align-items-center">
                        <span>
                          <i
                            className="fas fa-clipboard"
                            style={{ fontSize: "22px", color: "#E23428" }}
                          />
                        </span>
                        <div className="ms-4">
                          <h2 className="mb-0 font-w600">94</h2>
                          <p className="mb-0 text-nowrap ">New Requests</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="card booking">
                    <div className="card-body">
                      <div className="booking-status d-flex align-items-center">
                        <span>
                          <i
                            className="fas fa-users"
                            style={{ fontSize: "22px", color: "#E23428" }}
                          />
                        </span>
                        <div className="ms-4">
                          <h2 className="mb-0 font-w600">753</h2>
                          <p className="mb-0">Total Users</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="card booking">
                    <div className="card-body">
                      <div className="booking-status d-flex align-items-center">
                        <span>
                          <i
                            className="fas fa-exclamation"
                            style={{ fontSize: "22px", color: "#E23428" }}
                          />
                        </span>
                        <div className="ms-4">
                          <h2 className="mb-0 font-w600">516</h2>
                          <p className="mb-0">Rejected</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-6">
                  <div className="row">
                    <div className="col-xl-6 col-sm-6">
                      <div className="card bg-secondary">
                        <div className="card-body">
                          <div className="d-flex align-items-end pb-4 justify-content-between">
                            <span className="fs-14 font-w500 text-white">
                              Total Approvals
                            </span>
                            <span className="fs-20 font-w600 text-white">
                              <span className="pe-2"></span>683
                            </span>
                          </div>
                          <div className="progress default-progress h-auto">
                            <div
                              className="progress-bar bg-white progress-animated"
                              style={{ width: "60%", height: "13px" }}>
                              <span className="sr-only">60% Complete</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-sm-6">
                      <div className="card bg-secondary">
                        <div className="card-body">
                          <div className="d-flex align-items-end pb-4 justify-content-between">
                            <span className="fs-14 font-w500 text-white">
                              Declined
                            </span>
                            <span className="fs-20 font-w600 text-white">
                              <span className="pe-2"></span>156
                            </span>
                          </div>
                          <div className="progress default-progress h-auto">
                            <div
                              className="progress-bar bg-white progress-animated"
                              style={{ width: "30%", height: "13px" }}>
                              <span className="sr-only">30% Complete</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-xl-3 col-sm-3 col-3 mb-4 col-xxl-3">
                  <div className="text-center">
                    <h3 className="fs-28 font-w600">13</h3>
                    <span className="fs-16">Ward 5 Applications</span>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-3 col-3 mb-4 col-xxl-3">
                  <div className="text-center">
                    <h3 className="fs-28 font-w600">24</h3>
                    <span className="fs-16">Ward 6 Applications</span>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-3 col-3 mb-4 col-xxl-3">
                  <div className="text-center">
                    <h3 className="fs-28 font-w600">200</h3>
                    <span className="fs-16">Ward 10 Applications</span>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-3 col-3 mb-4 col-xxl-3">
                  <div className="text-center">
                    <h3 className="fs-28 font-w600">1</h3>
                    <span className="fs-16 wspace-no">
                      Ward 14 Applications
                    </span>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-3 col-3 mb-4 col-xxl-3">
                  <div className="text-center">
                    <h3 className="fs-28 font-w600">76</h3>
                    <span className="fs-16 wspace-no">
                      Ward 25 Applications
                    </span>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-3 col-3 mb-4 col-xxl-3">
                  <div className="text-center">
                    <h3 className="fs-28 font-w600">210</h3>
                    <span className="fs-16 wspace-no">
                      Ward 33 Applications
                    </span>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-3 col-3 mb-4 col-xxl-3">
                  <div className="text-center">
                    <h3 className="fs-28 font-w600">66</h3>
                    <span className="fs-16 wspace-no">
                      Ward 167 Applications
                    </span>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-3 col-3 mb-4 col-xxl-3">
                  <div className="text-center">
                    <h3 className="fs-28 font-w600">9</h3>
                    <span className="fs-16 wspace-no">
                      Ward 2134 Applications
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h4 className="fs-20">New Applications</h4>
            </div>
            <div className="card-body pt-0">
              <LatestReview />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
