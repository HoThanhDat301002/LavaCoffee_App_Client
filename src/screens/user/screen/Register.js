import React, { useState, useContext, createContext } from "react";
import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView, ToastAndroid, TouchableOpacity, Dimensions } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts, Montserrat_600SemiBold, Montserrat_500Medium, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';

const Register = (props) => {

    const { navigation } = props;

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [visible, setVisible] = useState(true);
    const [visible2, setVisible2] = useState(true);

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
                <Image style={styles.loginBanner} source={require('../../../assets/loginBanner.jpg')} resizeMode={"cover"} />
                <View style={styles.loginContainer}>
                    <View style={styles.welcomeContainer}>
                        <Text style={styles.welcomeText}>Đăng ký thành viên với</Text>
                        <Image style={styles.welcomeLogo} source={require('../../../assets/logo.png')} resizeMode={"contain"} />
                    </View>
                    <Pressable style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Nhập email" />
                    </Pressable>
                    <Pressable style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Nhập mật khẩu"
                            secureTextEntry={visible}
                        />
                        <TouchableOpacity onPress={() => {
                            setShow(!show)
                            setVisible(!visible)
                        }}>
                            <MaterialCommunityIcons
                                name={show == false ? 'eye-outline' : 'eye-off-outline'}
                                size={24}
                                color={'#d9d9d9'} />
                        </TouchableOpacity>
                    </Pressable>
                    <Pressable style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Xác nhận mật khẩu"
                            secureTextEntry={visible2}
                        />
                        <TouchableOpacity onPress={() => {
                            setShow2(!show2)
                            setVisible2(!visible2)
                        }}>
                            <MaterialCommunityIcons
                                name={show2 == false ? 'eye-outline' : 'eye-off-outline'}
                                size={24}
                                color={'#d9d9d9'} />
                        </TouchableOpacity>
                    </Pressable>
                    <Pressable style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Đăng ký</Text>
                    </Pressable>
                    <View style={styles.registerContainer}>
                        <Text style={styles.registerText}>Bạn đã có tài khoản? </Text>
                        <Pressable onPress={() => navigation.goBack()} >
                            <Text style={[styles.registerText, { color: '#1776d4' }]}>Đăng nhập ngay</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Register

const styles = StyleSheet.create({
    registerText: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    loginIcon: {
        marginRight: 5
    },
    loginButtonText: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14,
        color: 'white'
    },
    loginButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#c4c4c4',
        padding: 15,
        marginHorizontal: 30,
        marginTop: 30,
        borderRadius: 8
    },
    inputText: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#d9d9d9',
        borderWidth: 1,
        padding: 15,
        marginHorizontal: 30,
        marginTop: 10,
        borderRadius: 8
    },
    welcomeLogo: {
        width: 100,
        height: 50,
        marginTop: 15
    },
    welcomeText: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14
    },
    welcomeContainer: {
        marginVertical: 35,
        alignItems: 'center'
    },
    loginContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        marginTop: ((Dimensions.get('window').height / 10) * 3) - 20
    },
    loginBanner: {
        width: '100%',
        height: '30%'
    },
    container: {
        width: '100%',
        height: '100%',
        position: 'relative'
    }
});
