import React from "react";
import {
  View,
  Text,
  Button,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
// Adicione a importação para 'useFonts'
import { useFonts } from "@expo-google-fonts/poppins";

// Importe a imagem da logo
import Logo from "../assets/logo.png";
// Importe a imagem do usuário
import UsuarioImage from "../assets/usuario.png";

export default function WelcomeScreen({ navigation }) {
  // UseFonts para carregar a fonte
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Ou uma tela de carregamento
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        {/* Use a imagem importada como a fonte da imagem */}
        <Image style={styles.logo} source={Logo} />
      </View>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.navigate("LoginUser")}>
          <View style={styles.containerUsuario}>
            <View style={styles.usuarioContent}>
              <Image style={styles.usuarioImage} source={UsuarioImage} />
              <View style={styles.usuarioText}>
                {/* Aplicar estilo de textoConteudo */}
                <Text style={[styles.containerTexto, styles.textoCentralizado]}>
                  Usuário
                </Text>
                <Text style={styles.textoConteudo}>
                  Sou usuário e estou em busca de motoristas.
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("LoginUser")}>
          <View style={styles.containerMotorista}>
            <Text style={styles.containerTexto}>Motorista</Text>
          </View>
        </TouchableOpacity>
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
  containerUsuario: {
    marginBottom: 30,
    backgroundColor: "#EBEBEB",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "80%",
    alignSelf: "center",
  },
  containerMotorista: {
    padding: 48,
    paddingRight: 103,
    paddingLeft: 103,
    backgroundColor: "#EBEBEB",
  },
  containerTexto: {
    fontWeight: "regular",
    fontFamily: "Poppins-Regular",
  },
  textoCentralizado: {
    textAlign: "center",
    fontSize: 18,
    color: "#515151",
  },
  textoConteudo: {
    fontSize: 12,
    color: "#6E6E6E",
  },
  usuarioContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  usuarioImage: {
    width: 90,
    height: 90,
    marginRight: 10,
  },
  usuarioText: {
    flex: 1,
  },
});