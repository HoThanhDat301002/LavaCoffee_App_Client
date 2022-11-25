import { StyleSheet, Text, View, Pressable, ScrollView, Image, TextInput } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { useFonts, Montserrat_600SemiBold, Montserrat_500Medium, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { Entypo, AntDesign } from '@expo/vector-icons';
import RNPickerSelect from "react-native-picker-select";

const UserInformation = (props) => {

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
        <View style={styles.inforContainer}>
            <Pressable onPress={() => navigation.goBack()} style={styles.appBarContainer}>
                <Entypo style={styles.back} name="chevron-left" size={18} color="black" />
                <Text style={styles.appBar}>Cập nhật thông tin</Text>
            </Pressable>

            <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require('../../../assets/bac-siu.jpg')} resizeMode={'cover'} />
                    </View>
                    <TextInput style={styles.input}>Thục Miên</TextInput>
                    <TextInput style={styles.input}>Trần Võ</TextInput>
                    <TextInput editable={false} style={styles.disableInput}>thucmien2002@gmail.com</TextInput>
                    <Pressable style={[styles.disableInput, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <TextInput style={{
                            fontFamily: 'Montserrat_400Regular',
                            fontSize: 14
                        }} editable={false}>08/01/2002</TextInput>
                        <Entypo name="calendar" size={18} color="grey" />
                    </Pressable>
                    <View style={styles.pickerContainer}>
                        <RNPickerSelect
                            style={pickerSelectStyles}
                            placeholder={{ label: "Giới tính của bạn?", value: null }}
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: "Nam", value: "Nam" },
                                { label: "Nữ", value: "Nữ" },
                                { label: "Khác", value: "Khác" },
                            ]}
                        />
                        <Entypo style={styles.icon} name="chevron-down" size={18} color="gray" />
                    </View>
                    <Pressable style={styles.updateButton}>
                        <Text style={styles.updateText}>Cập nhật tài khoản</Text>
                    </Pressable>
                </View>
            </ScrollView>
            <View style={styles.deleteAccount}>
                <AntDesign name="delete" size={18} color="gray" />
                <Text style={styles.deleteText}>Xóa tài khoản</Text>
            </View>
        </View>
    )
}

export default UserInformation

const styles = StyleSheet.create({
    deleteText: {
        marginLeft: 10,
        fontFamily:'Montserrat_400Regular',
        fontSize:14
    },
    deleteAccount: {
        position: 'absolute',
        bottom: 75,
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 15
    },
    inforContainer: {
        position: 'relative'
    },
    updateText: {
        color: 'white',
        fontFamily:'Montserrat_400Regular',
        fontSize:14
    },
    updateButton: {
        backgroundColor: '#c4c4c4',
        padding: 15,
        marginHorizontal: 15,
        marginTop: 30,
        borderRadius: 10,
        alignItems: 'center'
    },
    pickerContainer: {
        position: 'relative'
    },
    icon: {
        position: 'absolute',
        right: 30,
        bottom: 15
    },
    disableInput: {
        backgroundColor: '#d9d9d9',
        borderColor: '#d9d9d9',
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        marginHorizontal: 15,
        marginBottom: 15,
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14
    },
    input: {
        borderColor: '#d9d9d9',
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        marginHorizontal: 15,
        marginBottom: 15,
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60
    },
    imageContainer: {
        alignItems: 'center',
        marginVertical: 30,
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        paddingBottom: 200
    },
    space: {
        height: 15
    },
    appBar: {
        position: 'absolute',
        bottom: 15,
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 18,
    },
    back: {
        position: 'absolute',
        bottom: 15,
        left: 15
    },
    appBarContainer: {
        position: 'relative',
        backgroundColor: 'white',
        width: '100%',
        height: 75,
        alignItems: 'center',
        borderBottomColor: '#d9d9d9',
        borderBottomWidth: 1
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        marginHorizontal: 15,
        fontSize: 14,
        padding: 15,
        borderWidth: 1,
        borderColor: '#d9d9d9',
        borderRadius: 5,
        color: 'black',
        paddingRight: 30,
        fontFamily:'Montserrat_400Regular',
        fontSize:14 // to ensure the text is never behind the icon
    },
    inputAndroid: {
        marginHorizontal: 15,
        fontSize: 14,
        padding: 15,
        borderWidth: 1,
        borderColor: '#d9d9d9',
        borderRadius: 5,
        color: 'black',
        paddingRight: 30,
        fontFamily:'Montserrat_400Regular',
        fontSize:14 // to ensure the text is never behind the icon
    }
});