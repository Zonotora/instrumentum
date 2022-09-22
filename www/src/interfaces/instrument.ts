import React from "react";

type IInstrument = {
  name: string;
  children: React.ReactNode;
  args: any;
  expr: (args: any) => any;
};

export default IInstrument;
