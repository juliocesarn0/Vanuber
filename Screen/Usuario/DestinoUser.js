import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"; // Importe o ícone desejado
import EnderecoUserScreen from "./EnderecoUser";


const DestinoUser = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState(""); // Estado para armazenar o nome inserido
  const [periodoOptionsVisible, setPeriodoOptionsVisible] = useState(false);
  const [periodo, setPeriodo] = useState(""); // Estado para armazenar o período selecionado

  const handleBuscarDestino = () => {
    navigation.navigate("EnderecoUser"); // Navega para o componente EnderecoUser
  };

  const selectPeriodo = (value) => {
    setPeriodo(value);
    setPeriodoOptionsVisible(false);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Comportamento para ajustar a visualização quando o teclado é exibido
    >
      <View style={styles.formContainer}>
        <Text style={styles.label}>Cidade:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <Text style={styles.label}>Local:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={(text) => setLocal(text)}
        />
        <Text style={styles.label}>Período:</Text>
        <TouchableOpacity
          style={styles.input}
          onPress={() => setPeriodoOptionsVisible(true)}
        >
          <Text style={styles.periodoText}>{periodo}</Text>
          <Icon
            name="caret-down"
            size={20}
            color="#8A898E"
            style={styles.caretIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Modal para exibir opções de período */}
      <Modal
        visible={periodoOptionsVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setPeriodoOptionsVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.modalOption}
            onPress={() => selectPeriodo("Manhã")}
          >
            <Text style={styles.modalOptionText}>Manhã</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalOption}
            onPress={() => selectPeriodo("Tarde")}
          >
            <Text style={styles.modalOptionText}>Tarde</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalOption}
            onPress={() => selectPeriodo("Noite")}
          >
            <Text style={styles.modalOptionText}>Noite</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <TouchableOpacity style={styles.button} onPress={handleBuscarDestino}>
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
    fontFamily: "Montserrat-Medium"
  },
  input: {
    flexDirection: "row", // Manter o layout padrão de linha
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#8A898E",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: "#8A898E",
  },
  periodoText: {
    flex: 1, // Ocupa o espaço restante no TextInput
    color: "#8A898E",
  },
  caretIcon: {
    marginLeft: "auto", // Move o ícone para a direita
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
  modalContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalOption: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#8A898E",
    width: "100%",
  },
  modalOptionText: {
    fontSize: 16,
    color: "#333333",
  },
});

export default DestinoUser;
