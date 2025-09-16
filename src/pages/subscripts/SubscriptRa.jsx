import { useState } from "react";
import importAll from "../../utils/importAll";
const letters = [
  "ཀྲ་",
  "ཁྲ་",
  "གྲ་",
  "ཏྲ་",
  "ཐྲ་",
  "དྲ་",
  "པྲ་",
  "ཕྲ་",
  "བྲ་",
  "ཤྲ་",
  "སྲ་",
  "ནྲ་",
  "མྲ་",
  "ཧྲ་",
];
const lettersExamples = ["ཀྲི་", "ཁྲུ་", "གྲོ་"];
const lettersSpelling = importAll(
  require.context(
    "../../sounds/subscripts/subscript2/spelling",
    false,
    /\.mp3$/
  )
);
const lettersReading = importAll(
  require.context("../../sounds/subscripts/subscript2/reading", false, /\.mp3$/)
);
const lettersExamplesSpel = importAll(
  require.context(
    "../../sounds/subscripts/subscript2/examples/spelling",
    false,
    /\.mp3$/
  )
);
const lettersExamplesRead = importAll(
  require.context(
    "../../sounds/subscripts/subscript1/examples/reading",
    false,
    /\.mp3$/
  )
);
const wylieLetters = [
  "kra",
  "khra",
  "gra",
  "tra",
  "thra",
  "dra",
  "pra",
  "phra",
  "bra",
  "shra",
  "sra",
  "nra",
  "mra",
  "hra",
];
const wylieLettersExamples = ["kri", "khru", "gro"];
const SubscriptRa = ({ learningMode }) => {
  const playSound = (mySound) => {
    const audio = new Audio(mySound);
    audio.play();
  };
  const lineIds = [1, 1, 1, 1, 1];
  const columnIds = [1, 1, 1];
  const indexMax = 14;
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

      <div className="line">
        {columnIds.map((Id, index) => {
          return (
            index < 3 && (
              <div
                onMouseEnter={() => setWylieDisplay(indexMax + index)}
                onMouseLeave={() => setWylieDisplay("")}
              >
                {learningMode === "wylie" &&
                wylieDisplay === indexMax + index ? (
                  <span className="wylieSpan" index={index}>
                    {wylieLettersExamples[index]}
                  </span>
                ) : (
                  <span
                    className="letterSpan"
                    index={index}
                    onClick={() =>
                      learningMode === "spelling"
                        ? playSound(
                            Object.entries(lettersExamplesSpel)[index][1]
                          )
                        : playSound(
                            Object.entries(lettersExamplesRead)[index][1]
                          )
                    }
                  >
                    {lettersExamples[index]}
                  </span>
                )}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default SubscriptRa;
