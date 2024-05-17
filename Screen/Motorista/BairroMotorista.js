import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BairroMotorista = ({ route }) => {
  const navigation = useNavigation();

  const handleAcrescentar = () => {
    // Implementar a lógica para acrescentar algo, se necessário
  };

  const handleContinuar = () => {
    navigation.navigate("ConfirmacaoMotorista");
    // Implementar a lógica para continuar, se necessário
    // Por exemplo, navegar para uma próxima tela
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonAdd} onPress={handleAcrescentar}>
        <Text style={[styles.buttonAddText, { lineHeight: 40 }]}>
          Acrescentar bairros
        </Text>
        <Image
          source={require("../../assets/adicionar.png")}
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleContinuar}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  buttonAdd: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start", // Alinhar os itens à esquerda
    backgroundColor: "#F2F2F2",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 50,
  },
  buttonAddText: {
    color: "#6E6E6E",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: 10, // Espaçamento entre o texto e o ícone
    flex: 1, // Permite o texto crescer para ocupar espaço disponível
  },
  icon: {
    width: 20,
    height: 20,
  },
  button: {
    backgroundColor: "#FCFF74",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 50,
  },
  buttonText: {
    color: "#515151",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default BairroMotorista;
