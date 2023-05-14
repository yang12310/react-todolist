import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import SearchPannel from "../components/SearchPanel";
import ListAndForm from "../components/ListAndForm";
import axios from "axios";

function Search({
  searchFromDate,
  setSearchFromDate,
  searchToDate,
  setSearchToDate,
  keyword,
  setKeyword,
  searchTodolist,
  searchList
}) {
  

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={0} style={{ maxWidth: "1000px" }}>
        <Grid item xs={12} md={4}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div>
              <SearchPannel 
                searchFromDate={searchFromDate}
                setSearchFromDate = {setSearchFromDate}
                searchToDate={searchToDate}
                setSearchToDate = {setSearchToDate}
                keyword={keyword}
                setKeyword={setKeyword}
                searchTodolist={searchTodolist}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div
            style={{
              padding: "0px 20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ListAndForm searchList = {searchList} where={"search"}/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default Search;
