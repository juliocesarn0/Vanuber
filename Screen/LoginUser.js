import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const LoginUser = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>

      <View style={styles.tabContainer}>
        {/* Componente de Aba para Login */}
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Entrar</Text>
        </TouchableOpacity>

        {/* Componente de Aba para Registrar */}
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Registrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.textInfo}>
          <Text>Voce pode usar seu número de telefone ou seu e-mail.</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.telefone}>
          <TextInput
            style={[styles.input, styles.dddInput]}
            placeholder="DDD"
          />
          <TextInput
            style={[styles.input, styles.numeroInput]}
            placeholder="Numero de telefone"
            secureTextEntry={true}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.textLink}>
          <Text>Entrar pelo seu e-mail</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
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
    padding: 10,
  },
  tabText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  formContainer: {
    padding: 20,
  },
  telefone: {
    //backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    paddingRight: 10,
    marginVertical: 10,
    borderRadius: 5,
    flex: 1,
  },
  dddInput: {
    flex: 0.2, // Define a largura do campo DDD como 20% do espaço disponível
    marginRight: 10, // Adiciona um espaço maior entre o campo DDD e o campo de número
    borderBottomWidth: 2,
    borderBottomColor: "#9DA1AB",
    textAlign: "center", // Define o alinhamento do texto como centralizado
    color: "#9DA1AB",
  },
  numeroInput: {
    flex: 0.8, // Define a largura do campo Número como 80% do espaço disponível
    borderBottomWidth: 2,
    borderBottomColor: "#9DA1AB",
    color: "#9DA1AB",
  },
  button: {
    backgroundColor: "#FCFF74",
    paddingVertical: 14, // Reduz a altura do botão
    paddingHorizontal: 16, // Reduz o espaço interno horizontal do botão
    borderRadius: 24,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 150, // Define a largura do botão em pixels
  },
  buttonText: {
    color: "#000",
    fontSize: 12,
  },
  textLink: {
    marginTop: 30,
    alignItems: "center",
  },
  textInfo: {
    color: "#9DA1AB", // Define a cor do texto como cinza
    marginTop: 30,
    alignItems: "center",
  },
});

export default LoginUser;
