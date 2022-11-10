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
import React, { useState, useContext, createContext } from "react";
import {MaterialCommunityIcons} from '@expo/vector-icons'

const Register = (props) => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [visible, setVisible] = useState(true);
    const [visible2, setVisible2] = useState(true);
    const [isSelected, setSelection] = useState(false);
    const [confirm_password, setConfirm_password] = useState("");
    const { navigation } = props;

  return (
    <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.imageLogoContainer}>
                    <Image style={styles.imageLogo} source={require('../../assets/logo.png')}/>
                </View>

                <View style={styles.textTitleContainer}>
                    <Text style={styles.textTitle}>Đăng ký tài khoản của bạn</Text>
                </View>

        <View style={styles.formEmailContainer}>
           <View>
                <View style={{flexDirection: 'row'}}>
                    <Text>Email</Text>
                    <Text style={{color: 'red'}}> *</Text>
                </View>
                <TextInput
                placeholder="Email"
                style={styles.TextInput}
                />
          </View>
        </View>

        <View style={styles.formPassContainer}>
          <View>
              <View style={{flexDirection: 'row'}}>
                    <Text>Họ tên</Text>
                    <Text style={{color: 'red'}}> *</Text>
                </View>
            <TextInput
              placeholder="Nhập họ tên"
              style={styles.TextInput}
            />
          </View>
        </View>

        <View style={styles.formPassContainer}>
          <View>
          <View style={{flexDirection: 'row'}}>
                    <Text>Số điện thoại</Text>
                    <Text style={{color: 'red'}}> *</Text>
                </View>
            <TextInput
              placeholder="Nhập số điện thoại"
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
                    placeholder="Nhập mật khẩu"
                    secureTextEntry={visible}
                    style={styles.TextInput}
                />
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

        <View style={styles.formPassContainer}>
            <View>
               <View style={{flexDirection: 'row'}}>
                    <Text>Xác nhận mật khẩu</Text>
                    <Text style={{color: 'red'}}> *</Text>
                </View>
                <TextInput
                    placeholder="Nhập lại mật khẩu"
                    secureTextEntry={visible2}
                    style={styles.TextInput}
                />
                <View style={styles.showPass}>
                    <TouchableOpacity onPress={() => {
                    setShow2(!show2)
                    setVisible2(!visible2)
                    }}>
                    <MaterialCommunityIcons
                    name={show2 == false ? 'eye-outline': 'eye-off-outline'}
                    size={25}
                    color={'#2D2D2D'}/>
                </TouchableOpacity>
                </View>
            </View>
        </View>


                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button}>
                        <Text style={styles.register}>Đăng nhập</Text>
                    </Pressable>
                </View>

                <View style={styles.registerContainer}>
                    <Text>Bạn đã có tài khoản? </Text>
                    <Text
                        style={styles.login}
                        onPress={() => navigation.navigate("Login")}>
                        Đăng nhập
                    </Text>
                </View>

            </View>
        </ScrollView>
  )
}

export default Register

const styles = StyleSheet.create({
    registerContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 26,
    },

    login: {
        alignContent: 'center',
        fontFamily: "Roboto",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "800",
        color: "#581B00",
        lineHeight: 19
    },

      
      register: {
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
})