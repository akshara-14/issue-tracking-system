import { Box } from "@mui/material";
import Header from "../components/Header";
import Chart from "../components/Chart";
// import IssueCard from "../components/IssueCard";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" />
      </Box>
      <Box height="20px" width="200%" m="230px" marginTop="80px">
        <Chart />
      </Box>
      {/* <IssueCard title="Card Title" body="" /> */}
      <Box m="300px" marginTop="500px">
        {" "}
        {localStorage.getItem("data")}
      </Box>
    </Box>
  );
};

export default Dashboard;
