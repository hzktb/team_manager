import React from "react";
import DeleteButton from "../components/DeleteButton";

const List = (props) => {
  const { players, handleDelete } = props;

  return (
    <table className="shadow table w-50">
      <thead>
        <tr>
          <th>Player Name</th>
          <th>Preferred Position</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="table-striped">
        {players
          .sort((a, b) => {
            if (a.name < b.name) return -1;
          })
          .map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.position}</td>
              <td>
                <DeleteButton
                  id={player._id}
                  onDeleteFunctionProp={() => handleDelete(player._id)}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default List;
