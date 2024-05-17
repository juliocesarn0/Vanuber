import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      {/* Conteúdo principal da tela */}

      {/* Rodapé fixado na parte inferior da tela */}
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => handleNavigation("HomeMotorista")}
          style={styles.footerItem}
        >
          <Image
            source={require("../assets/Footer/homeIcon.png")}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNavigation("Motorista")}
          style={styles.footerItem}
        >
          <Image
            source={require("../assets/Footer/motoristaIcon.png")}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Motorista</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNavigation("ChatMotorista")} // Alterado para navegar para ChatMotorista
          style={styles.footerItem}
        >
          <Image
            source={require("../assets/Footer/chatIcon.png")}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNavigation("CarteiraMotorista")}
          style={styles.footerItem}
        >
          <Image
            source={require("../assets/Footer/carteiraIcon.png")}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Carteira</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#7F7F7F",
    paddingVertical: 24,
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  footerItem: {
    alignItems: "center",
  },
  footerIcon: {
    width: 20,
    height: 20,
  },
  footerText: {
    color: "#515151",
    fontSize: 14,
  },
});

export default Footer;
