import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Footer from "../../components/FooterMotorista";
import Icon from "react-native-vector-icons/MaterialIcons";

const CarteiraMotorista = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangleContainer}>
        <View style={styles.bigRectangle}>
          <Text style={styles.text}>Total a receber</Text>
          <Text style={styles.text}>R$ 100</Text>

          <Text style={styles.listaPassageiros}>Lista de passageiros</Text>
          <View style={styles.passageiros}>
            <TouchableOpacity style={styles.passageiro}>
              <Image
                source={require("../../assets/usuario.png")}
                style={styles.fotoPassageiro}
              />
              <Text style={styles.nomePassageiro}>Gabriela</Text>
              <Text style={styles.status}>Em dia</Text>
              <Icon
                name="arrow-forward"
                size={25}
                color="#000"
                style={styles.rightVector}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.passageiro}>
              <Image
                source={require("../../assets/ricardo.png")}
                style={styles.fotoPassageiro}
              />
              <Text style={styles.nomePassageiro}>Ricardo</Text>
              <Text style={styles.status}>Em dia</Text>
              <Icon
                name="arrow-forward"
                size={25}
                color="#000"
                style={styles.rightVector}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.retirarBtn}>
              <Text style={styles.btnText}>Retirar dinheiro</Text>
            </TouchableOpacity>
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
    backgroundColor: "#FFF",
  },
  text: {
    fontSize: 12,
    fontWeight: "black",
    left: 20,
    top: 15,
    fontFamily: "Poppins-Regular",
  },
  listaPassageiros: {
    top: 60,
    fontSize: 12,
    fontWeight: "black",
    fontFamily: "Poppins-Regular",
    left: 20,
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
    alignItems: "left",
    borderWidth: 0,
    position: "relative",
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.25, // Opacidade da sombra
    shadowRadius: 3.84, // Raio da sombra
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
  passageiros: {
    top: 70,
    left: 10,
  },
  passageiro: {
    width: 400,
    height: 50,
    borderRadius: 15,
    margin: 10,
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.25, // Opacidade da sombra
    shadowRadius: 3.84, // Raio da sombra
    flexDirection: "row",
  },
  fotoPassageiro: {
    width: 40, // Largura do círculo
    height: 40, // Altura do círculo
    borderRadius: 50, // Metade da largura e altura para formar um círculo
    left: 10,
    top: 5,
    bottom: 5,
  },
  nomePassageiro: {
    fontSize: 12,
    fontWeight: "black",
    fontFamily: "Poppins-Regular",
    marginLeft: 120,
    top: 13,
  },
  status: {
    fontSize: 12,
    fontWeight: "black",
    fontFamily: "Poppins-Regular",
    color: "#42FF00",
    marginLeft: 100,
    top: 13,
  },
  vector: {
    width: 20,
    height: 20,
  },
  rightVector: {
    top: 10,
    left: 10,
  },
  retirarBtn: {
    top: 120,
    width: 280,
    height: 46,
    borderColor: '#DEE2E6',
    borderWidth: 1,
    borderRadius: 15,
    left: 70,
  },
  btnText: {
    textAlign: "center",
    top: 13,
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    fontWeight: "black",
  },
});

export default CarteiraMotorista;
