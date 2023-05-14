import React,{useEffect} from "react";
import Grid from "@mui/material/Grid";
import HomeCalendarPicker from "../components/HomeCalendarPicker";
import ListAndForm from '../components/ListAndForm';
import axios from 'axios';

function Home({
    createDate,
    setCreateDate,
    searchListByDate,
    setSearchListByDate
}) {

    useEffect(function () {
        axios.get(`http://localhost:4000/todolist?date=${createDate}`, {
            params: {
        }
        })
        .then((response) => {
        setSearchListByDate(response.data);
        });
        }, [createDate, setSearchListByDate]);
        
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={0} style={{ maxWidth: "1000px" }}>
        <Grid item xs={12} md={5}>
          <div
            style={{
              display: "flex",
            }}
          >
            <div>
              <h1>Calendar</h1>
              <HomeCalendarPicker 
                createDate={createDate}
                setCreateDate={setCreateDate}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <div
            style={{
              padding: "0px 20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ListAndForm searchList={searchListByDate} where={"daily"}/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default Home;
