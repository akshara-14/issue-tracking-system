import "./App.css";
import MySideNav from "./components/MySideNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Issues from "./pages/Issues";
import Create from "./pages/Create";
import Topbar from "./components/Topbar";
import Login from "./components/Login";
import IssueDetail from "./pages/IssueDetail";
function App() {
  return (
    <div className="App">
      <Router>
        <MySideNav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/create" element={<Create />} />
          <Route path="/issue-details/:id" element={<IssueDetail />} />
        </Routes>

        <Topbar />
        {/* <Login /> */}
      </Router>
    </div>
  );
}

export default App;
