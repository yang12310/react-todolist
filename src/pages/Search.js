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
  // searchTodolist, 교재에 없는데 지워야함
  searchList,
  setSearchList,
  isEditDelete,
  setIsEditDelete
}) {

  const searchTodolist = () => {
    axios
      .get("http://localhost:4000/todolist", {
        params: {},
      })
      .then((response) => {
        let list = response.data.filter((data) => {
          return keyword
            ? searchFromDate <= data.date &&
                data.date <= searchToDate &&
                data.title.includes(keyword.trim())
            : searchFromDate <= data.date && data.date <= searchToDate;
        });
        setSearchList(list);
      });
    return;
  };

  if (isEditDelete) {
    searchTodolist();
  }

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
