import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { useFonts, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

const Welcome = (props) => {
    const { navigation } = props;

    let [fontsLoaded, error] = useFonts({
        Montserrat_600SemiBold,
        Montserrat_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>

            {/** Logo */}
            <View style={styles.logoContainer}>
                <Image style={styles.logo} resizeMode='cover' source={require('../../../assets/images/logo.png')} />
            </View>

            <View style={styles.contentContainer}>

                {/** Chữ "Trải nghiệm tuyệt vời cùng Lava Coffee" */}
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Trải nghiệm tuyệt vời cùng Lava Coffee</Text>
                </View>

                {/** Nút "Tiếp theo" */}
                <Pressable
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('Login')}>
                    <View style={styles.buttonTextContainer}>
                        <Text style={styles.buttonText}>Tiếp theo</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}

export default Welcome

const styles = StyleSheet.create({
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
        borderRadius: 30,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7C33C',
        marginTop: 21
    },
    contentContainer: {
        paddingHorizontal: 21,
        width: '100%',
        position: 'absolute',
        bottom: 70
    },
    textContainer: {
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        lineHeight: 22.75,
        letterSpacing: -0.3,
        fontFamily: 'Montserrat_600SemiBold'
    },
    logo: {
        width: 249,
        height: 144
    },
    logoContainer: {
        alignItems: 'center',
    },
    container: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
})