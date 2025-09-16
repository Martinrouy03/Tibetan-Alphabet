import { useState } from "react";
import importAll from "../../utils/importAll";
const letters = ["ཀླ་", "གླ་", "བླ་", "རླ་", "སླ་", "ཟླ་"];
const lettersExamples = ["གླི་", "བློ་", "རླུ་", "སླེ་"];
const lettersSpelling = importAll(
  require.context(
    "../../sounds/subscripts/subscript3/spelling",
    false,
    /\.mp3$/
  )
);
const lettersReading = importAll(
  require.context("../../sounds/subscripts/subscript3/reading", false, /\.mp3$/)
);
const lettersExamplesSpel = importAll(
  require.context(
    "../../sounds/subscripts/subscript3/examples/spelling",
    false,
    /\.mp3$/
  )
);
const lettersExamplesRead = importAll(
  require.context(
    "../../sounds/subscripts/subscript3/examples/reading",
    false,
    /\.mp3$/
  )
);
const wylieLetters = ["kla", "gla", "bla", "rla", "sla", "zla"];
const wylieLettersExamples = ["gli", "blo", "rlu", "sle"];

const SubscriptLa = ({ learningMode }) => {
  console.log(learningMode);
  const playSound = (mySound) => {
    const audio = new Audio(mySound);
    audio.play();
  };
  const lineIds = [1, 1];
  const columnIds = [1, 1, 1];
  const indexMax = 6;
  const colNb = columnIds.length;
  const [wylieDisplay, setWylieDisplay] = useState("");

  return (
    <div className="alphabet container">
      {lineIds.map((lineId, idx) => {
        return (
          <div index={idx} className="line">
            {columnIds.map((Id, index) => {
              return (
                idx * colNb + index < indexMax && (
                  <div
                    onMouseEnter={() => setWylieDisplay(idx * colNb + index)}
                    onMouseLeave={() => setWylieDisplay("")}
                  >
                    {learningMode === "wylie" &&
                    wylieDisplay === idx * colNb + index ? (
                      <span className="wylieSpan" index={index}>
                        {wylieLetters[idx * colNb + index]}
                      </span>
                    ) : (
                      <span
                        className="letterSpan"
                        index={index}
                        onClick={() =>
                          learningMode === "spelling"
                            ? playSound(
                                Object.entries(lettersSpelling)[
                                  idx * 3 + index
                                ][1]
                              )
                            : playSound(
                                Object.entries(lettersReading)[
                                  idx * 3 + index
                                ][1]
                              )
                        }
                      >
                        {letters[idx * colNb + index]}
                      </span>
                    )}
                  </div>
                )
              );
            })}
          </div>
        );
      })}
      <p>Combine with voyels:</p>
      {lineIds.map((lineId, idx) => {
        return (
          <div index={idx} className="line">
            {columnIds.map((Id, index) => {
              return (
                idx * columnIds.length + index < 4 && (
                  <div
                    onMouseEnter={() =>
                      setWylieDisplay(indexMax + idx * columnIds.length + index)
                    }
                    onMouseLeave={() => setWylieDisplay("")}
                  >
                    {learningMode === "wylie" &&
                    wylieDisplay ===
                      indexMax + idx * columnIds.length + index ? (
                      <span className="wylieSpan" index={index}>
                        {wylieLettersExamples[idx * columnIds.length + index]}
                      </span>
                    ) : (
                      <span
                        className="letterSpan"
                        index={index}
                        onClick={() =>
                          learningMode === "spelling"
                            ? playSound(
                                Object.entries(lettersExamplesSpel)[
                                  idx * colNb + index
                                ][1]
                              )
                            : playSound(
                                Object.entries(lettersExamplesRead)[
                                  idx * colNb + index
                                ][1]
                              )
                        }
                      >
                        {lettersExamples[idx * columnIds.length + index]}
                      </span>
                    )}
                  </div>
                )
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default SubscriptLa;
