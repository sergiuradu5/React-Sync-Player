import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";
import { IController } from "../types/Controller";

interface RegisterControllerAction {
  controller: IController;
}

interface DeregisterControllerAction {
  id: string;
}

interface RegisterPlayerAction {}

interface ChangeCurrentTimeAction {
  value: number;
  id: string;
}

interface TogglePlayAction {
  id: string;
}

const controllersAdapter = createEntityAdapter({
  sortComparer: (a: IController, b: IController) => {
    if (a.id < b.id) return -1;
    else if (a.id > b.id) return 1;
    return 0;
  },
});

// Define the initial state using that type
const initialState = controllersAdapter.getInitialState({});

export const controllersSlice = createSlice({
  name: "controllers",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    registerController: (
      state,
      action: PayloadAction<RegisterControllerAction>
    ) => {
      const { controller } = action.payload;
      state.entities[controller.id] = controller;
    },

    deregisterController: (
      state,
      action: PayloadAction<DeregisterControllerAction>
    ) => {
      state.ids = state.ids.filter((id) => id !== action.payload.id);
      delete state.entities[action.payload.id];
    },

    registerPlayer: (state, action: PayloadAction<RegisterPlayerAction>) => {},
    togglePlay: (state, action: PayloadAction<TogglePlayAction>) => {
      const isPlaying = state[action.payload.id].isPlaying;
      state[action.payload.id].isPlaying = !isPlaying;
    },
    changeCurrentTime: (
      state,
      action: PayloadAction<ChangeCurrentTimeAction>
    ) => {
      const { id, value } = action.payload;
      state[id].currentTime = value;
    },
  },
});

export const {
  registerController,
  deregisterController,
  togglePlay,
  changeCurrentTime,
} = controllersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectController = (id: string) => (state: RootState) =>
  state.controllers[id];

export default controllersSlice.reducer;
