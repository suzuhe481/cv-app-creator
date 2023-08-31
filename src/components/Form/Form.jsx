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
        <label htmlFor="Summary"></label>
        <textarea
          id="summary"
          name="summary"
          onChange={(data) => onFormChange({ type: "summary", data })}
          rows="4"
        />
      </fieldset>

      <fieldset className="experience">
        <legend>Experience</legend>
        <label htmlFor="jobTitle">Title</label>
        <input
          id="jobTitle"
          type="text"
          name="jobTitle"
          onChange={(data) => onFormChange({ type: "jobTitle", data })}
        />
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          name="company"
          onChange={(data) => onFormChange({ type: "company", data })}
        />
        <label htmlFor="startDate">Start Date</label>
        <input
          id="startDate"
          type="date"
          name="startDate"
          onChange={(data) => onFormChange({ type: "startDate", data })}
        />
        <label htmlFor="endDate">End Date</label>
        <input
          id="endDate"
          type="date"
          name="endDate"
          onChange={(data) => onFormChange({ type: "endDate", data })}
        />
        <label htmlFor="responsibilities">Responsibilities</label>
        <textarea
          id="responsibilities"
          name="responsibilities"
          onChange={(data) => onFormChange({ type: "responsibilities", data })}
          rows="4"
        />
      </fieldset>

      <fieldset className="education">
        <legend>Education</legend>
        <label htmlFor="school">School</label>
        <input
          id="school"
          type="text"
          name="school"
          onChange={(data) => onFormChange({ type: "school", data })}
        />
        <label htmlFor="degree">Degree</label>
        <input
          id="degree"
          type="text"
          name="degree"
          onChange={(data) => onFormChange({ type: "degree", data })}
        />
        <label htmlFor="majorMinor">Major/Minor</label>
        <input
          id="majorMinor"
          type="text"
          name="majorMinor"
          onChange={(data) => onFormChange({ type: "majorMinor", data })}
        />
        <label htmlFor="degreeStartDate">Start Date</label>
        <input
          id="degreeStartDate"
          type="date"
          name="degreeStartDate"
          onChange={(data) => onFormChange({ type: "degreeStartDate", data })}
        />
        <label htmlFor="degreeEndDate">End Date</label>
        <input
          id="degreeEndDate"
          type="date"
          name="degreeEndDate"
          onChange={(data) => onFormChange({ type: "degreeEndDate", data })}
        />
      </fieldset>
    </form>
  );
}

export default Form;
