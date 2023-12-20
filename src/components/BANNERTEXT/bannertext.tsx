import React from "react";
import "./bannertext.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Bannertext = () => {
  const [color, setColor] = React.useState("");

  const handleChangeC = (event: SelectChangeEvent) => {
    setColor(event.target.value);
  };

  const [size, setSize] = React.useState("");

  const handleChangeS = (event: SelectChangeEvent) => {
    setSize(event.target.value);
  };

  return (
    <div className="bannerT">
      <div className="newL">
        <h1>Primus Nobilis</h1>
        <h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          ipsum ipsam, ipsa enim necessitatibus recusandae voluptas excepturi id
          omnis vitae laboriosam dolores quaerat consequuntur?
        </h2>
      </div>
      <div className="prodI">
        <div className="textP">
          <h2>DE LA MONTAÑA</h2>
          <h1>FUKYU - Nada Personal (Sweater)</h1>
          <div className="formP">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Color
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={color}
              onChange={handleChangeC}
              label="color"
            >
              <MenuItem value={1} >DORÉ Beau</MenuItem>
              <MenuItem value={2} >BLEU Amour</MenuItem>
              <MenuItem value={3} >ROUGE Neuviéme</MenuItem>
              <MenuItem value={4} >BLANC Montagne</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Talla
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={size}
              onChange={handleChangeS}
              label="size"
            >
              <MenuItem value={5} >S</MenuItem>
              <MenuItem value={6} >M</MenuItem>
              <MenuItem value={7} >L</MenuItem>
              <MenuItem value={8} >XL</MenuItem>
            </Select>
          </FormControl>
          </div>
        </div>
        <div className="buyN"></div>
      </div>
    </div>
  );
};

export default Bannertext;
