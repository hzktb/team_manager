import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Form = (props) => {
  const [name, setName] = useState();
  const [position, setPosition] = useState();
  const [errors, setErrors] = useState();

  const handleCreatePlayer = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/players/new", { name, position })
      .then((res) => {
        props.setSelected("list");
        navigate("/players/list");
      })
      .catch((err) => setErrors(err.response.data.errors));
  };

  return (
    <form onSubmit={handleCreatePlayer} className="w-25">
      <h2>Add Player</h2>
      <input
        placeholder="Player Name"
        className="form-control m-2"
        name="name"
        value={props.name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Preffered Position"
        className="form-control m-2"
        name="position"
        value={props.position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <p style={{ color: "red" }}>{errors ? errors.name.message : ""}</p>
      <input className="btn btn-primary" type="submit" value="Create" />
    </form>
  );
};

export default Form;
