# react-native-redux-invoice-app
This is a React-Native front-end project for Invoice Application using Redux.

## Installation
### 1. Install dependencies

 ```sh
# Setup your environment if you never used react-native
# Install react-native cli using 
npm install -g react-native-cli
# Clone the example app repo
git clone https://github.com/saiming96/react-native-redux-invoice-app.git
cd react-native-redux-invoice-app

# Install npm dependencies
npm install
```

### 2. Run the application
Run the application using `react-native run-android` for android or `react-native run-ios`for ios

## Dependencies
* [NativeBase](https://github.com/GeekyAnts/NativeBase) for cross-platform UI elements.
* [Redux](https://github.com/reduxjs/redux) as a state container.
* [Redux-thunk](https://github.com/reduxjs/redux-thunk) as middleware for Redux.
* [Redux-Form](https://github.com/redux-form/redux-form) to keep form state in store.
* [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) for routing between screens.


## Structure

  Inside the src folder:
* `assets/` contains different images and other media assets. For example: fonts & svg.
* `components/` contains different presentation and functional components.
* `constant/` contains constant variables. For example: colors and fonts.
* `redux/`contains redux functions.
* `scenes/` contains pages of the application
* `utils/` contains general util functions for date conversion and references
