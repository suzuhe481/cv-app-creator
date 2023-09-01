import html2pdf from "html2pdf.js";

import "./Button.css";

function savePDF(event) {
  event.preventDefault();
  console.log("button clickedr");

  const element = document.getElementById("preview");

  const options = {
    margin: 1,
    filename: "cv-app",
    image: { type: "png", quality: 1 },
    html2canvas: { scale: 4 },
    jsPDF: {
      unit: "in",
      format: "letter",
      orientation: "portrait",
    },
  };

  html2pdf().set(options).from(element).save();
}

function Button(props) {
  const text = props.text;

  return (
    <div className="button-container">
      <button className="button" onClick={savePDF}>
        {text}
      </button>
    </div>
  );
}

export default Button;
