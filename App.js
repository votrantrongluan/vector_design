import React from "react";
import { StyleSheet, View } from "react-native";
import { HomeScreen } from "./app/modules/Auth/screens/HomeScreens";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
