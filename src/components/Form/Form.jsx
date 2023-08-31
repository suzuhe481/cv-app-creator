import "./Form.css";

function Form({
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onPhoneChange,
  onLocationChange,
}) {
  return (
    <form id="cv-form">
      <fieldset>
        <legend>Personal Information</legend>
        <label htmlFor="first-name">First Name</label>
        <input
          id="first-name"
          type="text"
          name="first-name"
          onChange={onFirstNameChange}
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          id="last-name"
          type="text"
          name="last-name"
          onChange={onLastNameChange}
        />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" onChange={onEmailChange} />

        <label htmlFor="phone">Phone</label>
        <input id="phone" type="tel" name="phone" onChange={onPhoneChange} />

        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          name="location"
          onChange={onLocationChange}
        />
      </fieldset>
    </form>
  );
}

export default Form;
