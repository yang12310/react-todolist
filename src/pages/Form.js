import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormDatePicker from "../components/FormDatePicker";
import FormTimePicker from "../components/FormTimePicker";
import { useNavigate, useLocation } from "react-router-dom";

export default function Form() {
    const location = useLocation();
    const navigate = useNavigate();
    const handleGoList = () => {
      if (location.state.where === "search") {
        navigate('/');
        }
        else if (location.state.where === "daily") {
        navigate('/home');
      }
    }

  return (
    <div
      style={{
        margin: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <div>
          <h1>View Schedule</h1>
        </div>
        <form>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormDatePicker date={location.state.row.date} mode={location.state.mode }/>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormTimePicker time={location.state.row.date + " " +
location            .state.row.time} mode={location.state.mode}/>
              </Grid>
            </Grid>
          </div>
          <div>
            <TextField
              label="Title"
              name="title"
              value = {location.state.row.title}
              variant="outlined"
              style={{ width: "100%", margin: "20px 0px 0px" }}
              InputProps={{
                readOnly: location.state.mode === "view" ? true : false,
                }}
            />
          </div>
          <div>
            <TextField
              label="Contents"
              name="contents"
              value={location.state.row.description}
              variant="outlined"
              multiline={true}
              rows={10}
              style={{ width: "100%", margin: "20px 0px 0px" }}
              InputProps={{
                readOnly: location.state.mode === "view" ? true : false,
                }}
            />
          </div>
        </form>
        <div style={{ margin: "30px 0px 30px" }}></div>
        <Button 
            variant="contained" 
            color="primary"
            onClick={handleGoList}
        >
          목록으로
        </Button>   
      </div>
    </div>
  );
}
