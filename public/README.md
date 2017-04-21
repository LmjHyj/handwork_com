
## Webpack-React-Redux-ES6-Boilerplate Environment

This is a react single page application quick start project, you can clone it and start your project quickly. It includes react, redux and react-router. If any problems, you can commit your issues on the github.

![Screen Shot](http://7xqacx.com1.z0.glb.clouddn.com/Screen%20Shot%202017-02-20%20at%2021.06.24.png)

## Getting start

  1. Clone repo:
  ```
  $ git clone https://github.com/chachaxw/webpack-react-redux-es6-boilerplate.git
  ```

  2. Install dependencies
  ```
  $ npm install or yarn install
  ```

  3. Debug
  ```
  $ npm start
  ```
  then access browser: `http://localhost:3000`

  4. Build for production
  ```
  $ npm build
  ```

## Project Structure

```
.
├── cheatsheet/                   # react cheatsheet and redux cheatsheet
│   └── ...
├── src/
│   ├── actions/                  # Redux actions
│   │   └── ...
│   ├── components/               # React components
│   │   └── ...
│   ├── store/                    # Redux store
│   │   └── ...
│   ├── helpers/                  # helper tools
│   │   └── ...
│   ├── reducers/                 # Redux reducers
│   │   └── ...
│   ├── app.js                    # app entry file
│   ├── routes.js                 # app router
│   ├── App.vue                   # app main component
│   └── index.html                # index page
├── dist/                         # pure static assets (directly copied)
├── .babelrc                      # babel config
├── .editorconfig.js              # editor config
├── .eslintrc.js                  # eslint config
├── webpack.config.js             # webpack config
├── webpack.development.js        # webpack dev config
├── webpack.production.js         # webpack production config
├── server.js                     # Dev server
└── package.json                  # build scripts and dependencies
└── yarn.lock                     # Yarn file

```
