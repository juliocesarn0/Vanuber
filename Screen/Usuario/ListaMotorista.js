import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import UserContext from "../../context/UserContext";
import FooterUser from "../../components/FooterUser";

const ListaMotorista = () => {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [motoristas, setMotoristas] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchMotoristasPorLocal = async () => {
      try {
        const response = await axios.get(
          `http://192.168.15.7:3000/api/motoristas/por-local`,
          {
            params: {
              bairro: user.endereco.bairro,
              cidade: user.endereco.cidade,
            },
          }
        );
        return response.data;
      } catch (error) {
        console.error("Erro ao buscar motoristas por local:", error);
        return [];
      }
    };

    const fetchMotoristasPorEscolaEUniversidade = async () => {
      try {
        const response = await axios.get(
          `http://192.168.15.7:3000/api/motoristas/por-escolaEuniversidade`,
          {
            params: {
              local: user.destino.local,
              cidade: user.destino.cidade,
            },
          }
        );
        return response.data;
      } catch (error) {
        console.error(
          "Erro ao buscar motoristas por escola/universidade:",
          error
        );
        return [];
      }
    };

    const fetchAllMotoristas = async () => {
      setLoading(true);
      const motoristasPorLocal = await fetchMotoristasPorLocal();
      const motoristasPorEscolaEUniversidade =
        await fetchMotoristasPorEscolaEUniversidade();
      setMotoristas([
        ...motoristasPorLocal,
        ...motoristasPorEscolaEUniversidade,
      ]);
      setLoading(false);
    };

    if (user && user.endereco && user.destino) {
      fetchAllMotoristas();
    }
  }, [user]);

  if (!fontsLoaded || loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>
        Selecionar o motorista para ver a disponibilidade:
      </Text>

      <View style={styles.containerCards}>
        {motoristas.map((motorista) => (
          <TouchableOpacity
            key={motorista._id}
            style={styles.card}
            onPress={() => navigation.navigate("ChatUser")}
          >
            <Image
              source={{ uri: motorista.fotoUrl || "default-image-url" }}
              style={styles.avatar}
            />
            <Text style={styles.cardText}>
              {motorista.primeiroNome} {motorista.sobrenome}
            </Text>
            <Image
              source={require("../../assets/balaozinho.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        ))}
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
    right: 20,
  },
  card: {
    width: "95%",
    height: 70,
    backgroundColor: "#FFF",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
    paddingHorizontal: 10,
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
    borderRadius: 25,
    marginLeft: 10,
  },
  cardText: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Poppins-Regular",
    color: "#8A898E",
    textAlign: "center",
  },
  icon: {
    width: 26,
    height: 24,
    marginRight: 10,
  },
  containerCards: {
    bottom: 160,
  },
});

export default ListaMotorista;
