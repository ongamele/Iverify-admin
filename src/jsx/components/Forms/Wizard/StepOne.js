import React, { useState } from "react";

const StepOne = ({ sendDataToParent }) => {
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [country, setCountry] = useState("");
  const [race, setRace] = useState("");
  const [address, setAddress] = useState("");
  const [standType, setStandType] = useState("");
  const [suburb, setSuburb] = useState("");
  const [wardNumber, setWardNumber] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [idNumberCount, setIdnumberCount] = useState(0);

  //Consent
  const [isConsent, setIsConsent] = useState(false);

  const data = {
    email,
    userId,
    name,
    surname,
    phoneNumber,
    gender,
    idNumber,
    country,
    race,
    address,
    standType,
    suburb,
    wardNumber,
    municipality,
    idNumberCount,
    isConsent,
  };
  sendDataToParent(data);

  const consentListStyle = {
    textAlign: "center",
    listStyleType: "disc",
    paddingLeft: "0px",
  };

  const consentItemStyle = {
    textAlign: "left",
    marginBottom: "10px",
  };

  const handleIdNumberChange = (e) => {
    const input = e.target.value;
    // Remove any non-numeric characters
    const numericInput = input.replace(/[^0-9]/g, "");

    setIdNumber(numericInput);
    setIdnumberCount(numericInput.length);
  };

  return (
    <section>
      <div className="row" style={{ marginBottom: 10 }}>
        <div className="col-sm-4 mb-2">
          <h4>Consent *</h4>
        </div>
        <div className="col-6 col-sm-6 mb-2">
          <div>
            <ul style={consentListStyle}>
              <li style={consentItemStyle}>
                I consent to and accept that Vhembe District Municipality may
                use a third party (i.e. Credit Bureaus) to conduct verification
                and access my personal credit information to verify my indigent
                status.
              </li>
              <li style={consentItemStyle}>
                I give consent to Vhembe District Municipality to utilize my
                personal information for Indigent verification analysis and
                other activities such as economic and financial feasibility
                studies.
              </li>
              <li style={consentItemStyle}>
                Further, it is specifically agreed that the service provider
                will use its best endeavors and take all reasonable precautions
                to ensure that any information provided is only used for the
                purposes it has been provided.
              </li>
            </ul>
          </div>
          <label className="text-label">Accept to continue</label>
          <select
            defaultValue={"option"}
            className="form-control form-control-md"
            onChange={(e) => setIsConsent(e.target.value)}>
            <option value="false">Disagree</option>
            <option vlaue="true">Agree</option>
          </select>
        </div>
      </div>

      {isConsent && (
        <>
          <div className="row">
            <div className="col-lg-6 mb-2">
              <div className="form-group mb-3">
                <label className="text-label">First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="Florence"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6 mb-2">
              <div className="form-group mb-3">
                <label className="text-label">Last Name*</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="Ngwenya"
                  required
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6 mb-2">
              <div className="form-group mb-3">
                <label className="text-label">Email Address*</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputGroupPrepend2"
                  aria-describedby="inputGroupPrepend2"
                  placeholder="florence@eiverify.co.za"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6 mb-2">
              <div className="form-group mb-3">
                <label className="text-label">Phone Number*</label>
                <input
                  type="number"
                  name="phoneNumber"
                  className="form-control"
                  placeholder="(+27) 408-657-907"
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6 mb-2">
              <div className="form-group mb-3">
                <label className="text-label">Gender*</label>
                <select
                  defaultValue={"option"}
                  className="form-control form-control-md"
                  onChange={(e) => setGender(e.target.value)}>
                  <option></option>
                  <option vlaue="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6 mb-2">
              <div className="form-group mb-3">
                <label className="text-label">ID Number*</label>
                <input
                  type="number"
                  name="lastName"
                  className="form-control"
                  placeholder="9109182848484"
                  required
                  onChange={handleIdNumberChange}
                />
              </div>
            </div>
            <div className="col-lg-6 mb-2">
              <div className="form-group mb-3">
                <label className="text-label">Nationality*</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputGroupPrepend2"
                  aria-describedby="inputGroupPrepend2"
                  placeholder="South Africa"
                  required
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6 mb-2">
              <div className="form-group mb-3">
                <label className="text-label">Race*</label>
                <select
                  defaultValue={"option"}
                  onChange={(e) => setRace(e.target.value)}
                  className="form-control form-control-md">
                  <option></option>
                  <option vlaue="African">African</option>
                  <option value="White">White</option>
                  <option value="Colourd">Colourd</option>
                  <option value="Indian">Indian</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6 mb-2">
              <div className="form-group mb-3">
                <label className="text-label">Stand Type*</label>
                <select
                  defaultValue={"option"}
                  onChange={(e) => setStandType(e.target.value)}
                  className="form-control form-control-md">
                  <option></option>
                  <option vlaue="Residential">Residential</option>
                  <option value="Business">Business</option>
                  <option value="Plot">Plot</option>
                </select>
              </div>
            </div>

            <div className="col-lg-6 mb-2">
              <div className="form-group mb-3">
                <label className="text-label">Ward Number*</label>
                <input
                  type="number"
                  className="form-control"
                  id="inputGroupPrepend2"
                  aria-describedby="inputGroupPrepend2"
                  placeholder="13"
                  required
                  onChange={(e) => setWardNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6 mb-2">
              <div className="form-group mb-3">
                <label className="text-label">Suburb*</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputGroupPrepend2"
                  aria-describedby="inputGroupPrepend2"
                  placeholder="Alberton"
                  required
                  onChange={(e) => setSuburb(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-6 mb-2">
              <div className="form-group mb-3">
                <label className="text-label">Where are you from*</label>
                <input
                  type="text"
                  name="place"
                  className="form-control"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-12 mb-2">
              <div className="form-group mb-3">
                <label className="text-label">Municipality*</label>
                <select
                  defaultValue={"option"}
                  onChange={(e) => setMunicipality(e.target.value)}
                  className="form-control form-control-md">
                  <option></option>
                  <option vlaue="Buffalo City Metropolitan">
                    Buffalo City Metropolitan
                  </option>
                  <option value="City of Cape Town Metropolitan">
                    City of Cape Town Metropolitan
                  </option>
                  <option value="City of Ekurhuleni Metropolitan">
                    City of Ekurhuleni Metropolitan
                  </option>
                  <option value="City of Johannesburg Metropolitan">
                    City of Johannesburg Metropolitan
                  </option>
                  <option value="City of Tshwane Metropolitan">
                    City of Tshwane Metropolitan
                  </option>
                  <option value="eThekwini Metropolitan">
                    eThekwini Metropolitan
                  </option>
                  <option value="Mangaung Metropolitan">
                    Mangaung Metropolitan
                  </option>
                  <option value="Nelson Mandela Bay Metropolitan">
                    Nelson Mandela Bay Metropolitan
                  </option>
                </select>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default StepOne;
