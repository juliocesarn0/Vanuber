import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import FooterUser from '../../components/FooterUser';

const MotoristaUser = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.motorista}>
                    <Image 
                        source={require('../../assets/ricardo.png')}
                        style={styles.fotoMotorista}
                    />
                    <View style={styles.containerNomeFacul}>
                        <Text style={styles.nomeMotorista}>
                            Alberto da Silva
                        </Text>
                        <Text style={styles.nomeFacul}>
                            USP
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.cancelarBtn1}>
                        <Text style={styles.cancelarBtnTxt}>Cancelar</Text>
                    </TouchableOpacity> 
                </View>

                <View style={styles.motorista}>
                    <Image 
                        source={require('../../assets/usuario.png')}
                        style={styles.fotoMotorista}
                    />
                    <View style={styles.containerNomeFacul}>
                        <Text style={styles.nomeMotorista}>
                            Roberto Souza
                        </Text>
                        <Text style={styles.nomeFacul}>
                            Fatec
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.cancelarBtn2}>
                        <Text style={styles.cancelarBtnTxt}>Cancelar</Text>
                    </TouchableOpacity> 
                </View>

                <View style={styles.motorista}>
                    <Image 
                        source={require('../../assets/motorista.png')}
                        style={styles.fotoMotorista}
                    />
                    <View style={styles.containerNomeFacul}>
                        <Text style={styles.nomeMotorista}>
                            Leonardo Rodrigues
                        </Text>
                        <Text style={styles.nomeFacul}>
                            PUC
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.cancelarBtn3}>
                        <Text style={styles.cancelarBtnTxt}>Cancelar</Text>
                    </TouchableOpacity> 
                </View>
            </View>

            <FooterUser />
        </View>
    );
}

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
      motorista: {
        width: "85%",
        height: 80,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        marginTop: 30,
        borderRadius: 15,
        shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
        shadowOpacity: 0.25, // Opacidade da sombra
        shadowRadius: 3.84, // Raio da sombra
        elevation: 5,
      },
      fotoMotorista: {
        width: 60, // Largura do círculo
        height: 60, // Altura do círculo
        borderRadius: 50, // Metade da largura e altura para formar um círculo
        left: 10,
        top: 10
      },
      nomeMotorista: {
        left: 20,
        top: 15,
        fontFamily: 'Montserrat-Medium',
        fontSize: 13
      },
      cancelarBtn1: {
        left: 80,
        top: 15,
      },
      cancelarBtn2: {
        left: 90,
        top: 15,
      },
      cancelarBtnTxt: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        color: '#FF0000'
      },
      nomeFacul: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        top: 15,
        left: 20
      },
      containerNomeFacul: {
        flexDirection: 'column'
      },
      cancelarBtn3: {
        left: 50,
        top: 15,
      }
      
})

export default MotoristaUser;
