import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from 'react-router-dom'

export default function MenuBar({ isLoggedIn, setIsLoggedIn }) {
  const handleLogout = () => {
    setIsLoggedIn(isLoggedIn ? false : isLoggedIn);
    sessionStorage.removeItem('todolist-loggedIn');
  }
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todolist
          </Typography>
          <Button component={Link} to="/home" color="inherit">Home</Button>
          <Button component={Link} to="/search" color="inherit">Search</Button>
          <Button component={Link} to="/" color="inherit" onClick={handleLogout}>{isLoggedIn ? "Logout" : "Login"}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
