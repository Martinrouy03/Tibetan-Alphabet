import RadioButtons from "./RadioButtons";
import superscript1 from "../img/superscripts/superscripts/superscript1.jpg";
import superscript2 from "../img/superscripts/superscripts/superscript2.jpg";
import superscript3 from "../img/superscripts/superscripts/superscript3.jpg";
import { Link } from "react-router-dom";

const SuperscriptHeader = ({
  learningMode,
  setLearningMode,
  superscriptButton,
  setSuperscriptButton,
}) => {
  return (
    <div className="subHeader">
      <div className="subHeaderUp">
        <Link to="/SuperscriptRa" style={{ textDecoration: "none" }}>
          <div
            style={{
              border:
                superscriptButton === "ra" ? "red solid 3px" : "gold 1px solid",
            }}
          >
            <img
              className="superscriptImg"
              src={superscript1}
              onClick={() => setSuperscriptButton("ra")}
              alt="Superscript Ra"
            />
          </div>
        </Link>
        <Link to="/SuperscriptLa" style={{ textDecoration: "none" }}>
          <div
            style={{
              border:
                superscriptButton === "la" ? "red solid 3px" : "gold 1px solid",
            }}
          >
            <img
              className="superscriptImg"
              src={superscript2}
              onClick={() => setSuperscriptButton("la")}
              alt="Superscript La"
            />
          </div>
        </Link>
        <Link to="/SuperscriptSa" style={{ textDecoration: "none" }}>
          <div
            style={{
              border:
                superscriptButton === "sa" ? "red solid 3px" : "gold 1px solid",
            }}
          >
            <img
              className="superscriptImg"
              src={superscript3}
              onClick={() => setSuperscriptButton("sa")}
              alt="Superscript Sa"
            />
          </div>
        </Link>
      </div>
      <RadioButtons
        learningMode={learningMode}
        setLearningMode={setLearningMode}
      ></RadioButtons>
    </div>
  );
};
export default SuperscriptHeader;
