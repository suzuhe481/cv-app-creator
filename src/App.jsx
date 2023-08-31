import { useState } from "react";

import "./App.css";
import Form from "./components/Form/Form";
import Preview from "./components/Preview/Preview";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  return (
    <>
      <Form
        onFirstNameChange={handleFirstNameChange}
        onLastNameChange={handleLastNameChange}
        onEmailChange={handleEmailChange}
        onPhoneChange={handlePhoneChange}
        onLocationChange={handleLocationChange}
      />
      <Preview
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        location={location}
      />
    </>
  );
}

export default App;
