import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NavItems from "./NavItems/NavItems";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Sync Player
          </Typography>
          <NavItems />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
