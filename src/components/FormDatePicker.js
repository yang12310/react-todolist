import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function FormDatePicker({date}) {
  const [value, setValue] = React.useState(dayjs(date));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        slotProps={{ textField: { fullWidth: true } }}
        label="Planned Date"
        value={value}
        format="YYYY-MM-DD"
        mask="____-__-__"
        onChange={(newValue) => {
          setValue(newValue);
        }}
        readOnly = {true}
      />
    </LocalizationProvider>
  );
}
