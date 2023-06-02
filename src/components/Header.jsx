import { Typography, Box } from "@mui/material";

const Header = ({ title }) => {
  return (
    <Box mb="30px" position="fixed" top="77px" left="253px">
      <Typography
        variant="h5"
        color="#1A1A1A"
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
