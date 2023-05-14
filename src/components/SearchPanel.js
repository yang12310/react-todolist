import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchDatePicker from "./SearchDatePicker";

export default function SearchPannel({
  searchFromDate,
  setSearchFromDate,
  searchToDate,
  setSearchToDate,
  keyword,
  setKeyword,
  searchTodolist,
}) {

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>Search Condition</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SearchDatePicker 
          label={"From"} 
          searchDate={searchFromDate}
          setSearchDate={setSearchFromDate}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <SearchDatePicker 
          label={"To"} 
          searchDate={searchToDate}
          setSearchDate={setSearchToDate}
          />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <TextField
          style={{ width: "100%" }}
          label="Keyword"
          variant="outlined"
          value={keyword}
          onChange={handleChange}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Button 
          variant="contained" 
          color="primary"
          onClick={searchTodolist}
        >
          검색
        </Button>
      </div>
    </div>
  );
}
