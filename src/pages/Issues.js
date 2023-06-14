import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import IssueCard from "../components/IssueCard/IssueCard";

const Issues = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Issues" />
      </Box>
      <Box height="25px">
        <IssueCard />
      </Box>
    </Box>
  );
};

export default Issues;
