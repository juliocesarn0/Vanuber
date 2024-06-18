import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";
import UserContext from "../../context/UserContext";
import axios from "axios";

const EnderecoUser = () => {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  useEffect(() => {
    const buscarEndereco = async () => {
      const cleanedCep = cep.replace("-", "");
      console.log(`Verificando CEP: ${cleanedCep}`);
      if (cleanedCep.length === 8) {
        console.log(`Buscando endereço para o CEP: ${cleanedCep}`);
        try {
          const response = await fetch(
            `http://192.168.15.7:3000/api/cep/${cleanedCep}`
          );
          if (!response.ok) {
            throw new Error("Erro ao buscar o CEP");
          }

          const data = await response.json();
          console.log("Dados recebidos:", data);
          setRua(data.rua);
          setBairro(data.bairro);
          setCidade(data.cidade);
          setEstado(data.estado);
        } catch (error) {
          console.error("Erro ao buscar o endereço:", error);
          Alert.alert("Erro", "Não foi possível buscar o endereço");
        }
      } else {
        console.log("CEP inválido ou incompleto:", cleanedCep);
      }
    };

    buscarEndereco();
  }, [cep]);

  const handleContinuar = async () => {
    try {
      const response = await axios.post(
        "http://192.168.15.7:3000/api/enderecos",
        {
          userId: user._id,
          cep,
          rua,
          numero,
          bairro,
          cidade,
          estado,
        }
      );
      console.log("Endereço salvo com sucesso:", response.data);
      navigation.navigate("ListaMotorista", {
        cep,
        rua,
        numero,
        bairro,
        cidade,
      });
    } catch (error) {
      console.error("Erro ao salvar endereço:", error);
      Alert.alert("Erro", "Não foi possível salvar o endereço");
    }
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
          type={"custom"}
          options={{
            mask: "99999-999",
          }}
          value={cep}
          onChangeText={(formatted, extracted) => {
            console.log(
              `CEP digitado: ${formatted}, CEP extraído: ${extracted}`
            );
            setCep(formatted); // Usar o valor formatado diretamente
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
            <Text style={styles.label}>Bairro:</Text>
            <TextInput
              style={styles.input}
              value={bairro}
              onChangeText={(text) => setBairro(text)}
            />
          </View>
          <View style={[styles.inputContainer, { flex: 1, marginLeft: 10 }]}>
            <Text style={styles.label}>Número:</Text>
            <TextInput
              style={styles.input}
              value={numero}
              onChangeText={(text) => setNumero(text)}
              keyboardType="numeric"
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
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Estado:</Text>
          <TextInput
            style={styles.input}
            value={estado}
            editable={false} // Estado não editável
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
