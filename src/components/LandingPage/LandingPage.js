import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import AnimatedLottieView from "lottie-react-native";
import { Avatar } from "native-base";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "react-native";
import UIModal from "../../common/UIModal/UIModal";
import UIProgress from "../../common/UIProgress/UIProgress";
const { width } = Dimensions.get("window");
let randombg = Math.floor(Math.random() * 2);
let randomwave = Math.floor(Math.random() * 100);
const LandingPage = () => {
  const image1 = require("../../assets/images/home_bg_1.png");
  const image2 = require("../../assets/images/home_bg_2.png");

  const wave1 = require("../../assets/lottie/waving_1.json");
  const wave2 = require("../../assets/lottie/waving_2.json");
  const wave3 = require("../../assets/lottie/waving_3.json");

  const animation = useRef(null);
  const animation2 = useRef(null);

  const achievements = [
    {
      title: "1st Sapling",
      status: "Unlocked",
      description: "Plant your first sapling",
      current: 3,
      max: 1,
      animation: require("../../assets/lottie/awards/award_01.json"),
      color: "#5f9e34",
      id: 1,
    },
    {
      title: "Newbie",
      status: "Unlocked",
      description: "Plant at least 3 saplings",
      current: 3,
      max: 3,
      animation: require("../../assets/lottie/awards/award_02.json"),
      color: "#1f0b67",
      id: 2,
    },
    {
      title: "Beginner",
      status: "Locked",
      description: "Plant at least 5 saplings in past 5 days",
      current: 3,
      max: 5,
      animation: require("../../assets/lottie/awards/award_03.json"),
      color: "#1f0b67",
      id: 3,
    },
    {
      title: "Intermediate",
      status: "Locked",
      description: "Plant at least 10 saplings in past 5 days",
      current: 3,
      max: 10,
      animation: require("../../assets/lottie/awards/award_04.json"),
      color: "#ffb94d",
      id: 4,
    },
    {
      title: "20 Trees",
      status: "Locked",
      description: "Plant at least 20 trees",
      current: 3,
      max: 20,
      animation: require("../../assets/lottie/awards/award_05.json"),
      color: "#356dba",
      id: 5,
    },
  ];

  useEffect(() => {
    setTimeout(() => animation.current?.play(), 50);
    setTimeout(() => animation2.current?.play(), 50);
  }, []);

  const [isAchModalOpen, setIsAchModalOpen] = useState(false);
  const [openID, setOpenID] = useState(1);

  let add_button_size = 100;

  const UserCard = () => {
    return (
      <View
        style={{
          width: 200,
          backgroundColor: "white",

          borderRadius: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          //   borderWidth: 1,
          marginHorizontal: 15,
          marginVertical: 10,

          elevation: 5,
        }}
      >
        <View style={{ padding: 10 }}>
          <Avatar
            style={{ alignSelf: "center" }}
            size="xl"
            source={{
              uri: "https://cdn.discordapp.com/attachments/926621267954663454/1036146926955008050/unknown.png",
            }}
          >
            AJ
          </Avatar>
          <Text style={{ fontSize: 24, fontFamily: "RwB", textAlign: "center", marginVertical: 10 }}>Name</Text>
          <Text style={{ textAlign: "center", fontFamily: "Rw", marginVertical: 5 }}>
            Achievements Unlocked: <Text style={{ fontSize: 18, fontFamily: "RwB", color: "#5f9e34" }}>7</Text>
          </Text>
          <Text style={{ textAlign: "center", fontFamily: "Rw", marginVertical: 5 }}>
            Trees Planted: <Text style={{ fontSize: 18, fontFamily: "RwB", color: "#5f9e34" }}>15</Text>
          </Text>
        </View>
        <TouchableOpacity style={{ backgroundColor: "#5f9e34", padding: 14, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
          <Text style={{ textAlign: "center", color: "white", fontFamily: "RwB" }}>View Profile</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const AchievementCard = ({ title, status, description, current, max, animation, color, id }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setIsAchModalOpen(true);
          setOpenID(id);
        }}
        style={{ width: 180, borderWidth: 2, borderStyle: "dashed", borderRadius: 90, padding: 15, marginLeft: 15, borderColor: status == "Unlocked" ? color : "#d3d3d3" }}
      >
        <View style={{ alignSelf: "center" }}>
          <AnimatedLottieView autoPlay={true} loop={true} style={{ width: 100, height: 100 }} source={animation} />
        </View>
        <Text style={{ textAlign: "center", fontFamily: "RwB", fontSize: 18, marginTop: 8, color: status == "Unlocked" ? "black" : "#a8a8a8" }}>{title}</Text>
        <Text style={{ textAlign: "center", fontFamily: "Rw", fontSize: 10, color: "#a8a8a8" }}>
          Status: <Text style={{ fontFamily: "RwB", color: status == "Unlocked" ? color : "#a8a8a8" }}>{status}</Text>
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    // <SafeAreaView>
    <View style={{ paddingBottom: 50 }}>
      <UIModal isOpen={isAchModalOpen} onClose={() => setIsAchModalOpen(false)}>
        <AnimatedLottieView autoPlay={true} loop={true} style={{ width: 200, height: 200, marginTop: 5, alignSelf: "center" }} source={achievements[openID - 1].animation} />
        <Text style={{ textAlign: "center", fontFamily: "RwB", fontSize: 18, marginTop: 8, color: achievements[openID - 1].status == "Unlocked" ? "black" : "#a8a8a8" }}>{achievements[openID - 1].title}</Text>
        <Text style={{ textAlign: "center", fontFamily: "Rw", marginBottom: 10, marginTop: 5, color: achievements[openID - 1].status == "Unlocked" ? "black" : "#a8a8a8" }}>{achievements[openID - 1].description}</Text>
        <Text style={{ textAlign: "center", fontFamily: "RwSB", fontSize: 10, color: "#a8a8a8" }}>
          Status: <Text style={{ fontFamily: "RwB", color: achievements[openID - 1].status == "Unlocked" ? achievements[openID - 1].color : "#a8a8a8" }}>{achievements[openID - 1].status}</Text>
        </Text>
        <View>
          <Text style={{ textAlign: "center", color: "#a8a8a8", fontSize: 12, fontFamily: "Rw", marginTop: 10, marginBottom: 5 }}>Progress:</Text>
          <UIProgress color={achievements[openID - 1].color} min={achievements[openID - 1].current} max={achievements[openID - 1].max} />
        </View>
        {/* {achievements[openID - 1].current}/{achievements[openID - 1].max} */}
      </UIModal>
      <View style={{ height: 50 }}></View>
      <ScrollView>
        <ImageBackground source={randombg == 1 ? image1 : image2} style={{ position: "relative", minHeight: 200, display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between" }}>
          <View style={{ alignSelf: "center", paddingLeft: 10 }}>
            <Text style={{ color: "white", fontFamily: "RwEB", fontSize: 32, textShadowColor: "#585858", textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 1 }}>Hello Name,</Text>
            <Text style={{ color: "white", fontFamily: "RwM", fontSize: 24, textShadowColor: "#585858", textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 1 }}>Welcome Back!</Text>
          </View>
          <View>
            <AnimatedLottieView source={randomwave < 91 ? wave1 : randomwave < 96 ? wave2 : wave3} ref={animation} autoPlay={true} loop={true} style={{ width: 120, height: 120 }} />
          </View>
          <TouchableOpacity activeOpacity={0.5} style={{ position: "absolute", bottom: -1 * (add_button_size / 2), left: width / 2 - add_button_size / 2 }}>
            <AnimatedLottieView source={require("../../assets/lottie/add.json")} ref={animation2} autoPlay={true} loop={true} style={{ width: add_button_size, height: add_button_size }} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={{ marginTop: add_button_size / 2 - 20 }}>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 20, alignItems: "center" }}>
            <Text style={{ fontFamily: "RwB", fontSize: 18 }}>My Progress</Text>
            <Text style={{ color: "#5f9e34", fontFamily: "RwEB" }}>SEE ALL</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} title={achievement.title} animation={achievement.animation} status={achievement.status} color={achievement.color} id={achievement.id} />
            ))}
          </ScrollView>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 20, paddingBottom: 10, alignItems: "center" }}>
            <Text style={{ fontFamily: "RwB", fontSize: 18 }}>Leaderboard</Text>
            <Text style={{ color: "#5f9e34", fontFamily: "RwEB" }}>SEE ALL</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingBottom: 100 }}>
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
    // </SafeAreaView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({});
