import { Menu } from "@mui/material";

type Props = {
  userMenu: HTMLElement | null;
  userMenuClose: () => void;
  children: React.ReactNode;
};

export const MenuNavUser: React.FC<Props> = ({
  userMenu,
  userMenuClose,
  children,
}) => {
  return (
    <Menu
      anchorEl={userMenu}
      id="account-menu"
      open={Boolean(userMenu)}
      onClose={userMenuClose}
      onClick={userMenuClose}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {children}
    </Menu>
  );
};
