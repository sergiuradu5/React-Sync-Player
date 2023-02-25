import { Box } from "@mui/material";
import { useAppSelector } from "../../../../hooks";
import { RootState } from "../../../../store";
import { PlayButton } from "../../../UI/Button";
import { TimeSlider } from "../../../UI/Slider";

type Props = {
  controllerId: string;
};

export const Controller = (props: Props) => {
  const { controllerId } = props;
  const controller = useAppSelector(
    (state: RootState) => state.controllers[controllerId]
  );
  controller.currentTime = 200;
  console.log("loaded controller with curr time:", controller.currentTime);
  console.log("loaded controller with player[0] duration:", controller.players);
  const { togglePlay, currentTime, duration, changeCurrentTime, isPlaying } =
    controller;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <PlayButton onClick={togglePlay} isPlaying={isPlaying}></PlayButton>
      <TimeSlider
        duration={duration ?? 0}
        currentTime={currentTime}
        onChangeCurrentTime={changeCurrentTime}
      ></TimeSlider>
    </Box>
  );
};

export default Controller;
