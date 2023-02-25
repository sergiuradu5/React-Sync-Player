import { Box, Container, Paper, SxProps } from "@mui/material";
import React from "react";
import SubPlayer from "../components/Player/V1-With-Context/SubPlayer/SubPlayer";
import SuperPlayer from "../components/Player/V1-With-Context/SuperPlayer/SuperPlayer";

type Props = {};

const V1 = (props: Props) => {
  const videoUrl =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  const boxSx: SxProps = {
    sx: {
      padding: "10px",
    },
  };
  return (
    <>
      <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "row" }}>
        <Box {...boxSx}>
          <SubPlayer videoUrl={videoUrl} />
        </Box>
        <Box {...boxSx}>
          <SubPlayer videoUrl={videoUrl} />
        </Box>
      </Container>
      <Paper
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <Container maxWidth="xl" sx={{ p: "10px" }}>
          <SuperPlayer />
        </Container>
      </Paper>
    </>
  );
};

export default V1;
