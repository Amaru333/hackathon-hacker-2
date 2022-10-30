import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SplashScreen from "./src/screens/SplashScreen/SplashScreen";
import { useFonts } from "expo-font";
import LandingPage from "./src/components/LandingPage/LandingPage";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import StackNavigation from "./src/navigation/StackNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    RwBl: require("./assets/fonts/Raleway-Black.ttf"),
    RwBl: require("./assets/fonts/Raleway-BlackItalic.ttf"),
    RwB: require("./assets/fonts/Raleway-Bold.ttf"),
    RwBI: require("./assets/fonts/Raleway-BoldItalic.ttf"),
    RwEB: require("./assets/fonts/Raleway-ExtraBold.ttf"),
    RwEBI: require("./assets/fonts/Raleway-ExtraBoldItalic.ttf"),
    RwEL: require("./assets/fonts/Raleway-ExtraLight.ttf"),
    RwELI: require("./assets/fonts/Raleway-ExtraLightItalic.ttf"),
    RwM: require("./assets/fonts/Raleway-Medium.ttf"),
    RwMI: require("./assets/fonts/Raleway-MediumItalic.ttf"),
    Rw: require("./assets/fonts/Raleway-Regular.ttf"),
    RwSB: require("./assets/fonts/Raleway-SemiBold.ttf"),
    RwSBI: require("./assets/fonts/Raleway-SemiBoldItalic.ttf"),
    RwT: require("./assets/fonts/Raleway-Thin.ttf"),
    RwTI: require("./assets/fonts/Raleway-ThinItalic.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    // <SafeAreaView>
    <NativeBaseProvider>
      <NavigationContainer>
        {/* <SplashScreen />
        <LandingPage /> */}
        <StackNavigation />
        <StatusBar style="auto" />
      </NavigationContainer>
    </NativeBaseProvider>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
