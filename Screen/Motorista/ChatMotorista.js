import React, { useState }  from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Footer from "../../components/FooterMotorista";
import { useNavigation } from "@react-navigation/native";

const ChatMotorista = () => {

  const navigation = useNavigation();

  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleSelectMessage = (messageId) => {
    setSelectedMessage(messageId);
    if (messageId === 1) {
      navigation.navigate("OfertaMotorista");
    }
  };



  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <TouchableOpacity style={[
            styles.containerMensagem,
            selectedMessage === 1 && styles.selectedContainerMensagem,
          ]}
          onPress={() => handleSelectMessage(1)}
          >
        <Image 
        source={require("../../assets/eu2.jpg")}
        style={styles.iconContato}
        />
        <Text style={styles.nomeContato}>Gabriela Sígolo</Text>
        <Text style={styles.mensagem}>Olá, poderia verificar...</Text>
        <Text style={styles.hora}>8:10 PM</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity style={[
            styles.containerMensagem,
            selectedMessage === 2 && styles.selectedContainerMensagem,
          ]}
          onPress={() => handleSelectMessage(2)}>
        <Image 
        source={require("../../assets/ricardo.png")}
        style={styles.iconContato2}
        />
        <Text style={styles.nomeContato2}>Ricardo Leme</Text>
        <Text style={styles.mensagem2}>Olá, boa tarde!</Text>
        <Text style={styles.hora2}>6:10 PM</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity style={[
            styles.containerMensagem,
            selectedMessage === 3 && styles.selectedContainerMensagem,
          ]}
          onPress={() => handleSelectMessage(3)}>
        <Image 
        source={require("../../assets/usuario.png")}
        style={styles.iconContato3}
        />
        <Text style={styles.nomeContato3}>Júlio César</Text>
        <Text style={styles.mensagem3}>Olá, boa tarde!</Text>
        <Text style={styles.hora3}>6:10 PM</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity style={[
            styles.containerMensagem,
            selectedMessage === 4 && styles.selectedContainerMensagem,
          ]}
          onPress={() => handleSelectMessage(4)}>
        <Image 
        source={require("../../assets/motoristazinho.png")}
        style={styles.iconContato3}
        />
        <Text style={styles.nomeContato3}>Júlio César</Text>
        <Text style={styles.mensagem3}>Olá, boa tarde!</Text>
        <Text style={styles.hora3}>6:10 PM</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity style={[
            styles.containerMensagem,
            selectedMessage === 5 && styles.selectedContainerMensagem,
          ]}
          onPress={() => handleSelectMessage(5)}>
        <Image 
        source={require("../../assets/eu.jpg")}
        style={styles.iconContato3}
        />
        <Text style={styles.nomeContato4}>Grazielle</Text>
        <Text style={styles.mensagem4}>Olá, boa tarde!</Text>
        <Text style={styles.hora4}>11:10 PM</Text>
      </TouchableOpacity>
      </View>

      <Footer />

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  content: {
    flex: 1, // Garantir que o conteúdo ocupe o espaço disponível
    alignItems: 'center',
    paddingBottom: 100, // Adiciona um preenchimento inferior para que o conteúdo não fique atrás do footer
  },
  iconContato: {
    width: 65, // Largura do círculo
    height: 65, // Altura do círculo
    borderRadius: 50,
    marginLeft: 10,
    marginTop: 10,
  },
  containerMensagem: {
    flexDirection: 'row',
    width: "95%",
    height: 100,
    backgroundColor: "#F2F2F2",
    marginTop: 20,
    borderLeftWidth: 5,
    borderLeftColor: "transparent", // Borda transparente por padrão
    marginLeft: 0, // Remover margem à esquerda
  },
  nomeContato: {
    top: 20,
    left: 20,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14
  },
  mensagem: {
    top: 40,
    right: 87,
    color: "#8A898E",
    fontFamily: 'Montserrat-Medium',
    fontSize: 12
  },
  hora: {
    right: 45,
    top: 10
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    alignSelf: 'stretch',
    marginVertical: 1,
  },
  containerMensagem2: {
    flexDirection: 'row',
    width: 330,
    height: 100,
    backgroundColor: "#F2F2F2",
    borderWidth: 0,
    marginTop: 10
  },
  iconContato2: {
    width: 65, // Largura do círculo
    height: 65, // Altura do círculo
    borderRadius: 50,
    marginLeft: 10,
    marginTop: 10,
  },
  nomeContato2: {
    top: 20,
    left: 20,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14
  },
  mensagem2: {
    top: 40,
    right: 79,
    color: "#8A898E",
    fontFamily: 'Montserrat-Medium',
    fontSize: 12
  },
  hora2: {
    left: 10,
    top: 10
  },
  containerMensagem3: {
    flexDirection: 'row',
    width: 330,
    height: 100,
    backgroundColor: "#F2F2F2",
    borderWidth: 0,
    marginTop: 10
  },
  iconContato3: {
    width: 65, // Largura do círculo
    height: 65, // Altura do círculo
    borderRadius: 50,
    marginLeft: 10,
    marginTop: 10,
  },
  nomeContato3: {
    top: 20,
    left: 20,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14
  },
  mensagem3: {
    top: 40,
    right: 58,
    color: "#8A898E",
    fontFamily: 'Montserrat-Medium',
    fontSize: 12
  },
  hora3: {
    left: 30,
    top: 10
  },
  nomeContato4: {
    top: 20,
    left: 20,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14
  },
  mensagem4: {
    top: 40,
    right: 40,
    color: "#8A898E",
    fontFamily: 'Montserrat-Medium',
    fontSize: 12
  },
  hora4: {
    left: 40,
    top: 10
  },
  nomeContato5: {
    top: 20,
    left: 20,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14
  },
  mensagem5: {
    top: 40,
    right: 40,
    color: "#8A898E",
    fontFamily: 'Montserrat-Medium',
    fontSize: 12
  },
  hora5: {
    left: 40,
    top: 10
  },
  selectedContainerMensagem: {
    borderLeftColor: "#F2CB05", // Cor desejada para a seleção
  },
  
  
});

export default ChatMotorista;
