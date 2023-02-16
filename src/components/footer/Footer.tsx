import React from "react";

import { Grid, Typography, Container, CssBaseline } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Footer = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ position: "absolute", bottom: "0" }}>
        <Grid container direction="row" justifyContent="space-between">
          <HomeIcon fontSize="large" color="primary"></HomeIcon>
          <SearchIcon fontSize="large" color="primary"></SearchIcon>
          <ShoppingCartIcon fontSize="large" color="primary"></ShoppingCartIcon>
          <PersonIcon fontSize="large" color="primary"></PersonIcon>
        </Grid>
      </Container>
    </>
  );
};

export default Footer;
