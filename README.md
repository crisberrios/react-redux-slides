# Modern JS Presentation

Based on spectacle boilerplate

Live: [https://modern-js-presentation.netlify.com](https://modern-js-presentation.netlify.com)

## Contents

- [Reference](#reference)
- [Getting Started](#getting-started)
- [Build & Deployment](#build-deployment)

## Reference

The Spectacle core API is available at [https://github.com/FormidableLabs/spectacle/blob/master/README.md](https://github.com/FormidableLabs/spectacle/blob/master/README.md).

This presentation also makes use of these awesome plugins:
- [Spectacle Code Slide](https://github.com/thejameskyle/spectacle-code-slide) - Step through lines of code using extension by @thejameskyle
- [Spectacle Terminal Slide](https://github.com/elijahmanor/spectacle-terminal) - Terminal component that can be used in a spectacle slide deck by @elijahmanor

## Getting Started

After downloading the boilerplate, your first order of business is to open a terminal and run 
```bash
yarn
```

Then, to start up the local server, run
```bash
yarn start
```

Open a browser and hit [http://localhost:3000](http://localhost:3000), and we are ready to roll.

## Build & Deployment

Building the dist version of the project is as easy as running
```bash
yarn build
```

Right now this repo is linked to a netlify site so any pushes to master get automatically built and
deployed to [https://modern-js-presentation.netlify.com](https://modern-js-presentation.netlify.com)
