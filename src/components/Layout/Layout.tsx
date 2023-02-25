import { Container } from "@mui/material";
import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import BottomBar from "./BottomBar/BottomBar";
import NavBar from "./NavBar/NavBar";

interface ILayout {}

const Layout = (props: PropsWithChildren<ILayout>) => {
  return (
    <>
      <Container maxWidth={false} disableGutters>
        <NavBar />

        <Outlet />
        <BottomBar />
      </Container>
    </>
  );
};

export default Layout;
