import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, ActivityIndicator, TouchableOpacity, ScrollView } from "react-native";
import * as Font from "expo-font";
import FooterUser from "../../components/FooterUser";
import { useNavigation } from "@react-navigation/native";

const ListaMotorista = () => {

  const navigation = useNavigation();

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Montserrat-Medium": require("../../assets/fonts/Montserrat-Medium.ttf"),
        "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>
        Selecionar o motorista para ver a disponibilidade:
      </Text>
 
     <View style={styles.containerCards}>
          {/* Container 1 */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ChatUser')}>
        <Image
          source={require("../../assets/ricardo.png")} // Exemplo de foto do motorista
          style={styles.avatar}
        />
        <Text style={styles.cardText}>Júlio Cesar</Text>
        <Image
          source={require("../../assets/balaozinho.png")}
          style={styles.icon}
        />
      </TouchableOpacity>

      {/* Container 2 */}
      <TouchableOpacity style={styles.card}>
        <Image
          source={require("../../assets/ricardo.png")} // Exemplo de foto do motorista
          style={styles.avatar}
        />
        <Text style={styles.cardText}>Gabriela</Text>
        <Image
          source={require("../../assets/balaozinho.png")}
          style={styles.icon}
        />
      </TouchableOpacity>

      {/* Container 3 */}
      <TouchableOpacity style={styles.card}>
        <Image
          source={require("../../assets/ricardo.png")} // Exemplo de foto do motorista
          style={styles.avatar}
        />
        <Text style={styles.cardText}>Joãozinho da Silva</Text>
        <Image
          source={require("../../assets/balaozinho.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
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
    fontFamily: "Poppins-Regular",
    color: "#8A898E",
    bottom: 170,
    right: 20
  },
  card: {
    width: "95%",
    height: 70,
    backgroundColor: "#FFF",
    borderRadius: 10,
    justifyContent: "space-between", // Alterado para distribuir espaço entre os itens
    alignItems: "center", // Centralizar conteúdo verticalmente
    flexDirection: "row", // Para alinhar texto e ícone na mesma linha
    marginBottom: 20,
    paddingHorizontal: 10, // Espaçamento horizontal interno
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    fontFamily: "Poppins-Regular",
    color: "#8A898E",
    textAlign: "center", // Centralizar texto
  },
  icon: {
    width: 26,
    height: 24,
    marginRight: 10, // Margem à direita para separar o ícone do texto
  },
  containerCards: {
    bottom: 160
  }
});

export default ListaMotorista;
