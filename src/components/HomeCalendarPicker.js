import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function HomeCalendarPicker({createDate, setCreateDate}) {
  const [date, setDate] = React.useState(dayjs(createDate));
  createDate = dayjs(createDate);
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={{ border: "1px solid lightgrey" }}>
        <DateCalendar
          value={createDate}
          onChange={(newValue) =>{
            setDate(newValue);
            setCreateDate(newValue.$y + "-" + (newValue.$M + 1).toString().padStart(2, 0) + "-" + newValue.$D.toString().padStart(2, 0));
          }}
        />
      </div>
    </LocalizationProvider>
  );
}
