import { createMedia } from "@artsy/fresnel";
import React, { useState } from "react";
import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility,
} from "semantic-ui-react";
import { HomePageHeading } from "./HomePageHeading";

const { Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

export const HomePage = () => {
  const [fixedMenu, setfixedMenu] = useState(false);

  const showFixedMenu = () => {
    setfixedMenu(true);
  };

  const hideFixedMenu = () => {
    setfixedMenu(false);
  };

  return (
    // <Segment inverted style={{ minHeight: 800 }} textAlign="center">
    //   <Segment inverted>
    //     <HomePageHeading mobile/>
    //   </Segment>
    // </Segment>
    <Media greaterThan="mobile">
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 1000 }}
          vertical
        >
          <Menu
            fixed={fixedMenu ? "top" : undefined}
            inverted={!fixedMenu}
            pointing={!fixedMenu}
            secondary={!fixedMenu}
            size="large"
          >
            <Container>
              <Menu.Item as="a" active>
                Home
              </Menu.Item>
              <Menu.Item as="a">Tech</Menu.Item>
              <Menu.Item as="a">Careers</Menu.Item>
              <Menu.Item position="right">
                <Button as="a" inverted={!fixedMenu} color="orange">
                  Log in
                </Button>
                <Button
                  as="a"
                  inverted={!fixedMenu}
                  primary={fixedMenu}
                  style={{ marginLeft: "0.5em" }}
                >
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          <HomePageHeading mobile={false} />
        </Segment>
      </Visibility>
    </Media>
  );
};
