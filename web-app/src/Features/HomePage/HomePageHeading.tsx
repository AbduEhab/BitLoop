import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import { Container, Header, List, Segment } from "semantic-ui-react";

const words: String[] = ["Design", "Development", "Maintenance"];

export const HomePageHeading = () => {
  const [index, setIndex] = useState(0);
  const word: String = words[index];
  const increment = () => setIndex((index) => (index > 2 ? 0 : index + 1));
  setInterval(increment, 2000);

  const mainDiv = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 100,
    config: { duration: 800, friction: 50 },
  });

  return (
    <animated.div style={mainDiv}>
      <video
        src="./Assets/sample.mp4"
        autoPlay
        loop
        muted
        style={{
          objectFit: "cover",
          position: "fixed",
          width: "100%",
          height: "100%",
          top: "0%",
          transform: "translate(0%,-10%)",
          zIndex: -1,
        }}
      />
      <Container text>
        <Header
          as="h1"
          content="BitLoop"
          inverted
          style={{
            fontSize: "5em",
            fontWeight: "normal",
            marginBottom: 40,
            marginTop: "4em",
          }}
        />
        <List horizontal inverted>
          <List.Item>
            <Header
              as="h2"
              inverted
              content="Simplified"
              style={{
                marginBottom: 640,
              }}
            />
          </List.Item>
          <List.Item></List.Item>
        </List>
      </Container>
      <Segment></Segment>
    </animated.div>
  );
};
