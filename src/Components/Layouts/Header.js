import React, { Component } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { MenuItem, IconButton, Badge } from "@material-ui/core";

export default class extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <MenuItem>
            <Typography variant="h6" color="inherit">
              News
            </Typography>
          </MenuItem>
          <MenuItem>
            <IconButton color="inherit">
              <Badge badgeContent={11} color="secondary" />
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
  }
}
