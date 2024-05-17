import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const ListaMotorista = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>
        Selecionar o motorista para ver a disponibilidade:
      </Text>

      {/* Container 1 */}
      <View style={styles.card}>
        <Image
          source={require("../../assets/ricardo.png")} // Exemplo de foto do motorista
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.cardText}>Joãozinho da Silva</Text>
        </View>
        <Image
          source={require("../../assets/balaozinho.png")}
          style={styles.icon}
        />
      </View>

      {/* Container 2 */}
      <View style={styles.card}>
        <Image
          source={require("../../assets/ricardo.png")} // Exemplo de foto do motorista
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.cardText}>Joãozinho da Silva</Text>
        </View>
        <Image
          source={require("../../assets/balaozinho.png")}
          style={styles.icon}
        />
      </View>

      {/* Container 3 */}
      <View style={styles.card}>
        <Image
          source={require("../../assets/ricardo.png")} // Exemplo de foto do motorista
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.cardText}>Joãozinho da Silva</Text>
        </View>
        <Image
          source={require("../../assets/balaozinho.png")}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  infoText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    width: "80%",
    height: 80,
    backgroundColor: "red",
    borderRadius: 10,
    justifyContent: "space-between", // Alterado para distribuir espaço entre os itens
    alignItems: "center", // Centralizar conteúdo verticalmente
    flexDirection: "row", // Para alinhar texto e ícone na mesma linha
    marginBottom: 20,
    paddingHorizontal: 10, // Espaçamento horizontal interno
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25, // Transforma a imagem em um círculo
    marginLeft: 10, // Margem à esquerda para separar o ícone do texto
  },
  textContainer: {
    flex: 1, // Para ocupar o espaço restante na linha
    justifyContent: "center", // Centralizar texto verticalmente
  },
  cardText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center", // Centralizar texto
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10, // Margem à direita para separar o ícone do texto
  },
});

export default ListaMotorista;
