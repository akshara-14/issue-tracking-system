import React, { useRef } from "react";
import Dashboard from "../pages/Dashboard";
import Issues from "../pages/Issues";
import Create from "../pages/Create";
import Topbar from "./Topbar";
import MySideNav from "./MySideNav";
import "./Login.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Login() {
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const handleSubmit = () => {
    if (
      email.current.value == "abc@gmail.com" &&
      password.current.value == "12345"
    ) {
      localStorage.setItem("emailData", "abc@gmail.com");
      localStorage.setItem("passwordData", "12345");
    }
  };

  return (
    <div>
      {getEmail && getPassword ? (
        // <Router>
        //   <MySideNav />
        //   <Routes>
        //     <Route path="/" element={<Dashboard />} />
        //     <Route path="/issues" element={<Issues />} />
        //     <Route path="/create" element={<Create />} />
        //   </Routes>

        //   <Topbar />
        // </Router>
        <Dashboard />
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" ref={email} />
          </div>
          <div>
            <input type="password" ref={password} />
          </div>
          <button>Login</button>
        </form>
      )}
    </div>
  );
}
export default Login;
