import React from "react";
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Appear,
  Image,
  Link,
  Code,
  Layout,
  Fill,
  CodePane,
  Text
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
import createTheme from "spectacle/lib/themes/default";
import Terminal from "spectacle-terminal";
import Typist from "react-typist";
import Counter from "./samples/Counter.jsx";
import ReduxCounter from "./samples/ReduxCounter.jsx";
import ReduxCounter2 from "./samples/ReduxCounter2.jsx";
require("normalize.css");
require("./samples/style.css");

const cursor = {
  show: false,
  blink: true,
  element: "|",
  hideWhenDone: false,
  hideWhenDoneDelay: 1000
};
const theme = createTheme(
  {
    primary: "#4e4e4e",
    secondary: "#fff",
    tertiary: "#a9e023",
    quarternary: "#cecece"
  },
  {
    primary: { name: "Muli", googleFont: true, styles: ["300", "700i"] },
    secondary: "Helvetica"
  }
);

const headingProps = {
  size: 6,
  textColor: "tertiary",
  caps: true,
  style: {
    fontWeight: "300",
    marginBottom: "2em"
  }
};

const subtitleProps = {
  size: 6,
  textColor: "secondary",
  style: {
    fontSize: "24pt",
    fontWeight: "300",
    marginBottom: "3.5em",
    fontVariant: "small-caps"
  }
};

const dropShadow = {
  filter: "drop-shadow(2px 2px 3px rgba(0,0,0,0.5))"
};

const codePaneProps = {
  lang: "js",
  style: {
    fontSize: "16pt",
    marginRight: "10px",
    minWidth: "initial"
  }
};

const footerProps = {
  size: 6,
  textColor: "secondary",
  style: {
    fontSize: "24pt",
    fontWeight: "300",
    fontVariant: "small-caps",
    top: "85vh",
    width: "100%",
    position: "absolute"
  }
};

const codeLight = {
  color: "#fff"
};

export const MySubtitle = ({ children }) => <Heading {...subtitleProps}>{children}</Heading>;
export const MyFooter = ({ children }) => <Heading {...footerProps}>{children}</Heading>;
export const MyCodePane = ({ source }) => <CodePane {...codePaneProps} source={source} />;
export const MyLink = ({ children, href }) => (
  <Link href={href} textColor="tertiary" target="_blank" style={{ textDecoration: "underline" }}>{children}</Link>
);

const sectionHeadingProps = {
  textSize: "0.7em",
  textColor: "tertiary",
  caps: true
};

export const MyHeading = ({ children, section }) => (
  <div>
    <Text {...sectionHeadingProps}>{section}</Text>
    <Heading {...headingProps}>{children}</Heading>
  </div>
);

export const AppearListItem = ({ children }) => (
  <Appear>
    <ListItem>{children}</ListItem>
  </Appear>
);

export default class Presentation extends React.Component {
  constructor() {
    super();
    localStorage.clear();
  }

  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide>
          <Layout>
            <Fill />
            <Fill>
              <Image style={dropShadow} height={170} src={require("../assets/react-logo.png")} />
            </Fill>
            <Fill>
              <Image style={dropShadow} height={140} src={require("../assets/redux-logo.png")} />
            </Fill>
            <Fill />
          </Layout>
          <Heading
            caps
            size={5}
            textColor="tertiary"
            style={{ fontWeight: "300", marginBottom: "0.5em" }}
          >
            Intro to React/Redux
          </Heading>
          <MySubtitle>Headspring Front End Forum</MySubtitle>
          <MySubtitle>Part 4: React/Redux in the Real World</MySubtitle>
        </Slide>

        <Slide align="top">
          <MyHeading>Intro to React/Redux: Part 4</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Approaches to using React and Redux</ListItem>
            <ListItem>Example: Serenity HR</ListItem>
            <ListItem>Example: K|Admin</ListItem>
            <ListItem>Recommended resources</ListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Using React/Redux">1. React Components</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: '-150px', marginRight: '-150px' }}>
            <ListItem>React components used on a page within a larger app</ListItem>
            <AppearListItem>Example: Headspring PM Staffing Schedule</AppearListItem>
            <AppearListItem>Complex visualization needed only on one page of the application</AppearListItem>
            { /* TODO: Recommended? Why? */ }
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="React Example">Staffing Schedule</MyHeading>
          <div style={{ marginTop: "-50px", marginLeft: "-150px", marginRight: "-150px", width: "130%" }}>
            <Image src={require("../assets/staffingSchedule-ui.png")} />
          </div>
        </Slide>

        <Slide align="top">
          <MyHeading section="React Example">Staffing Schedule</MyHeading>
          <div style={{ marginTop: "-50px", marginLeft: "-150px", marginRight: "-150px", width: "130%" }}>
            <Image src={require("../assets/staffingSchedule.png")} />
          </div>
        </Slide>

        <Slide align="top">
          <MyHeading section="Using React/Redux">2. React Views</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: '-150px', marginRight: '-150px' }}>
            <ListItem>Use React components for specific views in an MVC app</ListItem>
            <AppearListItem>Examples: Headspring OWN tool, USBC TMS</AppearListItem>
            <AppearListItem>Didn't want to commit to a SPA, but still use full React components for views</AppearListItem>
            { /* TODO: Recommended? Why? */ }
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="React Example">OWN Tool</MyHeading>
          <div style={{ marginTop: "-50px", marginLeft: "-150px", marginRight: "-150px", width: "130%" }}>
            <Image src={require("../assets/OWN-ui.png")} />
          </div>
        </Slide>

        <Slide align="top">
          <MyHeading section="React Example">OWN Tool</MyHeading>
          <div style={{ marginTop: "-50px", marginLeft: "-150px", marginRight: "-150px", width: "130%" }}>
            <Image src={require("../assets/OWN.png")} />
          </div>
        </Slide>

        <Slide align="top">
          <MyHeading section="React Example">OWN Tool</MyHeading>
          <div style={{ marginTop: "-50px", marginLeft: "-150px", marginRight: "-150px", width: "130%" }}>
            <Image src={require("../assets/OWN2.png")} />
          </div>
        </Slide>

        <Slide align="top">
          <MyHeading section="React Example">OWN Tool</MyHeading>
          <div style={{ marginTop: "-50px", marginLeft: "-150px", marginRight: "-150px", width: "130%" }}>
            <Image src={require("../assets/OWN3.png")} />
          </div>
        </Slide>

        <Slide align="top">
          <MyHeading section="Using React/Redux">3. React without Redux</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: '-150px', marginRight: '-150px' }}>
            <AppearListItem>Example: Original YETI Overlord</AppearListItem>
            <AppearListItem>Used Next.js to "simplify" the building of a server-rendered React app</AppearListItem>
            <AppearListItem>Worked well when the app was small, didn't scale well</AppearListItem>
            { /* TODO: Recommended? Why? */ }
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Using React/Redux">State Changes in React</MyHeading>
          <List style={{ lineHeight: 1.5, listStyle: "none" }}>
            <ListItem>
              <Image style={{ background: "#fff" }} src={require("../assets/state-change1.gif")} />
            </ListItem>
          </List>
          <MyFooter>Image from <a href="https://medium.com/dailyjs/when-do-i-know-im-ready-for-redux-f34da253c85f">When do I know I'm ready for Redux?</a></MyFooter>
        </Slide>

        <Slide align="top">
          <MyHeading section="Using React/Redux">State Changes in React</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: "-150px", marginRight: "-150px" }}>
            <ListItem>When components share state, but aren't a parent/child</ListItem>
            <AppearListItem>Solve by "lifting" state
              <Image style={{ background: "#fff" }} src={require("../assets/state-change2.gif")} />
            </AppearListItem>
          </List>
          <MyFooter>Image from <a href="https://medium.com/dailyjs/when-do-i-know-im-ready-for-redux-f34da253c85f">When do I know I'm ready for Redux?</a></MyFooter>
        </Slide>

        <Slide align="top">
          <MyHeading section="Using React/Redux">State Changes in React</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: "-150px", marginRight: "-150px" }}>
            <ListItem>As the app grows, state updates become more complex</ListItem>
            <AppearListItem>
              <Image style={{ background: "#fff" }} src={require("../assets/state-change3.gif")} />
            </AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Using React/Redux">When do you need Redux?</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: '-150px', marginRight: '-150px' }}>
            <AppearListItem>Application state doesn't follow the UI component structure</AppearListItem>
            <AppearListItem>Difficult to trace state changes through the app</AppearListItem>
            <AppearListItem>Components bloated with functions to manage state</AppearListItem>
            <AppearListItem>Passing the same props through multiple levels of components</AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="React Example">YETI: Overlord</MyHeading>
          <div style={{ marginTop: "-50px", marginLeft: "-150px", marginRight: "-150px", width: "130%" }}>
            <Image src={require("../assets/overlord-ui.png")} />
          </div>
        </Slide>

        <Slide align="top">
          <MyHeading section="React Example">YETI: Overlord</MyHeading>
          <div style={{ marginTop: "-50px", marginLeft: "-150px", marginRight: "-150px", width: "130%" }}>
            <Image src={require("../assets/overlord1.png")} />
          </div>
        </Slide>

        <Slide align="top">
          <MyHeading section="Using React/Redux">State Changes in Redux</MyHeading>
          <List style={{ lineHeight: 1.5, listStyle: "none" }}>
            <AppearListItem>
              <Image style={{ background: "#fff" }} src={require("../assets/state-change4.gif")} />
            </AppearListItem>
          </List>
          <MyFooter>Image from <a href="https://medium.com/dailyjs/when-do-i-know-im-ready-for-redux-f34da253c85f">When do I know I'm ready for Redux?</a></MyFooter>
        </Slide>

        <Slide align="top">
          <MyHeading section="Using React/Redux">4. SPA with React/Redux</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: '-150px', marginRight: '-150px' }}>
            <AppearListItem>Example: USBC Registration, K|Admin</AppearListItem>
            <AppearListItem>Headspring's default position for front-end projects</AppearListItem>
            { /* TODO: Recommended? Why? */ }
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="React/Redux Example">USBC Registration</MyHeading>
          <div style={{ marginTop: "-50px", marginLeft: "-150px", marginRight: "-150px", width: "130%" }}>
            <Image src={require("../assets/usbc1.png")} />
          </div>
        </Slide>

        <Slide>
          <Heading caps size={4} textColor="tertiary" style={{ fontWeight: "300", marginBottom: "0.5em" }}>Serenity HR</Heading>
        </Slide>

        <Slide>
          <Heading caps size={4} textColor="tertiary" style={{ fontWeight: "300", marginBottom: "0.5em" }}>K|Admin</Heading>
        </Slide>

        <Slide align="top">
          <MyHeading>Recommended Resources</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: "-100px", marginRight: "-100px" }}>
            <ListItem><a href="https://egghead.io/series/getting-started-with-redux">Getting Started with Redux</a> video series</ListItem>
            <ListItem><a href="https://medium.com/dailyjs/when-do-i-know-im-ready-for-redux-f34da253c85f">When Do I Know I'm Ready for Redux</a></ListItem>
            <ListItem><a href="https://headspring.atlassian.net/wiki/spaces/FED/pages">Front End Development Confluence space</a></ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading caps size={4} textColor="tertiary" style={{ fontWeight: "300", marginBottom: "0.5em" }}>Questions?</Heading>
        </Slide>
      </Deck>
    );
  }
}
