import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Pressable, Button, TouchableWithoutFeedback, TextInput } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { useFonts, Montserrat_600SemiBold, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import cateData from '../types/cateData'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { dataCoffee, dataTraiCay, dataHiTea } from '../types/dataProduct'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import('../mobx/cart_store')

const ProductScreen = (props) => {
  const { navigation } = props;

  let [fontsLoaded, error] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }

  const formatCash = (str) => {
    return str.split('').reverse().reduce((prev, next, index) => {
      return ((index % 3) ? next : (next + '.')) + prev
    })
  }


  // console.log('cofee ne========>', itemCoffee.name)

  const renderItemCategory = (item) => (
    // console.log('>>>>>>>>>>>', item.id),
    <TouchableOpacity style={{ paddingTop: 10, paddingBottom: 10, }}>
      <View style={styles.categoriesContainer}>
        <View style={styles.imageCateContainer}>
          <Image style={styles.imageCategory} source={{ uri: item.item.imgUrl }}
            resizeMode={"cover"} />
        </View>
        <Text style={styles.text}>{item.item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = (item) => {
    <View>
      <Pressable>
        <View>
          <View>
            <Image style={styles.imageCategory} source={{ uri: item.item.thumbnail }}
              resizeMode={"cover"} />
          </View>
          <View>
            <Text>{item.item.name}</Text>
            <Text>{formatCash(item.item.price).toString()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.itemHeaderContainer}>
          <Text style={styles.textTitle}>Đặt hàng</Text>

          <View style={styles.iconCartContainer}>
            <View style={{ marginRight: 30 }}>
              <TouchableOpacity >
                <AntDesign name="search1" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Ionicons name="ios-heart-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <FlatList
              data={cateData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItemCategory}
              showsHorizontalScrollIndicator={false}
              numColumns={8 / 2}
            />
          </ScrollView>
        </View>

        <View style={{ paddingTop: 10 }}>
          <View style={styles.coffeTitleContainer}>
            <Text style={styles.textcoffeTitle}>Cà phê</Text>
          </View>

          <View>
            {
              dataCoffee.map(((e) => {
                return (
                  <Pressable key={e.id} onPress={() => navigation.navigate('ProductDetail', { id: e.id })} >
                    <View style={styles.productContainer}>
                      <View style={styles.product}>
                        <View style={{ flexDirection: 'row' }}>
                          <View>
                            <Image style={styles.imageProduct} source={{ uri: e.thumbnail }}
                              resizeMode={"cover"} />
                          </View>
                          <View style={styles.textProductContainer}>
                            <Text style={styles.textName}>{e.name}</Text>
                            <Text style={styles.textPrice}>{formatCash(e.price.toString())}đ</Text>
                          </View>
                        </View>
                        <View></View>
                      </View>
                    </View>
                  </Pressable>
                )
              }))
            }

          </View>
        </View>

        <View style={{ paddingTop: 30 }}>
          <View style={styles.coffeTitleContainer}>
            <Text style={styles.textcoffeTitle}>Trà trái cây - Trà sữa</Text>
          </View>

          <View>
            {
              dataTraiCay.map(((e) => {
                return (
                  <Pressable key={e.id} onPress={() => navigation.navigate('ProductDetail', { id: e.id })}>
                    <View style={styles.productContainer}>
                      <View style={styles.product}>
                        <View style={{ flexDirection: 'row' }}>
                          <View>
                            <Image style={styles.imageProduct} source={{ uri: e.thumbnail }}
                              resizeMode={"cover"} />
                          </View>
                          <View style={styles.textProductContainer}>
                            <Text style={styles.textName}>{e.name}</Text>
                            <Text style={styles.textPrice}>{formatCash(e.price.toString())}đ</Text>
                          </View>
                        </View>
                        <View></View>
                      </View>
                    </View>
                  </Pressable>
                )
              }))
            }

          </View>
        </View>

        <View style={{ paddingTop: 30 }}>
          <View style={styles.coffeTitleContainer}>
            <Text style={styles.textcoffeTitle}>Hi-tea Healthy</Text>
          </View>

          <View>
            {
              dataHiTea.map(((e) => {
                return (
                  <Pressable key={e.id} onPress={() => navigation.navigate('ProductDetail', { id: e.id })}>
                    <View style={styles.productContainer}>
                      <View style={styles.product}>
                        <View style={{ flexDirection: 'row' }}>
                          <View>
                            <Image style={styles.imageProduct} source={{ uri: e.thumbnail }}
                              resizeMode={"cover"} />
                          </View>
                          <View style={styles.textProductContainer}>
                            <Text style={styles.textName}>{e.name}</Text>
                            <Text style={styles.textPrice}>{formatCash(e.price.toString())}đ</Text>
                          </View>
                        </View>
                        <View></View>
                      </View>
                    </View>
                  </Pressable>
                )
              }))
            }
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default ProductScreen

const styles = StyleSheet.create({
  textPrice: {
    marginTop: 10,
    fontSize: 14,
  },

  textName: {
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold'
  },

  textProductContainer: {
    marginLeft: 10,
    paddingTop: 10
  },

  imageProduct: {
    width: 120,
    height: 120,
    borderRadius: 7
  },

  product: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  productContainer: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center'
  },

  textcoffeTitle: {
    fontSize: 18,
    fontFamily: 'Montserrat_600SemiBold'
  },

  coffeTitleContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },

  imageCateContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFEFD5',
    padding: 7,
    borderRadius: 30
  },

  imageCategory: {
    width: 45,
    height: 45,
  },

  text: {
    marginTop: 12.5,
    width: 86,
    textAlign: 'center',
    fontFamily: 'Montserrat_500Medium',
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    color: '#231F20'
  },

  categoriesContainer: {
    marginLeft: 10,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },

  titleText: {
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "700",
    color: "#231F20",
    lineHeight: 24,
  },

  imageTitle: {
    width: 25,
    height: 25,
  },

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
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red'
  },

  textTitle: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 18,
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
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
})