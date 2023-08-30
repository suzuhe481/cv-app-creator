import { useState } from "react";

import "./App.css";
import Form from "./components/Form/Form";
import Preview from "./components/Preview/Preview";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <Form
        onFirstNameChange={handleFirstNameChange}
        onLastNameChange={handleLastNameChange}
      />
      <Preview fName={firstName} lName={lastName} />
    </>
  );
}

export default App;
