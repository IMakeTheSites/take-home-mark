import React from "react";
import { TextField, Button, Box } from "@mui/material";

const CountryForm = ({ countryCode, setCountryCode, handleSubmit }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
      <TextField
        type="text"
        size="small"
        placeholder="Country Code"
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
      />

      <Button
        variant="outlined"
        size="small"
        onClick={handleSubmit}
        sx={{ ml: 2 }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default CountryForm;
