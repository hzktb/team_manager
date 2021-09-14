import React, { useState, useEffect } from "react";
import MainNav from "../components/MainNav";
import { Link } from "@reach/router";
import axios from "axios";
import StatusList from "../components/StatusList";

const Game = (props) => {
  const { mainSelected, setMainSelected, setSelected, id } = props;
  const [gameSelected, setGameSelected] = useState("1");
  const [players, setPlayers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/all").then((res) => {
      setPlayers(res.data);
      setLoaded(true);
    });
  }, []);
  return (
    <div>
      <MainNav
        mainSelected={mainSelected}
        setMainSelected={setMainSelected}
        setSelected={setSelected}
      />
      <div>
        {" "}
        <h1>Player Status - Game {props.id}</h1>
        <Link
          to="/status/game/1"
          className={"1" === gameSelected ? "btn btn-primary" : "btn btn-light"}
          onClick={() => setGameSelected("1")}
        >
          Game 1
        </Link>{" "}
        |{" "}
        <Link
          to="/status/game/2"
          className={"2" === gameSelected ? "btn btn-primary" : "btn btn-light"}
          onClick={() => setGameSelected("2")}
        >
          Game 2
        </Link>{" "}
        |{" "}
        <Link
          to="/status/game/3"
          className={"3" === gameSelected ? "btn btn-primary" : "btn btn-light"}
          onClick={() => setGameSelected("3")}
        >
          Game 3
        </Link>
      </div>

      {loaded && (
        <StatusList players={players} setPlayers={setPlayers} id={id} />
      )}
    </div>
  );
};

export default Game;
