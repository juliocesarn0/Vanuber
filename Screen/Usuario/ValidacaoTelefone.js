import React, {useEffect, useState} from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from "react-native";
import * as Font from "expo-font";
import { useNavigation } from '@react-navigation/native';
import { TextInput } from "react-native-gesture-handler";
import { clearLogEntriesAsync } from "expo-updates";

const ValidacaoTelefone = () => {

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [value, setValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Montserrat-Medium": require("../../assets/fonts/Montserrat-Medium.ttf"),
        "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

    return (
    <View style={styles.container}>
        <Text style={styles.digiteTxt}>Digite seu código de verificação</Text>
        <TextInput 
            style={styles.input}
            value={value}
            onChangeText={text => setValue(text)}
            keyboardType="numeric"
        />
        {value === '' && <Text style={styles.placeholder}>......</Text>}
        <Text style={styles.tempoTxt}>
            Para sua segurança, este código tem um tempo para o reenvio 04:37 restantes
        </Text>
        <TouchableOpacity style={styles.verificarBtn}>
            <Text style={styles.btnVerificarTxt}>VERIFICAR</Text>
        </TouchableOpacity>
        <Text style={styles.receberTxt}>Não recebeu seu código?</Text>
        <View style={styles.avisoContainer}>
            <Image 
                source={require('../../assets/aviso-icon.png')}
                style={styles.avisoIcon}/>
            <Text style={styles.avisoTxt}>
                Atenção! Verifique se você digitou seu número corretamente.
            </Text>
        </View>

        <TouchableOpacity style={styles.enviarNovamenteBtn} onPress={() => setModalVisible(true)}>
            <Text style={styles.enviarBtnTxt}>
                Enviar novamente
            </Text>
        </TouchableOpacity>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Image 
                source={require('../../assets/icon_info.png')}
                style={styles.iconInfoModal}
            />
            <Text style={styles.modalText}>Código reenviado!</Text>
            <Text style={styles.reenvioTxt}>Reenviamos um código de confirmação via SMS para o número cadastrado.</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>ENTENDI</Text>
            </TouchableOpacity>
          </View>
          </View>
          </Modal>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: 'center'
    },
    digiteTxt: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        fontWeight: 'bold',
        marginTop: 40
    },
    input: {
        fontSize: 24,
        color: 'black',
        zIndex: 1, // Ensure TextInput is above the placeholder
        marginTop: 20
    },
    placeholder: {
        position: 'absolute',
        fontSize: 48,
        color: 'gray',
        zIndex: 0, // Ensure placeholder is behind the TextInput
        marginTop: 50
    },
    tempoTxt: {
        maxWidth: "70%",
        textAlign: 'center',
        marginTop: 20
    },
    verificarBtn: {
        width: 151,
        height: 48,
        backgroundColor: '#FCFF74',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        marginTop: 20
    },
    btnVerificarTxt: {
        fontWeight: 'bold'
    },
    receberTxt: {
        fontSize: 15,
        color: '#495057',
        marginTop: 50
    },
    avisoContainer: {
        flexDirection: 'row',
        width: "80%",
        height: 50,
        backgroundColor: '#F1F3F5',
        borderRadius: 8,
        marginTop: 10
    },
    avisoIcon: {
        width: 20,
        height: 20,
        marginTop: 15,
        marginLeft: 15
    },
    avisoTxt: {
        maxWidth: '90%',
        marginLeft: 10,
        marginTop: 5
    },
    enviarNovamenteBtn: {
        width: 157,
        height: 37,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        marginTop: 20
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 46,
        padding: 35,
        paddingTop: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 15,
        color: '#9DA1AB'
      },
      reenvioTxt: {
        fontWeight: 'bold',
        fontSize: 13,
        maxWidth: "90%",
        textAlign: 'center'
      },
      button: {
        backgroundColor: '#FCFF74',
        borderRadius: 23,
        padding: 10,
        paddingTop: 13,
        width: 147,
        height: 46,
      },
      buttonText: {
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      buttonClose: {
        marginTop: 20,
      },
      enviarBtnTxt: {
        color: 'black',
        fontWeight: 'bold',
      },
      iconInfoModal: {
        width: 50,
        height: 50,
        marginBottom: 10
      }
})

export default ValidacaoTelefone;