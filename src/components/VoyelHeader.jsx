import RadioButtons from "./RadioButtons";
import kyikou from "../img/voyels/kyikou.jpg";
import chabkyou from "../img/voyels/chabkyou.jpg";
import drebou from "../img/voyels/drebou.jpg";
import naro from "../img/voyels/naro.jpg";
import { Link } from "react-router-dom";

const VoyelHeader = ({
  learningMode,
  setLearningMode,
  voyelButtons,
  setVoyelButtons,
}) => {
  return (
    <div className="subHeader">
      <div className="subHeaderUp">
        <Link to="/Kyikou" style={{ textDecoration: "none" }}>
          <div
            style={{
              border: voyelButtons[0] ? "red solid 3px" : "gold 1px solid",
              // fontSize: 30,
            }}
            className="voyelImg"
            onClick={() => setVoyelButtons([1, 0, 0, 0])}
          >
            <img src={kyikou} alt="" className="voyelImg" />
          </div>
        </Link>
        <Link to="/Chabkyou" style={{ textDecoration: "none" }}>
          <div
            style={{
              border: voyelButtons[1] ? "red solid 3px" : "gold 1px solid",
            }}
          >
            <img
              className="voyelImg"
              src={chabkyou}
              onClick={() => setVoyelButtons([0, 1, 0, 0])}
              alt=""
            />
          </div>
        </Link>
        <Link to="/Drebou" style={{ textDecoration: "none" }}>
          <div
            style={{
              border: voyelButtons[2] ? "red solid 3px" : "gold 1px solid",
            }}
          >
            <img
              className="voyelImg"
              src={drebou}
              onClick={() => setVoyelButtons([0, 0, 1, 0])}
              alt=""
            />
          </div>
        </Link>
        <Link to="/Naro" style={{ textDecoration: "none" }}>
          <div
            style={{
              border: voyelButtons[3] ? "red solid 3px" : "gold 1px solid",
            }}
          >
            <img
              className="voyelImg"
              src={naro}
              onClick={() => setVoyelButtons([0, 0, 0, 1])}
              alt=""
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
export default VoyelHeader;
