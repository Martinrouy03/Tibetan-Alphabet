import mySoundletter1 from "../sounds/alphabet/letter1.mp3";
import mySoundletter2 from "../sounds/alphabet/letter2.mp3";
import mySoundletter3 from "../sounds/alphabet/letter3.mp3";
import mySoundletter4 from "../sounds/alphabet/letter4.mp3";
import mySoundletter5 from "../sounds/alphabet/letter5.mp3";
import mySoundletter6 from "../sounds/alphabet/letter6.mp3";
import mySoundletter7 from "../sounds/alphabet/letter7.mp3";
import mySoundletter8 from "../sounds/alphabet/letter8.mp3";
import mySoundletter9 from "../sounds/alphabet/letter9.mp3";
import mySoundletter10 from "../sounds/alphabet/letter10.mp3";
import mySoundletter11 from "../sounds/alphabet/letter11.mp3";
import mySoundletter12 from "../sounds/alphabet/letter12.mp3";
import mySoundletter13 from "../sounds/alphabet/letter13.mp3";
import mySoundletter14 from "../sounds/alphabet/letter14.mp3";
import mySoundletter15 from "../sounds/alphabet/letter15.mp3";
import mySoundletter16 from "../sounds/alphabet/letter16.mp3";
import mySoundletter17 from "../sounds/alphabet/letter17.mp3";
import mySoundletter18 from "../sounds/alphabet/letter18.mp3";
import mySoundletter19 from "../sounds/alphabet/letter19.mp3";
import mySoundletter20 from "../sounds/alphabet/letter20.mp3";
import mySoundletter21 from "../sounds/alphabet/letter21.mp3";
import mySoundletter22 from "../sounds/alphabet/letter22.mp3";
import mySoundletter23 from "../sounds/alphabet/letter23.mp3";
import mySoundletter24 from "../sounds/alphabet/letter24.mp3";
import mySoundletter25 from "../sounds/alphabet/letter25.mp3";
import mySoundletter26 from "../sounds/alphabet/letter26.mp3";
import mySoundletter27 from "../sounds/alphabet/letter27.mp3";
import mySoundletter28 from "../sounds/alphabet/letter28.mp3";
import mySoundletter29 from "../sounds/alphabet/letter29.mp3";
import mySoundletter30 from "../sounds/alphabet/letter30.mp3";

const letters = [
  "ཀ་",
  "ཁ་",
  "ག་",
  "ང་",
  "ཅ་",
  "ཆ་",
  "ཇ་",
  "ཉ་",
  "ཏ་",
  "ཐ་",
  "ད་",
  "ན་",
  "པ་",
  "ཕ་",
  "བ་",
  "མ་",
  "ཙ་",
  "ཚ་",
  "ཛ་",
  "ཝ་",
  "ཞ་",
  "ཟ་",
  "འ་",
  "ཡ་",
  "ར་",
  "ལ་",
  "ཤ་",
  "ས་",
  "ཧ་",
  "ཨ་",
];

const lettersSound = [
  mySoundletter1,
  mySoundletter2,
  mySoundletter3,
  mySoundletter4,
  mySoundletter5,
  mySoundletter6,
  mySoundletter7,
  mySoundletter8,
  mySoundletter9,
  mySoundletter10,
  mySoundletter11,
  mySoundletter12,
  mySoundletter13,
  mySoundletter14,
  mySoundletter15,
  mySoundletter16,
  mySoundletter17,
  mySoundletter18,
  mySoundletter19,
  mySoundletter20,
  mySoundletter21,
  mySoundletter22,
  mySoundletter23,
  mySoundletter24,
  mySoundletter25,
  mySoundletter26,
  mySoundletter27,
  mySoundletter28,
  mySoundletter29,
  mySoundletter30,
];
const Alphabet = () => {
  const playSound = (mySound) => {
    const audio = new Audio(mySound);
    audio.play();
  };
  const lineIds = [1, 1, 1, 1, 1, 1, 1, 1];
  const columnIds = [1, 1, 1, 1];
  const indexMax = 30;
  return (
    <main className="alphabet container">
      {lineIds.map((lineId, idx) => {
        return (
          <div index={idx} className="line">
            {columnIds.map((Id, index) => {
              return (
                idx * columnIds.length + index < indexMax && (
                  <div>
                    <span
                      index={index}
                      onClick={() =>
                        playSound(lettersSound[idx * columnIds.length + index])
                      }
                      className="letterSpan"
                    >
                      {letters[idx * columnIds.length + index]}
                    </span>
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

export default Alphabet;
