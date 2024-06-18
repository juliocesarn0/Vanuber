import React, { useContext, useState } from "react";
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
import MotoristaContext from "../../context/MotoristaContext";

const DocumentosMotorista = () => {
  const navigation = useNavigation();
  const { updateMotorista } = useContext(MotoristaContext);
  const [cnh, setCnh] = useState("");
  const [renavam, setRenavam] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [cor, setCor] = useState("");

  const handleContinuar = () => {
    console.log("CNH:", cnh);
    console.log("Renavam:", renavam);
    console.log("Modelo:", modelo);
    console.log("Ano:", ano);
    console.log("Cor:", cor);

    updateMotorista({ cnh, renavam, modelo, ano, cor });
    navigation.navigate("DestinosMotorista");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.formContainer}>
        <Text style={styles.label}>CNH:</Text>
        <TextInput
          style={styles.input}
          value={cnh}
          onChangeText={setCnh}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Renavam:</Text>
        <TextInput
          style={styles.input}
          value={renavam}
          onChangeText={setRenavam}
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
            <TextInput
              style={styles.input}
              value={ano}
              onChangeText={setAno}
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
