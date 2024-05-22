import React, {useState} from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from "react-native"
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"; // Importe o ícone desejado
import FooterUser from "../../components/FooterUser";

const CarteiraUser = () => {

    const navigation = useNavigation();

    return (
    <View style={styles.container}>
      <View style={styles.rectangleContainer}>
        <View style={styles.bigRectangle}>
          <Text style={styles.valor}>R$ 1,00 </Text>
          <TouchableOpacity style={styles.usuario} onPress={() => navigation.navigate('PagamentoUser')}>
            <Image
                source={require("../../assets/usuario.png")}
                style={styles.fotoPassageiro}
              />
              <Text style={styles.nomePassageiro}>Gabriela</Text>
              <Icon
                name="chevron-right"
                size={20}
                color="#000"
                style={styles.rightVector}
              />
            </TouchableOpacity>

            <Text style={styles.pagamentoTxt}>Formas de pagamento</Text>
            <View style={styles.pagamentoContainer}>
              <TouchableOpacity style={styles.buttonCartao}>
                <Image
                  source={require('../../assets/logo_mastercard.png')}
                  style={styles.logoMastercard}
                />
                <Text style={styles.numeroCartao}>****-1234</Text>
                <Icon
                name="chevron-right"
                size={20}
                color="#000"
                style={styles.rightVectorPagamento}
              />
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonAdicionar}>
                <Text style={styles.adicionarTxt}>Adicionar cartão</Text>
                <Image
                  source={require("../../assets/iconAdd.png")}
                  style={styles.iconAdd}
                />
              </TouchableOpacity>
            </View>
        </View>
    </View>
    <FooterUser />
</View>
)}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF",
    },
    rectangleContainer: {
        flex: 4,
        justifyContent: "center",
        alignItems: "center",
      },
      bigRectangle: {
        width: "90%",
        height: "100%",
        backgroundColor: "#FFFF",
        borderRadius: 35,
        borderWidth: 0,
        position: "relative",
        shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
        shadowOpacity: 0.25, // Opacidade da sombra
        shadowRadius: 3.84, // Raio da sombra,
        elevation: 5,
        marginHorizontal: 30,
        marginVertical: 30,
        marginBottom: 10
      },
      valor: {
        margin: 10,
        fontFamily: 'Poppins-Regular',
        marginLeft: 30,
        marginTop: 30,
      },
      fotoPassageiro: {
        width: 30, // Largura do círculo
        height: 30, // Altura do círculo
        borderRadius: 50, // Metade da largura e altura para formar um círculo
        bottom: 5,
        top: 10,
        left: 15
      },
      nomePassageiro: {
        fontSize: 12,
        fontWeight: "black",
        fontFamily: "Poppins-Regular",
        top: 18,
        left: 90
      },
      rightVector: {
        top: 16,
        left: 200,
      },
      usuario: {
        width: "90%",
        height: 55,
        left: 20,
        backgroundColor: "#FFF",
        flexDirection: 'row',
        marginTop: 40,
        borderWidth: 0,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
        shadowOpacity: 0.25, // Opacidade da sombra
        shadowRadius: 3.84, // Raio da sombra,
        elevation: 5,
      },
      logoMastercard: {
        width: 24,
        height: 20,
        top: 19,
        left: 20
      },
      pagamentoContainer: {
        top: 97,
        alignItems: 'center',

      },
      buttonCartao: {
        flexDirection: 'row',
        width: "90%",
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#DEE2E6',
        marginBottom: 20
      },
      numeroCartao: {
        top: 20,
        left: 35
      },
      rightVectorPagamento: {
        top: 20,
        left: 200
      },
      pagamentoTxt: {
        left: 25,
        top: 80,
        fontFamily: 'Poppins-Regular',
        fontSize: 14
      },
      iconAdd: {
        width: 30,
        height: 30,
        left: 156,
        top: 15
      },
      buttonAdicionar: {
        flexDirection: 'row',
        width: "90%",
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#DEE2E6'

      },
      adicionarTxt: {
        left: 90,
        top: 20,
        fontFamily: 'Poppins-Regular',
        fontSize: 13
      }
      

})

export default CarteiraUser;