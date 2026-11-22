
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";


const Header = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <Box className="header-wrapper">

      <AppBar
        position="sticky"
        elevation={1}
        color="inherit"
        className="yp-header"
      >

        {/* Top Bar */}
        <Box className="yp-topbar d-none d-md-block">
          <Container maxWidth="lg" className="yp-topbar-container">
            <Typography variant="caption">
              ✉ info@yuvipaperbag.com
            </Typography>

            <Typography variant="caption">
              ☎ +91 98765 43210
            </Typography>
          </Container>
        </Box>

        {/* Main Header */}
        <Container maxWidth="lg">
          <Toolbar disableGutters className="yp-toolbar">

            {/* Logo */}
            <Box
              component="a"
              href="#home"
              className="yp-brand"
            >
              <span className="yp-brand-mark">Y</span>

              <Box className="yp-brand-content">
                <Typography className="yp-brand-title">
                  Yuvi Paper Bag
                </Typography>

                <Typography className="yp-brand-subtitle">
                  Eco-Friendly Packaging
                </Typography>
              </Box>
            </Box>

            {/* Desktop Navigation */}
            <Box className="yp-desktop-nav d-none d-md-flex">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  color="inherit"
                  href={item.href}
                  className="yp-nav-link"
                >
                  {item.label}
                </Button>
              ))}

              <Button
                variant="contained"
                href="#contact"
                className="yp-quote-btn"
              >
                Request a Quote
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              className="yp-menu-btn d-md-none"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>

          </Toolbar>
        </Container>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={open}
          onClose={close}
          className="yp-mobile-drawer"
        >
          <Box className="yp-drawer-content">

            <Box className="yp-drawer-header">
              <Typography className="yp-drawer-title">
                Yuvi Paper Bag
              </Typography>

              <IconButton onClick={close}>
                <CloseIcon />
              </IconButton>
            </Box>

            <List className="yp-drawer-list">
              {navItems.map((item) => (
                <ListItemButton
                  key={item.href}
                  component="a"
                  href={item.href}
                  onClick={close}
                  className="yp-drawer-link"
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              ))}

              <ListItemButton
                component="a"
                href="#contact"
                onClick={close}
                className="yp-drawer-quote"
              >
                <ListItemText primary="Request a Quote" />
              </ListItemButton>
            </List>

          </Box>
        </Drawer>

      </AppBar>

    </Box>
  );
};

export default Header;
