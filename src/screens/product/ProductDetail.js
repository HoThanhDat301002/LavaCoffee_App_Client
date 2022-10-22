import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, {useState} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { height } from './DetailNews';
import productFeatured from '../types/dataFeaturedProducts'
import { Ionicons } from '@expo/vector-icons'; 

const ProductDetail = (props,route) => {
    const {navigation,route:{params: {id},},} = props

    const [mood, setMood] = useState('Vừa')
    const [finalPrice, setFinalPrice] = useState(35000)
    const [heart, setHeart] = useState(false)
    const [qwe, setQwe] = useState()

    const [quantity, setQuatity] = useState(1);


    const item = productFeatured.find((items) =>{
        if(items.id == id){
            console.log('detail========>', items)
            return items;
        }
      })

      const formatCash = (str) => {
        return str.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + '.')) + prev
        })
      }

      if(!item){
        return null
      }
    //   console.log('=====>', qwe)
    //  const renderGalleries = (e) =>{
    //     console.log(e.thumbnail)
    //     return(
    //        <TouchableOpacity onPress={()=> setQwe(e.thumbnail)}>
    //             <View>
    //                 <Text>{e.id}</Text>
    //                 <Image style={{width:300, height: 400}} source = {{uri: e.thumbnail}} resizeMode={"cover"}/>
    //                 </View>
    //        </TouchableOpacity>
    //     )
    //  }

    const onNumberChange = (isAdd: boolean) => {
        if (isAdd == true) {
            setQuatity(quantity + 1);
        } else if (isAdd == false && quantity > 1) {
            setQuatity(quantity - 1)
        }
    }

  return (
    <View style = {styles.container}>
      <View style ={styles.headerContainer}>
      </View>
        <ScrollView
        >
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}>
                <View style={styles.imageContainer}>
                    {
                        item.productGalleries.map(((e) => {
                            return(
                                <View key={e.thumbnail}>
                                    <Image style={{width:300, height: 400}} source = {{uri: e.thumbnail}} resizeMode={"cover"}/>
                                </View>
                            )
                        }))
                    }
                </View>
        </ScrollView>
                        
        <View style = {styles.deltaiContainer}>
            <View style = {styles.textNameContainer}>
                <Text style = {styles.textName}>{item.name}</Text>
                <View>
                    {
                        heart == false ?
                        <View>
                            <TouchableOpacity onPress={()=>setHeart(true)}>
                            <Ionicons name="ios-heart-outline" size={24} color="black" />
                        </TouchableOpacity>
                        </View>
                        :
                        <View>
                        <TouchableOpacity onPress={()=>setHeart(false)}>
                            <Ionicons name="ios-heart-sharp" size={24} color="red" />
                        </TouchableOpacity>
                        </View>
                        
                    
                    }
                </View>
                
            </View>

            <View style = {styles.textPriceContainer}>
            <Text style = {styles.textPrice}>{formatCash(item.price.toString())}đ</Text>
            </View>

            <View style = {styles.describeContainer}>
                <Text style = {styles.textDescribe}>{item.describe}</Text>
            </View>
            
        </View>

        <View style = {styles.SizeContainer}>
            <View style = {styles.textSizeContainer}>
                <View style = {{flexDirection: 'row'}}>
                  <Text style = {styles.textSize}>Size</Text>
                  <Text style = {{color:'red'}}>*</Text>
                </View>
                <View>
                    <Text>Chọn 1 loại size</Text>
                </View>

                <View style={styles.wrapper}>
                {item.size.map(fleeling => (
                    <TouchableOpacity key={fleeling.id}  onPress={()=> {
                        setMood(fleeling.title)
                        setFinalPrice(fleeling.price)
                        }}>
                        <View style ={{flexDirection: 'column', justifyContent: 'space-between'}}>
                            <View style = {styles.mood}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={styles.outter}>
                                        {mood === fleeling.title && <View style={styles.innter}/>}
                                    </View>
                                    {
                                        <Text style={styles.fleeling}>{fleeling.title}</Text>
                                    }
                                </View>
                                <Text style={styles.fleeling}>{formatCash(fleeling.price.toString())}đ</Text>
                            </View>
                            <View style = {{paddingRight: 10, height: 8,}}>
                                <View style ={styles.lineStyle}></View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    ))}
                </View>
            </View>
        </View>
        <View style = {{height:100}}></View>
        </ScrollView>
        
        <View style = {styles.footerContainer}>
            <View style = {styles.buttonContainer}>
                <View style = {styles.quantityContainer}>
                    <TouchableOpacity onPress={() => onNumberChange(false)}>
                        <View style = {styles.truQuantity}>
                            <Text style = {styles.textTru}>-</Text>
                        </View>
                    </TouchableOpacity>
                    <View style = {styles.quantity}>
                        <Text style = {styles.textQuantity}>{quantity}</Text>
                    </View>
                    <TouchableOpacity onPress={() => onNumberChange(true)}>
                        <View style = {styles.congQuantity}>
                            <Text style = {styles.textCong}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                <View style = {styles.button}>
                    <Text style = {styles.textButton}>Chọn {quantity*finalPrice}đ</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
    textQuantity:{
        color: "#581B00",
        fontWeight: "700",
        lineHeight: 24,
        fontSize: 16,
        fontStyle: "normal",
    },
    textTru:{
        color: "#581B00",
        fontWeight: "700",
        lineHeight: 24,
        fontSize: 16,
        fontStyle: "normal",
    },
    
    textCong:{
        color: "#581B00",
        fontWeight: "700",
        lineHeight: 24,
        fontSize: 16,
        fontStyle: "normal",
    },
    color: "#581B00",
        fontWeight: "700",
        lineHeight: 24,
        fontSize: 16,
        fontStyle: "normal",
    
    quantity:{
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        width: 30,
    },

    truQuantity:{
        width: 30,
        height: 30,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7C33C'
    },
    congQuantity:{
        width: 30,
        height: 30,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7C33C'
    },

    textButton:{
        color: "#581B00",
        fontWeight: "700",
        lineHeight: 24,
        fontSize: 16,
        fontStyle: "normal",
    },

    button:{
        width: 189,
        height: 50,
        backgroundColor: '#F7C33C',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityContainer:{
        width: 130,
        // backgroundColor: 'red',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight:10,
        paddingLeft: 10,
    },

    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 20,
    },

    footerContainer:{
        elevation: 5,
        height: 70,
       justifyContent: 'center',
        backgroundColor: 'white',
    },

    lineStyle:{
        bottom: 25,
        marginTop: 30,
        borderWidth: 0.5,
        borderColor:'#C9C2C0',
    },
    fleeling:{
        marginLeft: 10,
        fontSize: 16,
        color: '#231F20',
    },

    innter:{
        width: 7,
        height: 7,
        backgroundColor: '#F7C33C',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },

    outter:{
        width: 15,
        height: 15,
        borderWidth: 1,
        borderColor: '#F7C33C',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    mood:{
        marginTop: 7,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 20,
        height: 40,
        // backgroundColor: 'red',
    },
    wrapper:{
        marginTop: 10,
    },

    textSize:{
        fontSize: 18,
        fontWeight: '500'
    },

    textSizeContainer:{
        backgroundColor: 'white',
        paddingTop: 10, 
        paddingLeft: 10,
    },

    SizeContainer:{
        paddingTop: 10,
    },

    textDescribe:{
        textTransform: 'lowercase',
        paddingTop: 10,
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 0.8)'
    },

    describeContainer:{
        paddingTop: 5,
        paddingRight: 20,
        paddingLeft: 10,
        paddingBottom: 10,
    },

    textPrice:{
        paddingTop: 10,
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 0.8)'
    },
    textPriceContainer:{
        paddingRight: 20,
        paddingLeft: 10,
    },
    textName:{
        fontSize: 26,
        fontWeight: '500',
    },

    textNameContainer:{
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 20,
        paddingTop: 10,
    },

    deltaiContainer:{
        height:210,
        backgroundColor:'white'
    },
    imageContainer:{
        flexDirection: 'row'
    },

    headerContainer:{   
        height: 35,
        backgroundColor: '#F7C33C'
    },

    container:{
        flexDirection: 'column', 
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        backgroundColor: '#F9F6F6',
    },
})