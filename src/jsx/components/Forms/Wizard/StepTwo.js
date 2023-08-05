import React from "react";

const StepTwo = () => {
  return (
    <section>
      <div className="row">
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="text-label">Company Name*</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Iverify"
              required
            />
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="text-label">Company Email Address*</label>
            <input
              type="email"
              className="form-control"
              id="emial1"
              placeholder="example@example.com"
              required
            />
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="text-label">Company Phone Number*</label>
            <input
              type="text"
              name="phoneNumber"
              className="form-control"
              placeholder="(+27)408-657-907"
              required
            />
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="text-label">Your position in Company*</label>
            <input type="text" name="place" className="form-control" required />
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="text-label">Household Head?*</label>
            <select
              defaultValue={"option"}
              className="form-control form-control-md">
              <option vlaue="True">Yes</option>
              <option value="False">No</option>
            </select>
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="text-label">Household Dependants*</label>
            <select
              defaultValue={"option"}
              className="form-control form-control-md">
              <option vlaue="True">Yes</option>
              <option value="False">No</option>
            </select>
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="text-label">Income*</label>
            <input
              type="number"
              name="lastName"
              className="form-control"
              placeholder="R34 000"
              required
            />
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="text-label">Source Of Income*</label>
            <select
              defaultValue={"option"}
              className="form-control form-control-md">
              <option vlaue="Employed">Employed</option>
              <option value="Self Employed">Self Employed</option>
              <option value="Sassa Beneficiary">Sassa Beneficiary</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="col-lg-12 mb-3">
          <div className="form-group mb-3">
            <label className="text-label">Marital Satus*</label>
            <select
              defaultValue={"option"}
              className="form-control form-control-md">
              <option vlaue="Married">Married</option>
              <option value="Single">Single</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepTwo;
