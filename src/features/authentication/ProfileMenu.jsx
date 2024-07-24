/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import Flex from "../../components/Flex";
import { useUser } from "./useUser";
import { useLogout } from "./useLogout";
import styled from "styled-components";

const UserName = styled.p`
  color: white;
  font-weight: 600;
`;

const StyledProfileMenu = styled(Box)`
  display: flex;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default function ProfileMenu({ $inHeader }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { user } = useUser();
  const { userName, avatarUrl } = user.user_metadata;
  const { logout } = useLogout();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();

    logout();
  };

  return (
    <>
      {$inHeader ? (
        <StyledProfileMenu>
          <UserName>{userName}</UserName>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 40, height: 40 }}>
                <img
                  src={avatarUrl ? avatarUrl : "/default-user.png"}
                  height="40px"
                />
              </Avatar>
            </IconButton>
          </Tooltip>
        </StyledProfileMenu>
      ) : (
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <UserName>{userName}</UserName>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 40, height: 40 }}>
                <img
                  src={avatarUrl ? avatarUrl : "/default-user.png"}
                  height="40px"
                />
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>
      )}

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/user">
            <Flex $gap="5px">
              <img
                src={avatarUrl ? avatarUrl : "/default-user.png"}
                height="40px"
              />
              Profile
            </Flex>
          </Link>
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
