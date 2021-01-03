import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import MenuBar from "../MenuBar";

export const HomePage = () => {
  return (
    <Segment inverted>
      <MenuBar />
      <Segment inverted style={{ minHeight: 200 }} />
      <Grid verticalAlign="middle">
        <Grid.Column width={13}>
          <h1 style={{ fontSize: 50 }}>Websites</h1>
        </Grid.Column>
      </Grid>
      <Segment inverted style={{ minHeight: 30 }} />
      <Grid verticalAlign="middle">
        <Grid.Column width={16}>
          <h1 style={{ fontSize: 50 }}>Simplified</h1>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};
