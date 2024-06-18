import React, { useContext } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import Footer from "../../components/FooterMotorista";
import MotoristaContext from "../../context/MotoristaContext"; // Importar o contexto

const HomeMotorista = () => {
  let [fontsLoaded] = useFonts({
    "Montserrat-Medium": require("../../assets/fonts/Montserrat-Medium.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  const { motorista } = useContext(MotoristaContext); // Usar o contexto
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate("DocumentosMotorista"); // Navega para a tela de documentos
  };

  if (!fontsLoaded) {
    return null; // Pode renderizar uma tela de carregamento enquanto as fontes carregam
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Image
            resizeMode="contain"
            source={require("../../assets/ricardo.png")}
            style={styles.avatar}
          />
          <Text style={styles.greetingText}>
            Olá, {motorista?.primeiroNome || "Motorista"}!
          </Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomContent}>
          <Text style={[styles.bottomText, { textAlign: "center" }]}>
            {motorista?.status === "em_analise"
              ? "Em análise"
              : "Atualizar vans e documentos"}
          </Text>
          <Image
            resizeMode="contain"
            source={require("../../assets/info.png")}
            style={styles.bottomImage}
          />
        </View>
        {motorista?.status !== "em_analise" && (
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <Text style={styles.continueButtonText}>Cadastrar documentos</Text>
          </TouchableOpacity>
        )}
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 40,
    borderBottomColor: "#e0e0e0",
  },
  leftHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginRight: 10,
  },
  greetingText: {
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
  },
  bottomContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 30,
    marginVertical: 30,
  },
  bottomContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomText: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#333333",
    marginBottom: 10,
  },
  bottomImage: {
    width: 20,
    height: 20,
    marginLeft: "auto",
  },
  continueButton: {
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 24,
    marginTop: 10,
  },
  continueButtonText: {
    fontSize: 16,
    color: "#000",
    fontFamily: "Montserrat-Medium",
  },
});

export default HomeMotorista;
