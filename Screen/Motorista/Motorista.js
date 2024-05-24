import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text
} from "react-native";
import Footer from "../../components/FooterMotorista";

const Motorista = () => {


  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <TouchableOpacity
            style={styles.containerDocumento}>
                <Image 
                source={require("../../assets/documentoIcon.png")}
                style={styles.documentoIcon}
                />
                <Text style={styles.documentoTxt}>
                    Documento do veículo
                    Válido até: 12/2024
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.containerIPVA}>
                <Image 
                source={require("../../assets/IPVAicon.png")}
                style={styles.ipvaIcon}
                />
                <Text style={styles.IPVAtxt}>
                    Licenciamento IPVA
                    Pago até: 12/2024
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.containerCNH}>
                <Image 
                source={require("../../assets/cnhIcon.png")}
                style={styles.cnhIcon}
                />
                <View style={styles.containerCNHTxt}>
                    <Text style={styles.cnhTxt}>CNH</Text>
                    <Text style={styles.validadeTxt}>
                        Válida até: 05/2026
                    </Text>
                </View>
            </TouchableOpacity>
        
        </View>

        <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1, // Garantir que o conteúdo ocupe o espaço disponível
    alignItems: 'center',
    paddingBottom: 100, // Adiciona um preenchimento inferior para que o conteúdo não fique atrás do footer
  },
  containerDocumento: {
    flexDirection: 'row',
    width: 310,
    height: 70,
    backgroundColor: '#FFF',
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.25, // Opacidade da sombra
    shadowRadius: 3.84, // Raio da sombra
    elevation: 5,
    borderRadius: 15,
    marginBottom: 20,
    marginTop: 20
  },
  documentoIcon: {
    width: 53,
    height: 53,
    marginLeft: 20,
    marginTop: 9
  },
  documentoTxt: {
    maxWidth: "50%",
    fontSize: 13,
    marginLeft: 20,
    marginTop: 15,
    color: "#8A898E",
    fontFamily: 'Poppins-Regular'
  },
  containerIPVA: {
    flexDirection: 'row',
    width: 310,
    height: 70,
    backgroundColor: '#FFF',
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.25, // Opacidade da sombra
    shadowRadius: 3.84, // Raio da sombra
    elevation: 5,
    borderRadius: 15,
  },
  ipvaIcon: {
    width: 50,
    height: 50,
    marginLeft: 20,
    marginTop: 9
  },
  IPVAtxt: {
    maxWidth: "45%",
    marginLeft: 20,
    marginTop: 15,
    color: "#8A898E",
    fontSize: 13,
    fontFamily: 'Poppins-Regular'
  },
  containerCNH: {
    flexDirection: 'row',
    width: 310,
    height: 70,
    backgroundColor: '#FFF',
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.25, // Opacidade da sombra
    shadowRadius: 3.84, // Raio da sombra
    elevation: 5,
    borderRadius: 15,
    marginTop: 20,

  },
  cnhIcon: {
    width: 50,
    height: 50,
    marginLeft: 20,
    marginTop: 9,
  },
  cnhTxt: {
    marginLeft: 20,
    marginTop: 13,
    color: "#8A898E",
    fontSize: 13,
    fontFamily: 'Poppins-Regular'
  },
  containerCNHTxt: {
    flexDirection: 'column',
  },
  validadeTxt: {
    marginLeft: 20,
    color: "#8A898E",
    fontSize: 13,
    fontFamily: 'Poppins-Regular'
  }
  
});

export default Motorista;
