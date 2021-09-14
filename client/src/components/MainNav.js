import React from "react";
import { Link } from "@reach/router";

const MainNav = (props) => {
  return (
    <h3 className="m-5">
      <Link
        style={{ fontSize: "30px" }}
        to="/players/list"
        className={
          "player" === props.mainSelected ? "btn btn-primary" : "btn btn-light"
        }
        onClick={() => {
          props.setMainSelected("player");
          props.setSelected("list");
        }}
      >
        Manage Players
      </Link>{" "}
      |{" "}
      <Link
        style={{ fontSize: "30px" }}
        to="/status/game/1"
        className={
          "status" === props.mainSelected ? "btn btn-primary" : "btn btn-light"
        }
        onClick={() => props.setMainSelected("status")}
      >
        Manage Player Status
      </Link>
    </h3>
  );
};

export default MainNav;
