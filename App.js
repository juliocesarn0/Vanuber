import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Image } from "react-native";

// Importações das telas
import LoginUserScreen from "./Screen/Usuario/LoginUser";
import WelcomeScreen from "./Screen/Welcome";
import CadastroUserScreen from "./Screen/Usuario/CadastroUser";
import HomeUserScreen from "./Screen/Usuario/HomeUser";
import DestinoUserScreen from "./Screen/Usuario/DestinoUser";
import EnderecoUserScreen from "./Screen/Usuario/EnderecoUser";
import ListaMotoristaScreen from "./Screen/Usuario/ListaMotorista";
import HomeMotoristaScreen from "./Screen/Motorista/HomeMotorista";
import DocumentosMotoristaScreen from "./Screen/Motorista/DocumentosMotorista";
import DestinosMotoristaScreen from "./Screen/Motorista/DestinosMotorista";
import BairroMotoristaScreen from "./Screen/Motorista/BairroMotorista";
import ConfirmacaoMotoristaScreen from "./Screen/Motorista/ConfirmacaoMotorista";
import CarteiraMotoristaScreen from "./Screen/Motorista/CarteiraMotorista";
import ChatMotoristaScreen from "./Screen/Motorista/ChatMotorista";
import PagamentoMotoristaScreen from "./Screen/Motorista/PagamentoMotorista";
// Importação do Footer (se necessário)
import Footer from "./components/FooterMotorista";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeMotorista">
        <Stack.Screen
          name="LoginUser"
          component={LoginUserScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CadastroUser"
          component={CadastroUserScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="HomeUser"
          component={HomeUserScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DestinoUser"
          component={DestinoUserScreen}
          options={{
            headerTitle: () => (
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>Procurar Destino</Text>
              </View>
            ),
            headerStyle: styles.header,
            headerTitleAlign: "center",
            headerBackImage: () => (
              <Image
                source={require("./assets/setinha.png")}
                style={{ width: 21, height: 21, left: 25 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="EnderecoUser"
          component={EnderecoUserScreen}
          options={{
            headerTitle: () => (
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>Endereço de origem</Text>
              </View>
            ),
            headerStyle: styles.header,
            headerTitleAlign: "center",
            headerBackImage: () => (
              <Image
                source={require("./assets/setinha.png")}
                style={{ width: 21, height: 21, left: 25 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="ListaMotorista"
          component={ListaMotoristaScreen}
          options={{
            headerTitle: () => (
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>Lista de Motorista</Text>
              </View>
            ),
            headerStyle: styles.header,
            headerTitleAlign: "center",
            headerBackImage: () => (
              <Image
                source={require("./assets/setinha.png")}
                style={{ width: 21, height: 21, left: 25 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="HomeMotorista"
          component={HomeMotoristaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DocumentosMotorista"
          component={DocumentosMotoristaScreen}
          options={{
            headerTitle: () => (
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>Cadastro de documentos</Text>
              </View>
            ),
            headerStyle: styles.header,
            headerTitleAlign: "center",
            headerBackImage: () => (
              <Image
                source={require("./assets/setinha.png")}
                style={{ width: 21, height: 21, left: 25 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="DestinosMotorista"
          component={DestinosMotoristaScreen}
          options={{
            headerTitle: () => (
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>Destinos</Text>
              </View>
            ),
            headerStyle: styles.header,
            headerTitleAlign: "center",
            headerBackImage: () => (
              <Image
                source={require("./assets/setinha.png")}
                style={{ width: 21, height: 21, left: 25 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="BairroMotorista"
          component={BairroMotoristaScreen}
          options={{
            headerTitle: () => (
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>Bairros</Text>
              </View>
            ),
            headerStyle: styles.header,
            headerTitleAlign: "center",
            headerBackImage: () => (
              <Image
                source={require("./assets/setinha.png")}
                style={{ width: 21, height: 21, left: 25 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="ConfirmacaoMotorista"
          component={ConfirmacaoMotoristaScreen}
          options={{
            headerTitle: () => (
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>Confirmação</Text>
              </View>
            ),
            headerStyle: styles.header,
            headerTitleAlign: "center",
            headerBackImage: () => (
              <Image
                source={require("./assets/setinha.png")}
                style={{ width: 21, height: 21, left: 25 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="CarteiraMotorista"
          component={CarteiraMotoristaScreen}
          options={{
            headerTitle: () => (
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>Carteira</Text>
              </View>
            ),
            headerStyle: styles.header,
            headerTitleAlign: "center",
            headerBackImage: () => (
              <Image
                source={require("./assets/setinha.png")}
                style={{ width: 21, height: 21, left: 25 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="PagamentoMotorista"
          component={PagamentoMotoristaScreen}
          options={{
            headerTitle: () => (
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>Motorista</Text>
              </View>
            ),
            headerStyle: styles.header,
            headerTitleAlign: "center",
            headerBackImage: () => (
              <Image
                source={require("./assets/setinha.png")}
                style={{ width: 21, height: 21, left: 25 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="ChatMotorista"
          component={ChatMotoristaScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFFF",
    height: 110,
    borderBottomWidth: 0,
  },
  headerTitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#8A898E",
    alignSelf: "center",
    fontFamily: "Montserrat-Medium",
    textAlign: "center",
  },
});

export default App;
