function Form({ onFirstNameChange, onLastNameChange }) {
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
      </fieldset>
    </form>
  );
}

export default Form;
