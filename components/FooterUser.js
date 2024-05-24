import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation, useNavigationState } from "@react-navigation/native";

const FooterUser = () => {
  const navigation = useNavigation();
  const [selectedIcon, setSelectedIcon] = useState("HomeUser");

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
          onPress={() => handleNavigation("HomeUser")}
          style={styles.footerItem}
        >
          <Image
            source={require("../assets/Footer/homeIcon.png")}
            style={[
              styles.footerIcon,
              selectedIcon === "HomeUser" && styles.selectedFooterIcon,
            ]}
          />
          <Text style={[
              styles.footerText,
              selectedIcon === "HomeUser" && styles.selectedFooterText,
            ]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNavigation("MotoristaUser")}
          style={styles.footerItem}
        >
          <Image
            source={require("../assets/Footer/motoristaIcon.png")}
            style={[
              styles.footerIcon,
              selectedIcon === "MotoristaUser" && styles.selectedFooterIcon,
            ]}
          />
          <Text style={styles.footerText}>Motorista</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNavigation("Chat")}
          style={styles.footerItem}
        >
          <Image
            source={require("../assets/Footer/chatIcon.png")}
            style={[
              styles.footerIcon,
              selectedIcon === "ChatUser" && styles.selectedFooterIcon,
            ]}
          />
          <Text style={styles.footerText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNavigation("CarteiraUser")}
          style={styles.footerItem}
        >
          <Image
            source={require("../assets/Footer/carteiraIcon.png")}
            style={[
              styles.footerIcon,
              selectedIcon === "CarteiraUser" && styles.selectedFooterIcon,
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
    position: "relative", // Certifique-se de que o container tem posição relativa
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#7F7F7F",
    paddingVertical: 24,
    position: "absolute", // Posicionamento absoluto
    bottom: 0, // Fixa o rodapé na parte inferior da tela
    width: "100%", // Ocupa toda a largura da tela
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

export default FooterUser;
