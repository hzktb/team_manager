import React from "react";
import MainNav from "../components/MainNav";
import SubNav from "../components/SubNav";
import Form from "../components/Form";

const Create = (props) => {
  const { selected, setSelected, mainSelected, setMainSelected } = props;
  return (
    <div>
      <MainNav
        mainSelected={mainSelected}
        setMainSelected={setMainSelected}
        setSelected={setSelected}
      />
      <SubNav selected={selected} setSelected={setSelected} />
      <Form setSelected={setSelected} />
    </div>
  );
};

export default Create;
