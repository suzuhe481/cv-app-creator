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

  return (
    <div className="preview">
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
        <p className="section-title">Experience</p>
        <ul>
          <li className="title">{jobTitle}</li>
          <li className="company">Company: {company}</li>
          <li className="dates">
            Dates Worked: {startDate} to {endDate}
          </li>
          <li className="responsibilities">{responsibilities}</li>
        </ul>
      </div>
      <div className="education">
        <p className="section-title">Education</p>
        <ul>
          <li className="school">{school}</li>
          <li className="degree">
            {degree} {majorMinor}
          </li>
          <li className="dates">
            Dates: {degreeStartDate} - {degreeEndDate}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Preview;
