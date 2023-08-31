import "./Preview.css";

function Preview({ formData }) {
  const firstName = formData.firstName;
  const lastName = formData.lastName;
  const email = formData.email;
  const phone = formData.phone;
  const location = formData.location;

  const summary = formData.summary;

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
    </div>
  );
}

export default Preview;
