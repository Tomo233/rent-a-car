import { useState } from "react";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled as muiStyled } from "@mui/material/styles";
import Flex from "./Flex";
import ProfileMenu from "../features/authentication/ProfileMenu";
import { Divider } from "@mui/material";

const Content = styled.div`
  background-color: lightslategray !important;
  height: 300px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const HeaderMenu = muiStyled(Menu)({
  "& .MuiPaper-root": {
    width: "220px",
    backgroundColor: "transparent",
    boxShadow: "none",
  },
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledAppBar = styled(AppBar)`
  background-color: transparent;
  box-shadow: none;
  width: 50px !important;
  @media (min-width: 768px) {
    display: none !important;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  color: white !important;
  font-weight: 600 !important;
`;

const ResponsiveHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = ["Home", "Bookings", "About"];

  return (
    <StyledAppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar sx={{ justifyContent: "space-between", width: "100%" }}>
        <Wrapper>
          <Typography variant="h6" component="div"></Typography>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <HeaderMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{
              "& .MuiPaper-root": {
                width: "100%",
                maxWidth: "none",
                backgroundColor: "transparent",
                boxShadow: "none",
              },
            }}
          >
            <Content>
              <Flex $direction="column" $gap="8px">
                {menuItems.map((item) => (
                  <>
                    <StyledMenuItem key={item} onClick={handleMenuClose}>
                      {item}
                    </StyledMenuItem>
                    <Divider />
                  </>
                ))}
                <ProfileMenu />
              </Flex>
            </Content>
          </HeaderMenu>
        </Wrapper>
      </Toolbar>
    </StyledAppBar>
  );
};

export default ResponsiveHeader;
