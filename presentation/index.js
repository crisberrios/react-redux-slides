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
  Fit,
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
import Board from "./samples/Board.jsx";
import Board2 from "./samples/Board2.jsx";
import Board3 from "./samples/Board3.jsx";
import Board4 from "./samples/Board4.jsx";
import Board5 from "./samples/Board5.jsx";
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
          <MySubtitle>Part 3: Hello, Redux!</MySubtitle>
        </Slide>

        <Slide align="top">
          <MyHeading>Intro to React/Redux: Part 3</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: "-75px", marginRight: "-75px" }}>
            <ListItem>What is Redux?</ListItem>
            <ListItem>Why use Redux?</ListItem>
            <ListItem>How to Redux</ListItem>
            <ListItem>Testing Redux</ListItem>
            <ListItem>Recommended resources</ListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading>What is Redux?</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: '-150px', marginRight: '-150px' }}>
            <AppearListItem>Redux is a predictable state container for JavaScript apps</AppearListItem>
            <AppearListItem>Can be used with React, or any view library</AppearListItem>
            <AppearListItem>Evolved from the ideas of Flux</AppearListItem>
            <AppearListItem>Stores your entire application's state in a single tree "store".</AppearListItem>
            <AppearListItem>Event handler architecture; change state by emitting actions</AppearListItem>
            <AppearListItem>Reducers listen for actions and transform the state tree</AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading>Why use Redux?</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: '-150px', marginRight: '-150px' }}>
            <AppearListItem>Persist state to local storage and boot up from it</AppearListItem>
            <AppearListItem>Automate bug reports by serializing user actions with a state snapshot</AppearListItem>
            <AppearListItem>Maintain an undo history</AppearListItem>
            <AppearListItem>Time travel during development</AppearListItem>
            <AppearListItem>Preserve business logic to provide alternative UIs</AppearListItem>
            <AppearListItem>Easy to test</AppearListItem>
            <AppearListItem>Ideal for scalable SPAs</AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading>Remember this?</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <Counter /><br />
            <AppearListItem>Let's understand the principles of Redux by creating a reducer to manage that state transition.</AppearListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/app.jsx.2.example")}
          ranges={[{ loc: [4, 11], title: "Original App.jsx" }, { loc: [12, 17] }, { loc: [18, 31] }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/redux.counter.example")}
          ranges={[{ loc: [3, 11] }, { loc: [16, 17] }, { loc: [19, 23] }, { loc: [24, 27] } ]}
        />

        <Slide align="top">
          <MyHeading>Counting with a Reducer!</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ReduxCounter /><br />
            <AppearListItem>Let's add a new action.</AppearListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/redux.counter.1.example")}
          ranges={[{ loc: [7, 9] }, { loc: [30, 33] }, { loc: [45, 51] } ]}
        />

        <Slide align="top">
          <MyHeading>Counting with a Reducer!</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ReduxCounter2 /><br />
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading>Why not Redux?</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: '-150px', marginRight: '-150px' }}>
            <AppearListItem>It's a tradeoff that limits how you interact with state</AppearListItem>
            <AppearListItem>There's nothing inherently wrong with using setState/component state</AppearListItem>
            <AppearListItem>Added indirection is only beneficial if you gain something from it</AppearListItem>
            <AppearListItem>Don't assume that you need it</AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Hello, Redux">Consider Using Redux If...</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: "-100px", marginRight: "-100px" }}>
            <AppearListItem>You're building a SPA (single-page application)</AppearListItem>
            <AppearListItem>Maintaining component state is getting really hairy</AppearListItem>
            <AppearListItem>Your nested components are passing lots of props around but not using them themselves</AppearListItem>
          </List>
        </Slide>

        <Slide>
          <Heading
            caps
            size={3}
            textColor="tertiary"
            style={{ fontWeight: "300", marginBottom: "0.5em" }}
          >
            REDUX:
          </Heading>
          <MyHeading>Cast of Characters</MyHeading>
          <Image src={require("../assets/redux.png")} />
        </Slide>

        <Slide align="top">
          <MyHeading section="Components of Redux">Action Creators</MyHeading>
          <Layout>
            <Fill><Image src={require("../assets/action-creator.png")} style={{ width: "300px" }} /></Fill>
            <Fill><List style={{ lineHeight: 1.5, marginRight: "-150px" }}>
              <AppearListItem>Formats your message a way the rest of the system can understand</AppearListItem>
              <AppearListItem>Like the telegraph operator</AppearListItem>
              <AppearListItem>Returns a formatted object</AppearListItem>
            </List></Fill>
          </Layout>
          <MyFooter>images from <a href="https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6">code-cartoons.com</a></MyFooter>
        </Slide>

        <Slide align="top">
          <MyHeading section="Components of Redux">The Store</MyHeading>
          <Layout>
            <Fill><Image src={require("../assets/store.png")} style={{ width: "300px" }} /></Fill>
            <Fill><List style={{ lineHeight: 1.5, marginRight: "-150px" }}>
              <AppearListItem>Only one store</AppearListItem>
              <AppearListItem>Object tree of your application's state</AppearListItem>
              <AppearListItem>Delegates updates to reducers</AppearListItem>
            </List></Fill>
          </Layout>
          <MyFooter>images from <a href="https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6">code-cartoons.com</a></MyFooter>
        </Slide>

        <Slide align="top">
          <MyHeading section="Components of Redux">Reducers</MyHeading>
          <Layout>
            <Fill><Image src={require("../assets/reducer.png")} style={{ width: "300px" }} /></Fill>
            <Fill><List style={{ lineHeight: 1.5, marginRight: "-150px" }}>
              <AppearListItem>Don't mutate state; modify copies</AppearListItem>
              <AppearListItem>Reducers pass their modified slices of state back to the Root Reducer</AppearListItem>
              <AppearListItem>Can have a hierarchy of reducers, as needed</AppearListItem>
            </List></Fill>
          </Layout>
          <MyFooter>images from <a href="https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6">code-cartoons.com</a></MyFooter>
        </Slide>

        <Slide align="top">
          <MyHeading section="Components of Redux">The View</MyHeading>
          <Layout>
            <Fill><Image src={require("../assets/components.png")} style={{ width: "300px" }} /></Fill>
            <Fill><List style={{ lineHeight: 1.5, marginRight: "-150px" }}>
              <AppearListItem>Smart (connected) components are in charge of the actions</AppearListItem>
              <AppearListItem>Dumb components can peform actions passed down as props</AppearListItem>
              <AppearListItem>Smart components rarely emit DOM of their own; usually just arrange dumb components</AppearListItem>
            </List></Fill>
          </Layout>
        </Slide>

        <Slide align="top">
          <MyHeading section="Components of Redux">View Layer Binding</MyHeading>
          <Layout>
            <Fill><Image src={require("../assets/view_binding.png")} style={{ width: "300px" }} /></Fill>
            <Fill><List style={{ lineHeight: 1.5, marginRight: "-150px" }}>
              <AppearListItem>The "IT guy" for the view tree</AppearListItem>
              <AppearListItem>When using React, this is done by 'react-redux'</AppearListItem>
              <AppearListItem>Ensures the components can connect to the store</AppearListItem>
            </List></Fill>
          </Layout>
        </Slide>

        <Slide align="top">
          <MyHeading section="Components of Redux">View Layer Binding</MyHeading>
          <Layout>
            <Fill><Image src={require("../assets/view_binding.png")} style={{ width: "300px" }} /></Fill>
            <Fill><List style={{ lineHeight: 1.5, marginRight: "-150px" }}>
              <ListItem>Made up of three parts:
                <List style={{ marginLeft: "70px" }}>
                  <AppearListItem>Provider component - wraps the component tree</AppearListItem>
                  <AppearListItem>connect() - a component wraps itself with connect to receive state updates</AppearListItem>
                  <AppearListItem>selector - function that maps what part of the state it needs</AppearListItem>
                </List>
              </ListItem>
            </List></Fill>
          </Layout>
        </Slide>

        <Slide align="top">
          <MyHeading section="Components of Redux">Root Component</MyHeading>
          <Layout>
            <Fill><Image src={require("../assets/cio.png")} style={{ width: "300px" }} /></Fill>
            <Fill><List style={{ lineHeight: 1.5, marginRight: "-150px" }}>
              <AppearListItem>Exists in all React applications, but has more specific responsibility for Redux</AppearListItem>
              <AppearListItem>Like the C-level executive</AppearListItem>
              <AppearListItem>Creates the store, specifies the reducer, and brings together the binding and views</AppearListItem>
              <AppearListItem>Hands-off once the app has been initialized</AppearListItem>
            </List></Fill>
          </Layout>
        </Slide>

        <Slide align="top">
          <MyHeading>Adding Redux</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: "-100px", marginRight: "-100px" }}>
            <ListItem>Challenge 9: Pull the Redux_Starter branch of the repo, and add necessary packages for Redux</ListItem>
            <AppearListItem>Run <Code style={codeLight}>yarn add redux react-redux redux-thunk</Code></AppearListItem>
            <AppearListItem>Run <Code style={codeLight}>yarn</Code> to ensure all previously defined packages have been installed</AppearListItem>
            <AppearListItem>Run <Code style={codeLight}>yarn start</Code> to run the application at localhost:8080</AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading>Static Dashboard</MyHeading>
          <Image src={require("../assets/StaticDashboard.png")} />
          <MyFooter>random images from <a href="http://picsum.photos/">picsum.photos</a></MyFooter>
        </Slide>

        <Slide align="top">
          <MyHeading section="Hello, Redux">Components We Added</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Card</ListItem>
            <AppearListItem>WelcomeCard</AppearListItem>
            <AppearListItem>CardList</AppearListItem>
            <AppearListItem>StaticDashboard (replaced App.jsx)</AppearListItem>
          </List>
          <Image style={{ height: "40vh" }} src={require("../assets/StaticDashboard.png")} />
        </Slide>

        <Slide align="top">
          <MyHeading section="Hello, Redux">New Folder Structure</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>/src
              <List style={{ marginLeft: "70px" }}>
                <AppearListItem>/components</AppearListItem>
                <AppearListItem>/containers</AppearListItem>
                <AppearListItem>/actions</AppearListItem>
                <AppearListItem>/reducers</AppearListItem>
              </List>
            </ListItem>
            <AppearListItem>Larger application could have that folder structure for each feature</AppearListItem>
            <AppearListItem>index.jsx updated to include static data; passes it as props to StaticDashboard</AppearListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/index.jsx.2.example")}
          ranges={[{ loc: [4, 6], title: "index.jsx" }, { loc: [7, 14] }, { loc: [14, 19] }, { loc: [20, 25] }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/staticDashboard.example")}
          ranges={[{ loc: [5, 6], title: "StaticDashboard.jsx" }, { loc: [10, 12] }, { loc: [18, 31] }]}
        />

        <Slide align="top">
          <MyHeading section="Hello, Redux">Adding Redux</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Challenge 10: Create initialState.js to define the app's initial (empty) state, based on the shape of the hard-coded data. Create a constants.js and define strings for the expected actions: DISPLAY_WELCOME_CARD, DISPLAY_CARD_LIST.</ListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/initialState.js.example")}
          ranges={[{ loc: [0, 9], title: "initialState.js" }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/constants.js.example")}
          ranges={[{ loc: [0, 5], title: "constants.js" }]}
        />

        <Slide align="top">
          <MyHeading section="Hello, Redux">Adding Redux</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Challenge 11: Define action types in an actionTypes.js for each of the the expected actions. Create actions.js and define the action creators that return a formatted object with the expected static data.</ListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/actionTypes.js.example")}
          ranges={[{ loc: [0, 1], title: "actionTypes.js" }, { loc: [ 2, 11] }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/actions.js.example")}
          ranges={[{ loc: [0, 1], title: "actions.js" }, { loc: [2, 10] }, { loc: [11, 27] }]}
        />

        <Slide align="top">
          <MyHeading section="Hello, Redux">Adding Redux</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Challenge 12: Create a reducer file for each action that takes the current state and action message, and switches based on action type to update the state. Link these two reducers with a root reducer (already started for you in reducers/index.js).</ListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/welcomeReducer.js.example")}
          ranges={[{ loc: [0, 2], title: "welcomeCardReducer.js" }, { loc: [3, 5] }, { loc: [5, 11] }, { loc: [13, 14] }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/cardReducer.js.example")}
          ranges={[{ loc: [0, 2], title: "cardListReducer.js" }, { loc: [3, 5] }, { loc: [5, 11] }, { loc: [13, 14] }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/rootReducer.example")}
          ranges={[{ loc: [1, 3], title: "reducers/index.js" }, { loc: [4, 8] }]}
        />

        <Slide align="top">
          <MyHeading section="Hello, Redux">Adding Redux</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Challenge 13: Create containers that wrap the WelcomeCard and CardList components with a connect() function, and map the expected piece of state to that component's props. Update StaticDashboard to use the container components.</ListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/welcomeCardContainer.example")}
          ranges={[{ loc: [0, 3], title: "WelcomeCardContainer.jsx" }, { loc: [4, 9] }, { loc: [10, 15] }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/cardListContainer.example")}
          ranges={[{ loc: [0, 9], title: "CardListContainer.jsx" }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/staticDashboard.1.example")}
          ranges={[{ loc: [0, 3], title: "StaticDashboard.jsx" }, { loc: [9, 11] }]}
        />

        <Slide align="top">
          <MyHeading section="Hello, Redux">Adding Redux</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Challenge 14: Complete implementation by updating the root component (index.jsx) to configure Redux. Use bindActionCreators in the container components to enable the components to access the actions as props.</ListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/index.redux.example")}
          ranges={[{ loc: [2, 3], title: "index.jsx" }, { loc: [6, 7] }, { loc: [8, 15] }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/store.example")}
          ranges={[{ loc: [0, 4], title: "store.js" }, { loc: [5, 10] }, { loc: [11, 13] }]}
        />

        <Slide align="top">
          <MyHeading section="Hello, Redux">How does it look?</MyHeading>
          <List style={{ listStyle: "none" }}>
            <AppearListItem>
              <Image src={require("../assets/with-redux1.png")} />
            </AppearListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/welcomeCardContainer.1.example")}
          ranges={[{ loc: [1, 2], title: "WelcomeCardContainer.jsx" }, { loc: [4, 5] }, { loc: [10, 13] }, { loc: [14, 18] }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/cardListContainer.1.example")}
          ranges={[{ loc: [1, 2], title: "CardListContainer.jsx" }, { loc: [3, 4] }, { loc: [9, 12] }, { loc: [13, 17] }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/welcomeCard.example")}
          ranges={[{ loc: [1, 3], title: "WelcomeCard.jsx" }, { loc: [5, 9] }, { loc: [14, 15] }, { loc: [16, 19] }, { loc: [24, 29] }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/cardList.example")}
          ranges={[{ loc: [1, 3], title: "CardList.jsx" }, { loc: [5, 9] }, { loc: [13, 14] }, { loc: [16, 19] }]}
        />

        <Slide align="top">
          <MyHeading section="Hello, Redux">How does it look?</MyHeading>
          <List style={{ listStyle: "none" }}>
            <AppearListItem>
              <Image src={require("../assets/redux-demo1.gif")} />
            </AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Hello, Redux">Redux Dev Tools</MyHeading>
          <List style={{ listStyle: "none" }}>
            <AppearListItem>
              <Image src={require("../assets/redux-demo2.gif")} />
            </AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Hello, Redux">Testing Redux</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Nothing to add, the project is already set up with Jest from last week</ListItem>
            <AppearListItem>Challenge 15: Add tests for the actions and reducers.</AppearListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/actions.spec.example")}
          ranges={[{ loc: [0, 1], title: "actions.spec.js" }, { loc: [2, 8] }, { loc: [8, 17] }, { loc: [18, 23] }, { loc: [23, 30] }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/reducers.spec.example")}
          ranges={[{ loc: [0, 2], title: "reducers.spec.js" }, { loc: [3, 5] }, { loc: [5, 12] }, { loc: [13, 20] }, { loc: [20, 26] }, { loc: [29, 34] }, { loc: [35, 41] }, { loc: [41, 48] }]}
        />

        <Slide align="top">
          <MyHeading section="Testing Redux">yarn test</MyHeading>
          <Terminal
            title="1. erin@headspring: ~(zsh)"
            output={[
              <Typist cursor={cursor}>yarn test</Typist>,
              <div>
                <span style={{ fontWeight: "bold" }}>yarn run v1.3.2</span>
                <div>
                  <span style={{ color: "#aaa" }}>$ jest</span>
                </div>
              </div>,
              <div>
                <div>
                  <span style={{ fontWeight: "bold", color: "#fff", backgroundColor: "#33b969" }}> PASS </span>
                  <span style={{ color: "#aaa" }}> src\reducers\</span>
                  <span style={{ fontWeight: "bold" }}>reducers.spec.js</span>
                </div>
                <div>
                  <span style={{ fontWeight: "bold", color: "#fff", backgroundColor: "#33b969" }}> PASS </span>
                  <span style={{ color: "#aaa" }}> src\actions\</span>
                  <span style={{ fontWeight: "bold" }}>actions.spec.js</span>
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Test Suites: </span>
                  <span style={{ fontWeight: "bold", color: "#33b969" }}> 2 passed</span>
                  , 2 total
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Tests:       </span>
                  <span style={{ fontWeight: "bold", color: "#33b969" }}> 6 passed</span>
                  , 6 total
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Snapshots:    </span>
                  0 total
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Time:         </span>
                  1.996s
                </div>
                <div>
                  <span style={{ color: "#aaa" }}>Ran all test suites.</span>
                </div>
                <div>
                  ✨ Done in 3.90s.
                </div>
              </div>
            ]}
          />
        </Slide>

        <Slide align="top">
          <MyHeading>Recommended Resources</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: "-100px", marginRight: "-100px" }}>
            <ListItem><a href="https://redux.js.org/">Redux docs</a></ListItem>
            <ListItem><a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en">Redux DevTools</a></ListItem>
            <ListItem><a href="https://github.com/gaearon/redux-thunk">Redux-Thunk documentation</a></ListItem>
            <ListItem><a href="https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6">A Cartoon Intro to Redux</a></ListItem>
            <ListItem><a href="https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367">You Might Not Need Redux</a> - Dan Abramov</ListItem>
            <ListItem><a href="http://sinonjs.org/">Sinon.js</a> for mocks</ListItem>
            <ListItem><a href="http://blog.embengineering.com/post/2016/05/22/react-and-redux-mini-dashboard/">Emmanuel's blog post</a> this demo was based on</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading caps size={4} textColor="tertiary" style={{ fontWeight: "300", marginBottom: "0.5em" }}>Questions?</Heading>
        </Slide>
      </Deck>
    );
  }
}
