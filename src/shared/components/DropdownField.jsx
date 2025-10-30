import React from "react";
import { TextField, MenuItem } from "@mui/material";

export const DropdownField = ({ label, value, options, onChange, error, helperText, ...rest }) => (
  <TextField
    select
    fullWidth
    label={label}
    value={value}
    onChange={onChange}
    error={!!error}
    helperText={helperText}
    margin="normal"
    {...rest}
  >
    <MenuItem value="">Select {label}</MenuItem>
    {options.map((opt) => (
      <MenuItem key={opt.code} value={opt.code}>
        {opt.name}
      </MenuItem>
    ))}
  </TextField>
);
