import React from "react";

type Props = {};

const Io: React.FC<Props> = () => {
  return (
    <div className="io">
      <div style={{ height: "50vh", backgroundColor: "#121212" }}>Input</div>
      <div style={{ height: "50vh", backgroundColor: "#232323" }}>Output</div>
    </div>
  );
};

export default Io;
