import React, { useState, useContext, createContext } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Pressable,
    ScrollView,
    ToastAndroid,
    TouchableOpacity,
} from "react-native";
import Checkbox from 'expo-checkbox';
import {MaterialCommunityIcons} from '@expo/vector-icons'

export const Login = (props) => {
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(true);
    const [isSelected, setSelection] = useState(false);
    const { navigation } = props;



    return (
        //<KeyboardAvoidingView>
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.imageLogoContainer}>
                    <Image style={styles.imageLogo} source={require('../../assets/logo.png')}/>
                </View>

                <View style={styles.textTitleContainer}>
                    <Text style={styles.textTitle}>Đăng nhập tài khoản của bạn</Text>
                </View>

                <View style={styles.formEmailContainer}>
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <Text>Email</Text>
                            <Text style={{color: 'red'}}> *</Text>
                        </View>
                        <TextInput
                            placeholder="Nhập Email"
                            style={styles.TextInput}
                        />
                    </View>
                </View>

                <View style={styles.formPassContainer}>
                    <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Mật khẩu</Text>
                        <Text style={{color: 'red'}}> *</Text>
                    </View>
                    <TextInput
                    secureTextEntry= {visible}
                     placeholder="Nhập mật khẩu" style={styles.TextInput} />
                    <View style={styles.showPass}>
                        <TouchableOpacity onPress={() => {
                            setShow(!show)
                            setVisible(!visible)
                            }}>
                            <MaterialCommunityIcons
                            name={show == false ? 'eye-outline': 'eye-off-outline'}
                            size={25}
                            color={'#2D2D2D'}/>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>

                <View style={styles.checkboxContainer}>
                    <Checkbox
                    disabled={false}
                    value={isSelected}
                    onValueChange={(newValue) => setSelection(newValue)}
                    style={styles.checkbox}
                    color={isSelected ? '#F7C33C' : undefined}
                    />
                    <Text style={styles.label}>Lưu mật khẩu</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button}>
                        <Text style={styles.login}>Đăng nhập</Text>
                    </Pressable>
                </View>

                <View style={styles.forgotPassContainer}>
                    <Text style={styles.forgotPassText}>Quên mật khẩu?</Text>
                </View>

                <View style={styles.text2Container}>
                    <Text style={styles.text2}>Hoặc đăng nhập với</Text>
                </View>

                <View style={styles.buttonViewContainer}>
                    <Pressable>
                        <View style={styles.buttonFb}>
                            <Image style={styles.imageFb} source={require('../../assets/logofb.png')}/>
                            <Text style={styles.textFb}>Facebook</Text>
                        </View>
                    </Pressable>

                    <Pressable >
                        <View style={styles.buttonGg}>
                            <Image style={styles.imageFb} source={require('../../assets/logogoogle.png')}/>
                            <Text style={styles.textGg}>Google</Text>
                        </View>
                    </Pressable>
                </View>

                <View style={styles.registerContainer}>
                    <Text>Bạn chưa có tài khoản? </Text>
                    <Text
                        style={styles.register}
                        onPress={() => navigation.navigate("Register")}>
                        Đăng ký ngay
                    </Text>
                </View>

            </View>
        </ScrollView>
        //</KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    registerContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 26,
    },

    register: {
        alignContent: 'center',
        fontFamily: "Roboto",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "800",
        color: "#581B00",
        lineHeight: 19
    },

    textGg: {
        marginLeft: 5,
        // color: "white",
        fontWeight: "700",
        lineHeight: 24,
        fontSize: 16,
        fontStyle: "normal",
        display: "flex",
        flexGrow: 0,
    },

    textFb: {
        marginLeft: 5, 
        fontWeight: "700",
        lineHeight: 24,
        fontSize: 16,
        fontStyle: "normal",
        display: "flex",
        flexGrow: 0,
      },
      buttonGg:{
        flexDirection: 'row',
        marginLeft: 30,
        width: 130,
        height: 50,
        backgroundColor: "#EEEEEE",
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
        elevation: 3
      },
      
      buttonFb:{
        flexDirection: 'row',
        width: 130,
        height: 50,
        backgroundColor: "#EEEEEE",
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
        elevation: 3
      },
      buttonViewContainer:{
        justifyContent: 'center',
        marginTop: 20,
        flexDirection: 'row',

      },

    text2:{
        fontFamily: "Roboto",
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: "400",
        display: "flex",
        color: "black",
        lineHeight: 25.28,
    },

    text2Container:{
        alignItems: 'center',
        marginTop: 23,
    },


    forgotPassText: {
        fontFamily: "Roboto",
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: "700",
        display: "flex",
        color: "#581B00",
        lineHeight: 22.75,
    },

    forgotPassContainer: {
        marginTop: 17,
        alignItems: 'center',
        marginHorizontal: 25,
    },

    checkboxContainer: {
        marginTop: 12,
        marginLeft: 60,
        flexDirection: "row",
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: "center",
      },

      login: {
        fontFamily: "Roboto",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "700",
        display: "flex",
        color: "#581B00",
        lineHeight: 25.28,
    },

    button: {
        width: 300,
        height: 50,
        backgroundColor: "#F7C33C",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonContainer: {
        marginTop: 17,
        alignItems: "center",
    },

      label: {
        fontFamily: "Roboto",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: '500',
        marginLeft: 14,
      },

    showPass: {
        position: "absolute",
        right: 15,
        top: 40,
    },

    TextInput: {
        marginTop: 8,
        paddingRight: 35,
        padding: 15,
        width: 320,
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        backgroundColor: '#EEEEEE'
    },
    formPassContainer: {
        alignItems: 'center',
        marginTop: 8,
        paddingHorizontal: 32,
    },

    formEmailContainer: {
        alignItems: 'center',
        marginTop: 26,
        paddingHorizontal: 32,
    },

    textTitle:{
        fontFamily: "Roboto",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "800",
        display: "flex",
        color: "#581B00",
        lineHeight: 25.28,
    },

    textTitleContainer:{
        marginTop: 26,
        alignItems: 'center'
    },

    imageLogo: {
        width: 128,
        height: 74,
    },


    imageLogoContainer: {
        alignItems: 'center',
        marginTop: 81,
    },

    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
    },
});
