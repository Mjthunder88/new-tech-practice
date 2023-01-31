import React from "react";

import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Container,
  Avatar,
  Grid,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Container maxWidth="xl">
          <Toolbar>
            <Grid
              container
              //   direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h2">Valley Supply</Typography>
              </Grid>
              <Grid container>
                <Grid item>
                  <ShoppingCartIcon></ShoppingCartIcon>
                </Grid>
                <Grid item>
                  <Avatar>M</Avatar>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
