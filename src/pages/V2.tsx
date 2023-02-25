import React from "react";
import { Controller as ControllerClass } from "../types/Controller";
import { Controller } from "../components/Player/V2-With-Store/Controller/Controller";
import { useAppSelector } from "../hooks";
import Player from "../components/Player/V2-With-Store/Player/Player";
import { Box, Container } from "@mui/material";

type Props = {};

const V2 = (props: Props) => {
  const controllers = useAppSelector((state) => state.controllers);
  const playerData = [
    {
      id: 1,
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      controllerRef: controllers[0],
    },
    {
      id: 2,
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      controllerRef: controllers[0],
    },
  ];
  const controllerList = Object.keys(controllers).map((id) => (
    <Controller key={id} controllerId={id} />
  ));
  const playersList = playerData.map((p) => (
    <Box sx={{p: 2}} key={p.id}>
      <Player videoUrl={p.videoUrl} controllerRef={p.controllerRef} />
    </Box>
  ));
  console.log(playersList);

  return (
    <Container maxWidth="xl" disableGutters>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          maxWidth: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {playersList}
      </Box>
      {controllerList}
    </Container>
  );
};

export default V2;
