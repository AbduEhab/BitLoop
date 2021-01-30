import React from "react";
import { HomePageBody } from "./HomePageBody";
import { HomePageHeading } from "./HomePageHeading";

export const HomePage = () => {
  // const [fixedMenu, setfixedMenu] = useState(false);

  // const showFixedMenu = () => {
  //   setfixedMenu(true);
  // };

  // const hideFixedMenu = () => {
  //   setfixedMenu(false);
  // };

  return (
    <div>
      <HomePageHeading />
      <HomePageBody />
    </div>
  );
};
