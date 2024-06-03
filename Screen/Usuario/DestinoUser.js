import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const estados = [
  { sigla: "AC", nome: "Acre" },
  { sigla: "AL", nome: "Alagoas" },
  { sigla: "AP", nome: "Amapá" },
  { sigla: "AM", nome: "Amazonas" },
  { sigla: "BA", nome: "Bahia" },
  { sigla: "CE", nome: "Ceará" },
  { sigla: "DF", nome: "Distrito Federal" },
  { sigla: "ES", nome: "Espírito Santo" },
  { sigla: "GO", nome: "Goiás" },
  { sigla: "MA", nome: "Maranhão" },
  { sigla: "MT", nome: "Mato Grosso" },
  { sigla: "MS", nome: "Mato Grosso do Sul" },
  { sigla: "MG", nome: "Minas Gerais" },
  { sigla: "PA", nome: "Pará" },
  { sigla: "PB", nome: "Paraíba" },
  { sigla: "PR", nome: "Paraná" },
  { sigla: "PE", nome: "Pernambuco" },
  { sigla: "PI", nome: "Piauí" },
  { sigla: "RJ", nome: "Rio de Janeiro" },
  { sigla: "RN", nome: "Rio Grande do Norte" },
  { sigla: "RS", nome: "Rio Grande do Sul" },
  { sigla: "RO", nome: "Rondônia" },
  { sigla: "RR", nome: "Roraima" },
  { sigla: "SC", nome: "Santa Catarina" },
  { sigla: "SP", nome: "São Paulo" },
  { sigla: "SE", nome: "Sergipe" },
  { sigla: "TO", nome: "Tocantins" },
];

const DestinoUser = () => {
  const navigation = useNavigation();
  const [estado, setEstado] = useState("SP");
  const [cidadeBusca, setCidadeBusca] = useState("");
  const [cidades, setCidades] = useState([]);
  const [local, setLocal] = useState("");
  const [periodoOptionsVisible, setPeriodoOptionsVisible] = useState(false);
  const [periodo, setPeriodo] = useState("");
  const [carregandoCidades, setCarregandoCidades] = useState(false);
  const [escolasUniversidades, setEscolasUniversidades] = useState([]);
  const [carregandoEscolasUniversidades, setCarregandoEscolasUniversidades] =
    useState(false);

  const handleBuscarDestino = () => {
    navigation.navigate("EnderecoUser");
  };

  const selectPeriodo = (value) => {
    setPeriodo(value);
    setPeriodoOptionsVisible(false);
  };

  const handleCidadeSelecionada = (cidadeNome) => {
    setCidadeBusca(cidadeNome); // Atualiza o campo de busca com o nome da cidade selecionada
    setCidades([]); // Limpa a lista de sugestões
  };

  useEffect(() => {
    const buscarCidades = async () => {
      if (estado && cidadeBusca.length >= 3) {
        setCarregandoCidades(true);
        try {
          const response = await fetch(
            `http://192.168.15.7:3000/api/cidades/${estado}?q=${cidadeBusca}`
          );
          const data = await response.json();
          setCidades(data);
        } catch (error) {
          console.error("Erro ao buscar cidades:", error);
        } finally {
          setCarregandoCidades(false);
        }
      } else {
        setCidades([]);
      }
    };

    const debounceTimeout = setTimeout(buscarCidades, 300);

    return () => clearTimeout(debounceTimeout);
  }, [estado, cidadeBusca]);

  useEffect(() => {
    const buscarEscolasUniversidades = async () => {
      if (cidadeBusca && estado) {
        setCarregandoEscolasUniversidades(true);
        try {
          const response = await fetch(
            `http://192.168.15.7:3000/api/escolas-universidades?estado=${estado}&cidade=${cidadeBusca}`
          );
          if (!response.ok) {
            throw new Error(
              "Erro ao buscar escolas e universidades: " + response.status
            );
          }
          const data = await response.json();
          const escolas = data.escolas[1]; // Obtendo o array de escolas da resposta
          const universidades = data.universidades; // Obtendo o array de universidades da resposta
          setEscolasUniversidades([...escolas, ...universidades]); // Combinando as listas
        } catch (error) {
          console.error(error);
          setEscolasUniversidades([]);
        } finally {
          setCarregandoEscolasUniversidades(false);
        }
      } else {
        setEscolasUniversidades([]);
      }
    };

    const debounceTimeout = setTimeout(buscarEscolasUniversidades, 300);

    return () => clearTimeout(debounceTimeout);
  }, [estado, cidadeBusca]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.formContainer}>
        <Text style={styles.label}>Estado:</Text>
        <Picker
          style={styles.input}
          selectedValue={estado}
          onValueChange={(itemValue) => setEstado(itemValue)}
        >
          {estados.map((estado) => (
            <Picker.Item
              key={estado.sigla}
              label={estado.nome}
              value={estado.sigla}
            />
          ))}
        </Picker>

        <Text style={styles.label}>Cidade:</Text>
        <TextInput
          style={styles.input}
          value={cidadeBusca}
          onChangeText={(text) => setCidadeBusca(text)}
          placeholder="Digite o nome da cidade"
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
            ListEmptyComponent={() =>
              !carregandoCidades && cidadeBusca.length >= 3 ? (
                <Text style={styles.nenhumaCidadeEncontrada}>
                  Nenhuma cidade encontrada
                </Text>
              ) : null
            }
          />
        )}
        <Text style={styles.label}>Local (Escolas/Universidades):</Text>
        <TextInput
          style={styles.input}
          value={local}
          onChangeText={(text) => setLocal(text)}
          placeholder="Digite para buscar escolas e universidades"
        />

        {carregandoEscolasUniversidades ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <FlatList
            data={escolasUniversidades}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Text style={styles.escolaItem}>
                {item.nome ? item.nome : item.facul}
              </Text>
            )}
            ListEmptyComponent={() =>
              !carregandoEscolasUniversidades && local.length >= 3 ? (
                <Text style={styles.nenhumaEscolaEncontrada}>
                  Nenhuma escola ou universidade encontrada
                </Text>
              ) : null
            }
          />
        )}

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
    fontFamily: "Montserrat-Medium",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#8A898E",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: "#8A898E",
  },
  periodoText: {
    flex: 1,
    color: "#8A898E",
  },
  caretIcon: {
    marginLeft: "auto",
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
  cidadeItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  nenhumaCidadeEncontrada: {
    textAlign: "center",
    marginTop: 10,
  },
  escolaItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  nenhumaEscolaEncontrada: {
    textAlign: "center",
    marginTop: 10,
  },
});

export default DestinoUser;
