import { MouseEvent, useState } from "react";
import { useRouter } from "next/router";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Avatar,
  ListItemIcon,
  MenuItem,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Logout, PersonAdd } from "@mui/icons-material";

// Components
import { MenuNavUser } from "../MenuNavUser";

const drawerWidth = 240;
const navItems = [
  {
    name: "PokeAPI",
    path: "/pokemon/poke-api",
  },
  {
    name: "Productos",
    path: "/product/list",
  },
];

export const Menu = () => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLogin =
    typeof window !== "undefined" ? window.location.pathname === "/" : false;

  const [userMenu, setUserMenu] = useState<null | HTMLElement>(null);
  const open = Boolean(userMenu);
  const userMenuClick = (event: MouseEvent<HTMLElement>) => {
    setUserMenu(event.currentTarget);
  };
  const userMenuClose = () => {
    setUserMenu(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logout = () => {
    if (typeof window !== "undefined") window.localStorage.removeItem("id");
    router.push("/");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        NominApp
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ name, path }) => (
          <ListItem key={name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    typeof window !== "undefined" ? window.document.body : "undefined";

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            onClick={() => router.push("/")}
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            NominApp
          </Typography>
          {!navLogin && (
            <>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map(({ name, path }) => (
                  <Button
                    key={name}
                    sx={{ color: "#fff" }}
                    onClick={() => {
                      router.push(path);
                    }}
                  >
                    {name}
                  </Button>
                ))}
              </Box>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={userMenuClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                </IconButton>
              </Tooltip>
            </>
          )}
        </Toolbar>

        <MenuNavUser userMenu={userMenu} userMenuClose={userMenuClose}>
          <MenuItem
            component="button"
            onClick={() => router.push("/user/profile")}
          >
            <Avatar /> Profile
          </MenuItem>
          <Divider />
          <MenuItem
            component="button"
            onClick={() => router.push("/user/sign-up")}
          >
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem component="button" onClick={() => logout()}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </MenuNavUser>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
