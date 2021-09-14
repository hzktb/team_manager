import React from "react";
import axios from "axios";

const StatusList = (props) => {
  const { players, setPlayers, id } = props;

  const handleCallPlayers = () => {
    axios
      .get("http://localhost:8000/api/all")
      .then((res) => setPlayers(res.data));
  };

  const handleButtonClick = (playerId, body) => {
    axios
      .put("http://localhost:8000/api/players/" + playerId, body)
      .then((res) => handleCallPlayers());
  };

  const handleRenderStatus = (player) => {
    if (id === "1") {
      return (
        <>
          <button
            className={player.game1 === "Playing" ? "btn btn-success" : "btn"}
            onClick={() => handleButtonClick(player._id, { game1: "Playing" })}
          >
            Playing
          </button>
          <button
            className={
              player.game1 === "Not Playing" ? "btn btn-danger" : "btn"
            }
            onClick={() =>
              handleButtonClick(player._id, { game1: "Not Playing" })
            }
          >
            Not Playing
          </button>
          <button
            className={player.game1 === "Undecided" ? "btn btn-warning" : "btn"}
            onClick={() =>
              handleButtonClick(player._id, { game1: "Undecided" })
            }
          >
            Undecided
          </button>
        </>
      );
    } else if (id === "2") {
      return (
        <>
          <button
            className={player.game2 === "Playing" ? "btn btn-success" : "btn"}
            onClick={() => handleButtonClick(player._id, { game2: "Playing" })}
          >
            Playing
          </button>
          <button
            className={
              player.game2 === "Not Playing" ? "btn btn-danger" : "btn"
            }
            onClick={() =>
              handleButtonClick(player._id, { game2: "Not Playing" })
            }
          >
            Not Playing
          </button>
          <button
            className={player.game2 === "Undecided" ? "btn btn-warning" : "btn"}
            onClick={() =>
              handleButtonClick(player._id, { game2: "Undecided" })
            }
          >
            Undecided
          </button>
        </>
      );
    } else if (id === "3") {
      return (
        <>
          <button
            className={player.game3 === "Playing" ? "btn btn-success" : "btn"}
            onClick={() => handleButtonClick(player._id, { game3: "Playing" })}
          >
            Playing
          </button>
          <button
            className={
              player.game3 === "Not Playing" ? "btn btn-danger" : "btn"
            }
            onClick={() =>
              handleButtonClick(player._id, { game3: "Not Playing" })
            }
          >
            Not Playing
          </button>
          <button
            className={player.game3 === "Undecided" ? "btn btn-warning" : "btn"}
            onClick={() =>
              handleButtonClick(player._id, { game3: "Undecided" })
            }
          >
            Undecided
          </button>
        </>
      );
    }
  };
  return (
    <table className="table w-50 shadow">
      <thead>
        <tr>
          <th>Player Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={index}>
            <td>{player.name}</td>
            <td>{handleRenderStatus(player)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StatusList;
