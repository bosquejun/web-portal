import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";

const style = {
  paper: { padding: 20, margin: 10 }
};

export default class Main extends Component {
  render() {
    return (
      <Grid container spacing="32">
        <Grid item>
          <Paper style={style.paper}>LEFT Pane item</Paper>
        </Grid>

        <Grid item>Right Pane item</Grid>
      </Grid>
    );
  }
}
