import { useState } from "react";
import spellingletter1 from "../../sounds/voyels/spelling/e/letter01.mp3";
import spellingletter2 from "../../sounds/voyels/spelling/e/letter02.mp3";
import spellingletter3 from "../../sounds/voyels/spelling/e/letter03.mp3";
import spellingletter4 from "../../sounds/voyels/spelling/e/letter04.mp3";
import spellingletter5 from "../../sounds/voyels/spelling/e/letter05.mp3";
import spellingletter6 from "../../sounds/voyels/spelling/e/letter06.mp3";
import spellingletter7 from "../../sounds/voyels/spelling/e/letter07.mp3";
import spellingletter8 from "../../sounds/voyels/spelling/e/letter08.mp3";
import spellingletter9 from "../../sounds/voyels/spelling/e/letter09.mp3";
import spellingletter10 from "../../sounds/voyels/spelling/e/letter10.mp3";
import spellingletter11 from "../../sounds/voyels/spelling/e/letter11.mp3";
import spellingletter12 from "../../sounds/voyels/spelling/e/letter12.mp3";
import spellingletter13 from "../../sounds/voyels/spelling/e/letter13.mp3";
import spellingletter14 from "../../sounds/voyels/spelling/e/letter14.mp3";
import spellingletter15 from "../../sounds/voyels/spelling/e/letter15.mp3";
import spellingletter16 from "../../sounds/voyels/spelling/e/letter16.mp3";
import spellingletter17 from "../../sounds/voyels/spelling/e/letter17.mp3";
import spellingletter18 from "../../sounds/voyels/spelling/e/letter18.mp3";
import spellingletter19 from "../../sounds/voyels/spelling/e/letter19.mp3";
import spellingletter20 from "../../sounds/voyels/spelling/e/letter20.mp3";
import spellingletter21 from "../../sounds/voyels/spelling/e/letter21.mp3";
import spellingletter22 from "../../sounds/voyels/spelling/e/letter22.mp3";
import spellingletter23 from "../../sounds/voyels/spelling/e/letter23.mp3";
import spellingletter24 from "../../sounds/voyels/spelling/e/letter24.mp3";
import spellingletter25 from "../../sounds/voyels/spelling/e/letter25.mp3";
import spellingletter26 from "../../sounds/voyels/spelling/e/letter26.mp3";
import spellingletter27 from "../../sounds/voyels/spelling/e/letter27.mp3";
import spellingletter28 from "../../sounds/voyels/spelling/e/letter28.mp3";
import spellingletter29 from "../../sounds/voyels/spelling/e/letter29.mp3";
import spellingletter30 from "../../sounds/voyels/spelling/e/letter30.mp3";
import readingletter1 from "../../sounds/voyels/reading/e/letter1.mp3";
import readingletter2 from "../../sounds/voyels/reading/e/letter2.mp3";
import readingletter3 from "../../sounds/voyels/reading/e/letter3.mp3";
import readingletter4 from "../../sounds/voyels/reading/e/letter4.mp3";
import readingletter5 from "../../sounds/voyels/reading/e/letter5.mp3";
import readingletter6 from "../../sounds/voyels/reading/e/letter6.mp3";
import readingletter7 from "../../sounds/voyels/reading/e/letter7.mp3";
import readingletter8 from "../../sounds/voyels/reading/e/letter8.mp3";
import readingletter9 from "../../sounds/voyels/reading/e/letter9.mp3";
import readingletter10 from "../../sounds/voyels/reading/e/letter10.mp3";
import readingletter11 from "../../sounds/voyels/reading/e/letter11.mp3";
import readingletter12 from "../../sounds/voyels/reading/e/letter12.mp3";
import readingletter13 from "../../sounds/voyels/reading/e/letter13.mp3";
import readingletter14 from "../../sounds/voyels/reading/e/letter14.mp3";
import readingletter15 from "../../sounds/voyels/reading/e/letter15.mp3";
import readingletter16 from "../../sounds/voyels/reading/e/letter16.mp3";
import readingletter17 from "../../sounds/voyels/reading/e/letter17.mp3";
import readingletter18 from "../../sounds/voyels/reading/e/letter18.mp3";
import readingletter19 from "../../sounds/voyels/reading/e/letter19.mp3";
import readingletter20 from "../../sounds/voyels/reading/e/letter20.mp3";
import readingletter21 from "../../sounds/voyels/reading/e/letter21.mp3";
import readingletter22 from "../../sounds/voyels/reading/e/letter22.mp3";
import readingletter23 from "../../sounds/voyels/reading/e/letter23.mp3";
import readingletter24 from "../../sounds/voyels/reading/e/letter24.mp3";
import readingletter25 from "../../sounds/voyels/reading/e/letter25.mp3";
import readingletter26 from "../../sounds/voyels/reading/e/letter26.mp3";
import readingletter27 from "../../sounds/voyels/reading/e/letter27.mp3";
import readingletter28 from "../../sounds/voyels/reading/e/letter28.mp3";
import readingletter29 from "../../sounds/voyels/reading/e/letter29.mp3";
import readingletter30 from "../../sounds/voyels/reading/e/letter30.mp3";

const letters = [
  "ཀེ",
  "ཁེ",
  "གེ",
  "ངེ",
  "ཅེ",
  "ཆེ",
  "ཇེ",
  "ཉེ",
  "ཏེ",
  "ཐེ",
  "དེ",
  "ནེ",
  "པེ",
  "ཕེ",
  "བེ",
  "མེ",
  "ཙེ",
  "ཚེ",
  "ཛེ",
  "ཝེ",
  "ཞེ",
  "ཟེ",
  "འེ",
  "ཡེ",
  "རེ",
  "ལེ",
  "ཤེ",
  "སེ",
  "ཧེ",
  "ཨེ",
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
  "ke",
  "khe",
  "ge",
  "nge",
  "ce",
  "che",
  "je",
  "nye",
  "te",
  "the",
  "de",
  "ne",
  "pe",
  "phe",
  "be",
  "me",
  "tse",
  "tshe",
  "dze",
  "we",
  "zhe",
  "ze",
  "'e",
  "ye",
  "re",
  "le",
  "she",
  "se",
  "he",
  "e",
];
const Drebou = ({ learningMode }) => {
  const playSound = (mySound) => {
    const audio = new Audio(mySound);
    audio.play();
  };
  const lineIds = [1, 1, 1, 1, 1, 1, 1, 1];
  const columnIds = [1, 1, 1, 1];
  const indexMax = 30;
  const [wylieDisplay, setWylieDisplay] = useState("");
  return (
    <main className="alphabet container">
      {lineIds.map((lineId, idx) => {
        return (
          <div index={idx} className="line">
            {columnIds.map((Id, index) => {
              return (
                idx * columnIds.length + index < indexMax && (
                  <div
                    onMouseEnter={() =>
                      setWylieDisplay(idx * columnIds.length + index)
                    }
                    onMouseLeave={() => setWylieDisplay("")}
                  >
                    {learningMode === "wylie" &&
                    wylieDisplay === idx * columnIds.length + index ? (
                      <span className="wylieSpan" index={index}>
                        {wylieLetters[idx * columnIds.length + index]}
                      </span>
                    ) : (
                      <span
                        className="letterSpan"
                        index={index}
                        onClick={() =>
                          learningMode === "spelling"
                            ? playSound(
                                spellingLetters[idx * columnIds.length + index]
                              )
                            : playSound(
                                readingLetters[idx * columnIds.length + index]
                              )
                        }
                      >
                        {letters[idx * columnIds.length + index]}
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

export default Drebou;
