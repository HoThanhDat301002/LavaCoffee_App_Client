import { StyleSheet, Text, View, Image, TouchableOpacity,FlatList,Pressable, ScrollView,Dimensions } from 'react-native'
import React,{useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import CarouselCards from './CarouselCards';
import productFeatured from '../types/dataFeaturedProducts'
import news from '../types/dataNews'

const HomeScreen = (props) => {
  const {navigation} = props
  // console.log(date)
  const formatCash = (str) => {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + '.')) + prev
    })
  }
// console.log(productFeatured)
  const renderItem = ({item}) => (
    <View style={styles.productContainer}>
      <Pressable onPress={() => navigation.navigate('ProductDetail', {id: item.id})}>
        <View style={styles.bookContainer}>
            <View style={styles.imageContainer}>
                 <Image style={styles.image} source={{uri: item.thumbnail}}
                 resizeMode={"cover"}/>
            </View>
            <View style={styles.textNameContainer}>
                <Text numberOfLines={2} style={styles.textName}>{item.name}</Text>
            </View>
              <View style={styles.textPriceContainer}>
                <Text style={styles.textPriceFinal}>{formatCash( item.price.toString())} đ</Text>
            </View>
        </View>
      </Pressable>
    </View>
);

  return (
    <ScrollView>
    <View style = {styles.container}>
     <View style={styles.headerContainer}>
        <View style = {{paddingLeft: 20,paddingTop: 40,flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style = {styles.webComeContainer}>
          <Image style={{width:30,height:30}} source={require('../../assets/image_tea_fix.png')}/>
          <Text style = {styles.textWebcome}>Chào Jen !</Text>
        </View>
          <View style ={{flexDirection: 'row',paddingRight: 20,}}>
            <View style={styles.iconCartContainer}>
            <TouchableOpacity onPress={()=> navigation.navigate('CartProduct')}>
              <AntDesign name="shoppingcart" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.iconNotifyContainer}>
            <TouchableOpacity>
              <Ionicons name="ios-notifications-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          </View>
        </View>

        <View style = {{justifyContent: 'center', alignItems: 'center',alignContent: 'center',paddingTop: 60,}}>
          <CarouselCards/>
        </View>
      </View>

      <View style = {styles.productSlaleContainer}>
        <View style = {styles.titleSaleContainer}>
          <Image style={{width:25,height:25}} source={require('../../assets/ice-coffee.png')}/>  
          <Text style={styles.textTitle}>Gợi ý cho bạn</Text>
        </View>
        <FlatList
          horizontal
          data={productFeatured}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          />
      </View>

      <View style = {styles.newsContainer}>
        <View style = {styles.newsTitleContainer}>
          <Image style={{width:25,height:25}} source={require('../../assets/newspaper.png')}/>
          <Text style={styles.textTitleNews}>Khám phá thêm</Text>
        </View>
        <View style={{flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20}}>
        {
            news.map(((item) => {
            return(
              <View key={item.id} style ={{width: Dimensions.get('window').width/2-30, paddingTop: 20,}}>
              <Pressable onPress={() => navigation.navigate('DetailNews', {id: item.id})}>
                <View style={styles.itemNewsContainer}>
                    <View style={styles.imageNewsContainer}>
                         <Image style={styles.imageNews} source={{uri:item.thumbnail}}
                         resizeMode={"cover"}/>
                    </View>
                    <View style={styles.textNameNewsContainer}>
                        <Text numberOfLines={2} style={styles.textNameNews}>{item.title}</Text>
                    </View>
                      <View style={styles.textDateContainer}>
                      <MaterialCommunityIcons name="calendar-month-outline" size={18} color="black" />
                        <Text numberOfLines={1} style={styles.textDateNews}>10/21</Text>
                    </View>
                </View>
              </Pressable>
            </View>
            )
          }))
        }
        </View>
      </View>
      <View style = {{height:20}}></View>
    </View>
  </ScrollView>
      
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  textDateNews:{
    paddingLeft: 10,
    fontSize: 12
  },

  textDateContainer:{
      marginTop: 10,
      paddingLeft: 10,
      paddingRight: 20,
      flexDirection: 'row',
      alignItems: 'center',
      
},

textNameNews:{
  fontSize: 14,
  fontWeight: "600",
  lineHeight: 16,
},
textNameNewsContainer:{
  paddingLeft: 10,
  paddingTop: 10,
  paddingRight: 10
},

  imageNews:{
    width: 167,
    height: 167,
    borderRadius: 12,
    // backgroundColor: 'red'
    },
  imageNewsContainer:{
    backgroundColor: 'white',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },

  itemNewsContainer:{
    backgroundColor: 'white',
    width: 167,
    height: 260,
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.15,
    shadowRadius: 7,
    elevation: 1
},

  textTitleNews:{
    paddingLeft: 10,
    fontWeight: '700',
    fontSize: 18,
  },

  newsTitleContainer:{
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  newsContainer:{
    paddingTop: 20,
  },

  image:{
    width: 177,
    height: 157,
    borderRadius: 12,
    // backgroundColor: 'red'
    },
  
  
      textPriceFinal:{
          width: 177,
          height: 16,
          fontSize: 14,
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: 16,
          color: '#F44336'
      },
  
      textName: {
        width: 160,
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "600",
        display: "flex",
        lineHeight: 16,
        color: '#231F20'
        // backgroundColor: 'red'
    },
      textPriceContainer:{
          width: 177,
          marginTop: 10,
          marginLeft: 10,
      },
  
      textNameContainer:{
          marginTop: 10,
          marginLeft: 10,
      },
  
      imageContainer:{
        backgroundColor: 'white',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
      },

      bookContainer:{
          backgroundColor: 'white',
          width: 177,
          height: 229,
          borderRadius: 7,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1
          },
          shadowOpacity: 0.15,
          shadowRadius: 7,
          elevation: 1
      },

  productContainer: {
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 10,
    height: 235,
    // backgroundColor: 'red',
  },

  textTitle:{
    fontWeight: '700',
    fontSize: 18,
    marginLeft: 10,
  },

  titleSaleContainer:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  
  productSlaleContainer:{
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 180,
  },

  iconNotifyContainer:{
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },

  iconCartContainer:{
    marginRight: 10,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },

  webComeContainer:{
    flexDirection: 'row',
    width: 146,
    height: 36,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: 10,
    borderRadius: 20,
    paddingRight: 10,
  },

  headerContainer: {
    width: "100%",
    height: 160,
    backgroundColor: "#F7C33C",
  },

  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
})