import React from "react";
import { Link } from "react-router-dom";

const StepFour = () => {
  return (
    <section>
      <div className="row emial-setup">
        <div className="col-lg-4 col-sm-6 col-6">
          <div className="form-group mb-3">
            <label
              htmlFor="mailclient11"
              className="mailclinet mailclinet-gmail">
              <input
                type="file"
                className="redio-false"
                name="emailclient"
                id="mailclient11"
              />

              <span className="mail-icon">
                <i className="mdi mdi-account-box" aria-hidden="true"></i>
              </span>
              <span className="mail-text">Upload ID</span>
            </label>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-6">
          <div className="form-group mb-3">
            <label
              htmlFor="mailclient11"
              className="mailclinet mailclinet-gmail">
              <input
                type="file"
                className="redio-false"
                name="emailclient"
                id="mailclient11"
              />

              <span className="mail-icon">
                <i className="mdi mdi-newspaper" aria-hidden="true"></i>
              </span>
              <span className="mail-text">Upload Bank Statement</span>
            </label>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-6">
          <div className="form-group mb-3">
            <label
              htmlFor="mailclient11"
              className="mailclinet mailclinet-gmail">
              <input
                type="file"
                className="redio-false"
                name="emailclient"
                id="mailclient11"
              />

              <span className="mail-icon">
                <i className="mdi mdi-clipboard-text" aria-hidden="true"></i>
              </span>
              <span className="mail-text">Upload Affidavid</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepFour;
