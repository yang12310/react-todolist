import React from "react";
import ListTable from "./ListTable";

function ListAndForm({searchList, where}) {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1>To Do List</h1>
      </div>
      <ListTable searchList={searchList} where={where}/>
    </div>
  );
}
export default ListAndForm;
