import { useState } from "react";
import importAll from "../../utils/importAll";
const letters = [
  "ཀྭ་",
  "ཁྭ་",
  "གྭ་",
  "ཅྭ་",
  "ཉྭ་",
  "ཏྭ་",
  "དྭ་",
  "ཙྭ་",
  "ཚྭ་",
  "ཞྭ་",
  "ཟྭ་",
  "རྭ་",
  "ལྭ་",
  "ཤྭ་",
  "སྭ་",
  "ཧྭ་",
];
const lettersSpelling = importAll(
  require.context(
    "../../sounds/subscripts/subscript4/spelling",
    false,
    /\.mp3$/
  )
);
const lettersReading = importAll(
  require.context("../../sounds/subscripts/subscript4/reading", false, /\.mp3$/)
);

const wylieLetters = [
  "kwa",
  "khwa",
  "gwa",
  "cwa",
  "nywa",
  "twa",
  "dwa",
  "tswa",
  "tshwa",
  "zhwa",
  "zwa",
  "rwa",
  "lwa",
  "shwa",
  "swa",
  "hwa",
];

const SubscriptOua = ({ learningMode }) => {
  const playSound = (mySound) => {
    const audio = new Audio(mySound);
    audio.play();
  };
  const lineIds = [1, 1, 1, 1, 1, 1];
  const columnIds = [1, 1, 1];
  const indexMax = 16;
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
    </div>
  );
};

export default SubscriptOua;
