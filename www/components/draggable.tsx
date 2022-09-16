import React from "react";

type Props = {
  name: string;
};

const Draggable: React.FC<Props> = ({ name }) => {
  return <div className="draggable">{name}</div>;
};

export default Draggable;
