import { Box } from "@mui/material";
import Header from "../components/Header";
import IssueCard from "../components/IssueCard";
// import IssueDetail from "./IssueDetail";

const Issues = () => {
  // const formValuesJson = { ...localStorage };
  // let issues = Object.values(formValuesJson);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Issues" />
      </Box>
      <Box height="25px">
        <IssueCard />
      </Box>
      {/* <Box marginLeft="500px">
        <div>
          {issues.map((val) => (
            <div>
              <IssueDetail
                key="{JSON.parse(val).title}"
                data={JSON.parse(val)}
              />
            </div>
          ))}
        </div>
      </Box> */}
    </Box>
  );
};

export default Issues;
