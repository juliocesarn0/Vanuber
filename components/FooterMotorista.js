import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation, useNavigationState } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  const [selectedIcon, setSelectedIcon] = useState("HomeMotorista");

  const handleNavigation = (screen) => {
    navigation.navigate(screen, {}, () => setSelectedIcon(screen));
  };

  // Hook para sincronizar o estado selecionado com a rota atual
  const routeName = useNavigationState(state => state.routes[state.index].name);
  useEffect(() => {
    setSelectedIcon(routeName);
  }, [routeName]);

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
            style={[
              styles.footerIcon,
              selectedIcon === "HomeMotorista" && styles.selectedFooterIcon,
            ]}
          />
          <Text style={[
              styles.footerText,
              selectedIcon === "HomeMotorista" && styles.selectedFooterText,
            ]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNavigation("Motorista")}
          style={styles.footerItem}
        >
          <Image
            source={require("../assets/Footer/motoristaIcon.png")}
            style={[
              styles.footerIcon,
              selectedIcon === "Motorista" && styles.selectedFooterIcon,
            ]}
          />
          <Text style={[
              styles.footerText,
              selectedIcon === "Motorista" && styles.selectedFooterText,
            ]}>Motorista</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNavigation("ChatMotorista")} // Alterado para navegar para ChatMotorista
          style={styles.footerItem}
        >
          <Image
            source={require("../assets/Footer/chatIcon.png")}
            style={[
              styles.footerIcon,
              selectedIcon === "ChatMotorista" && styles.selectedFooterIcon,
            ]}
          />
          <Text style={[
              styles.footerText,
              selectedIcon === "ChatMotorista" && styles.selectedFooterText,
            ]}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNavigation("CarteiraMotorista")}
          style={styles.footerItem}
        >
          <Image
            source={require("../assets/Footer/carteiraIcon.png")}
            style={[
              styles.footerIcon,
              selectedIcon === "CarteiraMotorista" && styles.selectedFooterIcon,
            ]}
          />
          <Text style={[
              styles.footerText,
              selectedIcon === "CarteiraMotorista" && styles.selectedFooterText,
            ]}>Carteira</Text>
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
  selectedFooterIcon: {
    tintColor: "#F2CB05", // Mude para a cor desejada quando o ícone estiver selecionado
  },
  selectedFooterText: {
    color: "#F2CB05", // Mude para a cor desejada quando o texto estiver selecionado
  },
});

export default Footer;
