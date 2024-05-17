import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Footer from "../../components/FooterMotorista";

const CarteiraMotorista = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Carteira</Text>
      </View>
      <View style={styles.rectangleContainer}>
        <View style={styles.bigRectangle}>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceText}>Saldo:</Text>
          </View>
          <View style={styles.rectangle}>
            <Text style={styles.personName}>João</Text>
          </View>
          <View style={styles.rectangle}>
            <Text style={styles.personName}>Maria</Text>
          </View>
          <View style={styles.rectangle}>
            <Text style={styles.personName}>Batata</Text>
          </View>
        </View>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  rectangleContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  bigRectangle: {
    width: "90%",
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: 35,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "blue",
    position: "relative",
  },
  balanceContainer: {
    position: "absolute",
    top: 10,
  },
  balanceText: {
    backgroundColor: "red",
    fontSize: 14,
    fontWeight: "bold",
  },
  rectangle: {
    width: "80%",
    height: 50,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 15,
  },
  personName: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default CarteiraMotorista;
