import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

const DestinoMotorista = ({ route }) => {
  const navigation = useNavigation();
  const { cnh, renavam, modelo, ano, cor } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [cidade, setCidade] = useState("");
  const [cidades, setCidades] = useState([]);
  const [carregandoCidades, setCarregandoCidades] = useState(false);
  const [local, setLocal] = useState("");
  const [locais, setLocais] = useState([]);
  const [carregandoLocais, setCarregandoLocais] = useState(false);
  const [periodo, setPeriodo] = useState("");
  const [escolasUniversidades, setEscolasUniversidades] = useState([]);
  const [carregandoEscolasUniversidades, setCarregandoEscolasUniversidades] =
    useState(false);
  const [selectedLocais, setSelectedLocais] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    if (modalVisible && cidade.length >= 3) {
      buscarCidades();
    } else {
      setCidades([]);
    }
  }, [modalVisible, cidade]);

  useEffect(() => {
    if (local.length >= 3) {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
      const timeout = setTimeout(() => {
        buscarEscolasUniversidades();
      }, 300);
      setSearchTimeout(timeout);
    } else {
      setEscolasUniversidades([]);
    }
  }, [local]);

  const buscarCidades = async () => {
    setCarregandoCidades(true);
    try {
      const response = await fetch(
        `http://192.168.15.7:3000/api/cidades/SP?q=${cidade}`
      );
      const data = await response.json();
      setCidades(data);
    } catch (error) {
      console.error("Erro ao buscar cidades:", error);
    } finally {
      setCarregandoCidades(false);
    }
  };

  const buscarEscolasUniversidades = async () => {
    setCarregandoEscolasUniversidades(true);
    try {
      const response = await fetch(
        `http://192.168.15.7:3000/api/escolas-universidades?estado=SP&cidade=${cidade}&q=${local}`
      );
      if (!response.ok) {
        throw new Error(
          "Erro ao buscar escolas e universidades: " + response.statusText
        );
      }
      const data = await response.json();
      const locaisFiltrados = [...data.escolas, ...data.universidades].filter(
        (item) => item.nome.toLowerCase().includes(local.toLowerCase())
      );
      setEscolasUniversidades(locaisFiltrados);
    } catch (error) {
      console.error("Erro ao buscar escolas e universidades:", error);
      Alert.alert("Erro", "Não foi possível buscar escolas e universidades");
    } finally {
      setCarregandoEscolasUniversidades(false);
    }
  };

  const handleCidadeSelecionada = (cidadeNome) => {
    setCidade(cidadeNome);
    setCidades([]);
  };

  const handleLocalSelecionado = (localNome) => {
    setLocal(localNome);
    setEscolasUniversidades([]);
  };

  const handleAcrescentar = () => {
    setSelectedLocais((prevLocais) => [
      ...prevLocais,
      { cidade, local, periodo },
    ]);
    setModalVisible(false);
  };

  const handleOpenModal = () => {
    setCidade("");
    setLocal("");
    setPeriodo("");
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleContinuar = () => {
    navigation.navigate("BairroMotorista");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonAdd} onPress={handleOpenModal}>
        <Text style={[styles.buttonAddText, { lineHeight: 40 }]}>
          Acrescentar
        </Text>
        <Image
          source={require("../../assets/adicionar.png")}
          style={styles.icon}
        />
      </TouchableOpacity>

      <FlatList
        data={selectedLocais}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.selectedLocalItem}>
            <Text style={styles.selectedLocalText}>
              {item.cidade} - {item.local} ({item.periodo})
            </Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={handleContinuar}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.fechar} onPress={handleCloseModal}>
              <Text>X</Text>
            </TouchableOpacity>
            <View style={styles.containerForm}>
              <Text style={styles.cidade}>Cidade:</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setCidade(text)}
                value={cidade}
                placeholder="Digite a cidade"
              />
              {carregandoCidades ? (
                <ActivityIndicator size="small" color="#0000ff" />
              ) : (
                <FlatList
                  data={cidades}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => handleCidadeSelecionada(item.nome)}
                    >
                      <Text style={styles.cidadeItem}>{item.nome}</Text>
                    </TouchableOpacity>
                  )}
                />
              )}

              <Text style={styles.bairro}>Local (Escola/Universidade):</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setLocal(text)}
                value={local}
                placeholder="Digite o local"
              />
              {carregandoEscolasUniversidades ? (
                <ActivityIndicator size="small" color="#0000ff" />
              ) : (
                <FlatList
                  data={escolasUniversidades}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => handleLocalSelecionado(item.nome)}
                    >
                      <Text style={styles.localItem}>{item.nome}</Text>
                    </TouchableOpacity>
                  )}
                />
              )}

              <Text style={styles.periodo}>Período:</Text>
              <Picker
                selectedValue={periodo}
                style={styles.picker}
                onValueChange={(itemValue) => setPeriodo(itemValue)}
              >
                <Picker.Item label="Manhã" value="manhã" />
                <Picker.Item label="Tarde" value="tarde" />
                <Picker.Item label="Noite" value="noite" />
              </Picker>
            </View>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleAcrescentar}
            >
              <Text style={styles.modalButtonText}>Acrescentar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  buttonAdd: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#F2F2F2",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 50,
    height: 50,
  },
  buttonAddText: {
    color: "#6E6E6E",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: 0,
    flex: 1,
  },
  icon: {
    width: 20,
    height: 20,
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
  picker: {
    width: "100%",
    height: 40,
    marginBottom: 20,
    borderWidth: 0,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 46,
    padding: 30,
    paddingVertical: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
  },
  cidade: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#8A898E",
  },
  bairro: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#8A898E",
  },
  periodo: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#8A898E",
  },
  input: {
    width: "100%",
    height: 20,
    margin: 10,
    marginLeft: 0,
    borderBottomColor: "#484558",
    borderBottomWidth: 1,
  },
  modalButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    backgroundColor: "#F5EE25",
    height: 35,
    borderRadius: 24,
    marginTop: 20,
  },
  containerForm: {
    alignItems: "left",
    width: "100%",
  },
  modalButtonText: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
  },
  fechar: {
    color: "#F2F2F2",
    left: "50%",
    bottom: 15,
  },
  cidadeItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  localItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  selectedLocalItem: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  selectedLocalText: {
    fontSize: 16,
    color: "#333",
  },
});

export default DestinoMotorista;
