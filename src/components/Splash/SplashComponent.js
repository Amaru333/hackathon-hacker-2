import { Button, Dimensions, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, interpolateColor, withDelay } from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";
import LottieView from "lottie-react-native";
import { TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

const AnimatedLottie = Animated.createAnimatedComponent(LottieView);

const SplashComponent = ({ navigation }) => {
  const logoPos = useSharedValue(0);
  const logoWidth = useSharedValue(width);

  const loadingDimensions = useSharedValue(0);

  const loadPos = useSharedValue(0);
  const loadForm = useSharedValue(width);
  const bgColor = useSharedValue(0);

  const logoPosStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: logoPos.value }],
      width: logoWidth.value,
    };
  }, []);

  const loadingStyle = useAnimatedStyle(() => {
    return {
      width: loadingDimensions.value,
    };
  });

  const loadOut = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: loadPos.value }],
    };
  });

  const loadIn = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: loadForm.value }],
    };
  });

  const bgInterpolate = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(bgColor.value, [0, 1], ["#FFFFFF", "#5f9e34"]);
    return { backgroundColor };
  });

  useEffect(() => {
    setTimeout(() => {
      logoPos.value = withTiming((height / 4) * -1);
      logoWidth.value = withTiming(width * 0.5, {}, () => {
        loadingDimensions.value = withTiming(60, {}, () => {
          bgColor.value = withDelay(1000, withTiming(1));
          loadPos.value = withDelay(
            1000,
            withTiming(-width, {}, () => {
              loadForm.value = withSpring(0);
            })
          );
        });
      });
    }, 3000);
  });

  const animation = useRef(null);
  const loading_animation = useRef(null);
  const sign_ref = useRef(null);
  const form_ref = useRef(null);

  useEffect(() => {
    setTimeout(() => animation.current?.play(), 50);
    setTimeout(() => loading_animation.current?.play(), 50);
  }, []);

  const TextBox = ({ placeholder, isPassword = false }) => {
    return (
      <View
        style={{
          shadowColor: "#5f9e34",
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 0.4,
          shadowRadius: 2.62,
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <TextInput
          secureTextEntry={isPassword}
          placeholder={placeholder}
          style={{
            height: 40,
            borderRadius: 10,
            backgroundColor: "white",
            width: width * 0.7,
            paddingHorizontal: 10,
            fontFamily: "Rw",
          }}
        />
      </View>
    );
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <Animated.View style={[styles.container, bgInterpolate]}>
        <View>
          <AnimatedLottie ref={animation} style={[logoPosStyle]} autoPlay={true} loop={true} source={require("../../assets/lottie/plants-splash.json")} />
        </View>
        <Animated.View ref={sign_ref} style={[loadOut]}>
          <AnimatedLottie ref={loading_animation} style={[loadingStyle]} autoPlay={true} loop={true} source={require("../../assets/lottie/splash-loading.json")} />
        </Animated.View>
        <Animated.View ref={form_ref} style={[loadIn, { alignItems: "center" }]}>
          <TextBox placeholder="Email address" />
          <TextBox placeholder="Password" isPassword />

          <TouchableOpacity
            onPress={() => navigation.navigate("HomePage")}
            style={{
              backgroundColor: "white",
              paddingVertical: 10,
              paddingHorizontal: 30,
              fontSize: 18,
              borderRadius: 10,
              marginTop: 20,
              // shadowColor: "white",
              // shadowOffset: {
              //   width: 0,
              //   height: 5,
              // },
              // shadowOpacity: 0.34,
              // shadowRadius: 6.27,
            }}
          >
            <Text style={{ color: "#5f9e34", fontSize: 18, fontFamily: "RwSB" }}>Login</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

export default SplashComponent;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5f9e34",
  },
});
