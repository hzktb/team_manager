import axios from "axios";
import React from "react";

const DeleteButton = (props) => {
  const { id, onDeleteFunctionProp } = props;

  const handleDelete = (e) => {
    if (window.confirm("Are you sure you want to Delete?")) {
      axios.delete("http://localhost:8000/api/players/" + id).then((res) => {
        onDeleteFunctionProp();
      });
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteButton;
