import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Register.css";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [firstName, setFirstName] = useState(
    queryParams.get("firstName") || ""
  );
  const [lastName, setLastName] = useState(queryParams.get("lastName") || "");
  const [phoneNumber, setPhoneNumber] = useState(
    queryParams.get("phoneNumber") || ""
  );
  const [email, setEmail] = useState(queryParams.get("ref") || "");
  const [ref, setRef] = useState(queryParams.get("email") || "");

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register-page-container grid grid-cols-1 md:grid-cols-1 ">
      <RegisterForm
        data={{ firstName, lastName, phoneNumber, email, ref }}
        handleFormSubmit={handleFormSubmit}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setPhoneNumber={setPhoneNumber}
        setEmail={setEmail}
        setRef={setRef}
      />
    </div>
  );
};

export default RegisterPage;
