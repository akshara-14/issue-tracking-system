import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import logo from "../../assets/Logo.svg";
import Searchbar from "../Searchbar/Searchbar";
import Logout from "@mui/icons-material/Logout";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <Box
      display="flex"
      position="fixed"
      justify-content="flex-end"
      p={2}
      marginLeft={170}
      height={30}
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

        <IconButton onClick={() => setOpen(!open)}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
      {open && (
        <Box
          backgroundColor="#CCCCCC"
          p={1.5}
          marginTop={4}
          marginLeft={-19}
          height={30}
          borderRadius={1}
        >
          <MenuItem onClick={(() => setOpen(!open)) && handleClick}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Box>
      )}
    </Box>
  );
};

export default Topbar;
