import "./Preview.css";

function Preview({ firstName, lastName, email, phone, location }) {
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
    </div>
  );
}

export default Preview;
