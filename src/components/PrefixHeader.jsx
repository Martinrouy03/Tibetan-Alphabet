import RadioButtons from "./RadioButtons";
import { Link } from "react-router-dom";
const prefixs = ["ག་", "ད་", "བ་", "མ་", "འ་"];
const PrefixHeader = ({
  learningMode,
  setLearningMode,
  prefixButton,
  setPrefixButton,
}) => {
  return (
    <div className="subHeader">
      <div className="subHeaderUp">
        {prefixs.map((prefix, index) => {
          return (
            <Link to={`/Prefix${index + 1}`} style={{ textDecoration: "none" }}>
              <div
                index={index}
                style={{
                  border:
                    prefixButton === prefixs[index]
                      ? "red solid 3px"
                      : "gold 1px solid",
                }}
              >
                {prefix}
              </div>
            </Link>
          );
        })}
      </div>
      <RadioButtons
        learningMode={learningMode}
        setLearningMode={setLearningMode}
      ></RadioButtons>
    </div>
  );
};
export default PrefixHeader;
