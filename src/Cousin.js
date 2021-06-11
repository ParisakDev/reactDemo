import React from "react";

const Cousin = ({ name, data }) => {
  return (
    <div>
      <h1>{name}</h1>
      {data.map(el => (
        <>
          <h1>{el.name}</h1>
        </>
      ))}
    </div>
  );
};

export default Cousin;
