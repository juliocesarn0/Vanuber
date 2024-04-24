import React from "react";
import { View, Text, Button, StatusBar, StyleSheet } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}></View>
      <View style={styles.menu}>
        <Text>Primeira Tela</Text>
        <Button
          title="Ir para a tela de Login"
          onPress={() => navigation.navigate("LoginUser")}
        />
        <Button
          title="Ir para a tela de Login 2"
          onPress={() => navigation.navigate("LoginUser")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
  },
  header: {
    height: 100,
    backgroundColor: "#FCFF74",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  menu: {
    flex: 2,
    backgroundColor: "#FFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
