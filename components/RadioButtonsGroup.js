import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { v4 as uuidv4 } from "uuid";

export default function RadioButtonsGroup({ title, labels }) {
  const [value, setValue] = React.useState(labels[0]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{title}</FormLabel>
      <RadioGroup
        aria-label={title}
        name={title}
        value={value}
        onChange={handleChange}
      >
        {labels.map((label) => (
          <FormControlLabel
            key={uuidv4()}
            value={label}
            control={<Radio />}
            label={label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
