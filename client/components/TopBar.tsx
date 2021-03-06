import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View, Button, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Polls from "../components/Polls";
import ErrorMessage from "../components/ErrorMessage";
import RNPoll, { IChoice } from "react-native-poll";
import { vote, xpIncrease } from "../store/actions";
import { xpToLevel } from "../services/xpToLevel";
import { useEffect } from "react";
import { useState } from "react";
import Greengemicon from "../assets/svgs/topbar/greengemicon";
import Usericon from "../assets/svgs/topbar/usericon";
import Notificationicon from "../assets/svgs/topbar/notificationicon";

const { width, height } = Dimensions.get("window");

export default function TopBar() {
  const auth = useSelector((state) => state.auth);

  return (
    <View
      style={{
        height: 100,
        width: width,
        backgroundColor: "#FAFCFF",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        paddingTop: 50,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            backgroundColor: "#FAFCFF",
            borderRadius: 50,
            shadowOffset: { width: 0, height: 1 },
            shadowColor: "#000000",
            shadowOpacity: 0.2,
            shadowRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Notificationicon />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            backgroundColor: "#FAFCFF",
            borderRadius: 50,
            shadowOffset: { width: 0, height: 1 },
            shadowColor: "#000000",
            shadowOpacity: 0.2,
            shadowRadius: 10,
            marginLeft: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Usericon />
        </TouchableOpacity>
      </View>

      <Image
        style={{ width: 80, height: 80, resizeMode: "stretch" }}
        source={require("../assets/images/genbluelogo.png")}
      />
      <View
        style={{
          height: 40,
          width: 90,
          backgroundColor: "#FAFCFF",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          shadowOffset: { width: 0, height: 1 },
          shadowColor: "#000000",
          shadowOpacity: 0.2,
          shadowRadius: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "Rubik-Bold",
            marginRight: 5,
            fontSize: 16,
            color: "#4B6EF6",
          }}
        >
          500
        </Text>
        <Greengemicon />
      </View>

      {/* <Text>XP: {auth.user.xp}</Text>
      <Text style={{ paddingLeft: 50 }}>LEVEL: {xpToLevel(auth.user.xp)}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 1000,
    width: 1000,
    alignItems: "center",
    backgroundColor: "blue",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
