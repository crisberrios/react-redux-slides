import React, { Component } from "react";
import { Slide, List, Appear, ListItem, Link, Code } from "spectacle";
import { MyHeading } from "./index";

export const testingTips = () => {
  return (
    <Slide align="center top">
      <MyHeading>Testing Tips</MyHeading>
      <List>
        <Appear>
          <ListItem>Separate business logic from DOM and framework code</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Try it out on{" "}
            <Link href="https://repl.it/languages/jest" textColor="tertiary" target="_blank">
              https://repl.it/languages/jest
            </Link>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Use{" "}
            <Code textColor="secondary" bold={false}>
              --coverage
            </Code>{" "}
            for instant code coverage
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Use{" "}
            <Code textColor="secondary" bold={false}>
              --notify
            </Code>{" "}
            for system notifications
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>Vscode jest</ListItem>
        </Appear>
        <Appear>
          <ListItem>Jest snippets</ListItem>
        </Appear>
      </List>
    </Slide>
  );
};

export default testingTips;
