import React, { useState } from "react";
import { Button, Label, Menu, Image, Container } from "semantic-ui-react";

const MenuBar = () => {
  const [fixedMenu, setfixedMenu] = useState(true);
  const [hideMenu, setHideMenu] = useState(true);

  return (
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
  );
};

export default MenuBar;
