import { Box, IconButton } from "@mui/material";
import { useContext } from "react";
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../assets/Logo.svg";
import Searchbar from "./Searchbar";

const Topbar = () => {
  return (
    <Box
      display="flex"
      position="fixed"
      justify-content="flex-end"
      p={2}
      marginLeft={170}
      height={30}
      // boxShadow={4}
      // width={100}
    >
      {/* Logo */}
      <Box
        display="flex"
        marginLeft={-140}
        marginRight={125}
        p={0.5}
        position="fixed"
        backgroundColor="#B4B8F9"
        borderRadius={1}
        component="img"
        alt="Logo"
        src={logo}
      />

      {/* Search Bar */}
      <Box display="flex" backgroundColor=" #f2f0f0" borderRadius="3px">
        {/* <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" /> */}
        {/* <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton> */}
        <Searchbar />
      </Box>

      {/* Icons  */}
      <Box display="flex" marginLeft={15}>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>

        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
