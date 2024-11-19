import React, { useRef } from "react";
import Rtl from "../utils/Rtl";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Stack } from "@mui/system";

const FilterSelect = ({ id, value, label, onChange, listArray }) => {
  const uniqeArray = Array.from(new Set(listArray));

  return (
    <Stack
      sx={{
        borderRadius: 2,
        m: 0.5,
        mt: 1.4,
        bgcolor: "secondary.main",
        color: "primary.main",
      }}
    >
      <Rtl>
        <FormControl fullWidth size="small">
          <InputLabel id={id}>{label}</InputLabel>
          <Select
            sx={{ borderRadius: 2 }}
            labelId={id}
            value={value}
            label={label}
            onChange={onChange}
          >
            <MenuItem sx={{ p: 2 }} value=""></MenuItem>
            {uniqeArray.map((x) => (
              <MenuItem value={x}>{x}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Rtl>
    </Stack>
  );
};

export default FilterSelect;
