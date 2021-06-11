import React, { useState } from "react";
import Enfant from "./enfant.js";

const App = () => {
  const [entrainement, setEntrainement] = useState({
    pompes: [
      {
        name: "s1",
        data: [
          { name: "niv", data: "" },
          { name: "r1", data: "" }
        ]
      },
      {
        name: "s2",
        data: [
          { name: "niv", data: "" },
          { name: "r1", data: "" }
        ]
      }
    ],
    jambes: [
      {
        name: "s1",
        data: [
          { name: "niv", data: "" },
          { name: "r1", data: "" }
        ]
      },
      {
        name: "s2",
        data: [
          { name: "niv", data: "" },
          { name: "r1", data: "" }
        ]
      }
    ]
  });
  const [bool, setBool] = useState(false);
  return (
    <div>
      <h1>Parent</h1>
      <a
        onClick={() => {
          setBool(true);
        }}
      >
        Button
      </a>
      {bool && (
        <Enfant entrainement={entrainement} setEntrainement={setEntrainement} />
      )}
    </div>
  );
};

export default App;
