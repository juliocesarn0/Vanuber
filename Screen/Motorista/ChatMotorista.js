import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Footer from "../../components/FooterMotorista";

const ChatMotorista = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerMensagem}>
        <Image 
        source={require("../../assets/eu2.jpg")}
        style={styles.iconContato}
        />
        <Text style={styles.nomeContato}>Gabriela Sígolo</Text>
        <Text style={styles.mensagem}>Poderia me ajudar?</Text>
        <Text style={styles.hora}>8:10 PM</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity style={styles.containerMensagem2}>
        <Image 
        source={require("../../assets/ricardo.png")}
        style={styles.iconContato2}
        />
        <Text style={styles.nomeContato2}>Ricardo Leme</Text>
        <Text style={styles.mensagem2}>Olá, boa tarde!</Text>
        <Text style={styles.hora2}>6:10 PM</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity style={styles.containerMensagem3}>
        <Image 
        source={require("../../assets/usuario.png")}
        style={styles.iconContato3}
        />
        <Text style={styles.nomeContato3}>Júlio César</Text>
        <Text style={styles.mensagem3}>Olá, boa tarde!</Text>
        <Text style={styles.hora3}>6:10 PM</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: 'center'
  },
  iconContato: {
    width: 65, // Largura do círculo
    height: 65, // Altura do círculo
    borderRadius: 50,
    left: 10,
    top: 10
  },
  containerMensagem: {
    flexDirection: 'row',
    width: 330,
    height: 100,
    backgroundColor: "#F2F2F2",
    borderWidth: 0,
    marginTop: 20
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
    right: 30,
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
    left: 10,
    top: 10
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
    left: 10,
    top: 10
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
  
  
});

export default ChatMotorista;
