import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";

const DocumentosMotorista = () => {
  const navigation = useNavigation();
  const [cnh, setCnh] = useState("");
  const [renavam, setRenavam] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [cor, setCor] = useState("");

  const handleContinuar = () => {
    // Implemente aqui a lógica para validação ou envio dos documentos para outra tela
    // Por exemplo, você pode navegar para a tela "DestinosMotorista.js" passando os dados como parâmetros

    // Navegar para a próxima tela após continuar
    navigation.navigate("DestinosMotorista", {
      cnh,
      renavam,
      modelo,
      ano,
      cor,
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.formContainer}>
        <Text style={styles.label}>CNH:</Text>
        <TextInputMask
          style={styles.input}
          type={"custom"}
          options={{
            mask: "99999999999",
          }}
          value={cnh}
          onChangeText={(formatted, extracted) => {
            setCnh(extracted);
          }}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Renavam:</Text>
        <TextInputMask
          style={styles.input}
          type={"custom"}
          options={{
            mask: "99999999999",
          }}
          value={renavam}
          onChangeText={(formatted, extracted) => {
            setRenavam(extracted);
          }}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Modelo:</Text>
        <TextInput
          style={styles.input}
          value={modelo}
          onChangeText={setModelo}
        />

        <View style={styles.row}>
          <View style={styles.columnAno}>
            <Text style={styles.label}>Ano:</Text>
            <TextInputMask
              style={styles.input}
              type={"custom"}
              options={{
                mask: "9999",
              }}
              value={ano}
              onChangeText={(formatted, extracted) => {
                setAno(extracted);
              }}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.columnCor}>
            <Text style={styles.label}>Cor:</Text>
            <TextInput style={styles.input} value={cor} onChangeText={setCor} />
          </View>
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  columnAno: {
    flex: 1,
    marginRight: 10,
  },
  columnCor: {
    flex: 2,
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
});

export default DocumentosMotorista;
