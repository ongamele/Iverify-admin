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
  };
  sendDataToParent(data);

  return (
    <section>
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
              placeholder="example@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="text-label">Phone Number*</label>
            <input
              type="text"
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
              onChange={(e) => setIdNumber(e.target.value)}
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
              <option vlaue="African">African</option>
              <option value="White">White</option>
              <option value="Colourd">Colourd</option>
              <option value="Indian">Indian</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="col-lg-12 mb-3">
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
      </div>
    </section>
  );
};

export default StepOne;
