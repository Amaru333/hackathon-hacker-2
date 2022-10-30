import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import AnimatedLottieView from "lottie-react-native";
import { Avatar } from "native-base";

const Leaderboard = () => {
  const animation = useRef(null);
  useEffect(() => {
    setTimeout(() => animation.current?.play(), 50);
  }, []);
  return (
    <View style={{ paddingVertical: 50, paddingHorizontal: 10 }}>
      <ScrollView>
        <Text style={{ textAlign: "center", fontSize: 32, fontFamily: "RwB", marginTop: 20 }}>Leaderboard</Text>
        <AnimatedLottieView ref={animation} autoPlay={true} loop={true} style={{ width: 300, height: 300, alignSelf: "center" }} source={require("../../assets/lottie/leaderboard.json")} />
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "flex-end" }}>
          <View>
            <Avatar
              style={{ alignSelf: "center" }}
              size="xl"
              source={{
                uri: "https://cdn.discordapp.com/attachments/926621267954663454/1036146926955008050/unknown.png",
              }}
            >
              AJ
            </Avatar>
            <Text style={{ textAlign: "center", fontFamily: "RwB", fontSize: 24, marginTop: 5, color: "#AA6C39" }}>3</Text>
            <Text style={{ textAlign: "center", fontFamily: "RwB", fontSize: 24, marginTop: 5 }}>Kate</Text>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <Image source={require("../../assets/icons/plant.png")} style={{ width: 18, height: 18 }} />
              <Text style={{ paddingRight: 9, fontFamily: "RwSB" }}>101</Text>
            </View>
          </View>
          <View>
            <Avatar
              style={{ alignSelf: "center" }}
              size="2xl"
              source={{
                uri: "https://cdn.discordapp.com/attachments/926621267954663454/1036146926955008050/unknown.png",
              }}
            >
              AJ
            </Avatar>
            <Text style={{ textAlign: "center", fontFamily: "RwB", fontSize: 48, marginTop: 5, color: "#FDD017" }}>1</Text>
            <Text style={{ textAlign: "center", fontFamily: "RwB", fontSize: 32, marginTop: 5 }}>Sarah</Text>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <Image source={require("../../assets/icons/plant.png")} style={{ width: 18, height: 18 }} />
              <Text style={{ paddingRight: 9, fontFamily: "RwSB" }}>152</Text>
            </View>
          </View>
          <View>
            <Avatar
              style={{ alignSelf: "center" }}
              size="xl"
              source={{
                uri: "https://cdn.discordapp.com/attachments/926621267954663454/1036146927437348874/unknown.png",
              }}
            >
              AJ
            </Avatar>
            <Text style={{ textAlign: "center", fontFamily: "RwB", fontSize: 24, marginTop: 5, color: "silver" }}>2</Text>
            <Text style={{ textAlign: "center", fontFamily: "RwB", fontSize: 24, marginTop: 5 }}>Dave</Text>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <Image source={require("../../assets/icons/plant.png")} style={{ width: 18, height: 18 }} />
              <Text style={{ paddingRight: 9, fontFamily: "RwSB" }}>133</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Leaderboard;

const styles = StyleSheet.create({});
