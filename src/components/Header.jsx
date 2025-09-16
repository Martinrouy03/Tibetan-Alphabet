import { Link } from "react-router-dom";
import pod from "../img/Tibetan.png";
import { useState } from "react";
import VoyelHeader from "./VoyelHeader";
import SubscriptHeader from "./SubscriptHeader";
import SuperscriptHeader from "./SuperscriptHeader";
const Header = ({ learningMode, setLearningMode }) => {
  const [headerButtons, setHeaderButtons] = useState("");
  const [voyelButtons, setVoyelButtons] = useState([1, 0, 0, 0]);
  const [subscriptButton, setSubscriptButton] = useState("ya");
  const [superscriptButton, setSuperscriptButton] = useState("ra");
  return (
    <header className="container">
      <div className="menu-header">
        <div className="top-header">
          <Link to="/">
            <div className="welcomeButton">
              <img src={pod} alt="" onClick={() => setHeaderButtons("")} />
            </div>
          </Link>
          <div className="page-buttons">
            <Link to="/Alphabet" style={{ textDecoration: "none" }}>
              <div
                onClick={() => setHeaderButtons("alphabet")}
                style={{
                  backgroundColor:
                    headerButtons === "alphabet" ? "black" : "red",
                  border:
                    headerButtons === "alphabet" ? "red solid 2px" : "none",
                }}
              >
                Alphabet
              </div>
            </Link>
            <Link to="/Kyikou" style={{ textDecoration: "none" }}>
              <div
                onClick={() => {
                  setHeaderButtons("voyels");
                }}
                style={{
                  backgroundColor: headerButtons === "voyels" ? "black" : "red",
                  border: headerButtons === "voyels" ? "red solid 2px" : "none",
                }}
              >
                Voyels
              </div>
            </Link>
            <Link to="/SubscriptYa" style={{ textDecoration: "none" }}>
              <div
                onClick={() => setHeaderButtons("subscripts")}
                style={{
                  backgroundColor:
                    headerButtons === "subscripts" ? "black" : "red",
                  border:
                    headerButtons === "subscripts" ? "red solid 2px" : "none",
                }}
              >
                Subscripts
              </div>
            </Link>
            <Link to="/SuperscriptRa" style={{ textDecoration: "none" }}>
              <div
                onClick={() => setHeaderButtons("superscripts")}
                style={{
                  backgroundColor:
                    headerButtons === "superscripts" ? "black" : "red",
                  border:
                    headerButtons === "superscripts" ? "red solid 2px" : "none",
                }}
              >
                Superscripts
              </div>
            </Link>
          </div>
          <div className="empty"></div>
        </div>
        {headerButtons === "voyels" && (
          <VoyelHeader
            learningMode={learningMode}
            setLearningMode={setLearningMode}
            voyelButtons={voyelButtons}
            setVoyelButtons={setVoyelButtons}
          ></VoyelHeader>
        )}
        {headerButtons === "subscripts" && (
          <SubscriptHeader
            learningMode={learningMode}
            setLearningMode={setLearningMode}
            subscriptButton={subscriptButton}
            setSubscriptButton={setSubscriptButton}
          ></SubscriptHeader>
        )}
        {headerButtons === "superscripts" && (
          <SuperscriptHeader
            learningMode={learningMode}
            setLearningMode={setLearningMode}
            superscriptButton={superscriptButton}
            setSuperscriptButton={setSuperscriptButton}
          ></SuperscriptHeader>
        )}
      </div>
    </header>
  );
};

export default Header;
