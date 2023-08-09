import React, { useState } from "react";

const StepTwo = ({ sendDataToParent }) => {
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [householdHead, setHouseholdHead] = useState("");
  const [dependent, setDependents] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [companyPhoneNumber, setCompanyPhoneNumber] = useState();
  const [income, setIncome] = useState();
  const [sourceOfIncome, setSourceOfIncome] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const data = {
    postalCode,
    companyName,
    companyEmail,
    householdHead,
    maritalStatus,
    dependent,
    companyPhoneNumber,
    income,
    sourceOfIncome,
  };
  sendDataToParent(data);
  return (
    <section>
      <div className="row">
        <div className="col-lg-12 mb-3">
          <div className="form-group mb-3">
            <label className="text-label">Postal Code*</label>
            <input
              type="text"
              name="place"
              className="form-control"
              placeholder="1800"
              required
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="text-label">Company Name*</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Iverify"
              required
              onChange={(e) => setCompanyName(e.target.value)}
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
              onChange={(e) => setCompanyEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="text-label">Company Phone Number*</label>
            <input
              type="number"
              name="phoneNumber"
              className="form-control"
              placeholder="(+27)408-657-907"
              required
              onChange={(e) => setCompanyPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="text-label">Household Head?*</label>
            <select
              defaultValue={"option"}
              onChange={(e) => setHouseholdHead(e.target.value)}
              className="form-control form-control-md">
              <option></option>
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
              onChange={(e) => setDependents(e.target.value)}
              className="form-control form-control-md">
              <option></option>
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
              onChange={(e) => setIncome(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="text-label">Source Of Income*</label>
            <select
              defaultValue={"option"}
              onChange={(e) => setSourceOfIncome(e.target.value)}
              className="form-control form-control-md">
              <option></option>
              <option vlaue="Employed">Employed</option>
              <option value="Self Employed">Self Employed</option>
              <option value="Sassa Beneficiary">Sassa Beneficiary</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="text-label">Marital Satus*</label>
            <select
              defaultValue={"option"}
              onChange={(e) => setMaritalStatus(e.target.value)}
              className="form-control form-control-md">
              <option></option>
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
