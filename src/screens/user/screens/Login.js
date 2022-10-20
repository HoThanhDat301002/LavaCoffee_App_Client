import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView, KeyboardAvoidingView, Keyboard } from 'react-native';
import React from 'react';
import { useFonts, Montserrat_700Bold, Montserrat_400Regular, Montserrat_800ExtraBold, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { useState } from 'react';

const Login = (props) => {

    const { navigation } = props;

    const [isCheck, setIsCheck] = useState(false);

    const [isSee, setIsSee] = useState(false);

    const rememberMe = (props) => {
        if (isCheck == true) {
            setIsCheck(false);
        }
        if (isCheck == false) {
            setIsCheck(true);
        }
    }

    const eye = (props) => {
        if (isSee == true) {
            setIsSee(false);
        }
        if (isSee == false) {
            setIsSee(true);
        }
    }

    let [fontsLoaded, error] = useFonts({
        Montserrat_700Bold,
        Montserrat_400Regular,
        Montserrat_800ExtraBold,
        Montserrat_500Medium
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>

                    {/** Logo */}
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} resizeMode='cover' source={require('../../../assets/images/logo.png')} />
                    </View>

                    {/** Chữ "Đăng nhập tài khoản của bạn" */}
                    <View style={styles.tittleContainer}>
                        <Text style={styles.tittle}>Đăng nhập tài khoản của bạn</Text>
                    </View>

                    {/** Tiêu đề ô nhập "Email" */}
                    <View style={styles.tittleTextInputContainer}>
                        <Text style={styles.tittleTextInput}>Email</Text>
                        <Text style={[styles.tittleTextInput, styles.red]}>*</Text>
                    </View>

                    {/** Ô nhập "Email" */}
                    <View style={styles.textInputContainer}>
                        <TextInput
                            placeholder='Email'
                            style={styles.textInput} />
                    </View>

                    {/** Tiêu đề ô nhập "Mật khẩu" */}
                    <View style={styles.tittleTextInputContainer}>
                        <Text style={styles.tittleTextInput}>Mật khẩu</Text>
                        <Text style={[styles.tittleTextInput, styles.red]}>*</Text>
                    </View>

                    {/** Ô nhập "Mật khẩu" */}
                    <View style={styles.textInputContainer}>
                        <TextInput
                            secureTextEntry={isSee}
                            placeholder='Mật khẩu'
                            style={styles.textInput} />
                        <Pressable
                            onPress={eye}>
                            {
                                isSee ? <Image resizeMode='cover' source={require('../../../assets/images/see.png')} />
                                    : <Image resizeMode='cover' source={require('../../../assets/images/notsee.png')} />
                            }
                        </Pressable>
                    </View>

                    {/** Check Box */}
                    <Pressable
                        style={styles.checkContainer}
                        onPress={rememberMe}>
                        {
                            isCheck ? <Image source={require('../../../assets/images/uncheck.png')} resizeMode='cover' />
                                : <View style={styles.checkBackground}><Image source={require('../../../assets/images/check.png')} resizeMode='cover' /></View>

                        }
                        <View style={styles.checkTextContainer}>
                            <Text style={styles.checkText}>Lưu mật khẩu</Text>
                        </View>
                    </Pressable>

                    {/** Nút "Đăng nhập" */}
                    <Pressable
                        style={styles.buttonContainer}>
                        <View style={styles.buttonTextContainer}>
                            <Text style={styles.buttonText}>Đăng nhập</Text>
                        </View>
                    </Pressable>

                    {/** Chữ "Quên mật khẩu" */}
                    <View style={styles.forgotPasswordContainer}>
                        <Text style={styles.forgotPassword}>Quên mật khẩu</Text>
                    </View>

                    {/** Chữ "Hoặc đăng nhập với" */}
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Hoặc đăng nhập với</Text>
                    </View>

                    <View style={styles.onlineContainer}>

                        {/** Nút đăng nhập "Facebook" */}
                        <Pressable style={styles.onlineLoginContainer}>
                            <Image style={styles.onlineLoginImage} resizeMode='cover' source={require('../../../assets/images/fb.png')} />
                            <View style={styles.onlineLoginTextContainer}>
                                <Text style={styles.onlineLoginText}>Facebook</Text>
                            </View>
                        </Pressable>

                        {/** Nút đăng nhập "Google" */}
                        <Pressable style={styles.onlineLoginContainer}>
                            <Image style={styles.onlineLoginImage} resizeMode='cover' source={require('../../../assets/images/gg.png')} />
                            <View style={styles.onlineLoginTextContainer}>
                                <Text style={styles.onlineLoginText}>Google</Text>
                            </View>
                        </Pressable>
                    </View>

                    <View style={styles.registerTextContainer}>

                        {/** Chữ "Bạn chưa có tài khoản?" */}
                        <Text style={styles.text}>Bạn chưa có tài khoản? </Text>

                        {/** Chữ "Đăng ký" */}
                        <Text onPress={() => navigation.navigate('Register')} style={styles.registerText}>Đăng ký</Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    registerText: {
        fontFamily: 'Montserrat_800ExtraBold',
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: -0.3,
        color: '#581B00'
    },
    registerTextContainer: {
        marginTop: 26,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    onlineLoginText: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: -0.3,
    },
    onlineLoginTextContainer: {
        marginLeft: 5
    },
    onlineLoginImage: {
        width: 24,
        height: 24
    },
    onlineLoginContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 115,
        height: 45,
        backgroundColor: '#DFDFDF',
        flexDirection: 'row'
    },
    onlineContainer: {
        marginTop: 17,
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    text: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: -0.3
    },
    textContainer: {
        marginTop: 23,
        alignItems: 'center'
    },
    forgotPassword: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
        lineHeight: 23,
        letterSpacing: -0.3,
        color: '#581B00'
    },
    forgotPasswordContainer: {
        marginTop: 17,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        letterSpacing: -0.3,
        lineHeight: 25,
        color: '#581B00',
        fontFamily: 'Montserrat_700Bold'
    },
    buttonTextContainer: {
    },
    buttonContainer: {
        marginHorizontal: 20,
        borderRadius: 30,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7C33C',
        marginTop: 17
    },
    checkText: {
        fontFamily: 'Montserrat_500Medium',
        lineHeight: 23,
        fontSize: 16,
        letterSpacing: -0.3,
    },
    checkTextContainer: {
        marginLeft: 14
    },
    checkContainer: {
        marginHorizontal: 39,
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkBackground: {
        borderColor: '#581B00',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 25,
        height: 25,
        backgroundColor: '#F7C33C',
    },
    textInput: {
        color: 'rbga(0,0,0,0.5)',
        fontSize: 14,
        lineHeight: 19,
        fontFamily: 'Montserrat_400Regular',
        letterSpacing: -0.3,
        paddingVertical: 10,
    },
    textInputContainer: {
        flexDirection: 'row',
        borderColor: 'rgba(0,0,0,0.3)',
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: '#DFDFDF',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 45,
        marginHorizontal: 20,
        marginBottom: 12,
        paddingHorizontal: 19,
    },
    red: {
        marginLeft: 3,
        color: 'red'
    },
    tittleTextInput: {
        fontFamily: 'Montserrat_500Medium',
        lineHeight: 23,
        letterSpacing: -0.3,
        fontSize: 16,
    },
    tittleTextInputContainer: {
        flexDirection: 'row',
        marginBottom: 8,
        marginHorizontal: 39,
    },
    tittle: {
        color: '#581B00',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.3,
        fontFamily: 'Montserrat_800ExtraBold'
    },
    tittleContainer: {
        marginVertical: 26,
        alignItems: 'center',
    },
    image: {
        width: 128,
        height: 74
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 81
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    }
})