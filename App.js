import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import LoginUserScreen from "./Screen/LoginUser";
import WelcomeScreen from "./Screen/Welcome";
import CadastroUserScreen from "./Screen/CadastroUser";
import HomeUserScreen from "./Screen/HomeUser";
import DestinoUserScreen from "./Screen/DestinoUser";
import EnderecoUserScreen from "./Screen/EnderecoUser";
import ListaMotoristaScreen from "./Screen/ListaMotorista";
import HomeMotoristaScreen from "./Screen/Motorista/HomeMotorista";
import DocumentosMotoristaScreen from "./Screen/Motorista/DocumentosMotorista";

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
          options={{ headerShown: false }} // Oculta a barra de navegação na tela HomeUser
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
          }}
        />
        <Stack.Screen
          name="HomeMotorista"
          component={HomeMotoristaScreen}
          options={{ headerShown: false }} // Oculta a barra de navegação na tela HomeUser
        />
        <Stack.Screen
          name="DocumentosMotorista"
          component={DocumentosMotoristaScreen}
          options={{
            headerTitle: () => (
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>Lista de Motorista</Text>
              </View>
            ),
            headerStyle: styles.header,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f2f2f2",
    height: 110,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerTitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
    alignSelf: "center", // Centraliza verticalmente
  },
});

export default App;
