import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { INavItem } from "../../../../types/NavItem";
type Props = {};

const NavItems = (props: Props) => {
  const navItems: INavItem[] = [
    { path: "/v1", name: "V1" },
    { path: "/v2", name: "V2" },
  ];
  return (
    <>
      {navItems.map((item) => (
        <Button
          key={item.path}
          component={Link}
          variant="outlined"
          to={item.path}
          sx={{ px: 5, mx: 1 }}
        >
          {item.name}
        </Button>
      ))}
    </>
  );
};

export default NavItems;
