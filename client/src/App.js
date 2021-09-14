import "./App.css";
import { navigate, Router } from "@reach/router";
import Players from "./views/Players";
import React, { useEffect, useState } from "react";
import Game from "./views/Game";
import Create from "./views/Create";

function App() {
  const [mainSelected, setMainSelected] = useState("player");
  const [selected, setSelected] = useState("list");

  useEffect(() => {
    navigate("/players/list");
  }, []);

  return (
    <div className="App">
      <Router>
        <Players
          path="/players/list"
          mainSelected={mainSelected}
          setMainSelected={setMainSelected}
          setSelected={setSelected}
          selected={selected}
        />
        <Create
          path="/players/addplayer"
          mainSelected={mainSelected}
          setMainSelected={setMainSelected}
          setSelected={setSelected}
          selected={selected}
        />
        <Game
          path="/status/game/:id"
          mainSelected={mainSelected}
          setMainSelected={setMainSelected}
          setSelected={setSelected}
        />
      </Router>
    </div>
  );
}

export default App;
