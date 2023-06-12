import InputBase from "@mui/material/InputBase";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton } from "@mui/material";
import { v4 } from "uuid";
import "./Searchbar.css";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  let navigate = useNavigate();
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // console.log("search", searchTerm);

    for (var i = 0; i < localStorage.length; ++i) {
      const d = localStorage.getItem(localStorage.key(i));
      const data1 = JSON.parse(d);
      if (searchTerm == data1.title) {
        let path = `/issue-details/${localStorage.key(i)}`;
        navigate(path);
      }
    }
  };
  const formValuesJson = { ...localStorage };

  let issues = Object.values(formValuesJson);

  issues.forEach((issue) => console.log(JSON.parse(issue).title));

  return (
    <Box>
      <Box>
        <InputBase
          sx={{ ml: 2, flex: 1 }}
          placeholder="Search"
          value={value}
          onChange={onChange}
        />
        <IconButton
          type="button"
          sx={{ ml: 27, marginTop: -7 }}
          onClick={() => onSearch(value)}
        >
          <SearchIcon />
        </IconButton>
      </Box>
      <Box className="dropdown">
        {issues
          .filter((val) => {
            const searchTerm = value.toLowerCase();
            const name = JSON.parse(val).title.toLowerCase();

            return (
              searchTerm && name.includes(searchTerm) && name != searchTerm
            );
          })
          .map((val) => (
            <div
              className="dropdown-row"
              onClick={() => onSearch(JSON.parse(val).title)}
              key={v4()}
              data={JSON.parse(val)}
            >
              {JSON.parse(val).title}
            </div>
          ))}
      </Box>
    </Box>
  );
};

export default Searchbar;
