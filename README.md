# TSH.io demo app
[![Circle CI](https://circleci.com/gh/karolgorecki/tshapp/tree/master.svg?style=svg)](https://circleci.com/gh/karolgorecki/tshapp/tree/master)
[![Docs](https://cdn.rawgit.com/karolgorecki/tshapp/master/docs/esdoc/badge.svg)](https://cdn.rawgit.com/karolgorecki/tshapp/master/docs/esdoc/index.html)  
It's a demo application for tsh.io company

## Goals
![Demo app](https://raw.githubusercontent.com/karolgorecki/tshapp/master/docs/design.png)
The goal of this project was to create an application for searching payments
that are retrieved from an external API.

## App
### About
The App was created using the latest ReactJS and the ES2015 features.  

Used tools:
- [webpack](https://webpack.github.io/)
- [babel](https://babeljs.io/)
- [eslint](http://eslint.org/)
- [esdocs](https://esdoc.org/)
- [postCSS](https://github.com/postcss/postcss)

The basic structure looks like this:
```
.
├─── app
|   ├─── __tests__                  # holds the test files
|   ├─── components                 # component for the app
|   ├─── css                        # holds global styles
|   ├─── fonts                      # fonts for the project
|   ├─── images                     # global images
|   ├─── index.html                 # app html for dev
|   └─── index.js                   # webpack entry point
├─── build                          # contains files for production
├─── docs                           # contains esdocs
└─── ...
```
Each `component` has own folder with a script file & own styles.

### Install
**Install all dependencies using**
```
npm install
```

### Run dev mode
**To run in DEV mode** (webpack starts on http://localhost:8080)
```
npm start
```

### Build
**To build the project use**
```
npm run prod
```
It will create a `build` folder. You can copy the `index.html` from the root folder
+ the `build` folder to run this app on some server.

### Build & run prod
**To check the produciton version use** (runs on http://localhost:3000)
```
npm run startprod
```

### Documentation
**To generate documentation use**
```
npm run doc
```
You can check the documentation: [TSH docs](https://cdn.rawgit.com/karolgorecki/tshapp/master/docs/esdoc/index.html)

### Running tests
**To run tests**
```
npm test
```
