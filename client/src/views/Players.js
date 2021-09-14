import React, { useState, useEffect } from "react";
import axios from "axios";
import MainNav from "../components/MainNav";
import SubNav from "../components/SubNav";
import List from "../components/List";

const Players = (props) => {
  const [players, setPlayers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { selected, setSelected, mainSelected, setMainSelected } = props;

  useEffect(() => {
    axios.get("http://localhost:8000/api/all").then((res) => {
      setPlayers(res.data);
      setLoaded(true);
    });
  }, []);

  const handleDelete = (id) => {
    setPlayers(players.filter((player) => id !== player._id));
  };
  return (
    <div>
      <MainNav
        mainSelected={mainSelected}
        setMainSelected={setMainSelected}
        setSelected={setSelected}
      />
      <SubNav selected={selected} setSelected={setSelected} />
      {loaded && (
        <List
          players={players}
          setPlayers={setPlayers}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Players;
