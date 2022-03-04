import * as React from 'react';

import {createSwitchNavigator, createAppContainer} from "react-navigation"
import LoginScreen from "./screens/LoginScreen"
import DashboardScreen from "./screens/DashboardScreen"
import LoadingScreen from "./screens/LoadingScreen"


import firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}


export default function App() {
  return (
  <AppNavigator/>

  );
}
const AppSwitch = createSwitchNavigator({
  LoadingScreen: LoadingScreen, 
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
})

const AppNavigator = createAppContainer(AppSwitch)