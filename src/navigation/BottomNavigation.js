import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import LandingPage from "../components/LandingPage/LandingPage";
import ProfilePage from "../components/ProfilePage/ProfilePage";
import Leaderboard from "../components/Leaderboard/Leaderboard";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const shadow = {
    shadowColor: "rgb(172,221,173)",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 3.51,
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={LandingPage}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[{ justifyContent: "center", alignItems: "center", alignSelf: "center", backgroundColor: focused ? "rgb(193,248,194)" : "none", height: "100%", paddingHorizontal: 10, borderRadius: "50%", marginBottom: focused ? 20 : 0 }, focused && shadow]}>
              <Image style={{ width: 50, height: 50 }} source={require("../assets/icons/home.png")} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[{ justifyContent: "center", alignItems: "center", alignSelf: "center", backgroundColor: focused ? "rgb(193,248,194)" : "none", height: "100%", paddingHorizontal: 10, borderRadius: "50%", marginBottom: focused ? 20 : 0 }, focused && shadow]}>
              <Image style={{ width: 50, height: 50 }} source={require("../assets/icons/leaderboard.png")} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[{ justifyContent: "center", alignItems: "center", alignSelf: "center", backgroundColor: focused ? "rgb(193,248,194)" : "none", height: "100%", paddingHorizontal: 10, borderRadius: "50%", marginBottom: focused ? 20 : 0 }, focused && shadow]}>
              <Image style={{ width: 50, height: 50 }} source={require("../assets/icons/profile.png")} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    // backgroundColor: "green",
    paddingBottom: 0,
    height: 60,
    // borderRadius: 10,
    // backgroundColor: SECONDARY_BLUE_COLOR,
    paddingHorizontal: 15,
    borderRadius: 25,
    opacity: 0.95,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
