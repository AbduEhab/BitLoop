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
    <div id="main" style={{ height: window.innerHeight - 100 }}>
      <video
        className="SecondStage"
        src="./Assets/sample1.mp4"
        autoPlay
        loop
        muted
        style={{
          boxSizing: "border-box",
          objectFit: "cover",
          position: "absolute",
          width: "100%",
          height: "calc(100% - 100px)",
          borderRadius: "0px 0px 50px 50px",
          top: "0%",
          zIndex: -2,
        }}
      />

      <List
        inverted
        style={{
          paddingTop: window.innerHeight / 3,
          paddingLeft: window.innerWidth / 5,
          paddingRight: window.innerWidth / 5,
        }}
      >
        <List.Item>
          <Header
            className="MainText"
            as="h1"
            content="NeoHex"
            style={{
              fontSize: "6em",
              fontWeight: "bold",
              marginBottom: 40,
              color: "#DAA7A2",
            }}
          />
        </List.Item>
        <List.Item>
          <Header
            className="MainText"
            as="h2"
            content="The Web Simplified"
            style={{
              fontWeight: "bold",
              color: "#DAA7A2",
            }}
          />
        </List.Item>
      </List>
      <br style={{}} />
    </div>
  );
};
