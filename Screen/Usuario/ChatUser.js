import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, ActivityIndicator, TouchableOpacity, ScrollView } from "react-native";
import FooterUser from "../../components/FooterUser";
import { useNavigation } from "@react-navigation/native";

const ChatUser = () => {
    return (
        <View style={styles.container}>
            <View style={styles.chatContainer}>
                <Text style={styles.mensagem}>Olá, poderia verificar a disponibilidade do meu endereço?</Text>
            </View>
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
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      padding: 20,
    },
    chatContainer: {
        width: 252,
        height: 82,
        backgroundColor: '#F2F2F2',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        left: 40,
        bottom: 280
    },
    mensagem: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        maxWidth: "90%",
        left: 20,
        top: 20,
    },
    caixaDeMensagem: {
        flexDirection: 'row',
        width: "90%",
        height: 50,
        backgroundColor: '#FFF',
        top: 260,
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
            left: 155,
            top: 10
        },
        iconEnviar: {
            width: 20,
            height: 20,
            left: 164,
            top: 15
        },
        caixaTxt: {
            left: 20,
            color: "#A1A1A1",
            fontSize: 14,
            fontFamily: 'Poppins-Regular',
            top: 14
        }

})

export default ChatUser;