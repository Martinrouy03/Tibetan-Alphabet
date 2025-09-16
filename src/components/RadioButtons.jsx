import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";

export default function RadioButtons({ learningMode, setLearningMode }) {
  return (
    <FormControl>
      {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="radio-buttons-label"
        name="radio-buttons"
        style={{ color: "white" }}
        value={learningMode}
        onChange={(event) => {
          setLearningMode(event.target.value);
        }}
      >
        <FormControlLabel
          value="reading"
          control={<Radio style={{ color: "red" }} />}
          label="Reading"
        />
        <FormControlLabel
          value="spelling"
          control={<Radio style={{ color: "red" }} />}
          label="Spelling"
        />
        <FormControlLabel
          value="wylie"
          control={<Radio style={{ color: "red" }} />}
          label="Wylie"
        />
        {/* <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        /> */}
      </RadioGroup>
    </FormControl>
  );
}
