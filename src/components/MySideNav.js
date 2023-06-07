import SideNav, {
  Toggle,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./MySideNav.css";
import { useNavigate } from "react-router-dom";

function MySideNav() {
  const navigate = useNavigate();
  return (
    <SideNav
      onSelect={(selected) => {
        console.log(selected);
        navigate("/" + selected);
      }}
      className="mysidenav"
    >
      {/* <SideNav.Toggle /> */}
      <SideNav.Nav defaultSelected="">
        <NavItem eventKey="">
          {/* <NavIcon></NavIcon> */}
          <NavText>Dashboard</NavText>
        </NavItem>

        <NavItem eventKey="issues">
          {/* <NavIcon></NavIcon> */}
          <NavText className="text">Issues</NavText>
        </NavItem>

        <NavItem eventKey="create">
          {/* <NavIcon></NavIcon> */}
          <NavText>Create</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

export default MySideNav;
