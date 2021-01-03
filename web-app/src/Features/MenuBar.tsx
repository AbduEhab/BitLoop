import { createMedia } from "@artsy/fresnel";
import React, { useState } from "react";
import { Button, Label, Menu, Image } from "semantic-ui-react";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

const MenuBar = () => {

  

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