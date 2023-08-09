import React, { Fragment, useState } from "react";
//import Multistep from "react-multistep";
import { Stepper, Step } from "react-form-stepper";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import PageTitle from "../../../layouts/PageTitle";

import { useMutation } from "@apollo/react-hooks";
import { CREATE_APPLICATION } from "../../../../Graphql/Mutations.jsx";
import { Alert } from "react-bootstrap";

const Wizard = () => {
  const [goSteps, setGoSteps] = useState(0);
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("2343934932");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [country, setCountry] = useState("");
  const [race, setRace] = useState("");
  const [address, setAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [householdHead, setHouseholdHead] = useState("");
  const [dependents, setDependants] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [companyPhoneNumber, setCompanyPhoneNumber] = useState();
  const [occupation, setOccupation] = useState("");
  const [income, setIncome] = useState();
  const [sourceOfIncome, setSourceOfIncome] = useState("");
  const [idBook, setIdBook] = useState("");
  const [affidavid, setAffidavid] = useState("");
  const [bankStatement, setBankStatement] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const receiveDataFromChild = (data) => {
    setEmail(data.email);
    setGender(data.gender);
    setName(data.name);
    setSurname(data.surname);
    setPhoneNumber(data.phoneNumber);
    setGender(data.gender);
    setIdNumber(data.idNumber);
    setCountry(data.country);
    setRace(data.race);
    setAddress(data.address);
  };

  const receiveDataFromStep2Child = (data) => {
    setPostalCode(data.postalCode);
    setCompanyName(data.companyName);
    setCompanyEmail(data.companyEmail);
    setOccupation(data.occupation);
    setIncome(data.income);
    setSourceOfIncome(data.sourceOfIncome);
    setHouseholdHead(data.householdHead);
    setDependants(data.dependents);
    setCompanyPhoneNumber(data.companyPhoneNumber);
  };

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [createApplication, { loading }] = useMutation(CREATE_APPLICATION, {
    update(_, result) {
      if (result) {
        alert("Application Is Submitted!");
        // setGoSteps(1);
      }
    },
    onError(err) {
      alert(err.message);
    },
  });

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const onSubmit = async () => {
    if (
      name != "" &&
      surname != "" &&
      idNumber != "" &&
      phoneNumber != "" &&
      email != "" &&
      gender != "" &&
      country != "" &&
      race != "" &&
      address != "" &&
      companyName != "" &&
      phoneNumber != null &&
      country != "" &&
      race != "" &&
      address != "" &&
      postalCode != "" &&
      householdHead != null &&
      maritalStatus != "" &&
      dependents != null &&
      companyPhoneNumber != "" &&
      /*idBook != "" &&
        bankStatement != "" &&
        affidavid != "" &&*/
      dependents != null &&
      companyEmail != "" &&
      income != null &&
      sourceOfIncome != ""
    ) {
      if (validateEmail(email)) {
        createApplication({
          variables: {
            name,
            userId,
            surname,
            idNumber,
            email,
            gender,
            phoneNumber,
            country,
            race,
            address,
            postalCode,
            householdHead,
            maritalStatus,
            dependents,
            idBook,
            bankStatement,
            affidavid,
            companyName,
            companyPhoneNumber,
            companyEmail,
            income: parseInt(income),
            sourceOfIncome,
          },
        });
      } else {
        setErrorMessage("Enter a valid email address!");
      }
    } else {
      setErrorMessage("Please fill in all fields.");
    }
  };

  function submitFunction() {
    onSubmit();
    if (errorMessage == "") {
      // setGoSteps(num);
    } else {
      alert(errorMessage);
    }
  }

  return (
    <Fragment>
      <PageTitle activeMenu="Application" motherMenu="New" />

      <div className="row">
        <div className="col-xl-12 col-xxl-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Application Form</h4>
            </div>
            <div className="card-body">
              <div className="form-wizard ">
                <Stepper
                  className="nav-wizard"
                  activeStep={goSteps}
                  label={false}>
                  <Step className="nav-link" onClick={() => setGoSteps(0)} />
                  <Step className="nav-link" onClick={() => setGoSteps(1)} />
                  <Step className="nav-link" onClick={() => setGoSteps(2)} />
                  <Step className="nav-link" onClick={() => setGoSteps(3)} />
                </Stepper>
                {goSteps === 0 && (
                  <>
                    <StepOne sendDataToParent={receiveDataFromChild} />
                    <div className="text-end toolbar toolbar-bottom p-2">
                      <button
                        className="btn btn-primary sw-btn-next"
                        onClick={() => setGoSteps(1)}>
                        Next
                      </button>
                    </div>
                  </>
                )}
                {goSteps === 1 && (
                  <>
                    <StepTwo sendDataToParent={receiveDataFromStep2Child} />
                    <div className="text-end toolbar toolbar-bottom p-2">
                      <button
                        className="btn btn-secondary sw-btn-prev me-1"
                        onClick={() => setGoSteps(0)}>
                        Prev
                      </button>
                      <button
                        className="btn btn-primary sw-btn-next ms-1"
                        onClick={() => setGoSteps(2)}>
                        Next
                      </button>
                    </div>
                  </>
                )}
                {goSteps === 2 && (
                  <>
                    <StepThree />
                    <div className="text-end toolbar toolbar-bottom p-2">
                      <button
                        className="btn btn-secondary sw-btn-prev me-1"
                        onClick={() => setGoSteps(1)}>
                        Prev
                      </button>
                      <button
                        className="btn btn-primary sw-btn-next ms-1"
                        onClick={() => setGoSteps(3)}>
                        Next
                      </button>
                    </div>
                  </>
                )}
                {goSteps === 3 && (
                  <>
                    <StepFour />
                    <div className="text-end toolbar toolbar-bottom p-2">
                      <button
                        className="btn btn-secondary sw-btn-prev me-1"
                        onClick={() => setGoSteps(2)}>
                        Prev
                      </button>
                      <button
                        className="btn btn-primary sw-btn-next ms-1"
                        onClick={() => submitFunction()}>
                        Submit
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Wizard;
