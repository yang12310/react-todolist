import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemButton } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { green } from "@mui/material/colors";
import { useNavigate } from 'react-router-dom';

export default function ListTable({ searchList, where }) {

  const navigate = useNavigate();
  const handleClick = (row) => {
    navigate('/form', { state: { row: row, where: where, mode: "view" } });
  }
console.log(searchList)
  const list = searchList.length ? (
    searchList.map((row) => (
      <div key={row.id}>
        <ListItem alignItems="flex-start" onClick={()=>handleClick(row)}>
          <ListItemButton style={{ padding: "0" }}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: green[500] }}>
                <AssignmentIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={<Typography>{row.title}</Typography>}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                    style={{ fontSize: "13px" }}
                  >
                    {row.description}
                    <br />
                    {row.date}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItemButton>
        </ListItem>
        <Divider variant="inset" component="li" />
      </div>
    ))
  ) : (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemText primary="Todolist가 없습니다..." />
      </ListItem>
    </div>
  );
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 600,
        bgcolor: "background.paper",
      }}
    >
      {list}
    </List>
  );
}
