import { useState } from "react";
import spellingletter1 from "../../sounds/voyels/spelling/i/letter1.mp3";
import spellingletter2 from "../../sounds/voyels/spelling/i/letter2.mp3";
import spellingletter3 from "../../sounds/voyels/spelling/i/letter3.mp3";
import spellingletter4 from "../../sounds/voyels/spelling/i/letter4.mp3";
import spellingletter5 from "../../sounds/voyels/spelling/i/letter5.mp3";
import spellingletter6 from "../../sounds/voyels/spelling/i/letter6.mp3";
import spellingletter7 from "../../sounds/voyels/spelling/i/letter7.mp3";
import spellingletter8 from "../../sounds/voyels/spelling/i/letter8.mp3";
import spellingletter9 from "../../sounds/voyels/spelling/i/letter9.mp3";
import spellingletter10 from "../../sounds/voyels/spelling/i/letter10.mp3";
import spellingletter11 from "../../sounds/voyels/spelling/i/letter11.mp3";
import spellingletter12 from "../../sounds/voyels/spelling/i/letter12.mp3";
import spellingletter13 from "../../sounds/voyels/spelling/i/letter13.mp3";
import spellingletter14 from "../../sounds/voyels/spelling/i/letter14.mp3";
import spellingletter15 from "../../sounds/voyels/spelling/i/letter15.mp3";
import spellingletter16 from "../../sounds/voyels/spelling/i/letter16.mp3";
import spellingletter17 from "../../sounds/voyels/spelling/i/letter17.mp3";
import spellingletter18 from "../../sounds/voyels/spelling/i/letter18.mp3";
import spellingletter19 from "../../sounds/voyels/spelling/i/letter19.mp3";
import spellingletter20 from "../../sounds/voyels/spelling/i/letter20.mp3";
import spellingletter21 from "../../sounds/voyels/spelling/i/letter21.mp3";
import spellingletter22 from "../../sounds/voyels/spelling/i/letter22.mp3";
import spellingletter23 from "../../sounds/voyels/spelling/i/letter23.mp3";
import spellingletter24 from "../../sounds/voyels/spelling/i/letter24.mp3";
import spellingletter25 from "../../sounds/voyels/spelling/i/letter25.mp3";
import spellingletter26 from "../../sounds/voyels/spelling/i/letter26.mp3";
import spellingletter27 from "../../sounds/voyels/spelling/i/letter27.mp3";
import spellingletter28 from "../../sounds/voyels/spelling/i/letter28.mp3";
import spellingletter29 from "../../sounds/voyels/spelling/i/letter29.mp3";
import spellingletter30 from "../../sounds/voyels/spelling/i/letter30.mp3";
import readingletter1 from "../../sounds/voyels/reading/i/letter1.mp3";
import readingletter2 from "../../sounds/voyels/reading/i/letter2.mp3";
import readingletter3 from "../../sounds/voyels/reading/i/letter3.mp3";
import readingletter4 from "../../sounds/voyels/reading/i/letter4.mp3";
import readingletter5 from "../../sounds/voyels/reading/i/letter5.mp3";
import readingletter6 from "../../sounds/voyels/reading/i/letter6.mp3";
import readingletter7 from "../../sounds/voyels/reading/i/letter7.mp3";
import readingletter8 from "../../sounds/voyels/reading/i/letter8.mp3";
import readingletter9 from "../../sounds/voyels/reading/i/letter9.mp3";
import readingletter10 from "../../sounds/voyels/reading/i/letter10.mp3";
import readingletter11 from "../../sounds/voyels/reading/i/letter11.mp3";
import readingletter12 from "../../sounds/voyels/reading/i/letter12.mp3";
import readingletter13 from "../../sounds/voyels/reading/i/letter13.mp3";
import readingletter14 from "../../sounds/voyels/reading/i/letter14.mp3";
import readingletter15 from "../../sounds/voyels/reading/i/letter15.mp3";
import readingletter16 from "../../sounds/voyels/reading/i/letter16.mp3";
import readingletter17 from "../../sounds/voyels/reading/i/letter17.mp3";
import readingletter18 from "../../sounds/voyels/reading/i/letter18.mp3";
import readingletter19 from "../../sounds/voyels/reading/i/letter19.mp3";
import readingletter20 from "../../sounds/voyels/reading/i/letter20.mp3";
import readingletter21 from "../../sounds/voyels/reading/i/letter21.mp3";
import readingletter22 from "../../sounds/voyels/reading/i/letter22.mp3";
import readingletter23 from "../../sounds/voyels/reading/i/letter23.mp3";
import readingletter24 from "../../sounds/voyels/reading/i/letter24.mp3";
import readingletter25 from "../../sounds/voyels/reading/i/letter25.mp3";
import readingletter26 from "../../sounds/voyels/reading/i/letter26.mp3";
import readingletter27 from "../../sounds/voyels/reading/i/letter27.mp3";
import readingletter28 from "../../sounds/voyels/reading/i/letter28.mp3";
import readingletter29 from "../../sounds/voyels/reading/i/letter29.mp3";
import readingletter30 from "../../sounds/voyels/reading/i/letter30.mp3";

const letters = [
  "ཀི་",
  "ཁི་",
  "གི་",
  "ངི་",
  "ཅི་",
  "ཆི་",
  "ཇི་",
  "ཉི་",
  "ཏི་",
  "ཐི་",
  "དི་",
  "ནི་",
  "པི་",
  "ཕི་",
  "བི་",
  "མི་",
  "ཙི་",
  "ཚི་",
  "ཛི་",
  "ཝི་",
  "ཞི་",
  "ཟི་",
  "འི་",
  "ཡི་",
  "རི་",
  "ལི་",
  "ཤི་",
  "སི་",
  "ཧི་",
  "ཨི་",
];
const spellingLetters = [
  spellingletter1,
  spellingletter2,
  spellingletter3,
  spellingletter4,
  spellingletter5,
  spellingletter6,
  spellingletter7,
  spellingletter8,
  spellingletter9,
  spellingletter10,
  spellingletter11,
  spellingletter12,
  spellingletter13,
  spellingletter14,
  spellingletter15,
  spellingletter16,
  spellingletter17,
  spellingletter18,
  spellingletter19,
  spellingletter20,
  spellingletter21,
  spellingletter22,
  spellingletter23,
  spellingletter24,
  spellingletter25,
  spellingletter26,
  spellingletter27,
  spellingletter28,
  spellingletter29,
  spellingletter30,
];
const readingLetters = [
  readingletter1,
  readingletter2,
  readingletter3,
  readingletter4,
  readingletter5,
  readingletter6,
  readingletter7,
  readingletter8,
  readingletter9,
  readingletter10,
  readingletter11,
  readingletter12,
  readingletter13,
  readingletter14,
  readingletter15,
  readingletter16,
  readingletter17,
  readingletter18,
  readingletter19,
  readingletter20,
  readingletter21,
  readingletter22,
  readingletter23,
  readingletter24,
  readingletter25,
  readingletter26,
  readingletter27,
  readingletter28,
  readingletter29,
  readingletter30,
];
const wylieLetters = [
  "ki",
  "khi",
  "gi",
  "ngi",
  "ci",
  "chi",
  "ji",
  "nyi",
  "ti",
  "thi",
  "di",
  "ni",
  "pi",
  "phi",
  "bi",
  "mi",
  "tsi",
  "tshi",
  "dzi",
  "wi",
  "zhi",
  "zi",
  "'i",
  "yi",
  "ri",
  "li",
  "shi",
  "si",
  "hi",
  "i",
];
const Kyikou = ({ learningMode }) => {
  const playSound = (mySound) => {
    const audio = new Audio(mySound);
    audio.play();
  };
  const lineIds = [1, 1, 1, 1, 1, 1, 1, 1];
  const columnIds = [1, 1, 1, 1];
  const [wylieDisplay, setWylieDisplay] = useState("");
  return (
    <main className="alphabet container">
      {lineIds.map((lineId, idx) => {
        return (
          <div index={idx} className="line">
            {columnIds.map((Id, index) => {
              return (
                idx * 4 + index < 30 && (
                  <div
                    onMouseEnter={() => setWylieDisplay(idx * 4 + index)}
                    onMouseLeave={() => setWylieDisplay("")}
                  >
                    {learningMode === "wylie" &&
                    wylieDisplay === idx * 4 + index ? (
                      <span className="wylieSpan" index={index}>
                        {wylieLetters[idx * 4 + index]}
                      </span>
                    ) : (
                      <span
                        className="letterSpan"
                        index={index}
                        onClick={() =>
                          learningMode === "spelling"
                            ? playSound(spellingLetters[idx * 4 + index])
                            : playSound(readingLetters[idx * 4 + index])
                        }
                      >
                        {letters[idx * 4 + index]}
                      </span>
                    )}
                  </div>
                )
              );
            })}
          </div>
        );
      })}
    </main>
  );
};

export default Kyikou;
