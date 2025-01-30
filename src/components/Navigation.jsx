import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <NavLink className={"box1"} to="/routeTest/detail">
        디테일페이지로 이동
      </NavLink>
      <NavLink className={"box2"} to="/routeTest">
        메인페이지로 이동
      </NavLink>
    </div>
  );
}

export default Navigation;
