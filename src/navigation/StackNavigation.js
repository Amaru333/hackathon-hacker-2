import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import BottomNavigation from "./BottomNavigation";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomePage" component={BottomNavigation} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
