import React from "react";

type Props = {};

const Io: React.FC<Props> = () => {
  return (
    <div className="io">
      <div style={{ height: "50vh", backgroundColor: "black" }}></div>
      <div style={{ height: "50vh", backgroundColor: "white" }}></div>
    </div>
  );
};

export default Io;
