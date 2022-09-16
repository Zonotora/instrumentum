import React from "react";

type Props = {
  width: number;
  children?: React.ReactNode;
};

const Container: React.FC<Props> = ({ width, children }) => {
  return (
    <div className="container" style={{ width: `${width}%` }}>
      {children}
    </div>
  );
};

export default Container;
