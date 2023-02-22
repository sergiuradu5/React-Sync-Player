import { Box, CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";
import { SxProps } from "@mui/material/styles";
import Layout from "./components/Layout/Layout";
import SubPlayer from "./components/Player/SubPlayer/SubPlayer";
function App() {
  const videoUrl =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  const boxSx: SxProps = {
    sx: {
      padding: "10px",
    },
  };
  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Layout>
          <Container maxWidth='xl' sx={{ display: "flex", flexDirection: "row" }}>
            <Box {...boxSx}>
              <SubPlayer videoUrl={videoUrl} />
            </Box>
            <Box {...boxSx}>
              <SubPlayer videoUrl={videoUrl} />
            </Box>
          </Container>
        </Layout>
      </Container>
    </>
  );
}

export default App;
