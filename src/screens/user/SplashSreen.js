import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'

const SplashSreen = (props) => {
    const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image style={styles.imageLogo} source={require('../../assets/logo.png')}/>
      </View>

      <View style={styles.buttonContentContainer}>
        <Text style={styles.textContent}>Trải nghiệm tuyệt vời cùng Lava Coffee</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                <Text style={styles.textButton}>Tiếp theo</Text>
            </View>
            </View>
            
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

export default SplashSreen

const styles = StyleSheet.create({
    textButton:{
        fontFamily: "Roboto",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "700",
        display: "flex",
        color: "#581B00",
        lineHeight: 25.28,
    },
    
    button:{
        width: 300,
        height: 50,
        backgroundColor: "#F7C33C",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    buttonContainer:{
        marginTop: 13,
       
    },
    textContent:{
        fontFamily: "Roboto",
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: "700",
        display: "flex",
        color: "#581B00",
    },
    
    buttonContentContainer:{
        marginTop: 250,
        alignItems: 'center'
    },

    imageLogo:{
        width: 300,
        height: 173,
    },

    imageContainer:{
        marginTop: 226,
        alignItems: 'center'
    },

    container:{
        width: "100%",
        height: "100%",
        backgroundColor: 'white'
    }
})