import React, { PropsWithChildren } from "react";
import BottomBar from "./BottomBar/BottomBar";

interface ILayout {}

const Layout = (props: PropsWithChildren<ILayout>) => {
  return (
    <>
      {props.children}
      <BottomBar />
    </>
  );
};

export default Layout;
