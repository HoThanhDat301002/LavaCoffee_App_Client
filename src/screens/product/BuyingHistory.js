import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { useFonts, Montserrat_600SemiBold, Montserrat_500Medium, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { Entypo } from '@expo/vector-icons';
import history from '../types/dataBuyingHistory';

const BuyingHistory = (props) => {

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

    const formatCash = (str) => {
        return str.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + '.')) + prev
        })
    }

    const renderItem = (item) => {
        return (
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Text style={styles.productName}>{item.item.name}</Text>
                    <View style={styles.productDateTime}>
                        <Text style={styles.productTime}>{item.item.time}</Text>
                        <Text> - </Text>
                        <Text style={styles.productDate}>{item.item.date}</Text>
                    </View>
                    {
                        item.item.status == "PROCESSING" ? <Text style={styles.productStatus}>Đang thực hiện</Text> :
                            item.item.status == "CANCELED" ? <Text style={[styles.productStatus, { color: 'red' }]}>Đã hủy</Text> :
                                <Text style={styles.productStatus}>Đã hoàn tất</Text>

                    }

                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.productPrice}>{formatCash(item.item.price.toString())}đ</Text>
                </View>

            </View>
        )

    }

    return (
        <View>
            <Pressable onPress={() => navigation.goBack()} style={styles.appBarContainer}>
                <Entypo style={styles.back} name="chevron-left" size={18} color="black" />
                <Text style={styles.appBar}>Lịch sử đơn hàng</Text>
            </Pressable>
            <View style={styles.space}></View>

            <FlatList
            bounces={false}
                data={history}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: 90 }}
            />
        </View>
    )
}

export default BuyingHistory

const styles = StyleSheet.create({
    productPrice: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 15,
        color: 'grey'
    },
    rightContainer: {
        justifyContent: 'center'
    },
    productStatus: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 14,
        color: 'green'
    },
    productDate: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14
    },
    productTime: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14
    },
    productDateTime: {
        flexDirection: 'row',
        marginBottom: 5
    },
    productName: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 14,
        marginBottom: 5
    },
    leftContainer: {
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 15,
        marginHorizontal: 15,
        borderRadius: 10,
        marginBottom: 15,
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
        alignItems: 'center'
    },
})