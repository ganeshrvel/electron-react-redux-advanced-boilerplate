# Electron-React-Redux advanced boilerplate

##### Advanced and highly scalable boilerplate built using Electron v3, React v16, Redux v4, Webpack v4 {HMR, Loadables, Dynamic Reducer Injection, Selectors, Code splitting}

###### Electron.js is an excellent cross-platform framework for creating native applications with web technologies. But there are only a handful of frameworks available online to get going and I found most of them lack advanced features.

### Features
- Latest versions of Electron (beta v3 .10), React (v16), Redux (v4), Webpack (v4)
- Hot module Reload (HMR) for instant feedback.
- Highly modular.
- Loadables, Dynamic Reducer Injection, Selectors for efficient Code. splitting and performance/startup optimisation.
- Industry standard State management.
- SASS/SCSS styling.

### Installation
```shell
$ git clone --depth=1 https://github.com/ganeshrvel/electron-react-redux-advanced-boilerplate.git

$ cd electron-react-redux-advanced-boilerplate
$ yarn
```

### Run
A freshly installed clone might throw *undefined state* error. Run the below command just once to update the redux extension.
```shell
# For Mac and Linux
$ UPGRADE_EXTENSIONS=1 npm run dev

# For Windows
$ set UPGRADE_EXTENSIONS=1 && npm run dev
```

```shell
# Development
$ yarn dev

# Pre-production
$ yarn start

```

### Package
```shell
# For local platform
$ yarn package

# For Multi platform
$ yarn package-all
```

### General Information
- Port assigned: **4642**
- *Prettier* is used for maintaining code standards.

To use a local image inside the app use require('../path/file.jpg');
```javascript
// Example
<img
          src={require('../../public/images/keyboard.jpg')}
          width="100px"
          height="auto"
        />
```
And place the image file inside the *./app/public/images* folder

*package.json*

> All modules go into ./package.json except native modules, or modules with native dependencies or peer dependencies. Native modules, or packages with native dependencies should go into ./app/package.json.

> If the module is native to a platform (like node-postgres), it should be listed under dependencies in ./app/package.json

> If a module is imported by another module, include it in dependencies in ./package.json. Examples of such modules are material-ui, redux-form, and moment.

> Otherwise, modules used for building, testing and debugging should be included in devDependencies in ./package.json.

### Accolades and Credits
This boilerplate is a heavily modified fork of [https://github.com/chentsulin/electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate "https://github.com/chentsulin/electron-react-boilerplate")

 App Icon made by prettycons from www.flaticon.com
 
 ### Debugging
 
**[Debugging Guide](https://github.com/chentsulin/electron-react-boilerplate/issues/400 "Debugging Guide")**
 
 Dispatching redux actions from main process:
 [https://github.com/chentsulin/electron-react-boilerplate/issues/118](https://github.com/chentsulin/electron-react-boilerplate/issues/118 "https://github.com/chentsulin/electron-react-boilerplate/issues/118")
 and
 [https://github.com/chentsulin/electron-react-boilerplate/issues/108](https://github.com/chentsulin/electron-react-boilerplate/issues/108 "https://github.com/chentsulin/electron-react-boilerplate/issues/108")

*VM112:2 Uncaught TypeError: Cannot read property 'state' of undefined * error:
```shell
# For Mac and Linux
$ UPGRADE_EXTENSIONS=1 npm run dev

# For Windows
$ set UPGRADE_EXTENSIONS=1 && npm run dev
```
