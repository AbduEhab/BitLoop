import { gsap } from "gsap";
import React, { useEffect } from "react";
import { Container, Header, List, Image } from "semantic-ui-react";

export const HomePageHeading = () => {
  useEffect(() => {
    gsap.fromTo(
      ".MainText",
      { opacity: 0, y: -50 },
      {
        opacity: 100,
        duration: 0.8,
        ease: "circ.out",
        y: 0,
        stagger: 0.9,
      }
    );
    gsap.from(".SecondStage", {
      opacity: 0,
      delay: 2.9,
      duration: 1.6,
      ease: "Power3.ease",
      stagger: 0.1,
    });
  }, []);

  return (
    <div>
      <Image
        style={{
          display: "block",
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          transform: "translate(0%,-37.5%)",
          zIndex: -1,
        }}
        className="SecondStage"
        src="./Assets/headerOverlay.png"
      />
      <Container className="MainText">
        <Header
          className="MainText"
          as="h1"
          content="NeoHex"
          style={{
            fontSize: "6em",
            fontWeight: "bold",
            marginBottom: 40,
            marginTop: "5em",
            color: "#DAA7A2",
          }}
        />
        <List horizontal inverted>
          <List.Item>
            <Header
              className="MainText"
              as="h2"
              content="The Web Simplified"
              style={{
                fontWeight: "bold",
                marginBottom: 580,
                color: "#DAA7A2",
              }}
            />
          </List.Item>
          <List.Item></List.Item>
        </List>
      </Container>

      <video
        className="SecondStage"
        src="./Assets/sample3.mp4"
        autoPlay
        loop
        muted
        style={{
          objectFit: "cover",
          position: "absolute",
          width: "100%",
          height: "92%",
          top: "0%",
          transform: "translate(0%,0%)",
          zIndex: -1,
        }}
      />
    </div>
  );
};
