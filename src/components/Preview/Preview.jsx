import "./Preview.css";

function Preview({ formData }) {
  const firstName = formData.firstName;
  const lastName = formData.lastName;
  const email = formData.email;
  const phone = formData.phone;
  const location = formData.location;

  const summary = formData.summary;

  const jobTitle = formData.jobTitle;
  const company = formData.company;
  const startDate = formData.startDate;
  const endDate = formData.endDate;
  const responsibilities = formData.responsibilities;

  const school = formData.school;
  const degree = formData.degree;
  const majorMinor = formData.majorMinor;
  const degreeStartDate = formData.degreeStartDate;
  const degreeEndDate = formData.degreeEndDate;

  // Formats the date element.
  var dateElement;
  if (startDate === "" && endDate === "") {
    dateElement = <></>;
  } else if (startDate === "" || endDate === "") {
    dateElement = (
      <>
        {startDate} {endDate}
      </>
    );
  } else {
    dateElement = (
      <>
        Dates Worked: {startDate} to {endDate}
      </>
    );
  }

  // Formats the degree date element.
  var degreeDateElement;
  if (degreeStartDate === "" && degreeEndDate === "") {
    degreeDateElement = <></>;
  } else if (degreeStartDate === "" || degreeEndDate === "") {
    degreeDateElement = (
      <>
        {degreeStartDate} {degreeEndDate}
      </>
    );
  } else {
    degreeDateElement = (
      <>
        Dates: {degreeStartDate} - {degreeEndDate}
      </>
    );
  }

  // Determines whether the Experience title should be displayed.
  var experienceFlag = false;
  if (jobTitle || company || startDate || endDate || responsibilities) {
    experienceFlag = true;
  }

  // Determines whether the Education title should be displayed.
  var educationFlag = false;
  if (school || degree || majorMinor || degreeStartDate || degreeEndDate) {
    educationFlag = true;
  }

  return (
    <div className="preview-container">
      <div id="preview" className="preview">
        <div className="personal-info">
          <span className="full-name">
            {firstName} {lastName}
          </span>
          <br />
          <span className="contact-info">
            {email} {phone}
          </span>
          <br />
          <span className="location-info">{location}</span>
        </div>
        <div className="summary">
          <p>{summary}</p>
        </div>
        <div className="experience">
          <p className="section-title">{experienceFlag && "Experience"}</p>
          <ul>
            <li className="title">{jobTitle}</li>
            <li className="company">
              {company && "Company:"} {company}
            </li>
            <li className="dates">{dateElement}</li>
            <li className="responsibilities">{responsibilities}</li>
          </ul>
        </div>
        <div className="education">
          <p className="section-title">{educationFlag && "Education"}</p>
          <ul>
            <li className="school">{school}</li>
            <li className="degree">
              {degree} {majorMinor}
            </li>
            <li className="dates">{degreeDateElement}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Preview;
