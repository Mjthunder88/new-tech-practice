import React, { useState } from "react";
import '../ui/hamburger.css'

import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Container,
  Grid,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {

const [isActive, setIsActive] = useState(false)

const toggleMenu = () => {
  setIsActive(!isActive)
}

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Container maxWidth="xl">
          <Toolbar sx={{padding: 0}}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
              <button
          className={
            isActive
              ? "hamburger hamburger--spring is-active"
              : "hamburger hamburger--spring"
          }
          type="button"
          onClick={toggleMenu}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
              </Grid>
              <Grid item>
                <Typography variant="h5" component="h1">
                  Valley Supply
                </Typography>
              </Grid>
              <Grid item>
                <SearchIcon></SearchIcon>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
