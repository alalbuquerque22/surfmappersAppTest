import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/Routes";
import { StatusBar } from "react-native";



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
      <Routes />

    </NavigationContainer>
  );
}