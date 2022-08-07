import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function LanguageSelect() {
  const [lang, setLang] = React.useState("1");

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">
          Select Language
        </InputLabel>
        <Select
          sx={{ height: 40 }}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={lang}
          onChange={handleChange}
          label="Select Language"
          //   inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={1}>English</MenuItem>
          <MenuItem value={2}>Deutsch</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
