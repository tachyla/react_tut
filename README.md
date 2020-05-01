# React Server Side Rendering
A baseline for server side rendering for your React application. This repo has a couple of tags that follow building full support for rendering React applications on the server.

## Getting started
Clone the repo with
```git clone https://github.com/tachyla/beauty_sup```

Install dependencies with
```npm i```

Run dev mode with
```npm run dev```

Now open the browser and navigate to `http://localhost:8080` and you get served a server rendered React app. 

### Notes
* Starting the server with the `index.js` file which is in the root folder. This file loads the babel-register and sets up the babel plugins needed to run JSX and ESModules on the server.
* The node server needs to handle the static files from the `dist` folder.
* The entry point of the bundle is called `client.js` because it's the only part of my application that is not used for the server render.
