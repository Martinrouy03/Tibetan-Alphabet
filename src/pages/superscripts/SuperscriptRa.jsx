import { useState } from "react";
import importAll from "../../utils/importAll";
const letters = [
  "རྐ་",
  "རྒ་",
  "རྔ་",
  "རྗ་",
  "རྙ་",
  "རྟ་",
  "རྡ་",
  "རྣ་",
  "རྦ་",
  "རྨ་",
  "རྩ་",
  "རྫ་",
];
const lettersExamples = ["རྡོ་", "རྒུ་", "རྨེ་"];
const lettersSpelling = importAll(
  require.context(
    "../../sounds/superscripts/superscript1/spelling",
    false,
    /\.mp3$/
  )
);
const lettersReading = importAll(
  require.context(
    "../../sounds/superscripts/superscript1/reading",
    false,
    /\.mp3$/
  )
);
const lettersExamplesSpel = importAll(
  require.context(
    "../../sounds/superscripts/superscript1/examples/spelling",
    false,
    /\.mp3$/
  )
);
const lettersExamplesRead = importAll(
  require.context(
    "../../sounds/superscripts/superscript1/examples/reading",
    false,
    /\.mp3$/
  )
);
const wylieLetters = [
  "rka",
  "rga",
  "rnga",
  "rja",
  "rnya",
  "rta",
  "rda",
  "rna",
  "rba",
  "rma",
  "rtsa",
  "rdza",
];
const wylieLettersExamples = ["rdo", "rgu", "rme"];
const SubscriptRa = ({ learningMode }) => {
  const playSound = (mySound) => {
    const audio = new Audio(mySound);
    audio.play();
  };
  const lineIds = [1, 1, 1, 1];
  const columnIds = [1, 1, 1];
  const indexMax = 12;
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
