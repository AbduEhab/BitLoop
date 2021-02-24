import React, { useEffect, useState } from "react";
import VizSensor from "react-visibility-sensor";
import { gsap } from "gsap";
import {
  Image,
  Container,
  Grid,
  Header,
  List,
  Button,
} from "semantic-ui-react";

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
        gsap.to(".leadingSection", { opacity: 0, delay: 0.2, duration: 1.4 });
      } else {
        gsap.to(".leadingSection", { opacity: 100 });
        gsap.fromTo(
          ".leadingSectionArrow",
          { opacity: 0, y: -20 },
          {
            delay: 0.6,
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
            delay: 0.6,
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
      <Container className="leadingSection" style={{ paddingBottom: 20 }}>
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
          width: "70%",
          marginBottom: "10%",
        }}
      >
        <List
          style={{
            padding: "100px",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <List.Item>
            <Header
              as="h3"
              content="Ready To Take It To The Next Level?"
              style={{
                fontSize: "3em",
                fontWeight: "bold",
                paddingBottom: window.innerHeight / 4,
                paddingTop: "10%",
                color: "#DAA7A2",
              }}
            />
          </List.Item>

          <List.Item
            style={{
              position: "relative",
              display: "flex",
              flex: "100%",
              justifyContent: "center",
              paddingBottom: window.innerHeight / 4,
            }}
          >
            <Image
              size="medium"
              src="./Assets/HomePage/Main_Rec.png"
              style={{ paddingBottom: "3%" }}
            />
            <h1
              style={{
                fontSize: "2.5em",
                position: "absolute",
                top: "-7px",
                // marginLeft: "40%",
                color: "white",
              }}
            >
              How?
            </h1>
          </List.Item>

          <List.Item
            style={{
              position: "relative",
              display: "flex",
              flex: "100%",
              justifyContent: "center",
              paddingBottom: window.innerHeight / 4,
            }}
          >
            <Image
              size="large"
              src="./Assets/HomePage/Main_Rec.png"
              style={{ paddingBottom: "3%" }}
            />
            <h1
              style={{
                fontSize: "2.5em",
                position: "absolute",
                top: "10px",
                // marginLeft: "40%",
                color: "white",
              }}
            >
              We Basically...
            </h1>
          </List.Item>

          <List.Item>
            <Image
              size="massive"
              src="./Assets/HomePage/StupidMachine.png"
              style={{ paddingBottom: "20%" }}
            />
          </List.Item>

          <List.Item
            style={{
              position: "relative",
              display: "flex",
              flex: "100%",
              justifyContent: "center",
            }}
          >
            <Image
              size="large"
              src="./Assets/HomePage/6BCDC9_Hex.png"
              style={{ paddingBottom: "3%" }}
            />
            <h1
              style={{
                position: "absolute",
                top: "30%",
                marginLeft: "30%",
                marginRight: "30%",
                color: "white",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
              reprehenderit excepturi.
            </h1>
          </List.Item>
        </List>
      </Container>

      <Container
        textAlign="center"
        style={{
          backgroundImage: `url(./Assets/HomePage/TBackground_1.png)`,
          borderRadius: "50px",
          width: "80%",
        }}
      >
        <List style={{ padding: "100px" }}>
          <List.Item
            style={{
              position: "relative",
              display: "flex",
              flex: "100%",
              justifyContent: "center",
              paddingBottom: window.innerHeight / 4,
            }}
          >
            <Image
              size="large"
              src="./Assets/HomePage/Main_Rec.png"
              style={{ paddingBottom: "3%" }}
            />
            <h1
              style={{
                fontSize: "4em",
                position: "absolute",
                top: "0px",
                color: "white",
              }}
            >
              PROCESS
            </h1>
          </List.Item>
          <List.Item
            style={{
              display: "flex",
              position: "relative",
              flex: "100%",
              justifyContent: "center",
              paddingBottom: window.innerHeight / 4,
            }}
          >
            <Button
              onClick={() => {
                alert("a7a");
              }}
              size="massive"
              basic
              color="olive"
              style={{
                transform: "translate(230px, 50px) rotate(30deg) ",
                width: "450px",
                position: "absolute",
                zIndex: 2,
              }}
            >
              Olive
            </Button>
            <Button
              onClick={() => {
                alert("a7a");
              }}
              size="massive"
              basic
              color="blue"
              style={{
                transform: "translate(450px, 430px) rotate(90deg) ",
                width: "450px",
                position: "absolute",
                zIndex: 2,
              }}
            >
              blue
            </Button>
            <Button
              onClick={() => {
                alert("a7a");
              }}
              size="massive"
              basic
              color="violet"
              style={{
                transform: "translate(230px, 820px) rotate(-30deg) ",
                width: "450px",
                position: "absolute",
                zIndex: 2,
              }}
            >
              violet
            </Button>
            <Button
              onClick={() => {
                alert("a7a");
              }}
              size="massive"
              basic
              color="grey"
              style={{
                transform: "translate(-220px, 820px) rotate(30deg) ",
                width: "450px",
                position: "absolute",
                zIndex: 2,
              }}
            >
              grey
            </Button>
            <Button
              onClick={() => {
                alert("a7a");
              }}
              size="massive"
              basic
              color="red"
              style={{
                transform: "translate(-440px, 430px) rotate(-90deg) ",
                width: "450px",
                position: "absolute",
                zIndex: 2,
              }}
            >
              red
            </Button>

            <Button
              onClick={() => {
                alert("a7a");
              }}
              size="massive"
              basic
              color="pink"
              style={{
                transform: "translate(-220px, 50px) rotate(-30deg) ",
                width: "450px",
                position: "absolute",
                zIndex: 2,
              }}
            >
              pink
            </Button>
            <Image
              size="huge"
              src="./Assets/HomePage/MAINProcess_Hex.png"
              style={{ paddingBottom: "3%" }}
            />
            {/* <div style={{ position: "absolute", zIndex: 1 }}>
              <Image
                size="huge"
                src="./Assets/HomePage/1D7769_Hex.png"
                style={{
                  transform: "translate(135px, -17px)",
                  width: "75%",
                }}
              />
              <h1
                style={{
                  position: "absolute",
                  top: "300px",
                  color: "white",
                  margin: "20%",
                  textSizeAdjust: "80%",
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                consectetur veritatis mollitia aperiam, qui quae sapiente eius
                enim! Reprehenderit, commodi?
              </h1>
            </div> */}
          </List.Item>
        </List>
      </Container>
    </div>
  );
};
