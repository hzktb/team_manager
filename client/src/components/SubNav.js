import React from "react";
import { Link } from "@reach/router";

const SubNav = (props) => {
  return (
    <h2 className="mb-5">
      <Link
        style={{ fontSize: "25px" }}
        to="/players/list"
        className={"list" === props.selected ? "btn btn-info" : "btn btn-light"}
        onClick={() => props.setSelected("list")}
      >
        List
      </Link>{" "}
      |{" "}
      <Link
        style={{ fontSize: "25px" }}
        to="/players/addplayer"
        className={"add" === props.selected ? "btn btn-info" : "btn btn-light"}
        onClick={() => props.setSelected("add")}
      >
        Add Player
      </Link>
    </h2>
  );
};

export default SubNav;
