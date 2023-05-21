import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Search from "./pages/Search";
import Layout from "./pages/Layout";
import Form from "./pages/Form";
import Home from './pages/Home';
import Login from './pages/Login'
import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('todolist-loggedIn'));
  const [isEditDelete, setIsEditDelete] = useState(false);
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

  return (
    <Routes>
      <Route element={<Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/home" element={ isLoggedIn ? 
          <Home 
            createDate={createDate}
            setCreateDate={setCreateDate}
            searchListByDate={searchListByDate}
            setSearchListByDate={setSearchListByDate}
          /> : <Navigate to="/" />
        } 
      />
        <Route path="/search" element={ isLoggedIn ? 
          <Search 
            searchFromDate={searchFromDate}
            setSearchFromDate={setSearchFromDate}
            searchToDate={searchToDate}
            setSearchToDate={setSearchToDate}
            keyword={keyword}
            setKeyword={setKeyword}
            // searchTodolist={searchTodolist} 교재에 없는데 지워야함
            searchList={searchList}
            setSearchList={setSearchList}
            isEditDelete={isEditDelete}
            setIsEditDelete={setIsEditDelete}
          /> : <Navigate to="/"/>
        } 
      />
        <Route path="/form" element={
          <Form setIsEditDelete={setIsEditDelete}/>} />
        </Route>
      </Routes>
  );
}

export default App;
