import SideNav, { NavItem, NavText } from "@trendmicro/react-sidenav";
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
      <SideNav.Nav defaultSelected="">
        <NavItem eventKey="issue-tracking-system">
          <NavText>Dashboard</NavText>
        </NavItem>

        <NavItem eventKey="issues">
          <NavText className="text">Issue List</NavText>
        </NavItem>

        <NavItem eventKey="create">
          <NavText>Create Issue</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

export default MySideNav;
