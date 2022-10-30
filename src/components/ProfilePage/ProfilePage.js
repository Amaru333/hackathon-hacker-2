import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar } from "native-base";
import AnimatedLottieView from "lottie-react-native";

const ProfilePage = () => {
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
  ];
  const AchievementCard = ({ title, status, description, current, max, animation, color, id }) => {
    return (
      <View style={{ width: 180, borderWidth: 2, borderStyle: "dashed", borderRadius: 90, padding: 15, marginLeft: 15, borderColor: status == "Unlocked" ? color : "#d3d3d3" }}>
        <View style={{ alignSelf: "center" }}>
          <AnimatedLottieView autoPlay={true} loop={true} style={{ width: 100, height: 100 }} source={animation} />
        </View>
        <Text style={{ textAlign: "center", fontFamily: "RwB", fontSize: 18, marginTop: 8, color: status == "Unlocked" ? "black" : "#a8a8a8" }}>{title}</Text>
        <Text style={{ textAlign: "center", fontFamily: "Rw", fontSize: 10, color: "#a8a8a8" }}>
          Status: <Text style={{ fontFamily: "RwB", color: status == "Unlocked" ? color : "#a8a8a8" }}>{status}</Text>
        </Text>
      </View>
    );
  };
  return (
    <View style={{ paddingBottom: 80 }}>
      <ScrollView>
        <View style={{ backgroundColor: "#8dd6a6", paddingTop: 80, paddingBottom: 20 }}>
          <Avatar
            style={{ alignSelf: "center" }}
            size="2xl"
            source={{
              uri: "https://cdn.discordapp.com/attachments/926621267954663454/1036146926955008050/unknown.png",
            }}
          >
            AJ
          </Avatar>
          <Text style={{ textAlign: "center", fontFamily: "RwB", fontSize: 42, marginTop: 5, color: "white", textShadowColor: "#585858", textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 1 }}>Sarah</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginVertical: 20 }}>
          <View style={{ alignItems: "center", justifyContent: "center", borderRightWidth: 1, width: "50%" }}>
            <Image source={require("../../assets/icons/plant.png")} style={{ width: 50, height: 50 }} />
            <Text style={{ paddingRight: 9, fontFamily: "RwSB", fontSize: 24 }}>152</Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center", width: "50%" }}>
            <Image source={require("../../assets/icons/trophy.png")} style={{ width: 50, height: 50 }} />
            <Text style={{ paddingRight: 9, fontFamily: "RwSB", fontSize: 24 }}>17</Text>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 20, alignItems: "center" }}>
          <Text style={{ fontFamily: "RwB", fontSize: 18 }}>My Achievements</Text>
          <Text style={{ color: "#5f9e34", fontFamily: "RwEB" }}></Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} title={achievement.title} animation={achievement.animation} status={achievement.status} color={achievement.color} id={achievement.id} />
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({});
