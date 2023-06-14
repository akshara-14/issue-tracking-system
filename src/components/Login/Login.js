import React, { useRef } from "react";
import Dashboard from "../../pages/Dashboard";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import Issues from "../../pages/Issues";
import Create from "../../pages/Create";
import Topbar from "../Topbar/Topbar";
import MySideNav from "../MySideNav/MySideNav";
import "./Login.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// class Login extends React.Component {
//   state = {
//     email: "",
//     pwd: "",
//   };

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.isLogin(true);
//   };
//   render() {
//     return (
//       <div className="div-login">
//         <div className="div-login-logo">
//           <Logo />
//         </div>
//         <div>
//           <form onSubmit={this.handleSubmit}>
//             <input
//               type="email"
//               name="email"
//               placeholder="email..."
//               required
//               onChange={this.handleChange}
//             />
//             <input
//               type="password"
//               name="pwd"
//               placeholder="password..."
//               required
//               onChange={this.handleChange}
//             />
//             <button onSubmit={this.handleSubmit}>Log In</button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;
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
        // <Dashboard />
        <div className="div-login">
          <div className="div-login-logo">
            <Logo />
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <input type="text" ref={email} placeholder="email..." />
            </div>
            <div>
              <input type="password" ref={password} placeholder="password..." />
            </div>
            <button className="div-btn">Login</button>
          </form>
        </div>
      )}
    </div>
  );
}
export default Login;
