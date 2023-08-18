import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

//Import Components
import { useQuery } from "@apollo/client";
import { ThemeContext } from "../../../context/ThemeContext";
import { AuthContext } from "../context-auth/auth";
import { GET_ALL_APPLICATIONS } from "../../../Graphql/Queries";
import { GET_SUCCESSFUL_APPLICATIONS } from "../../../Graphql/Queries";
import { GET_FAILED_APPLICATIONS } from "../../../Graphql/Queries";
import { GET_LATEST_APPLICATIONS } from "../../../Graphql/Queries";
const Home = () => {
  const { user } = useContext(AuthContext);
  const { changeBackground } = useContext(ThemeContext);
  useEffect(() => {
    changeBackground({ value: "light", label: "Light" });
  }, []);

  const { data: totalApplications } = useQuery(GET_ALL_APPLICATIONS, {
    pollInterval: 4000,
    variables: {
      userId: user.id,
    },
  });

  const { data: successfulApplications } = useQuery(
    GET_SUCCESSFUL_APPLICATIONS,
    {
      pollInterval: 4000,
      variables: {
        userId: user.id,
      },
    }
  );

  const { data: failedApplications } = useQuery(GET_FAILED_APPLICATIONS, {
    pollInterval: 4000,
    variables: {
      userId: user.id,
    },
  });

  const { data: latestApplications } = useQuery(GET_LATEST_APPLICATIONS, {
    pollInterval: 4000,
    variables: {
      userId: user.id,
    },
  });
  var successCount = 0;
  var failureCount = 0;

  if (failedApplications && failedApplications.getFailedApplications) {
    failureCount = failedApplications.getFailedApplications;
  }

  if (
    successfulApplications &&
    successfulApplications.getSuccessfulApplications
  ) {
    successCount = successfulApplications.getSuccessfulApplications;
  }

  function successPercentage(success, fail) {
    return (success * 100) / fail;
  }

  function failurePercentage(success, fail) {
    return (fail * 100) / success;
  }

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
                          <h2 className="mb-0 font-w600">
                            {totalApplications &&
                              totalApplications.getAllApplications}
                          </h2>
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
                          <h2 className="mb-0 font-w600">
                            {" "}
                            {latestApplications &&
                              latestApplications.getLatestApplications}
                          </h2>
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
                          <h2 className="mb-0 font-w600">
                            {successfulApplications &&
                              successfulApplications.getSuccessfulApplications}
                          </h2>
                          <p className="mb-0">Approved</p>
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
                          <h2 className="mb-0 font-w600">
                            {failedApplications &&
                              failedApplications.getFailedApplications}
                          </h2>
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
                              <span className="pe-2"></span>
                              {successfulApplications &&
                                successfulApplications.getSuccessfulApplications}
                            </span>
                          </div>
                          <div className="progress default-progress h-auto">
                            <div
                              className="progress-bar bg-white progress-animated"
                              style={{ width: "0%", height: "13px" }}>
                              <span className="sr-only">
                                {successPercentage(successCount, failureCount)}%
                                Complete
                              </span>
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
                              <span className="pe-2"></span>
                              {failedApplications &&
                                failedApplications.getFailedApplications}
                            </span>
                          </div>
                          <div className="progress default-progress h-auto">
                            <div
                              className="progress-bar bg-white progress-animated"
                              style={{ width: "0%", height: "13px" }}>
                              <span className="sr-only">
                                {failurePercentage(successCount, failureCount)}%
                                Complete
                              </span>
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
            <div className="card-header border-0 pb-0">
              <h4 className="fs-20">New Applications</h4>
            </div>
            <div className="card-body pt-0"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
