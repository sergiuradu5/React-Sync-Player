import { Box } from "@mui/material";
import React, { useContext } from "react";
import { PlayerContext } from "../../../../context/PlayerContext";
import { PlayButton } from "../../../UI/Button";
import { TimeSlider } from "../../../UI/Slider";

interface ISuperPlayerProps {}

const SuperPlayer = (props: ISuperPlayerProps) => {
  const ctx = useContext(PlayerContext);
  const { isPlaying, changeCurrentTime, currentTime, duration } = ctx;
  const togglePlay = () => {
    ctx.togglePlay();
  };
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
        duration={duration}
        currentTime={currentTime}
        onChangeCurrentTime={changeCurrentTime}
      ></TimeSlider>
    </Box>
  );
};

export default SuperPlayer;
