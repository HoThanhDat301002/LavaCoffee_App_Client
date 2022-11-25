import { StyleSheet, Text, View,TouchableOpacity, Image, FlatList,ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
const OrderConfirmation = () => {
  return (
    <View style={styles.container}>
      <View style = {styles.headerContainer}>
            <View style= {styles.itemHeaderContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.textTitle}>Xác nhận đơn hàng</Text>
                <View></View>
            </View>
        </View>
    </View>
  )
}

export default OrderConfirmation

const styles = StyleSheet.create({
    textTitle:{
        fontSize: 16,
        fontWeight: '600'
    },
    
    itemHeaderContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
    },
    
    headerContainer:{
        width: '100%',
        height: 85, 
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1
        },
        shadowOpacity: 0.15,
        elevation: 2,
        justifyContent: 'center',
    },

    container:{
        width: "100%",
        height: "100%",
        backgroundColor: "#F9F6F6",
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
})