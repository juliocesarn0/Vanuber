import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
// Adicione a importação para 'useFonts'
import { useFonts } from "@expo-google-fonts/poppins";

// Importe a imagem da logo
import Logo from "../assets/logo-2.png";
// Importe a imagem do usuário
import UsuarioImage from "../assets/usuario.png";
// Importe a imagem do motorista
import MotoristaImage from "../assets/motorista.png";

export default function WelcomeScreen({ navigation }) {
  const [userType, setUserType] = useState(null);

  const [isUsuarioSelected, setIsUsuarioSelected] = useState(false);
  const [isMotoristaSelected, setIsMotoristaSelected] = useState(false);

  // UseFonts para carregar a fonte
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Ou uma tela de carregamento
  }

  const handleContinue = () => {
    if (userType === "usuario") {
      navigation.navigate("LoginUser");
    } else if (userType === "motorista") {
      navigation.navigate("LoginMotorista");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        {/* Use a imagem importada como a fonte da imagem */}
      </View>
      <Image style={styles.logo} source={Logo} />
      <View style={styles.menu}>
        <TouchableOpacity
          onPress={() => {
            setIsUsuarioSelected(true);
            setIsMotoristaSelected(false);
            setUserType("usuario");
          }}
        >
          <View
            style={[
              styles.containerUsuario,
              isUsuarioSelected && styles.selectedButton,
            ]}
          >
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
        <TouchableOpacity
          onPress={() => {
            setIsUsuarioSelected(false);
            setIsMotoristaSelected(true);
            setUserType("motorista");
          }}
        >
          <View
            style={[
              styles.containerMotorista,
              isMotoristaSelected && styles.selectedButton,
            ]}
          >
            <Image style={styles.motoristaImage} source={MotoristaImage} />
            <View style={styles.usuarioText}>
              <Text style={[styles.containerTexto, styles.textoCentralizado]}>
                Motorista
              </Text>
              <Text style={styles.textoConteudoMotorista}>
                Sou motorista e estou em busca de passageiros.
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity disabled={!userType} onPress={handleContinue}>
          <View style={styles.continuarBtn}>
            <Text style={styles.btnContinuarText}>Continuar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
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
    width: 120,
    height: 120,
    borderRadius: 50,
    position: "absolute", // Posicionamento absoluto em relação ao cabeçalho
    top: 40, // Move a imagem para cima para sobrepôr a linha do cabeçalho
    zIndex: 1, // Define a ordem de empilhamento da imagem para ficar na frente de outros elementos
    left: 128,
  },
  menu: {
    flex: 2,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  containerUsuario: {
    marginBottom: 10,
    backgroundColor: "#FFF",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "80%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25, // Opacidade da sombra
    shadowRadius: 3.84, // Raio da sombra (propriedade recomendada pela documentação do React Native)
    elevation: 5, // Elevação (sombra) para Android
  },
  containerMotorista: {
    marginBottom: 130,
    backgroundColor: "#FFF",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "80%",
    alignSelf: "center",
    paddingBottom: 10,
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25, // Opacidade da sombra
    shadowRadius: 3.84, // Raio da sombra (propriedade recomendada pela documentação do React Native)
    elevation: 5, // Elevação (sombra) para Android
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
  textoConteudoMotorista: {
    fontSize: 12,
    color: "#6E6E6E",
  },
  usuarioContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  motoristaContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  usuarioImage: {
    width: 90,
    height: 90,
    marginRight: 10,
  },
  motoristaImage: {
    width: 90,
    height: 90,
    marginLeft: 11,
  },
  usuarioText: {
    flex: 1,
  },
  continuarBtn: {
    backgroundColor: "#FCFF74",
    padding: 12,
    paddingLeft: 118,
    paddingRight: 118,
    borderRadius: 24,
  },
  btnContinuarText: {
    fontFamily: "Poppins-Regular",
    fontSize: 17,
  },
  selectedButton: {
    borderWidth: 2,
    borderColor: "yellow",
  },
});
