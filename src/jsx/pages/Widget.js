import React, { Fragment } from "react";
// BS
import { Dropdown, Nav, Tab } from "react-bootstrap";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";

// Page titie
import PageTitle from "../layouts/PageTitle";

const Widget = () => {
  return (
    <Fragment>
      {/* <Ext /> */}
      <PageTitle activeMenu="Users" motherMenu="Users" pageContent="Approved" />
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Users List</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive recentOrderTable">
                <table className="table verticle-middle table-responsive-md">
                  <thead>
                    <tr>
                      <th scope="col">Municipality</th>
                      <th scope="col">Name</th>
                      <th scope="col">Surnamee</th>
                      <th scope="col">Date</th>
                      <th scope="col">Status</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>12</td>
                      <td>Ongamele</td>
                      <td>Gebhuza</td>
                      <td>01 08 2022</td>
                      <td>
                        <span className="badge badge-rounded badge-primary">
                          Canceled
                        </span>
                      </td>
                      <td>
                        <Dropdown className="dropdown custom-dropdown mb-0">
                          <Dropdown.Toggle
                            className="btn sharp btn-primary tp-btn i-false"
                            data-toggle="dropdown">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="18px"
                              height="18px"
                              viewBox="0 0 24 24"
                              version="1.1">
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd">
                                <rect x="0" y="0" width="24" height="24" />
                                <circle fill="#000000" cx="12" cy="5" r="2" />
                                <circle fill="#000000" cx="12" cy="12" r="2" />
                                <circle fill="#000000" cx="12" cy="19" r="2" />
                              </g>
                            </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                            <Dropdown.Item className="dropdown-item">
                              Details
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item text-danger">
                              Cancel
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Widget;
