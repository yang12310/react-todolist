import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Layout from "./pages/Layout";
import Form from "./pages/Form";
import Home from './pages/Home';
import axios from "axios";

function App() {
  const [createDate, setCreateDate] = useState(
    new Date(Date.now() - (new Date().getTimezoneOffset() * 60000)).toISOString().substring(0, 10)
    );
    const [searchListByDate, setSearchListByDate] = useState([]);

  const [searchFromDate, setSearchFromDate] = useState(
    new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substring(0, 10)
  );
  const [searchToDate, setSearchToDate] = useState(
    new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substring(0, 10)
  );
  const [keyword, setKeyword] = useState("");
  const [searchList, setSearchList] = useState([]);
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



  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/home" element={<Home 
          createDate={createDate}
          setCreateDate={setCreateDate}
          searchListByDate={searchListByDate}
          setSearchListByDate={setSearchListByDate}
          />} 
        />
        <Route path="/" element={<Search 
          searchFromDate={searchFromDate}
          setSearchFromDate={setSearchFromDate}
          searchToDate={searchToDate}
          setSearchToDate={setSearchToDate}
          keyword={keyword}
          setKeyword={setKeyword}
          searchTodolist={searchTodolist}
          searchList={searchList}
        />} />
        <Route path="/form" element={<Form />} />
      </Route>
    </Routes>
  );
}

export default App;
