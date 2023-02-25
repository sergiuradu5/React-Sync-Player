import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import PlayerContextProvider from "./context/PlayerContext";
import { store } from "./store";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PlayerContextProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />

        </ThemeProvider>
      </Provider>
    </PlayerContextProvider>
  </React.StrictMode>
);
