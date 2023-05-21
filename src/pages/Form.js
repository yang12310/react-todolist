import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormDatePicker from "../components/FormDatePicker";
import FormTimePicker from "../components/FormTimePicker";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function Form({setIsEditDelete}) {
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoList = () => {
    if (location.state.where === "search") {
      navigate("/");
    } else if (location.state.where === "daily") {
      navigate("/home");
    }
  };

  const [formTime, setFormTime] = useState(
    location.state.row.date + " " + location.state.row.time
  );
  const [formTitle, setFormTitle] = useState(
    location.state.mode === "create" ? "" : location.state.row.title
  );
  const [formDescription, setFormDescription] = useState(
    location.state.mode === "create" ? "" : location.state.row.description
  );

  const [isEditMode, setIsEditMode] = useState(false);

  const handleCreate = () => {
    axios
      .post("http://localhost:4000/todolist/", {
        date: location.state.row.date,
        time: formTime.substring(11),
        title: formTitle,
        description: formDescription,
      })
      .then((response) => {
        console.log("Created....");
        navigate("/home");
      });
  };

  const handleEditReady = () => {
    setIsEditMode(true);
    location.state.mode = "edit";
  };

  const handleEdit = () => {
    axios.put(`http://localhost:4000/todolist/${location.state.row.id}`, {
      date: location.state.row.date,
      time: formTime.substring(11),
      title: formTitle,
      description: formDescription
    })
    .then((response) => {
      console.log("Updated....");
      handleGoList();
      setIsEditDelete(true);
    });
  }

  const handleDelete = () => {
    axios.delete(`http://localhost:4000/todolist/${location.state.row.id}`)
    .then((response) => {
      console.log("Deleted....");
      handleGoList();
      setIsEditDelete(true);
    });
  }

  const handleEditCancel = () => {
    setIsEditMode(false);
    location.state.mode = "view";
  };

  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-around",
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
                <FormDatePicker
                  date={location.state.row.date}
                  mode={location.state.mode}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormTimePicker
                  time={formTime}
                  setFormTime={setFormTime}
                  mode={location.state.mode}
                />
              </Grid>
            </Grid>
          </div>
          <div>
            <TextField
              label="Title"
              name="title"
              value={formTitle}
              variant="outlined"
              style={{ width: "100%", margin: "20px 0px 0px" }}
              onChange={(e) => {
                setFormTitle(e.target.value);
              }}
              InputProps={{
                readOnly: location.state.mode === "view" ? true : false,
              }}
            />
          </div>
          <div>
            <TextField
              label="Contents"
              name="contents"
              value={formDescription}
              variant="outlined"
              multiline={true}
              rows={10}
              onChange={(e) => {
                setFormDescription(e.target.value);
              }}
              style={{ width: "100%", margin: "20px 0px 0px" }}
              InputProps={{
                readOnly: location.state.mode === "view" ? true : false,
              }}
            />
          </div>
        </form>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {location.state.mode === "create" ? (
            <Button variant="contained" color="primary" onClick={handleCreate}>
              Create
            </Button>
          ) : (
            <>
              <Button
                variant="contained"
                color="primary"
                onClick={handleEditReady}
                sx={{ display: isEditMode ? "none" : "block" }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleDelete}
                sx={{ display: isEditMode ? "none" : "block" }}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleEdit}
                sx={{ display: !isEditMode ? "none" : "block" }}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleEditCancel}
                sx={{ display: !isEditMode ? "none" : "block" }}
              >
                Cancel
              </Button>
            </>
          )}
          <Button variant="contained" color="primary" onClick={handleGoList}>
            목록으로
          </Button>
        </div>
      </div>
    </div>
  );
}
