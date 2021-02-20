import React, { useEffect, useState } from "react";
import VizSensor from "react-visibility-sensor";
import { gsap } from "gsap";
import { Image, Container, Grid, Header, List } from "semantic-ui-react";

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
        gsap.to(".leadingSection", { opacity: 0, delay: 0.4, duration: 2 });
      } else {
        gsap.to(".leadingSection", { opacity: 100 });
        gsap.fromTo(
          ".leadingSectionArrow",
          { opacity: 0, y: -20 },
          {
            delay: 1,
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
            delay: 1,
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
        style={{ paddingBottom: 20 }}
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
        <div style={{ height: "1px" }} />
      </VizSensor>

      <Container
        textAlign="center"
        style={{
          backgroundImage: `url(./Assets/HomePage/TBackground_1.png)`,
          borderRadius: "50px",
          width: "80%",
        }}
      >
        <List style={{ padding: "100px" }}>
          <List.Item>
            <Header
              as="h3"
              content="Ready To Take It To The Next Level?"
              style={{
                fontSize: "3em",
                fontWeight: "bold",
                paddingBottom: "30%",
                color: "#DAA7A2",
              }}
            />
          </List.Item>
          <List.Item
            style={{
              // backgroundImage: `url(./Assets/HomePage/how.png)`,
              // width: "280px",
              height: "110px",
              padding: "3%",
              marginLeft: "auto",
              marginRight: "auto",
              paddingBottom: "30%",
            }}
          >
            {/* <br /> */}
            <Header
              as="h4"
              content="Let Us Take Care Of It!"
              style={{
                fontSize: "2.5em",
                color: "#DAA7A2",
              }}
            />
            {/* <br /> */}
          </List.Item>

          <List.Item>
            <Header
              as="h4"
              content="We Basically..."
              style={{
                fontSize: "2.5em",
                paddingBottom: "30%",
                color: "#DAA7A2",
              }}
            />
          </List.Item>

          <List.Item>
            <Image
              src="./Assets/HomePage/StupidMachine.png"
              style={{ paddingBottom: "30%" }}
            />
          </List.Item>

          <List.Item style={{ position: "relative" }}>
            <Image
              src="./Assets/HomePage/6BCDC9_Hex.png"
              style={{ paddingBottom: "3%" }}
            />
            <h1
              style={{
                position: "absolute",
                top: "30%",
                marginLeft: "10%",
                marginRight: "10%",
                color: "white",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
              reprehenderit excepturi. Aliquid cupiditate incidunt dicta
              reiciendis libero ratione doloribus ipsum! Consectetur tempora
              praesentium reprehenderit consequatur corporis saepe doloremque
              molestiae in.
            </h1>
          </List.Item>
        </List>
      </Container>
    </div>
  );
};
