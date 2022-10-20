import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import { useState } from 'react';

const Register = (props) => {

    const { navigation } = props;

    const [isSee, setIsSee] = useState(false);

    const eye = (props) => {
        if (isSee == true) {
            setIsSee(false);
        }
        if (isSee == false) {
            setIsSee(true);
        }
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>

                    {/** Logo */}
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} resizeMode='cover' source={require('../../../assets/images/logo.png')} />
                    </View>

                    {/** Chữ "Đăng ký tài khoản của bạn" */}
                    <View style={styles.tittleContainer}>
                        <Text style={styles.tittle}>Đăng ký tài khoản của bạn</Text>
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

                    {/** Tiêu đề ô nhập "Số điện thoại" */}
                    <View style={styles.tittleTextInputContainer}>
                        <Text style={styles.tittleTextInput}>Số điện thoại</Text>
                        <Text style={[styles.tittleTextInput, styles.red]}>*</Text>
                    </View>

                    {/** Ô nhập "Số điện thoại" */}
                    <View style={styles.textInputContainer}>
                        <TextInput
                            keyboardType='numeric'
                            placeholder='Số điện thoại'
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

                    {/** Tiêu đề ô nhập "Xác nhận mật khẩu" */}
                    <View style={styles.tittleTextInputContainer}>
                        <Text style={styles.tittleTextInput}>Xác nhận mật khẩu</Text>
                        <Text style={[styles.tittleTextInput, styles.red]}>*</Text>
                    </View>

                    {/** Ô nhập "Xác nhận mật khẩu" */}
                    <View style={styles.textInputContainer}>
                        <TextInput
                            secureTextEntry={isSee}
                            placeholder='Xác nhận mật khẩu'
                            style={styles.textInput} />
                        <Pressable
                            onPress={eye}>
                            {
                                isSee ? <Image resizeMode='cover' source={require('../../../assets/images/see.png')} />
                                    : <Image resizeMode='cover' source={require('../../../assets/images/notsee.png')} />
                            }
                        </Pressable>
                    </View>

                    {/** Nút "Đăng ký" */}
                    <Pressable
                        style={styles.buttonContainer}>
                        <View style={styles.buttonTextContainer}>
                            <Text style={styles.buttonText}>Đăng ký</Text>
                        </View>
                    </Pressable>

                    <View style={styles.loginTextContainer}>

                        {/** Chữ "Bạn đã có tài khoản?" */}
                        <Text style={styles.text}>Bạn đã có tài khoản? </Text>

                        {/** Chữ "Đăng nhập" */}
                        <Text onPress={() => navigation.navigate('Login')} style={styles.loginText}>Đăng nhập</Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Register

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: -0.3
    },
    loginText: {
        fontFamily: 'Montserrat_800ExtraBold',
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: -0.3,
        color: '#581B00'
    },
    loginTextContainer: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center'
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
        marginTop: 30
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