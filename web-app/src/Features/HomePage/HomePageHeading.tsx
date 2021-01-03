import React, { useState } from "react";
import { Button, Container, Grid, Header, Icon, List } from "semantic-ui-react";
import { useSpring, animated, useTransition } from "react-spring";

interface props {
  mobile: boolean;
}

const words: String[] = ["Design", "Development", "Maintenance"];

export const HomePageHeading: React.FC<props> = ({ mobile }) => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 100,
    config: { duration: 800, friction: 50 },
  });

  const [index, setIndex] = useState(0);
  const word: String = words[index];
  const increment = () => setIndex((index) => (index > 2 ? 0 : index + 1));
  setInterval(increment, 2000);

  const colortransition = useSpring({
    from: { color: "aqua" },
    to: { color: "hotpink" },
  });
    
//   const transitions = useTransition({
//     from: { color: "aqua" },
//     to: { color: "hotpink" },
//   });

  return (
    <animated.div style={props}>
      <Container text>
        <Header
          as="h1"
          content="BitLoop"
          inverted
          style={{
            fontSize: mobile ? "2em" : "5em",
            fontWeight: "normal",
            marginBottom: 40,
            marginTop: mobile ? "1.5em" : "4em",
          }}
        />
        <List horizontal inverted>
          <List.Item>
            <Header as="h2" inverted content="Simplified" />
          </List.Item>
          <List.Item>
            <animated.div style={{ fontSize: "1.7em", ...colortransition }}>
              {index}
            </animated.div>
          </List.Item>
              </List>
              {/* {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })} */}
      </Container>
    </animated.div>
  );
};
