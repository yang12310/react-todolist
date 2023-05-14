import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DatePickerValue({ label, searchDate, setSearchDate }) {
  const [value, setValue] = React.useState(dayjs(new Date(searchDate)));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        format="YYYY-MM-DD"
        onChange={(newValue) => {
            setValue(newValue)
            setSearchDate(newValue.$y + "-" + (newValue.$M+1).toString().padStart(2, 0) + "-"
                + newValue.$D.toString().padStart(2, 0));
        }}
      />
    </LocalizationProvider>
  );
}
