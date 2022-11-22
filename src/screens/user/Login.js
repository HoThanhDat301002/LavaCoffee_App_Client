import React, { useState, useContext, createContext } from "react";
import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView, ToastAndroid, TouchableOpacity, Dimensions } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts, Montserrat_600SemiBold, Montserrat_500Medium, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';

export const Login = (props) => {

    const { navigation } = props;

    let [fontsLoaded, error] = useFonts({
        Montserrat_600SemiBold,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Montserrat_400Regular
    });

    if (!fontsLoaded) {
        return null;
    };

    return (
        <ScrollView
            bounces={false}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Image style={styles.loginBanner} source={require('../../assets/loginBanner.jpg')} resizeMode={"cover"} />
                <View style={styles.loginContainer}>
                    <View style={styles.welcomeContainer}>
                        <Text style={styles.welcomeText}>Chào mừng bạn đến với</Text>
                        <Image style={styles.welcomeLogo} source={require('../../assets/logo.png')} resizeMode={"contain"} />
                    </View>
                    <Pressable style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={require('../../assets/vietnam.jpg')} resizeMode={"cover"} />
                        <Text style={styles.inputVn}>+84</Text>
                        <Text style={styles.line}>|</Text>
                        <TextInput
                            style={styles.inputText}
                            keyboardType={"numeric"}
                            placeholder="Nhập số điện thoại" />
                    </Pressable>
                    <Pressable style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Đăng nhập</Text>
                    </Pressable>
                    <View style={styles.orContainer}>
                        <View style={styles.orLine}></View>
                        <Text style={styles.orText}>HOẶC</Text>
                        <View style={styles.orLine}></View>
                    </View>
                    <Pressable style={[styles.loginButton, { backgroundColor: '#1776d4' }]}>
                        <FontAwesome5 style={styles.loginIcon} name="facebook" size={18} color="white" />
                        <Text style={styles.loginButtonText}>Tiếp tục bằng Facebook</Text>
                    </Pressable>
                    <Pressable style={[styles.loginButton, { backgroundColor: 'white', borderColor: 'grey', borderWidth: 1 }]}>
                        <Image style={[{ width: 18, height: 18 }, styles.loginIcon]} source={require('../../assets/logogoogle.png')} />
                        <Text style={[styles.loginButtonText, { color: 'black' }]}>Tiếp tục bằng Google</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    loginIcon: {
        marginRight: 5
    },
    orText: {
        color: 'grey',
        marginHorizontal: 15,
        fontFamily:'Montserrat_500Medium',
        fontSize:12
    },
    orLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        width: 100,
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 25
    },
    loginButtonText: {
        fontFamily:'Montserrat_400Regular',
        fontSize:14,
        color: 'white'
    },
    loginButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#c4c4c4',
        padding: 15,
        marginHorizontal: 30,
        marginTop: 15,
        borderRadius: 8
    },
    inputText: {
        fontFamily:'Montserrat_400Regular',
        fontSize:14
    },
    line: {
        marginHorizontal: 10,
        color: '#c4c4c4'
    },
    inputVn: {},
    inputIcon: {
        width: 18,
        height: 18,
        borderRadius: 9,
        marginRight: 5
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#d9d9d9',
        borderWidth: 1,
        padding: 15,
        marginHorizontal: 30,
        marginTop: 30,
        borderRadius: 8
    },
    welcomeLogo: {
        width: 100,
        height: 50,
        marginTop: 15
    },
    welcomeText: {
        fontFamily:'Montserrat_400Regular',
        fontSize:14
    },
    welcomeContainer: {
        marginTop: 35,
        alignItems: 'center'
    },
    loginContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        marginTop: (Dimensions.get('window').height / 4) - 20
    },
    loginBanner: {
        width: '100%',
        height: '25%'
    },
    container: {
        width: '100%',
        height: '100%',
        position: 'relative'
    }
});
