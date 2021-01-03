import React, { useState } from "react";
import { Button, Label, Menu, Image } from "semantic-ui-react";

const MenuBar = () => {

  const [fixedMenu, setfixedMenu] = useState(true);
  const [hideMenu, setHideMenu] = useState(true);

  return (
    <Menu secondary size="large">
      <Menu.Item>
        <Button basic size="large" color="orange">
          Loop
        </Button>
      </Menu.Item>
      <Menu.Item position="right">
        <Label color="orange" size="large">
          <Image avatar spaced="right" src="/Images/Guest.png" />
          Guest
        </Label>
      </Menu.Item>
    </Menu>
  );
};

export default MenuBar;