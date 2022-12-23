import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { observer } from 'mobx-react';
import { cartStore } from '../../mobx/cart_store';

const DetailEndow = (props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.itemHeaderContainer}>
          {/* btn back */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={14} color="black" />
          </TouchableOpacity>
          <Text style={styles.textTitle}>Chi tiết ưu đãi</Text>
          <View>
            {
              cartStore.count > 0 ?
                <View style={styles.iconCartContainer}>
                  <TouchableOpacity onPress={() => navigation.navigate('CartProduct')}>
                    <View style={{ paddingRight: 10 }}>
                      <View style={styles.countCartContainer}>
                        <Text style={styles.textCountCart}>{cartStore.count.toString()}</Text>
                      </View>
                    </View>
                    <AntDesign name="shoppingcart" size={15} color="black" />
                  </TouchableOpacity>
                </View> :
                <View style={styles.iconCartContainer}>
                  <TouchableOpacity onPress={() => navigation.navigate('CartProduct')}>
                    <AntDesign name="shoppingcart" size={15} color="black" />
                  </TouchableOpacity>
                </View>
            }
          </View>
        </View>
      </View>

      <View style={{}}>
        <View style={{ alignItems: 'center', paddingLeft: 10, paddingRight: 20 }}>
          <Image style={{ width: 250, height: 300 }} source={{ uri: 'https://i.pinimg.com/564x/39/53/b1/3953b16fbaba394a27e65424bba962c0.jpg' }}
            resizeMode={'cover'} />
        </View>

        <View style={{ paddingTop: 10, paddingLeft: 10, paddingRight: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: '500', textAlign: 'center' }}>Ưu đãi cho đơn hàng đầu tiên giành cho khách hàng mới</Text>
          <View style={{ opacity: 0.5, marginTop: 10, borderWidth: 0.3, borderColor: '#9E9E9E', }}></View>
          <Text style={{ fontSize: 18, fontWeight: '500', textAlign: 'center', marginTop: 5 }}>CODE: LAVACOFFE</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
            <Text style={{ fontWeight: '500' }}>Ngày hết hạn</Text>
            <Text style={{ color: 'red', fontWeight: '500' }}>12/12/2022</Text>
          </View>
        </View>

      </View>
    </View>
  )
}

export default observer(DetailEndow)

const styles = StyleSheet.create({
  titleCartContainer: {
    paddingTop: 20,
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },

  textCountCart: {
    color: 'white',
    fontSize: 10,
    fontWeight: '900'
  },

  countCartContainer: {
    width: 15,
    height: 15,
    borderRadius: 20,
    position: 'absolute',
    alignItems: 'center',
    bottom: -4,
    left: 15,
    backgroundColor: 'red'
  },

  iconCartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  textTitle: {
    fontSize: 16,
    fontWeight: '600'
  },

  itemHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },

  headerContainer: {
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

  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F9F6F6",
    flexDirection: 'column'
  },
})