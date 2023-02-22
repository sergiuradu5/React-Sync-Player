import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useRef, useState } from "react";
import { PlayerContext } from "../../../context/PlayerContext";
import { PlayButton } from "../../UI/Button";
import { TimeSlider } from "../../UI/Slider";

interface ISubPlayerProps {
  videoUrl: string;
  width?: number;
}

const SubPlayer = (props: ISubPlayerProps) => {
  const { videoUrl, width } = props;
  const [duration, setDuration] = useState<number | undefined>(undefined);
  const [loaded, setLoaded] = useState<boolean>(false);

  const ctx = useContext(PlayerContext);
  const { isPlaying, changeCurrentTime, currentTime } = ctx;

  const videoRef = useRef<any>(undefined);

  console.log('Subplayer rerendering', videoRef)

  const togglePlay = () => {
    ctx.togglePlay();
  };

  const playerControls =
    loaded && duration ? (
      <Box sx={{display: "flex", flexDirection: 'column', alignItems: 'center', p: "10px 0"}}>
        <PlayButton onClick={togglePlay} isPlaying={isPlaying}></PlayButton>
        <TimeSlider
          duration={duration}
          currentTime={currentTime}
          onChangeCurrentTime={changeCurrentTime}
        ></TimeSlider>
      </Box>
    ) : (
      <CircularProgress />
    );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <video
        onLoadedData={(e) => {
          setDuration(videoRef.current.duration);
          setLoaded(true);
          ctx.registerPlayer(videoRef);
        }}
        ref={videoRef}
        width={width ? width + "%" : "100%"}
        height="100%"
        controls={false}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      {playerControls}
    </Box>
  );
};

export default SubPlayer;
