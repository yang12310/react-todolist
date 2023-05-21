import React, { useState } from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Lock from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const handleLogin = () => {
    axios
      .get("http://localhost:4000/users", {
        params: {},
      })
      .then((response) => {
        let list = response.data.filter((data) => {
          return data.userId === loginId;
        });
        debugger;
        if (loginPassword === list[0].password) {
          sessionStorage.setItem("todolist-loggedIn", true);
          setIsLoggedIn(true);
          navigate("/home");
        } else {
          toast.error("Login failed...");
        }
      });
  };
  return (
    <div style={{ marginTop: "40px" }}>
      <div style={{ display: "grid", placeItems: "center" }}>
        <div>
          <h3>Todolist Management System</h3>
        </div>
        <div>
          <h1>Login</h1>
        </div>
      </div>
      <div
        style={{
          marginTop: "40px",
          display: "grid",
          placeItems: "center",
          gap: "30px",
        }}
      >
        <div>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Login Id.
            </InputLabel>
            <Input
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
              value={loginId}
              onChange={(e) => {
                setLoginId(e.target.value);
              }}
            />
          </FormControl>
        </div>
        <div>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Password
            </InputLabel>
            <Input
              startAdornment={
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              }
              type="password"
              value={loginPassword}
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
            />
          </FormControl>
        </div>
        <div>
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
        </div>
        <div>
          <p>@ The copyright is on One IT Academy 2023 </p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
