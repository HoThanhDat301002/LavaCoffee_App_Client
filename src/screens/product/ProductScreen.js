import { StyleSheet, Text, View, Dimensions, Image,SafeAreaView } from 'react-native'
import React, { useEffect, useState ,useRef} from 'react'
import CarouselCards from './CarouselCards';


const ProductScreen = () => {
  
  
return (
  <View style ={{backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 50}}>
    <CarouselCards />
  </View>
);
}

export default ProductScreen

const styles = StyleSheet.create({})