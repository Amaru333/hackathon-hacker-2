import { StyleSheet, Text, View } from "react-native";
import React from "react";

const UIProgress = ({ color, min, max }) => {
  return (
    <View style={{ width: "100%", backgroundColor: "#d3d3d3", height: 20, borderRadius: 10, position: "relative" }}>
      <View style={{ width: min / max >= 1 ? "100%" : `${(min * 100) / max}%`, backgroundColor: color, borderRadius: 10, height: 20 }}></View>
      <View style={{ position: "absolute", width: "100%" }}>
        <Text style={{ color: "white", textAlign: "center", textAlignVertical: "center", paddingTop: 1, fontFamily: "RwEB" }}>{min / max >= 1 ? "Completed" : `${min}/${max}`}</Text>
      </View>
    </View>
  );
};

export default UIProgress;

const styles = StyleSheet.create({});
