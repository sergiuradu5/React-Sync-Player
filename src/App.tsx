import { CssBaseline } from "@mui/material";
import { useEffect, useRef } from "react";
import { RouterProvider } from "react-router";
import { useAppDispatch } from "./hooks";
import { router } from "./routes";
import { Controller as ControllerClass } from "./types/Controller";
import { registerController } from "./store/controllersSlice";
function App() {
  const ctrl1 = new ControllerClass('main-controller');
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(registerController({ controller: ctrl1 }));
  }, []);
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
