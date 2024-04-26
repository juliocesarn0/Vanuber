import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginUserScreen from "./Screen/LoginUser";
import WelcomeScreen from "./Screen/Welcome";
import CadastroUserScreen from "./Screen/CadastroUser";
import HomeUserScreen from "./Screen/HomeUser";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeUser">
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
        <Stack.Screen name="HomeUser" component={HomeUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
