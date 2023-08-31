import "./Form.css";

function Form({ onFormChange }) {
  return (
    <form id="cv-form">
      <fieldset className="personal">
        <legend>Personal Information</legend>
        <label htmlFor="first-name">First Name</label>
        <input
          id="first-name"
          type="text"
          name="first-name"
          onChange={(data) => onFormChange({ type: "firstName", data })}
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          id="last-name"
          type="text"
          name="last-name"
          onChange={(data) => onFormChange({ type: "lastName", data })}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={(data) => onFormChange({ type: "email", data })}
        />

        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          onChange={(data) => onFormChange({ type: "phone", data })}
        />

        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          name="location"
          onChange={(data) => onFormChange({ type: "location", data })}
        />
      </fieldset>
      <fieldset className="summary">
        <legend>Summary</legend>
        <textarea
          id="summary"
          name="summary"
          onChange={(data) => onFormChange({ type: "summary", data })}
          rows="4"
        />
      </fieldset>
    </form>
  );
}

export default Form;
