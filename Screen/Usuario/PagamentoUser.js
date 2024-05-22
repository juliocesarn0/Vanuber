import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Switch } from "react-native";
import Footer from "../../components/FooterMotorista";
import Icon from "react-native-vector-icons/MaterialIcons";

const PagamentoUser = () => {

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
    <View style={styles.container}>
      <View style={styles.rectangleContainer}>
        <View style={styles.bigRectangle}>
        <TouchableOpacity style={styles.usuario}>
            <Image
                source={require("../../assets/usuario.png")}
                style={styles.fotoPassageiro}
              />
              <Text style={styles.nomePassageiro}>Gabriela</Text>
              <Icon
                name="keyboard-arrow-down"
                size={25}
                color="#000"
                style={styles.downVector}
              />
            </TouchableOpacity>

        <View style={styles.containerPrecoPagamento}>
            <View style={styles.preço}>
                <Text style={styles.precoTxt}>Preço</Text>
                <Text style={styles.valor}>R$ 1,00</Text>
            </View>
            <View style={styles.diaPagamento}>
                <Text style={styles.pagamentoTxt}>Dia de pagamento</Text>
                <Text style={styles.dia}>10</Text>
            </View>
        </View>

        <View style={styles.containerDoação}>
            <Text style={styles.ativarTxt}>Ativar Doação Recorrente</Text>
            <Text style={styles.inativoTxt}>Inativo</Text>
            <Switch  
                value={isEnabled}
                onValueChange={toggleSwitch}
                thumbColor="#FFDA1A"
                style={styles.toggle}
            />

        <View style={styles.informacao}>
            <Image 
                source={require("../../assets/iconInfo.png")}
                style={styles.iconInfo}
            />
            <Text style={styles.informacaoTxt}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </Text>
        </View>

        </View>
   
        <TouchableOpacity style={styles.btnPagarPix}>
            <Text style={styles.pagarPixTxt}>Pagar por pix</Text>
            <Icon
                name="chevron-right"
                size={25}
                color="#000"
                style={styles.rightVector}
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnUltimosPag}>
            <Text style={styles.ultimosTxt}>Ultimos pagamentos</Text>
            <Icon
                name="chevron-right"
                size={25}
                color="#000"
                style={styles.rightVectorUltimos}
            />
        </TouchableOpacity>
        

        </View>
      </View>

        <Footer />
        
      </View>
    );
}

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
        alignItems: "center",
        borderWidth: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3, // Adicionando elevação para sombra no Android
        marginTop: 20
      },
      usuario: {
        width: "87%",
        height: 55,
        backgroundColor: "#FFFF",
        flexDirection: 'row',
        marginTop: 40,
        borderWidth: 0,
        borderRadius: 10,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingTop: 9,
        justifyContent: 'space-between'
      },
      fotoPassageiro: {
        width: 30, // Largura do círculo
        height: 30, // Altura do círculo
        borderRadius: 50, // Metade da largura e altura para formar um círculo
        bottom: 5,
        top: 5,
        left: 15
      },
      nomePassageiro: {
        fontSize: 12,
        fontWeight: "black",
        fontFamily: "Poppins-Regular",
        top: 13,
      },
      downVector: {
        top: 10,
        right: 6
      },
      containerPrecoPagamento: {
        flexDirection: 'row',
        marginTop: 20,
      },
      preço: {
        right: 60,
        fontFamily: "Poppins-Regular",
      },
      diaPagamento: {
        left: 50,
        fontFamily: "Poppins-Regular",
      },
      dia: {
        left: 50,
        fontFamily: "Poppins-Regular",
        fontSize: 13,
        color: "#6E6E6E"
      },
      precoTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: 13,
        color: "#6E6E6E"
      },
      valor: {
        fontFamily: "Poppins-Regular",
        fontSize: 13,
        left: 1,
        color: "#6E6E6E"
      },
      pagamentoTxt: {
        fontFamily: "Poppins-Regular",
        fontSize: 13,
        color: "#6E6E6E"
      },
      containerDoação: {
        width: "90%",
        height: 150,
        borderRadius: 10,
        backgroundColor: "#FFF",
        borderWidth: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3, // Adicionando elevação para sombra no Android
        flexDirection: 'row',
        top: 40
      },
      toggle: {
        left: 48,
        bottom: 54
      },
      inativoTxt: {
        fontFamily: 'Poppins-Regular',
        left: 45,
        top: 10,
        fontSize: 13,
        color: "#777777"
      },
      ativarTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        left: 12,
        top: 10,
        color: "#9DA1AB"
      },
      informacao: {
        right: 250,
        top: 70,
        flexDirection: 'row',
        backgroundColor: "#F6EEF9",
        height: 60,
        width: "90%",
        borderRadius: 10
      },
      informacaoTxt: {
        fontSize: 10,
        maxWidth: "90%",
        left: 10,
        top: 5,
        fontFamily: 'Poppins-Regular'
      },
      iconInfo: {
        height: 30,
        width: 30,
        top: 13,
        left: 5
      },
      btnPagarPix: {
        top: 80,
        width: "90%",
        height: 45,
        backgroundColor: "#F2F2F2",
        borderRadius: 20,
      },
      pagarPixTxt: {
        left: 30,
        top: 11,
        fontSize: 14,
        fontFamily: 'Poppins-Regular'
      },
      rightVector: {
        bottom: 15,
        left: 270,
      },
      btnUltimosPag: {
        top: 100,
        width: "90%",
        height: 45,
        backgroundColor: "#F2F2F2",
        borderRadius: 20,
        flexDirection: 'row'
      },
      rightVectorUltimos: {
        left: 120,
        top: 10
      },
      ultimosTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        top: 10,
        left: 29
      }

});

export default PagamentoUser;