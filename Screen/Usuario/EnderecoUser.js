import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";

const EnderecoUser = () => {
  const navigation = useNavigation();
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");

  const handleContinuar = () => {
    // Aqui você pode implementar a lógica para validar ou enviar o endereço para outra tela
    // Por exemplo, você pode navegar para a tela "ListaMotorista.js" passando os dados do endereço como parâmetros

    // Navegar para a tela "ListaMotorista.js" após continuar
    navigation.navigate("ListaMotorista", { cep, rua, numero, bairro, cidade });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.formContainer}>
        <Text style={styles.label}>CEP:</Text>
        <TextInputMask
          style={styles.input}
          type={'custom'}
          options={{
            mask: '99999-999'
          }}
          value={cep}
          onChangeText={(formatted, extracted) => {
            setCep(extracted);
          }}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Rua:</Text>
        <TextInput
          style={styles.input}
          value={rua}
          onChangeText={(text) => setRua(text)}
        />
        <View style={styles.numeroBairroContainer}>
          <View style={[styles.inputContainer, { flex: 2 }]}>
            <Text style={styles.label}>Número:</Text>
            <TextInput
              style={styles.input}
              value={numero}
              onChangeText={(text) => setNumero(text)}
              keyboardType="numeric"
            />
          </View>
          <View style={[styles.inputContainer, { flex: 1, marginLeft: 10 }]}>
            <Text style={styles.label}>Bairro:</Text>
            <TextInput
              style={styles.input}
              value={bairro}
              onChangeText={(text) => setBairro(text)}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Cidade:</Text>
          <TextInput
            style={styles.input}
            value={cidade}
            onChangeText={(text) => setCidade(text)}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleContinuar}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 120,
  },
  formContainer: {
    marginBottom: 20,
    width: "100%",
  },
  label: {
    paddingTop: 24,
    fontSize: 12,
    color: "#8A898E",
  },
  inputContainer: {
    marginBottom: 20,
    width: "100%",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#8A898E",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    color: "#8A898E",
  },
  button: {
    backgroundColor: "#FCFF74",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 50,
  },
  buttonText: {
    color: "#515151",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  numeroBairroContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default EnderecoUser;
