import React from "react";
import ListTable from "./ListTable";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function ListAndForm({searchList, where, createDate}) {
  const navigate = useNavigate();

  const handleCreate = () => {
    let row = {
    date: createDate,
    time: "00:00",
    title: "",
    description: "",
    };
    navigate('/form', { state: { row: row, where: where, mode: "create" } });
    }

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>To Do List</h1>
        {(where === "daily") ?
        <Button
          variant="contained"
          onClick={() => handleCreate()}
        >
          New
        </Button>
        : null
        }
      </div>
      <ListTable searchList={searchList} where={where}/>
    </div>
  );
}
export default ListAndForm;
