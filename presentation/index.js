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
    fontSize: "18pt",
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

const codeLight = {
  color: "#fff"
};

export const MySubtitle = ({ children }) => <Heading {...subtitleProps}>{children}</Heading>;
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
          <MySubtitle>Part 2: Hello, React!</MySubtitle>
        </Slide>

        <Slide align="top">
          <MyHeading>Intro to React/Redux: Part 2</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: "-75px", marginRight: "-75px" }}>
            <ListItem>Hands On: Hello, React!</ListItem>
            <ListItem>Learn React principles through building Tic-Tac-Toe</ListItem>
            <ListItem>Testing React</ListItem>
            <ListItem>Recommended resources</ListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading>Why React?</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <AppearListItem>React is a library for building user interfaces</AppearListItem>
            <AppearListItem>Uses reusable, stateful components</AppearListItem>
            <AppearListItem>Fast, reactive updates using a virtual DOM</AppearListItem>
            <AppearListItem>It's just JavaScript</AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Hello, React!">Hands On: Prerequisites</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Latest Node installed (8.9.4, via nvm)</ListItem>
            <AppearListItem>Yarn installed</AppearListItem>
            <AppearListItem>VS Code installed, with recommended extensions (ESLint, EditorConfig for VS Code)</AppearListItem>
            <AppearListItem>React Developer Tools browser extension</AppearListItem>
            <AppearListItem><span>These slides</span> <Image src={require("../assets/iseewhatyoudidthere.png")} style={{ width: "70px", marginTop: "-50px" }} /></AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Hello, React!">Clone and Install Repo</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Clone the repo to your local folder</ListItem>
            <ListItem>Run <Code style={codeLight}>yarn</Code></ListItem>
          </List>
          <Terminal
            title="1. erin@headspring: ~(zsh)"
            output={[
              <Typist cursor={cursor}>yarn</Typist>,
              <div>
                <span style={{ fontWeight: "bold" }}>yarn install v1.3.2</span>
                <div>
                  <span style={{ color: "#00f" }}>info</span> No lockfile found.
                </div>
                <div>
                  <span style={{ color: "#aaa" }}>[1/4]</span> 🔍 Resolving packages...
                </div>
              </div>,
              <div>
                <span style={{ color: "#aaa" }}>[2/4]</span> 🚚 Fetching packages...
              </div>,
              <div>
                <span style={{ color: "#aaa" }}>[3/4]</span> 🔗 Linking dependencies...
              </div>,
              <div>
                <span style={{ color: "#aaa" }}>[4/4]</span> 📃 Building fresh packages...
              </div>,
              <div>
                <div>
                  <span style={{ color: "#33b969" }}>success</span> Saved lockfile.
                </div>
                <div>
                  ✨ Done in 12.50s.
                </div>
              </div>
            ]}
          />
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/package.json.example")}
          ranges={[{ loc: [1, 4], title: "package.json" }, { loc: [4, 12] }, { loc: [12, 20] }, { loc: [20, 29] }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/editorconfig.example")}
          ranges={[{ loc: [0, 7], title: ".editorconfig" }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/eslintrc.example")}
          ranges={[{ loc: [0, 7], title: ".eslintrc" }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/babelrc.example")}
          ranges={[{ loc: [0, 10], title: ".babelrc" }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/webpack.config.js.example")}
          ranges={[{ loc: [0, 1], title: "webpack.config.js" }, { loc: [2, 8] }, { loc: [8, 15] }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/style.css.example")}
          ranges={[{ loc: [0, 0], title: "style.css" }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/index.html.example")}
          ranges={[{ loc: [0, 11], title: "index.html" }]}
        />

        <Slide align="top">
          <MyHeading section="Hello, React!">What we aren't covering today</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>SASS/SCSS styling</ListItem>
            <AppearListItem>Font/image/other file loading</AppearListItem>
            <AppearListItem>Hot Reloading</AppearListItem>
            <AppearListItem>Dev/Prod configs</AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Hello, React!">Your Turn</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Edit src/index.jsx</ListItem>
            <AppearListItem>Write the following:
              <MyCodePane source={require("../assets/code-examples/index.jsx.example")} />
            </AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Hello, React!">Your Turn</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Open dist/index.html</ListItem>
            <AppearListItem>Update the body to this:<br /><br/>
              <MyCodePane source={`<body>
  <div id="react-app"></div>
  <script src="bundle.js"></script>
</body>`}
              />
            </AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Hello, React!">Your Turn</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Open package.json</ListItem>
            <AppearListItem>Add the following "scripts" section:<br /><br/>
              <MyCodePane source={`... // "private": true,
  "scripts": {
    "build": "webpack"
  },
... // "dependencies": {`}
              />
            </AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Hello, React!">yarn build</MyHeading>
          <Terminal
            title="1. erin@headspring: ~(zsh)"
            output={[
              <Typist cursor={cursor}>yarn build</Typist>,
              <div>
                <span style={{ fontWeight: "bold" }}>yarn run v1.3.2</span>
                <div>
                  <span style={{ color: "#aaa" }}>$ webpack</span>
                </div>
              </div>,
              <div>
                <div>
                  Hash: <span style={{ fontWeight: "bold" }}>113de774897f5b188a74</span>
                </div>
                <div>
                  Version: webpack <span style={{ fontWeight: "bold" }}>3.10.0</span>
                </div>
                <div>
                  Time: <span style={{ fontWeight: "bold" }}>1743</span>ms
                </div>
                <div style={{ fontWeight: "bold" }}>
                  {"    Asset     Size  Chunks                    Chunk Names"}
                </div>
                <div>
                  <span style={{ color: "#B69C4C", fontWeight: "bold" }}>{"bundle.js  1.19 MB       "}</span>
                  <span style={{ fontWeight: "bold" }}>0  </span>
                  <span style={{ fontWeight: "bold", color: "#33b969" }}>[emitted]  </span>
                  <span style={{ color: "#B69C4C", fontWeight: "bold" }}>{"[big]  "}</span>main
                </div>
                <div>
                  {"  [21] "}
                  <span style={{ fontWeight: "bold" }}>./src/index.jsx</span> 547 bytes {"{"}
                  <span style={{ color: "#B69C4C", fontWeight: "bold" }}>0</span>{"} "}
                  <span style={{ fontWeight: "bold", color: "#33b969" }}>[built]</span>
                </div>
                <div>
                  {"  [35] "}
                  <span style={{ fontWeight: "bold" }}>./src/style.css</span> 1.07 kB {"{"}
                  <span style={{ color: "#B69C4C", fontWeight: "bold" }}>0</span>{"} "}
                  <span style={{ fontWeight: "bold", color: "#33b969" }}>[built]</span>
                </div>
                <div>
                  {"  [36] "}
                  <span style={{ fontWeight: "bold" }}>./node_modules/css-loader!./src/style.css</span> 787 bytes {"{"}
                  <span style={{ color: "#B69C4C", fontWeight: "bold" }}>0</span>{"} "}
                  <span style={{ fontWeight: "bold", color: "#33b969" }}>[built]</span>
                </div>
                <div>
                  {"    + 49 hidden modules"}
                </div>
                <div>
                  ✨ Done in 2.15s.
                </div>
              </div>
            ]}
          />
        </Slide>

        <Slide align="top">
          <MyHeading section="Hello, React!">Did it work?</MyHeading>
          <List style={{ lineHeight: 1.5, listStyle: "none" }}>
            <ListItem>Navigate in your file explorer to the <Code style={codeLight}>dist</Code> folder of your repo,
              and open the <Code style={codeLight}>index.html</Code> in a browser</ListItem>
            <AppearListItem><br/>
              <Image src={require("../assets/hello-react.png")} />
            </AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Hello, React!">My First Component</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Create a new file in src, App.jsx:<br /><br/>
              <MyCodePane source={`import React from 'react';

const App = () => (
  <h1>Hello, Component!</h1>
);

export default App;
`}
              />
            </ListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Hello, React!">My First Component</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Update index.jsx to point to your App component:<br /><br/>
              <MyCodePane source={`import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your new component

ReactDOM.render(
  <App />, // Render your component
  document.getElementById('react-app'),
);
`}
              />
            </ListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Hello, React!">My First Component</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: "-15px" }}>
            <ListItem>Update package.json to include a start script:<br /><br/>
              <MyCodePane source={`...
// "scripts": {
     "build": "webpack",
     "start": "webpack-dev-server"
// },
... `}
              />
            </ListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Hello, React!">My First Component</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Run <Code style={codeLight}>yarn start</Code></ListItem>
            <ListItem>Open a browser at localhost:8080</ListItem>
            <AppearListItem><br/>
              <Image src={require("../assets/hello-component.png")} />
            </AppearListItem>
          </List>
        </Slide>

        <Slide>
          <Heading
            caps
            size={2}
            textColor="tertiary"
            style={{ fontWeight: "300", marginBottom: "0.5em" }}
          >
            Great Job!
          </Heading>
          <h2>Now, sit back, and relax! React Basics comin'atcha.</h2>
        </Slide>

        <Slide align="top">
          <MyHeading section="React Basics">Component State</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Stateless functional component vs. stateful components</ListItem>
            <AppearListItem>Challenge 1: Convert App.jsx to a stateful component with a constructor and a "count" state, initialized to 0. Display the current count, and add a button that increments the count by one.</AppearListItem>
            <AppearListItem>Bonus challenge! Add bootstrap styling to the index.jsx.</AppearListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/app.jsx.0.example")}
          ranges={[{ loc: [0, 8], title: "App.jsx" }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/app.jsx.1.example")}
          ranges={[{ loc: [2, 3], title: "\"Smart\" App.jsx" }, { loc: [3, 10] }, { loc: [11, 16] }, { loc: [18, 19] }]}
        />

        <Slide align="top">
          <MyHeading section="React Basics">Immutable State</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <AppearListItem>Mutating data: changing the values of a variable directly
              <MyCodePane source={`let user = { firstName: 'William', lastName: 'Riker' };
user.firstName = 'Will';`}
              />
            </AppearListItem>
            <AppearListItem>Detecting changes</AppearListItem>
            <AppearListItem>Allows easier undo/redo and time travel</AppearListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/app.jsx.2.example")}
          ranges={[{ loc: [1, 2], title: "Add a Button" }, { loc: [12, 17] }, { loc: [20, 29] }]}
        />

        <Slide align="top">
          <MyHeading section="React Basics">Add Some Style</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Update index.jsx to include css:
              <MyCodePane source={`...
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

ReactDOM.render(
  <App />
  document.getElementById('react-app'),
);`}
              /><br />
            </ListItem>
            <AppearListItem>This works, because of webpack:
              <MyCodePane source={`...
module: {
  rules: [
    ...
    { test: /\\.css$/, loader: 'style-loader!css-loader' },
  ]
}
...`}
              />
            </AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="React Basics">Try it out</MyHeading>
          <Counter />
        </Slide>

        <Slide align="top">
          <MyHeading section="React Basics">Tic-Tac-Toe Game</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <AppearListItem>Starting point adds Board and Square components</AppearListItem>
            <AppearListItem>Currently looks like: <br /><br />
              <Board /></AppearListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/square.jsx.example")}
          ranges={[{ loc: [0, 8], title: "Square.jsx" }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/board.jsx.example")}
          ranges={[{ loc: [1, 2], title: "Board.jsx" }, { loc: [3, 7] }, { loc: [8, 19] }, { loc: [19, 35] }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/app.jsx.3.example")}
          ranges={[{ loc: [1, 2], title: "App.jsx" }, { loc: [3, 7] }, { loc: [8, 22] }]}
        />

        <Slide align="top">
          <MyHeading section="React Basics">Using Props</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Props are data passed from a parent component to a child</ListItem>
            <AppearListItem>One-way data flow: The child component can not update props</AppearListItem>
            <AppearListItem>Challenge 2: Update renderSquare to pass the "value" prop to Square. Update Square to display that value.</AppearListItem>
            <AppearListItem>
              <MyCodePane source={`// Board.jsx
...
static renderSquare(i) {
  return <Square value={i} />;
}
...`}
              />
            </AppearListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/square.jsx.1.example")}
          ranges={[{ loc: [1, 2], title: "Square.jsx" }, { loc: [3, 8] }, { loc: [9, 12] }]}
        />

        <Slide align="top">
          <MyHeading section="React Basics">Tic-Tac-Toe Game</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Currently looks like: <br /><br />
              <Board2 /><br /></ListItem>
            <AppearListItem>Challenge 3: Make Square a stateful component to display an 'X' when clicked instead of the value prop. Add a class method that updates the Square's state.</AppearListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/square.jsx.2.example")}
          ranges={[{ loc: [3, 11], title: "Square.jsx" }, { loc: [12, 17] }, { loc: [18, 28] }]}
        />

        <Slide align="top">
          <MyHeading section="React Basics">Tic-Tac-Toe Game</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Now looks like: <br /><br />
              <Board3 /><br /></ListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="React Basics">React Developer Tools</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: "-100px", marginRight: "-100px" }}>
            <ListItem>Chrome/Firefox extension to explore Component tree</ListItem>
            <ListItem>View component state/props
              <Image src={require("../assets/react-dev-tools.png")} />
            </ListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="React Basics">Where does state belong?</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: "-100px", marginRight: "-100px" }}>
            <ListItem>State should be defined at the highest level necessary, since it is passed down from there to all components that need it</ListItem>
            <AppearListItem>Challenge 4: Convert Square back to a functional component, and add an array of values to Board's state. Pass the click handler and the new value down to Square as props. Running the app should not have any visible change from this switch.</AppearListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/board.jsx.1.example")}
          ranges={[{ loc: [4, 11], title: "Board.jsx" }, { loc: [12, 17] }, { loc: [18, 25] }, { loc: [33, 37] }]}
        />

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/square.jsx.3.example")}
          ranges={[{ loc: [3, 11], title: "Square.jsx" }, { loc: [12, 16] }, { loc: [17, 20] }]}
        />

        <Slide align="top">
          <MyHeading section="React Basics">Tic-Tac-Toe Game</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: "-100px", marginRight: "-100px" }}>
            <ListItem>Challenge 5: Add a nextPlayer state to Board, initialize it to 'X', and update it in handleClick to switch between 'X' and 'O' as expected when you click an empty square. Display the correct next player in the status.</ListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/board.jsx.2.example")}
          ranges={[{ loc: [9, 10], title: "Board.jsx" }, { loc: [16, 23] }, { loc: [32, 35] }]}
        />

        <Slide align="top">
          <MyHeading section="React Basics">Tic-Tac-Toe Game</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: "-100px", marginRight: "-100px" }}>
            <ListItem>Should look like:
              <Board4 /><br />
            </ListItem>
            <AppearListItem>Challenge 6: Check for a winner after each move, and display the winner in the status if found, or "Cats game" if the game is a draw. Add a button to start a new game by resetting the state.</AppearListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/board.jsx.3.example")}
          ranges={[{ loc: [1, 2], title: "Board.jsx" }, { loc: [4, 15] }, { loc: [16, 26] }, { loc: [27, 32] }, { loc: [37, 40] }, { loc: [42, 58] }, { loc: [59, 64] }, { loc: [72, 87] }, { loc: [106, 112] }]}
        />

        <Slide align="top">
          <MyHeading section="React Basics">Let's Play!</MyHeading>
          <Layout><Board5 /></Layout>
        </Slide>

        <Slide align="top">
          <MyHeading section="React Basics">React Lifecycle Methods</MyHeading>
          <List>
            <ListItem>You've seen render(), but there are also:</ListItem>
            <AppearListItem>componentWillMount()</AppearListItem>
            <AppearListItem>componentDidMount()</AppearListItem>
            <AppearListItem>componentWillReceiveProps()</AppearListItem>
            <AppearListItem>shouldComponentUpdate()</AppearListItem>
            <AppearListItem>componentWillUpdate()</AppearListItem>
            <AppearListItem>componentDidUpdate()</AppearListItem>
            <AppearListItem>componentWillUnmount()</AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Testing React">Jest</MyHeading>
          <List>
            <ListItem>Jest is a test runner; great for testing React</ListItem>
            <AppearListItem>Enzyme is used for component rendering/mounting</AppearListItem>
            <AppearListItem>Challenge 7: Add Jest using yarn. Add a "test" script to the package.json that calls "jest", and write and run some tests for the calculateWinner helper function.</AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Testing React">Jest</MyHeading>
          <List>
            <ListItem><Code style={codeLight}>yarn add --dev jest</Code></ListItem>
            <AppearListItem><MyCodePane source={`// Board.jsx
...
export const calculateWinner = (squares) => {
...`}/>
            </AppearListItem>
            <AppearListItem><MyCodePane source={`// package.json
"scripts": {
     ...
    "test": "jest"
},
...`}/></AppearListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/board.spec.example")}
          ranges={[{ loc: [0, 1], title: "Board.spec.jsx" }, { loc: [2, 13] }, { loc: [14, 25] }, { loc: [26, 37] }]}
        />

        <Slide align="top">
          <MyHeading section="Testing React">yarn test</MyHeading>
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
                  <span style={{ color: "#aaa" }}> src/</span>
                  <span style={{ fontWeight: "bold" }}>Board.spec.js</span>
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Test Suites: </span>
                  <span style={{ fontWeight: "bold", color: "#33b969" }}> 1 passed</span>
                  , 1 total
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Tests:       </span>
                  <span style={{ fontWeight: "bold", color: "#33b969" }}> 3 passed</span>
                  , 3 total
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Snapshots:    </span>
                  0 total
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Time:         </span>
                  1.157s, estimated 2s
                </div>
                <div>
                  <span style={{ color: "#aaa" }}>Ran all test suites.</span>
                </div>
                <div>
                  ✨ Done in 1.69s.
                </div>
              </div>
            ]}
          />
        </Slide>

        <Slide align="top">
          <MyHeading section="Testing React">Jest Tips</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: "-100px", marginRight: "-100px" }}>
            <ListItem>Can watch files to test<br /><Code style={codeLight}>yarn test --watch</Code>, older: yarn test -- --watch<br /><br /></ListItem>
            <AppearListItem>Can see specific test results<br /><Code style={codeLight}>yarn test --verbose</Code><br /><br /></AppearListItem>
            <AppearListItem>View code coverage report<br /><Code style={codeLight}>yarn test --coverage</Code><br /><br /></AppearListItem>
            <AppearListItem>Run a subset of tests based on file or test name (-t)<br /><Code style={codeLight}>yarn test Board</Code><br /><br /></AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Testing React">Component Testing</MyHeading>
          <List style={{ lineHeight: 1.5 }}>
            <ListItem>Snapshot testing available, e.g.: <br /> <Code style={codeLight}>expect(tree).toMatchSnapshot();</Code><br /><br /></ListItem>
            <AppearListItem>Challenge 8: Add and configure Enzyme, and write some component tests for the behavior of Square. (Don't be a hero; take a peek at the upcoming slides for Enzyme configuration.)</AppearListItem>
          </List>
        </Slide>

        <Slide align="top">
          <MyHeading section="Testing React">Add Enzyme</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: "-150px", marginRight: "-65px" }}>
            <ListItem><Code style={codeLight}>yarn add enzyme enzyme-adapter-react-16</Code></ListItem>
            <AppearListItem><Code style={codeLight}>yarn add --dev babel-jest react-test-renderer</Code></AppearListItem>
            <AppearListItem><MyCodePane source={`// utilities/setupTests.js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
`}/>
            </AppearListItem>
            <AppearListItem><MyCodePane source={`// package.json
  "scripts": {
    ...
  },
  "jest": {
    "setupTestFrameworkScriptFile": "./utilities/setupTests.js"
  },
...`}/>
            </AppearListItem>
          </List>
        </Slide>

        <CodeSlide
          align="top"
          bgColor={"primary"}
          lang="js"
          code={require("../assets/code-examples/square.spec.example")}
          ranges={[{ loc: [0, 3], title: "Square.spec.jsx" }, { loc: [4, 15] }, { loc: [16, 23] }, { loc: [24, 29] }, { loc: [30, 37] }]}
        />

        <Slide align="top">
          <MyHeading section="Testing React">yarn test</MyHeading>
          <Terminal
            title="1. erin@headspring: ~(zsh)"
            output={[
              <Typist cursor={cursor}>yarn test --verbose</Typist>,
              <div>
                <span style={{ fontWeight: "bold" }}>yarn run v1.3.2</span>
                <div>
                  <span style={{ color: "#aaa" }}>$ jest --verbose</span>
                </div>
              </div>,
              <div>
                <div>
                  <span style={{ fontWeight: "bold", color: "#fff", backgroundColor: "#33b969" }}> PASS </span>
                  <span style={{ color: "#aaa" }}> src/</span>
                  <span style={{ fontWeight: "bold" }}>Square.spec.js</span>
                </div>
                <div>  Square component</div>
                <div>
                  <span style={{ color: "#33b969" }}>    ✓</span>
                  <span style={{ color: "#aaa" }}> always renders a div (7ms)</span>
                </div>
                <div>
                  <span style={{ color: "#33b969" }}>    ✓</span>
                  <span style={{ color: "#aaa" }}> displays the value of the "value" prop (2ms)</span>
                </div>
              </div>,
              <div>
                <br />
                <div>
                  <span style={{ fontWeight: "bold", color: "#fff", backgroundColor: "#33b969" }}> PASS </span>
                  <span style={{ color: "#aaa" }}> src/</span>
                  <span style={{ fontWeight: "bold" }}>Board.spec.js</span>
                </div>
                <div>
                  <span style={{ color: "#33b969" }}>  ✓</span>
                  <span style={{ color: "#aaa" }}> returns null if no winner (1ms) </span>
                </div>
                <div>
                  <span style={{ color: "#33b969" }}>  ✓</span>
                  <span style={{ color: "#aaa" }}> returns X when X has won (1ms)</span>
                </div>
                <div>
                  <span style={{ color: "#33b969" }}>  ✓</span>
                  <span style={{ color: "#aaa" }}> returns O when O has won (1ms)</span>
                </div>
                <br />
                <div>
                  <span style={{ fontWeight: "bold" }}>Test Suites: </span>
                  <span style={{ fontWeight: "bold", color: "#33b969" }}> 2 passed</span>
                  , 2 total
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Tests:       </span>
                  <span style={{ fontWeight: "bold", color: "#33b969" }}> 5 passed</span>
                  , 5 total
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Snapshots:    </span>
                  0 total
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Time:         </span>
                  1.14s
                </div>
                <div>
                  <span style={{ color: "#aaa" }}>Ran all test suites.</span>
                </div>
                <div>
                  ✨ Done in 1.75s.
                </div>
              </div>
            ]}
          />
        </Slide>

        <Slide align="top">
          <MyHeading section="Testing React">Failing example</MyHeading>
          <Terminal
            title="1. erin@headspring: ~(zsh)"
            output={[
              <Typist cursor={cursor}>yarn test square</Typist>,
              <div>
                <span style={{ fontWeight: "bold" }}>yarn run v1.3.2</span>
                <div>
                  <span style={{ color: "#aaa" }}>$ jest square</span>
                </div>
              </div>,
              <div>
                <div>
                  <span style={{ fontWeight: "bold", color: "#fff", backgroundColor: "#E11111" }}> FAIL </span>
                  <span style={{ color: "#aaa" }}> src/</span>
                  <span style={{ fontWeight: "bold" }}>Square.spec.js</span>
                </div>
                <div>  Square component</div>
                <div>
                  <span style={{ color: "#E11111" }}>    x</span>
                  <span style={{ color: "#aaa" }}> always renders a div (7ms)</span>
                </div>
                <div>
                  <span style={{ color: "#33b969" }}>    ✓</span>
                  <span style={{ color: "#aaa" }}> displays the value of the "value" prop (2ms)</span>
                </div>
                <br />
                <div>
                  <span style={{ color: "#E11111", fontWeight: "bold" }}>  • Square component > always renders a div </span>
                </div>
                <br />
                <div>
                  <span style={{ color: "#aaa" }}>    expect(</span>
                  <span style={{ color: "#E11111" }}>received</span>
                  <span style={{ color: "#aaa" }}>).toBe(</span>
                  <span style={{ color: "#33b969" }}>expected</span>
                  <span style={{ color: "#aaa" }}>)</span>
                </div>
                <br />
                <div>    Expected value to be (using Object.js):</div>
                <div style={{ color: "#33b969" }}>      2</div>
                <div>    Received:</div>
                <div style={{ color: "#E11111" }}>      1</div>
                <br />
                <div><span style={{ color: "#888 " }}>      26 |     const div = square().find('div');</span></div>
                <div>
                  <span style={{ color: "#E11111" }}>    > </span>
                  <span style={{ color: "#ccc" }}>27 |    </span>
                  <span style={{ color: "#ccc", fontWeight: "bold" }}> expect(div.length).toBe(2);</span>
                </div>
                <div><span style={{ color: "#888 " }}>      28 |   });</span></div>
                <div><span style={{ color: "#888 " }}>      29 |</span></div>
                <br />
                <div><span style={{ color: "#888 " }}>      at Object.anonymous (src/Square.spec.jsx:28:24)</span></div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Test Suites: </span>
                  <span style={{ fontWeight: "bold", color: "#E11111" }}> 1 failed</span>
                  , 1 total
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Tests:       </span>
                  <span style={{ fontWeight: "bold", color: "#e11111" }}> 1 failed</span>, 
                  <span style={{ fontWeight: "bold", color: "#33b969" }}> 1 passed</span>
                  , 2 total
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Snapshots:    </span>
                  0 total
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Time:         </span>
                  1.261s
                </div>
                <div>
                  <span style={{ color: "#aaa" }}>Ran all test suites matching </span>/square/i.
                </div>
                <div>
                  <span style={{ color: "#E11111" }}>error </span>Command failed with exit code 1.
                </div>
              </div>
            ]}
          />
        </Slide>

        <Slide align="top">
          <MyHeading section="Testing React">Code coverage</MyHeading>
          <Terminal
            title="1. erin@headspring: ~(zsh)"
            output={[
              <Typist cursor={cursor}>yarn test --coverage</Typist>,
              <div>
                <span style={{ fontWeight: "bold" }}>yarn run v1.3.2</span>
                <div>
                  <span style={{ color: "#aaa" }}>$ jest --coverage</span>
                </div>
              </div>,
              <div>
                <div>
                  <span style={{ fontWeight: "bold", color: "#fff", backgroundColor: "#33b969" }}> PASS </span>
                  <span style={{ color: "#aaa" }}> src/</span>
                  <span style={{ fontWeight: "bold" }}>Square.spec.js</span>
                </div>
                <div>
                  <span style={{ fontWeight: "bold", color: "#fff", backgroundColor: "#33b969" }}> PASS </span>
                  <span style={{ color: "#aaa" }}> src/</span>
                  <span style={{ fontWeight: "bold" }}>Board.spec.js</span>
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Test Suites: </span>
                  <span style={{ fontWeight: "bold", color: "#33b969" }}> 2 passed</span>
                  , 2 total
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Tests:       </span>
                  <span style={{ fontWeight: "bold", color: "#33b969" }}> 5 passed</span>
                  , 5 total
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Snapshots:    </span>
                  0 total
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>Time:         </span>
                  1.15s
                </div>
                <div>
                  <span style={{ color: "#aaa" }}>Ran all test suites.</span>
                </div>
                <div>----------------|---------|----------|---------|---------|----------------|</div>
                <div>File            | % Stmts | % Branch | % Funcs | % Lines |Uncovered Lines |</div>
                <div>----------------|---------|----------|---------|---------|----------------|</div>
                <div>
                  <span style={{ color: "#E11111", fontWeight: "bold" }}>All files</span>       |
                  <span style={{ color: "#E11111", fontWeight: "bold" }}>   43.33</span> |
                  <span style={{ color: "#E11111", fontWeight: "bold" }}>    27.78</span> |
                  <span style={{ color: "#E11111", fontWeight: "bold" }}>      25</span> |
                  <span style={{ color: "#E11111", fontWeight: "bold" }}>   43.33</span> |                |
                </div>
                <div>
                  <span style={{ color: "#E11111", fontWeight: "bold" }}> src</span>            |
                  <span style={{ color: "#E11111", fontWeight: "bold" }}>   41.38</span> |
                  <span style={{ color: "#E11111", fontWeight: "bold" }}>    27.78</span> |
                  <span style={{ color: "#E11111", fontWeight: "bold" }}>      25</span> |
                  <span style={{ color: "#E11111", fontWeight: "bold" }}>   41.38</span> |                |
                </div>
                <div>
                  <span style={{ color: "#E11111", fontWeight: "bold" }}>  Board.jsx</span>     |
                  <span style={{ color: "#E11111", fontWeight: "bold" }}>      32</span> |
                  <span style={{ color: "#E11111", fontWeight: "bold" }}>    27.78</span> |
                  <span style={{ color: "#E11111", fontWeight: "bold" }}>   14.29</span> |
                  <span style={{ color: "#E11111", fontWeight: "bold" }}>      32</span> |
                  <span style={{ color: "#E11111", fontWeight: "bold" }}>... 71,72,74,77</span> |
                </div>
                <div>
                  <span style={{ color: "#33b969", fontWeight: "bold" }}>  Square.jsx</span>    |
                  <span style={{ color: "#33b969", fontWeight: "bold" }}>     100</span> |
                  <span style={{ color: "#33b969", fontWeight: "bold" }}>      100</span> |
                  <span style={{ color: "#33b969", fontWeight: "bold" }}>     100</span> |
                  <span style={{ color: "#33b969", fontWeight: "bold" }}>     100</span> |                |
                </div>
                <div>
                  <span style={{ color: "#33b969", fontWeight: "bold" }}> utilities</span>      |
                  <span style={{ color: "#33b969", fontWeight: "bold" }}>     100</span> |
                  <span style={{ color: "#33b969", fontWeight: "bold" }}>      100</span> |
                  <span style={{ color: "#33b969", fontWeight: "bold" }}>     100</span> |
                  <span style={{ color: "#33b969", fontWeight: "bold" }}>     100</span> |                |
                </div>
                <div>
                  <span style={{ color: "#33b969", fontWeight: "bold" }}>  setupTests.js</span> |
                  <span style={{ color: "#33b969", fontWeight: "bold" }}>     100</span> |
                  <span style={{ color: "#33b969", fontWeight: "bold" }}>      100</span> |
                  <span style={{ color: "#33b969", fontWeight: "bold" }}>     100</span> |
                  <span style={{ color: "#33b969", fontWeight: "bold" }}>     100</span> |                |
                </div>
                <div>----------------|---------|----------|---------|---------|----------------|</div>
                <div>
                  ✨ Done in 1.99s.
                </div>
              </div>
            ]}
          />
        </Slide>

        <Slide align="top">
          <MyHeading>Recommended Resources</MyHeading>
          <List style={{ lineHeight: 1.5, marginLeft: "-100px", marginRight: "-100px" }}>
            <ListItem><a href="https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1">React Lifecycle Methods and when to use them</a></ListItem>
            <ListItem><a href="https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22">How to write React tests</a></ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading caps size={4} textColor="tertiary" style={{ fontWeight: "300", marginBottom: "0.5em" }}>Questions?</Heading>
        </Slide>
      </Deck>
    );
  }
}
