import React from "react";
import Cousin from "./Cousin";

const Enfant = ({ entrainement, setEntrainement }) => {
  return (
    <div>
      <h3>Enfant</h3>
      {Object.keys(entrainement).map(el => (
        <Cousin name={el} data={entrainement[el]} />
      ))}
    </div>
  );
};

export default Enfant;
