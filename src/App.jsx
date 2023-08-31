import { useState } from "react";

import "./App.css";
import Form from "./components/Form/Form";
import Preview from "./components/Preview/Preview";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
  });

  function handleFormChange({ type, data }) {
    setFormData((prev) => ({
      ...prev,
      [type]: data.target.value,
    }));
  }

  return (
    <>
      <Form onFormChange={handleFormChange} />
      <Preview formData={formData} />
    </>
  );
}

export default App;
