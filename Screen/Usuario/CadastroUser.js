import React, { useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";
import axios from "axios";

const CadastroUser = () => {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get("window").height;

  const [ddd, setDdd] = useState("(  )");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");
  const [primeiroNome, setPrimeiroNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleDddChange = (text) => {
    const cleaned = text.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
    let formattedDdd = "(  )";

    if (cleaned.length > 0) {
      formattedDdd = `(${cleaned[0]} `;
    }
    if (cleaned.length > 1) {
      formattedDdd = `(${cleaned[0]}${cleaned[1]})`;
    }

    setDdd(formattedDdd);
  };

  const handleRegister = async () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem");
      return;
    }

    const newUser = {
      ddd: ddd.replace(/\D/g, ""), // Normalize DDD
      numero: numero.replace(/\D/g, ""), // Normalize número
      email,
      primeiroNome,
      sobrenome,
      cpf: cpf.replace(/\D/g, ""), // Normalize CPF
      senha,
    };

    try {
      const response = await axios.post(
        "http://192.168.15.7:3000/api/users",
        newUser
      );
      if (response.status === 201) {
        alert("Usuário cadastrado com sucesso");
        navigation.navigate("LoginUser");
      }
    } catch (error) {
      console.error(
        "Erro ao cadastrar usuário:",
        error.response ? error.response.data : error.message
      );
      alert("Erro ao cadastrar usuário");
    }
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
            <TouchableOpacity style={styles.tab} onPress={navigation.goBack}>
              <View style={styles.tabTextContainer}>
                <Text style={styles.tabLogin}>Entrar</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabRegister}>Cadastrar</Text>
              <View style={styles.tabUnderline} />
            </TouchableOpacity>
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
                maxLength={5} // Limita o comprimento para (99)
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

            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input]}
                placeholder="E-mail"
                placeholderTextColor="#9DA1AB"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input]}
                placeholder="Primeiro Nome"
                placeholderTextColor="#9DA1AB"
                value={primeiroNome}
                onChangeText={setPrimeiroNome}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input]}
                placeholder="Sobrenome"
                placeholderTextColor="#9DA1AB"
                value={sobrenome}
                onChangeText={setSobrenome}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input]}
                placeholder="CPF"
                placeholderTextColor="#9DA1AB"
                value={cpf}
                onChangeText={setCpf}
                keyboardType="numeric"
                maxLength={11} // Limita o comprimento para 11 dígitos
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input]}
                placeholder="Senha"
                placeholderTextColor="#9DA1AB"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input]}
                placeholder="Confirmar Senha"
                placeholderTextColor="#9DA1AB"
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                secureTextEntry
              />
            </View>

            <View style={styles.textInfoContainer}>
              <Text style={styles.textInfo}>
                Ao se cadastrar você estará concordando com nossos Termos de Uso
              </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>CADASTRAR</Text>
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
    color: "#9DA1AB",
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
    color: "#000",
  },
  textInfoContainer: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
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
  inputContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingTop: 2,
  },
  input: {
    padding: 5,
    paddingRight: 10,
    marginVertical: 10,
    borderRadius: 5,
    flex: 1,
    flex: 0.5,
    borderBottomWidth: 2,
    borderBottomColor: "#9DA1AB",
  },
  dddInput: {
    flex: 0.1, // Ajuste a proporção para diminuir a largura
    borderBottomWidth: 2,
    borderBottomColor: "#9DA1AB",
    textAlign: "center",
    color: "#000",
    width: 20, // Ajuste a largura conforme necessário
    marginLeft: 23, // Ajuste a margem conforme necessário
    marginRight: 5,
  },
  numeroInput: {
    flex: 0.8,
    borderBottomWidth: 2,
    borderBottomColor: "#9DA1AB",
    marginLeft: 5,
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

export default CadastroUser;
