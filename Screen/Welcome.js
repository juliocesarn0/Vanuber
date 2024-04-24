import React from "react";
import { View, Text, Button, StatusBar, StyleSheet, Image } from "react-native";

// Importe a imagem da logo
import Logo from "../assets/logo.png";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        {/* Use a imagem importada como a fonte da imagem */}
        <Image
          style={styles.logo}
          source={Logo}
        />
      </View>
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
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90,
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible", // Permite que o conteúdo saia dos limites do cabeçalho
    position: "relative", // Necessário para usar a posição absoluta na imagem
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: "absolute", // Posicionamento absoluto em relação ao cabeçalho
    top: 50, // Move a imagem para cima para sobrepôr a linha do cabeçalho
    zIndex: 1, // Define a ordem de empilhamento da imagem para ficar na frente de outros elementos
  },
  menu: {
    flex: 2,
    backgroundColor: "#FFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
