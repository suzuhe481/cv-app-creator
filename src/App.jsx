import { useState } from "react";

import "./App.css";
import Title from "./components/Title/Title";
import Form from "./components/Form/Form";
import Preview from "./components/Preview/Preview";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",

    summary: "",

    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    responsibilities: "",

    school: "",
    degree: "",
    majorMinor: "",
    degreeStartDate: "",
    degreeEndDate: "",
  });

  function handleFormChange({ type, data }) {
    setFormData((prev) => ({
      ...prev,
      [type]: data.target.value,
    }));
  }

  return (
    <>
      <Title />
      <div className="form-preview-container">
        <Form onFormChange={handleFormChange} />
        <Preview formData={formData} />
      </div>
    </>
  );
}

export default App;
