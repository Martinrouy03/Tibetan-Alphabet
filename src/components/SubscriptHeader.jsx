import RadioButtons from "./RadioButtons";
import subscript1 from "../img/subscripts/subscripts/subscript1.jpg";
import subscript2 from "../img/subscripts/subscripts/subscript2.jpg";
import subscript3 from "../img/subscripts/subscripts/subscript3.jpg";
import subscript4 from "../img/subscripts/subscripts/subscript4.jpg";
import { Link } from "react-router-dom";

const SubscriptHeader = ({
  learningMode,
  setLearningMode,
  subscriptButton,
  setSubscriptButton,
}) => {
  return (
    <div className="subHeader">
      <div className="subHeaderUp">
        <Link to="/SubscriptYa" style={{ textDecoration: "none" }}>
          <div
            style={{
              border:
                subscriptButton === "ya" ? "red solid 3px" : "gold 1px solid",
            }}
          >
            <img
              className="subscriptImg"
              src={subscript1}
              onClick={() => setSubscriptButton("ya")}
              alt="Subscript Ya"
            />
          </div>
        </Link>
        <Link to="/SubscriptRa" style={{ textDecoration: "none" }}>
          <div
            style={{
              border:
                subscriptButton === "ra" ? "red solid 3px" : "gold 1px solid",
            }}
          >
            <img
              className="subscriptImg"
              src={subscript2}
              onClick={() => setSubscriptButton("ra")}
              alt="Subscript Ra"
            />
          </div>
        </Link>
        <Link to="/SubscriptLa" style={{ textDecoration: "none" }}>
          <div
            style={{
              border:
                subscriptButton === "la" ? "red solid 3px" : "gold 1px solid",
            }}
          >
            <img
              className="subscriptImg"
              src={subscript3}
              onClick={() => setSubscriptButton("la")}
              alt="Subscript La"
            />
          </div>
        </Link>
        <Link to="/SubscriptOua" style={{ textDecoration: "none" }}>
          <div
            style={{
              border:
                subscriptButton === "oua" ? "red solid 3px" : "gold 1px solid",
            }}
          >
            <img
              className="subscriptImg"
              src={subscript4}
              onClick={() => setSubscriptButton("oua")}
              alt="Subscript Oua"
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
export default SubscriptHeader;
