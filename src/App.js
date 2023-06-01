import "./App.css";
import MySideNav from "./components/MySideNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Issues from "./pages/Issues";
import Create from "./pages/Create";

function App() {
  return (
    <Router>
      <MySideNav />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
