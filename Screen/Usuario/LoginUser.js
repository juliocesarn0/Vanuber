import React, { useState, useContext } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../../context/UserContext"; // Verifique se o caminho está correto

const LoginUser = () => {
  const navigation = useNavigation();
  const { login } = useContext(UserContext); // Utilize o contexto do usuário
  const [ddd, setDdd] = useState("(  )");
  const [numero, setNumero] = useState("");
  const screenHeight = Dimensions.get("window").height;

  const normalizePhoneNumber = (input) => {
    return input.replace(/\D/g, "");
  };

  const handleDddChange = (text) => {
    const cleaned = text.replace(/\D/g, "");
    let formattedDdd = "(  )";

    if (cleaned.length > 0) {
      formattedDdd = `(${cleaned[0]} `;
    }
    if (cleaned.length > 1) {
      formattedDdd = `(${cleaned[0]}${cleaned[1]})`;
    }

    setDdd(formattedDdd);
  };

  const handleLogin = async () => {
    const normalizedDdd = normalizePhoneNumber(ddd);
    const normalizedNumero = normalizePhoneNumber(numero);

    console.log("Verificando dados:", {
      ddd: normalizedDdd,
      numero: normalizedNumero,
    });

    await login(normalizedDdd, normalizedNumero);

    navigation.navigate("HomeUser");
  };

  const handleRegisterPress = () => {
    navigation.navigate("CadastroUser");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />
        </View>

        <View style={[styles.content, { minHeight: screenHeight }]}>
          <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tab}>
              <View style={styles.tabTextContainer}>
                <Text style={styles.tabLogin}>Entrar</Text>
                <View style={styles.tabUnderline} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab} onPress={handleRegisterPress}>
              <Text style={styles.tabRegister}>Cadastrar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.textInfoContainer}>
            <Text style={styles.textInfo}>
              Você pode usar seu número de telefone ou seu e-mail.
            </Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.telefone}>
              <TextInput
                style={[styles.input, styles.dddInput]}
                placeholder="DDD"
                placeholderTextColor="#9DA1AB"
                value={ddd}
                onChangeText={handleDddChange}
                keyboardType="numeric"
                maxLength={5}
              />
              <TextInputMask
                type={"custom"}
                options={{
                  mask: "99999-9999",
                }}
                style={[styles.input, styles.numeroInput]}
                placeholder="Número de telefone"
                placeholderTextColor="#9DA1AB"
                value={numero}
                onChangeText={setNumero}
                keyboardType="numeric"
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textLink}>
              <Text style={styles.textLinkText}>Acessar usando seu e-mail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFF74",
  },
  content: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderRadius: 30,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 250,
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  tab: {
    paddingTop: 24,
  },
  tabTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tabLogin: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#000",
  },
  tabUnderline: {
    height: 1,
    backgroundColor: "#FCFF74",
    position: "absolute",
    bottom: 0,
    left: "30%",
    width: "70%",
  },
  tabRegister: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#9DA1AB",
  },
  textInfoContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  textInfo: {
    color: "#9DA1AB",
  },
  formContainer: {
    marginTop: 0,
  },
  telefone: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  input: {
    padding: 5,
    paddingRight: 10,
    marginVertical: 10,
    borderRadius: 5,
    flex: 1,
  },
  dddInput: {
    flex: 0.1,
    borderBottomWidth: 2,
    borderBottomColor: "#9DA1AB",
    textAlign: "center",
    color: "#000",
    width: 50,
    marginLeft: 20,
    marginRight: 5,
  },
  numeroInput: {
    flex: 0.8,
    borderBottomWidth: 2,
    borderBottomColor: "#9DA1AB",
    color: "#000",
  },
  button: {
    backgroundColor: "#FCFF74",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 24,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 150,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
  },
  textLink: {
    marginTop: 30,
    alignItems: "center",
  },
  textLinkText: {
    color: "#000",
    textDecorationLine: "underline",
  },
});

export default LoginUser;
