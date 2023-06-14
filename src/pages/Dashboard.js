import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import Chart from "../components/Chart/Chart";
import PriorityCard from "../components/PriorityCard/PriorityCard";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" />
      </Box>
      <Box height="5px" width="1550px" m="230px" marginTop="80px">
        <Chart />
      </Box>
      <Box marginTop="400px" width="50px" marginLeft={95}>
        <PriorityCard />
      </Box>
    </Box>
  );
};

export default Dashboard;
