import React from "react";

import { Dialog, Card, Grid, Typography, CssBaseline } from "@mui/material";

const SearchScreen = () => {
  return (
    <>
      <CssBaseline />
      <Dialog  open={false}>
        <Card>
            <Typography>Whats up</Typography>
        </Card>
      </Dialog>
    </>
  );
};

export default SearchScreen;
