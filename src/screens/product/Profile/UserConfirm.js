import { StyleSheet, Text, View, Pressable, FlatList, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { useFonts, Montserrat_600SemiBold, Montserrat_500Medium, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { Entypo, AntDesign  } from '@expo/vector-icons';
import address from '../../types/dataAddress';
import { ScrollView } from 'react-native-gesture-handler';

const UserConfirm = (props) => {
    const [confirm_password, setConfirm_password] = useState('');
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [visible, setVisible] = useState(true);
    const [visible2, setVisible2] = useState(true);
    const [show3, setShow3] = useState(false);
    const [visible3, setVisible3] = useState(true);
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
        <View style={styles.appBarContainer}>
            <View style={styles.container}>
                <View style = {styles.headerContainer}>
                    <View style= {styles.itemHeaderContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo style={styles.back} name="chevron-left" size={18} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.textTitle}>Thay đổi mật khẩu</Text>
                        <View></View>
                    </View>
                 </View>

                 <View style = {styles.formContainer}>
      <View style={styles.formPassContainer}>
        <View style={{flexDirection: 'row'}}>
        <Text style ={{color: '#231F20'}}>Mật khẩu hiện tại:</Text>
          <Text style={{color: 'red'}}> *</Text>
        </View>
          
          <TextInput
            placeholder="Nhập mật khẩu"
            secureTextEntry={visible}
            style={styles.TextInput}
          />
          <View style={styles.showPass}>
          <TouchableOpacity onPress={() => {
              setShow(!show)
              setVisible(!visible)
            }}>
            
          </TouchableOpacity>
          </View>
        </View>

        <View style={styles.formPassContainer}>
        <View style={{flexDirection: 'row'}}>
        <Text style ={{color: '#231F20'}}>Mật khẩu mới:</Text>
          <Text style={{color: 'red'}}> *</Text>
        </View>
          <TextInput
            placeholder="Nhập mật khẩu"
            secureTextEntry = {visible2}
            style={styles.TextInput}
          />
          <View style={styles.showPass}>
          <TouchableOpacity onPress={() => {
              setShow2(!show2)
              setVisible2(!visible2)
            }}>
            
          </TouchableOpacity>
          </View>
        </View>

        <View style={styles.formPassContainer}>
        <View style={{flexDirection: 'row'}}>
        <Text style ={{color: '#231F20'}}>Xác nhận lại mật khẩu mới:</Text>
          <Text style={{color: 'red'}}> *</Text>
        </View>
          <TextInput
            placeholder="Nhập mật khẩu"
            secureTextEntry = {visible3}
            style={styles.TextInput}
          />
          <View style={styles.showPass}>
          <TouchableOpacity onPress={() => {
              setShow3(!show3)
              setVisible3(!visible3)
            }}>
            
          </TouchableOpacity>
          </View>
        </View>
      </View>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} >
            <Text style={styles.save} >
              Lưu
            </Text>
          </Pressable>
        </View>
          
            </View>
        </View>
    )
}

export default UserConfirm

const styles = StyleSheet.create({
    save: {
        color: "white",
        fontWeight: "700",
        lineHeight: 24,
        fontSize: 16,
        fontStyle: "normal",
        display: "flex",
        flexGrow: 0,
      },
    
      button: {
        width: 200,
        height: 50,
        backgroundColor: "#CD6600",
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
      },
    
      buttonContainer: {
        marginTop: 53,
        alignItems: "center",
      },
    
      forgotPassText: {
        fontFamily: "Roboto",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "400",
        display: "flex",
        color: "#489620",
      },
    
      forgotPassContainer: {
        marginTop: 10,
        alignItems: "flex-end",
        marginHorizontal: 25,
      },
    
      showPass: {
        position: "absolute",
        right: 35,
        top: 40,
      },
    
      TextInput: {
        paddingRight: 35,
        padding: 10,
        width: 340,
        height: 50,
        marginVertical: 4,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#C9C2C0'
      },
      formPassContainer: {
        marginTop: 20,
      },
    
      formContainer:{
      justifyContent: 'center',
      alignItems: 'center'
      },

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
    container: {
      backgroundColor: 'white',
      height: '100%',
    },

})