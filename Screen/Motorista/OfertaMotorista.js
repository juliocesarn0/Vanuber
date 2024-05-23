import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Footer from "../../components/FooterMotorista";

const OfertaMotorista = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <Image 
        source={require("../../assets/eu2.jpg")}
        style={styles.iconUser}
      />
        <View style={styles.containerMensagemUsuario}>
          <Text style={styles.mensagemUsuario}>Olá, poderia verificar a disponibilidade do meu endereço?</Text>
        </View>
        <View style={styles.containerMensagemMotorista}>
          <Text style={styles.mensagemMotorista}>Claro, só um instante...</Text>
        </View>

        <TouchableOpacity style={styles.ofertaBtn}>
          <Text style={styles.ofertaBtnTxt}>OFERECER OFERTA</Text>
        </TouchableOpacity>

        <View style={styles.caixaDeMensagem}>
                <Text style={styles.caixaTxt}>Mensagem</Text>
                <TouchableOpacity>
                    <Image 
                        source={require("../../assets/icon-audio.png")}
                        style={styles.iconAudio}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                        source={require("../../assets/iconEnviar.png")}
                        style={styles.iconEnviar}
                    />
                </TouchableOpacity>
            </View>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    },
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    mensagemUsuario: {
      fontFamily: 'Poppins-Regular',
      fontSize: 12,
      left: 10,
      top: 6,
      maxWidth: "85%",
    },
    containerMensagemUsuario: {
      width: 252,
      height: 50,
      backgroundColor: '#E2E2E2',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      borderBottomRightRadius: 25,
      bottom: 80,
      right: 15
    },
    iconUser: {
      width: 30, // Largura do círculo
      height: 30, // Altura do círculo
      borderRadius: 50, // Metade da largura e altura para formar um círculo
      right: 160,
      bottom: 5
    },
    containerMensagemMotorista: {
      width: 205,
      height: 50,
      borderTopLeftRadius: 25,
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
      backgroundColor: "#E2E2E2",
      bottom: 50,
      left: 66
    },
    mensagemMotorista: {
      fontFamily: 'Poppins-Regular',
      fontSize: 12,
      left: 15,
      top: 15,
    },
    ofertaBtn: {
      top: 280,
      width: "90%",
      backgroundColor: "#F2E205",
      height: 55,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },
    ofertaBtnTxt: {
      fontFamily: 'Montserrat-Medium',
      fontWeight: 'bold',
      fontSize: 15
    },
    caixaDeMensagem: {
      flexDirection: 'row',
      width: "90%",
      height: 50,
      backgroundColor: '#FFF',
      top: 299,
      shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderRadius: 45,
      },
      iconAudio: {
          width: 30,
          height: 30,
          left: 180,
          top: 10
      },
      iconEnviar: {
          width: 20,
          height: 20,
          left: 195,
          top: 15
      },
      caixaTxt: {
          left: 20,
          color: "#A1A1A1",
          fontSize: 14,
          fontFamily: 'Poppins-Regular',
          top: 14
      }
  });
  
export default OfertaMotorista;