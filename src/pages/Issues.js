import { Box } from "@mui/material";
import Header from "../components/Header";
import IssueCard from "../components/IssueCard";
import Details from "./Details";

const Issues = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Issues" />
      </Box>
      <Box height="25px">
        <IssueCard />
      </Box>
      {/* <Box m="300px" marginTop="180px">
        <Details />
      </Box> */}
    </Box>
  );
};

export default Issues;
