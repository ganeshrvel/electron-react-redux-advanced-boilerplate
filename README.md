# Electron React Redux Advanced Boilerplate

- Author: [Ganesh Rathinavel](https://www.linkedin.com/in/ganeshrvel "Ganesh Rathinavel")
- License: [MIT](https://github.com/ganeshrvel/electron-react-redux-advanced-boilerplate/blob/master/LICENSE "MIT")
- Repo URL: [https://github.com/ganeshrvel/electron-react-redux-advanced-boilerplate](https://github.com/ganeshrvel/electron-react-redux-advanced-boilerplate "https://github.com/ganeshrvel/electron-react-redux-advanced-boilerplate")
- Contacts: ganeshrvel@outlook.com
- Requirements: Node.js v10 or higher, yarn

##### Advanced and Highly Scalable Boilerplate for building Electron app - Electron v4, React v16, Redux v4, Webpack v4, Babel v7 {HMR, Helmet, Loadables, Dynamic Reducer Injection, Selectors, Code splitting}

###### Electron.js is an excellent framework for creating cross-platform native applications using HTML/CSS/JS. But there are only a handful of frameworks available online to get going and I found most of them lack advanced features.

### Features
- Latest versions of Electron (v4), React (v16), Redux (v4), Webpack (v4), Babel (v7)
- Material UI (v3.8) for the UI.
- Hot module Reload (HMR) for instant feedback.
- Helmet for better meta info management.
- Highly modular.
- Loadables, Dynamic Reducer Injection, Selectors for efficient Code. splitting and performance/startup optimisation.
- Industry standard State management.
- JSS, SASS/SCSS styling.
- Inbuilt Storage management.
- Inbuilt Settings management with UI feedback and persistence by saving it to a local *settings.json* file.
- Inbuilt Logs management for capturing errors or debug information along with a rotation period.
- Inbuilt full-blown App-Update manager with progress feedback and an opt-out option.
- Inbuilt Google analytics manager with an opt-out option.
- Inbuilt Error Reporting management with an option to email the compressed log files to the developer.

### Installation
```shell
$ git clone --depth 1 --single-branch --branch master https://github.com/ganeshrvel/electron-react-redux-advanced-boilerplate.git

$ cd electron-react-redux-advanced-boilerplate
```

[Install Yarn package manager](https://yarnpkg.com/lang/en/docs/install/ "Install Yarn package manager")

```shell
$ yarn
```

### Run
A fresh clone might throw *undefined state* error. Run the following commands once to fix the issue.

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

Setup the *code signing* to build, package and publish the app.

Instructions: [https://www.electron.build/code-signing](https://www.electron.build/code-signing "https://www.electron.build/code-signing")

```shell
$ export GH_TOKEN="<github token>"
```

```shell
# For local platform
$ yarn package

# For multiple platforms
$ yarn package-all
```

### Configurations
- *config/env/env.dev.js* and *config/env/env.prod.js* contain the PORT number of the app.
- *config/dev-app-update.yml* file holds the GitHub repo variables required by *electron-updater*.
- *config/google-analytics-key.js* file contains the Google Analytics Tracking ID.
- *package.json* "build.publish" object holds the values for publishing the packaged application.
- *app/constants* folder contains all the constants required by the app.

### General Information
- Port assigned: 3642
- The logs and settings file can be found in *~/.io.ganeshrvel/electron-react-redux-advanced-boilerplate* (which are the values picked up from package.json)

### Usage
**Binaries**
- Binaries and native files should be kept inside the folder *build/{OS_NAME}/bin*. e.g: *build/mac/bin* for macOS
- Refer to the binary files as:

```javascript
import { binaryFile } from '../../utils/binaries';
```
- Update *package.json* "build.extraFiles" and "build.mas.binaries" objects accordingly.

**Images**

- Image files should be kept inside the folder *./app/public/images*
- Import the image files as:

```javascript
// Example
 <img
            src={imgsrc('keyboard.jpg')}
            width="100px"
            height="auto"
          />
 /*
 imgsrc
 * default path: ../public/images/
 * @param filePath
 * @param returnNoImageFound (optional)
 */
```

### Changelog
**v2.0.1**
- Upgraded to the latest version of Electron, Babel, Webpack.
- Added:
	- Material UI.
	- Inbuilt Storage management.
	- Inbuilt Settings management with UI feedback and persistence by saving it to a local settings.json file.
	- Inbuilt Logs management for capturing errors or debug information along with a rotation period.
	- Inbuilt full-blown App-Update manager with progress feedback and an opt-out option.
	- Inbuilt Google analytics manager with an opt-out option.
	- Inbuilt Error Reporting management with an option to email the Log files to the developer.
- Various other optimization.
- Bug fixes.

**v1.0.1**
- Added Helmet redux for better meta info management
- New method to handle local image imports
- Replaced react-loadable with react-hot-loader to fix HMR issue
- Added CleanWebpackPlugin
- Other improvements, fixes and optimisations

### Debugging
 
**[Debugging Guide](https://github.com/chentsulin/electron-react-boilerplate/issues/400 "Debugging Guide")**

Dispatching redux actions from main process:

[https://github.com/chentsulin/electron-react-boilerplate/issues/118](https://github.com/chentsulin/electron-react-boilerplate/issues/118 "https://github.com/chentsulin/electron-react-boilerplate/issues/118")

[https://github.com/chentsulin/electron-react-boilerplate/issues/108](https://github.com/chentsulin/electron-react-boilerplate/issues/108 "https://github.com/chentsulin/electron-react-boilerplate/issues/108")

*VM112:2 Uncaught TypeError: Cannot read property 'state' of undefined* error:

```shell
# For Mac and Linux
$ UPGRADE_EXTENSIONS=1 npm run dev

# For Windows
$ set UPGRADE_EXTENSIONS=1 && npm run dev
```

### More repos
- [OpenMTP  - Advanced Android File Transfer Application for macOS](https://github.com/ganeshrvel/openmtp "OpenMTP  - Advanced Android File Transfer Application for macOS")
- [npm: electron-root-path](https://github.com/ganeshrvel/npm-electron-root-path "Get the root path of an Electron Application")

### Accolades and Credits
- This boilerplate is a heavily modified fork of [https://github.com/chentsulin/electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate "https://github.com/chentsulin/electron-react-boilerplate")

- Icons were provided by from [www.flaticon.com](http://www.flaticon.com "www.flaticon.com")
 
- No image icon made by Phonlaphat Thongsriphong from [https://www.iconfinder.com/phatpc](https://www.iconfinder.com/phatpc "https://www.iconfinder.com/phatpc")
 
 
 ### Contribute
- Fork the repo and create your branch from master.
- Ensure that the changes pass linting.
- Update the documentation if needed.
- Make sure your code lints.
- Issue a pull request!

When you submit code changes, your submissions are understood to be under the same [MIT License](https://github.com/ganeshrvel/electron-react-redux-advanced-boilerplate/blob/master/LICENSE "MIT License") that covers the project. Feel free to contact the maintainers if that's a concern.


### Buy me a coffee
Help me keep the app FREE and open for all.
Paypal me: [paypal.me/ganeshrvel](https://paypal.me/ganeshrvel "paypal.me/ganeshrvel")

### Contacts
Please feel free to contact me at ganeshrvel@outlook.com


### License
electron-react-redux-advanced-boilerplate | Electron React Redux Advanced Boilerplate is released under [MIT License](https://github.com/ganeshrvel/electron-react-redux-advanced-boilerplate/blob/master/LICENSE "MIT License").

Copyright © 2018-Present Ganesh Rathinavel
