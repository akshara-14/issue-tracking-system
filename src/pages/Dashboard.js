import { Box } from "@mui/material";
import Header from "../components/Header";
import Chart from "../components/Chart";
// import IssueCard from "../components/IssueCard";
import Details from "./Details";
import { v4 } from "uuid";

const Dashboard = () => {
  const uniqueId = v4();
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
        {/* {localStorage.getItem(id)} */}
        <Details id={uniqueId} />
      </Box>
    </Box>
  );
};

export default Dashboard;
