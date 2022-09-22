import React from "react";

// type Props = {
//   adjust: () => void;
//   left: number;
//   right: number;
// };

type Props = {
  horizontal?: boolean;
};

// const Container: React.FC<Props> = ({ adjust, left, right }) => {
const Container: React.FC<Props> = ({ horizontal }) => {
  const onMouseUp = (e: any) => {
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mousemove", onMouseMove);
  };

  const onMouseDown = (e: any) => {
    if (e.button === 0) {
      e.preventDefault();
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mousemove", onMouseMove);
    }
  };

  const onMouseMove = (e: any) => {
    e.preventDefault();

    // adjust((e.pageX / window.innerWidth) * 100);
  };

  return (
    <div
      className={horizontal ? "separator-horizontal" : "separator-vertical"}
      onMouseDown={onMouseDown}
    />
  );
};

export default Container;
