import React from "react";
import { StyleSheet, View, Text } from "react-native";

const DocumentosMotorista = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.centeredText}>Documentos do Motorista</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  centeredText: {
    fontSize: 24,
    fontFamily: "Montserrat-Medium",
    color: "#333333",
  },
});

export default DocumentosMotorista;
