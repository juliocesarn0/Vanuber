import React, { useContext } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../../context/UserContext";
import FooterUser from "../../components/FooterUser";

const HomeUser = () => {
  let [fontsLoaded] = useFonts({
    "Montserrat-Medium": require("../../assets/fonts/Montserrat-Medium.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  const navigation = useNavigation();
  const { user } = useContext(UserContext);

  const handleContinue = () => {
    navigation.navigate("DestinoUser");
  };

  if (!fontsLoaded) {
    return null;
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
            Olá, {user ? user.primeiroNome : "Usuário"}!
          </Text>
        </View>
        <TouchableOpacity style={styles.rightHeader}>
          <Image
            resizeMode="contain"
            source={require("../../assets/sininho.png")}
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
            source={require("../../assets/motoristazinho.png")}
            style={styles.bottomImage}
          />
        </View>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>Procurar Destino</Text>
        </TouchableOpacity>
      </View>
      <FooterUser navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
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
  rightHeader: {
    padding: 10,
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
    justifyContent: "space-between",
  },
  bottomText: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#333333",
    marginBottom: 10,
  },
  bottomImage: {
    width: 60,
    height: 60,
    marginLeft: 10,
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

export default HomeUser;
