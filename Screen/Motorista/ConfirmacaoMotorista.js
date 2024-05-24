import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Footer from "../../components/FooterMotorista";

const ConfirmacaoMotorista = () => {
  const navigation = useNavigation();

  const handleVoltarInicio = () => {
    navigation.navigate("HomeMotorista");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <Image
        source={require("../../assets/caixaEmail.png")}
        style={styles.image}
      />
      <View style={styles.messageContainer}>
        <Text style={styles.message}>
          Obrigado por fornecer os dados, estamos verificando seus dados e logo
          enviaremos um e-mail de confirmação.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleVoltarInicio}>
        <Text style={styles.buttonText}>Voltar para o Início</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1, // Garantir que o conteúdo ocupe o espaço disponível
    alignItems: 'center',
    paddingBottom: 100, // Adiciona um preenchimento inferior para que o conteúdo não fique atrás do footer
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 50,
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  messageContainer: {
    backgroundColor: "#F1F3F5",
    padding: 20,
    borderRadius: 10,
    marginBottom: 50,
  },
  message: {
    fontSize: 12,
    color: "#495057",
    textAlign: "center",
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

export default ConfirmacaoMotorista;
