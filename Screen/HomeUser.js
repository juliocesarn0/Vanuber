import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native"; // Importe o hook de navegação
import { SafeAreaView } from "react-native-web";
import { ScrollView } from "react-native-gesture-handler";

const HomeUser = () => {
  let [fontsLoaded] = useFonts({
    "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  const navigation = useNavigation(); // Obtém o objeto de navegação

  const handleContinue = () => {
    navigation.navigate("DestinoUser"); // Navega para a próxima tela ao clicar no botão
  };

  if (!fontsLoaded) {
    return null; // Ou uma tela de carregamento
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Image
            resizeMode="contain"
            source={require("../assets/ricardo.png")}
            style={styles.avatar}
          />
          <Text style={styles.greetingText}>Olá, Ricardo!</Text>
        </View>
        <TouchableOpacity style={styles.rightHeader}>
          <Image
            resizeMode="contain"
            source={require("../assets/sininho.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomContent}>
          <Text style={styles.bottomText}>
            Procure o primeiro destino para encontrar o melhor motorista para
            lhe atender
          </Text>
          <Image
            resizeMode="contain"
            source={require("../assets/motoristazinho.png")} // Imagem do motorista
            style={styles.bottomImage}
          />
        </View>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue} // Chama a função ao pressionar o botão
        >
          <Text style={styles.continueButtonText}>Procurar Destino</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

    <View style={styles.footer}>
      
    </View>

    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff", // Fundo padrão
  },
  container: {
    flex: 1,
    justifyContent: 'space-between'
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
  rightHeader: {
    padding: 10,
  },
  bottomContainer: {
    backgroundColor: "#fff", // Cor temporária para visualização
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
    borderRadius: 15, // Bordas arredondadas
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 30, // Margem horizontal para evitar encostar nas laterais
    marginVertical: 30,
  },
  bottomContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomText: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#333333", // Cor do texto
    marginBottom: 10,
  },
  bottomImage: {
    width: 60,
    height: 60,
    marginLeft: 10, // Espaçamento à esquerda da imagem
  },
  continueButton: {
    backgroundColor: "#f2f2f2", // Cor do botão amarelo
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 24,
    marginTop: 10, // Espaçamento acima do botão
  },
  continueButtonText: {
    fontSize: 16,
    color: "#000", // Cor do texto do botão
    fontFamily: "Montserrat-Medium",
  },
  footer: {
    height: 75,
    backgroundColor: '#7F7F7F',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#e7e7e7',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  scrollViewContent: {
    flexGrow: 1
  },

});

export default HomeUser;
