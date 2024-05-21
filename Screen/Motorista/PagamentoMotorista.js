import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Platform } from "react-native";
import Footer from "../../components/FooterMotorista";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';


const PagamentoMotorista = () => {
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

            <View style={styles.preçoStatus}>
                <Text style={styles.text}>Preço</Text>
                <Text style={styles.text}>Pagamento</Text>
            </View>
            <View style={styles.valorEmDia}>
                <Text style={styles.valor}>R$ 1,00</Text>
                <Text style={styles.emDia}>em dia</Text>
            </View>

            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textBtn}>Solicitar aumento</Text>  
                    <Icon
                        name="chevron-right"
                        size={25}
                        color="#000"
                        style={styles.rightVector}
                    />  
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textBtn}>Ultimos pagamentos</Text>   
                    <Icon
                        name="chevron-right"
                        size={25}
                        color="#000"
                        style={styles.rightVector}
                    />  
                </TouchableOpacity>
            </View>
        </View>
      </View>

        <Footer />
        
      </View>
    );
};

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
      preçoStatus: {
        flexDirection: 'row',
      },
      text: {
        margin: 58,
        marginBottom: 2,
        marginTop: 19,
        fontFamily: 'Poppins-Regular'
      },
      valorEmDia: {
        flexDirection: 'row',
      },
      valor: {
        right: 70,
        fontFamily: "Poppins-Regular",
      },
      emDia: {
        left: 50,
        fontFamily: "Poppins-Regular",
        color: '#42FF00'
      },
      containerButtons: {
        marginTop: 170,
        backgroundColor: '#FFFF',
        width: "90%",
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
      },
      button: {
        backgroundColor: '#F2F2F2',
        width: "100%",
        height: 50,
        margin: 8,
        borderRadius: 24
      },
      textBtn: {
        marginLeft: 30,
        marginTop: 12,
        fontFamily: 'Poppins-Regular',
        fontSize: 14
      },
      rightVector: {
        bottom: 25,
        left: 270,
      }

});

export default PagamentoMotorista;
