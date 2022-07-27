import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";

function Navigation(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageChange = () => {
    props.setIsLoginPage(true);
  };

  const handleLogout = () => {
    props.setHasUser(false);
  };

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          id="mainNav"
          style={{ backgroundColor: "black" }}
        >
          <div className="container">
            {/* <a className="navbar-brand" href="#page-top">
        <img src="assets/img/navbar-logo.svg" alt="..." /> 
        </a> */}
            {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars ms-1"></i>
        </button> */}

            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#storyline">
                    Storyline
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#message">
                    Message
                  </a>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn-nav-login text-uppercase"
                    onClick={props.hasUser ? handleLogout : handlePageChange}
                  >
                    {props.hasUser ? "Logout" : "Login"}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Box>

      <Box
        sx={{ display: { xs: "flex", md: "none" } }}
        style={{ backgroundColor: "black"}}
        className="fixed-top"
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          className="btn-nav-meun"
          style={{ color: "white", border: "0" }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <MenuItem onClick={handleCloseNavMenu}>
            <a className="nav-link text-uppercase" href="#skills">
              Skills
            </a>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <a className="nav-link text-uppercase" href="#storyline">
              Storyline
            </a>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <a className="nav-link text-uppercase" href="#message">
              Message
            </a>
          </MenuItem>
          <MenuItem onClick={handleCloseNavMenu}>
            <button
              type="button"
              className="btn-nav-login-xs text-uppercase"
              onClick={props.hasUser ? handleLogout : handlePageChange}
            >
              <div style={{ marginLeft: "3px" }}>
                {props.hasUser ? "Logout" : "Login"}
              </div>
            </button>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
}

export default Navigation;
