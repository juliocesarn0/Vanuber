import React, { useState, useEffect, useContext } from "react";
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
import axios from "axios";
import MotoristaContext from "../../context/MotoristaContext";

const BairroMotorista = () => {
  const navigation = useNavigation();
  const { motorista } = useContext(MotoristaContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [cidade, setCidade] = useState("");
  const [cidades, setCidades] = useState([]);
  const [carregandoCidades, setCarregandoCidades] = useState(false);
  const [bairro, setBairro] = useState("");
  const [bairros, setBairros] = useState([]);
  const [carregandoBairros, setCarregandoBairros] = useState(false);
  const [selectedBairros, setSelectedBairros] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    if (modalVisible && cidade.length >= 3) {
      buscarCidades();
    } else {
      setCidades([]);
    }
  }, [modalVisible, cidade]);

  useEffect(() => {
    if (bairro.length >= 3 && cidade.length > 0) {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
      const timeout = setTimeout(() => {
        buscarBairros();
      }, 300);
      setSearchTimeout(timeout);
    } else {
      setBairros([]);
    }
  }, [bairro]);

  const buscarCidades = async () => {
    setCarregandoCidades(true);
    try {
      const response = await fetch(
        `http://192.168.15.7:3000/api/cidades/SP?q=${cidade}`
      );
      const data = await response.json();
      console.log("Cidades encontradas:", data);
      setCidades(data);
    } catch (error) {
      console.error("Erro ao buscar cidades:", error);
    } finally {
      setCarregandoCidades(false);
    }
  };

  const buscarBairros = async () => {
    setCarregandoBairros(true);
    try {
      const response = await fetch(
        `http://192.168.15.7:3000/api/bairros?cidade=${cidade}`
      );
      if (!response.ok) {
        throw new Error("Erro ao buscar bairros: " + response.statusText);
      }
      const data = await response.json();
      console.log("Bairros encontrados:", data);
      setBairros(
        data.filter((b) => b.toLowerCase().includes(bairro.toLowerCase()))
      );
    } catch (error) {
      console.error("Erro ao buscar bairros:", error);
      Alert.alert("Erro", "Não foi possível buscar os bairros");
    } finally {
      setCarregandoBairros(false);
    }
  };

  const handleCidadeSelecionada = (cidadeNome) => {
    setCidade(cidadeNome);
    setCidades([]);
  };

  const handleBairroSelecionado = (bairroNome) => {
    setBairro(bairroNome);
    setBairros([]);
  };

  const handleAcrescentar = () => {
    setSelectedBairros((prevBairros) => [...prevBairros, { cidade, bairro }]);
    setModalVisible(false);
  };

  const handleOpenModal = () => {
    setCidade("");
    setBairro("");
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleContinuar = async () => {
    try {
      if (!motorista || !motorista._id) {
        console.error(
          "Motorista não encontrado ou ID do motorista está faltando"
        );
        return;
      }

      const motoristaId = motorista._id;
      const bairrosData = selectedBairros;

      console.log("Dados dos bairros enviados para atualização:", bairrosData);

      const response = await axios.put(
        `http://192.168.15.7:3000/api/motoristas/${motoristaId}/bairros`,
        { bairros: bairrosData }
      );

      if (response.status === 200) {
        console.log(
          "Dados dos bairros do motorista atualizados com sucesso:",
          response.data
        );
      }
    } catch (error) {
      console.error("Erro ao atualizar bairros do motorista:", error);
    }

    navigation.navigate("ConfirmacaoMotorista");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonAdd} onPress={handleOpenModal}>
        <Text style={[styles.buttonAddText, { lineHeight: 40 }]}>
          Acrescentar bairros
        </Text>
        <Image
          source={require("../../assets/adicionar.png")}
          style={styles.icon}
        />
      </TouchableOpacity>

      <FlatList
        data={selectedBairros}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.selectedBairroItem}>
            <Text style={styles.selectedBairroText}>
              {item.cidade} - {item.bairro}
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

              <Text style={styles.bairro}>Bairro:</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setBairro(text)}
                value={bairro}
                placeholder="Digite o bairro"
              />
              {carregandoBairros ? (
                <ActivityIndicator size="small" color="#0000ff" />
              ) : (
                <FlatList
                  data={bairros}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => handleBairroSelecionado(item)}
                    >
                      <Text style={styles.bairroItem}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              )}
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
  bairroItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  selectedBairroItem: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  selectedBairroText: {
    fontSize: 16,
    color: "#333",
  },
});

export default BairroMotorista;
