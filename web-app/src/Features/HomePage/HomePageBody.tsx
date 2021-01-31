import React, { useEffect, useState } from "react";
import VizSensor from "react-visibility-sensor";
import { gsap } from "gsap";
import { Image, Container, Grid } from "semantic-ui-react";

export const HomePageBody = () => {
  useEffect(() => {
    gsap.fromTo(
      ".leadingSectionArrow",
      { opacity: 0, y: -30 },
      {
        delay: 5,
        opacity: 100,
        duration: 1.2,
        ease: "circ.out",
        y: 0,
      }
    );
    gsap.fromTo(
      ".leadingSectionText",
      { opacity: 0, x: -500 },
      {
        delay: 5,
        opacity: 100,
        duration: 1.6,
        ease: "circ.out",
        x: 0,
      }
    );
  }, []);

  const [first, setFirst] = useState(true);

  function hideLeadingSection(hide: boolean) {
    if (!first)
      if (hide) {
        gsap.to(".leadingSection", { opacity: 0, delay: 1, duration: 2.4 });
      } else {
        gsap.to(".leadingSection", { opacity: 100 });
        gsap.fromTo(
          ".leadingSectionArrow",
          { opacity: 0, y: -20 },
          {
            delay: 2,
            opacity: 100,
            duration: 1.6,
            ease: "power3.out",
            y: 0,
          }
        );
        gsap.fromTo(
          ".leadingSectionText",
          { opacity: 0, x: -70 },
          {
            delay: 2,
            opacity: 100,
            duration: 1.2,
            ease: "power2.inOut",
            x: 0,
          }
        );
      }
  }

  return (
    <div>
      <Container
        className="leadingSection"
        textAlign="center"
        style={{ marginBottom: 20 }}
      >
        <Grid textAlign="center" columns={2} padded>
          <Grid.Row>
            <Grid.Column>
              <Container
                className="leadingSectionText"
                fluid
                text
                textAlign="right"
              >
                <h3 style={{ color: "#DAA7A2" }}>
                  Scroll <br />
                  To Explore
                </h3>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Image
                className="leadingSectionArrow"
                size="mini"
                src="./Assets/downArrow.png"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <VizSensor
        onChange={(isVisible) => {
          hideLeadingSection(isVisible);
          setFirst(false);
        }}
      >
        <Container>lol</Container>
      </VizSensor>
    </div>
  );
};
