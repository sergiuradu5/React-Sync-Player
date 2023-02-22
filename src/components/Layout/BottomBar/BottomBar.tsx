import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Container, Paper } from "@mui/material";
import SuperPlayer from "../../Player/SuperPlayer/SuperPlayer";

export default function BottomBar() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container maxWidth="xl" sx={{ p: "10px"}}>
        <SuperPlayer />
      </Container>
    </Paper>
  );
}
