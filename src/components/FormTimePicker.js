import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function TimePickerValue({time, mode}) {
  const [value, setValue] = React.useState(time);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        slotProps={{ textField: { fullWidth: true } }}
        label="Time"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        readOnly={(mode === "view") ? true : false}
      />
    </LocalizationProvider>
  );
}
