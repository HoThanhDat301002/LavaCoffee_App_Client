import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    ScrollView,
    FlatList,
    TouchableOpacity,
    TextInput,
    ToastAndroid,
    Alert
} from "react-native";
import React, { useEffect, useState } from 'react'
import { getAddress, getProfile } from "../../user/UserService";
import { Ionicons } from '@expo/vector-icons'; 
import RNPickerSelect from "react-native-picker-select";
import { cartStore } from "../../mobx/cart_store";
import { orderStore } from "../../mobx/order_store";
const PaymentAddress = (props) => {
    const {navigation} = props
    const [city, setCity] = useState([]);
    const [province, setProvince] = useState([]);
    
    const [district, setDistrict] = useState([]);
    const [ward, setWard] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState(0);
    const [selectedDistric, setSelectedDistric] = useState(0);
    const [selectedWards, setSelectedWards] = useState();
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [numAddress, setNumAddress] = useState("")
    const [textCity, setTextCity] = useState("");
    const [textDistrict, setTextDistrict] = useState("");
    const [feeDelivery, setFeeDelivery] = useState();
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        onDistric()
        onGetAddress()
        setWard([])
        onGetProfile()
      }, [selectedProvince]);

      useEffect(() => {
        onWards()
      }, [selectedDistric]);

      const onGetProfile = async () => {
        getProfile()
            .then(res => {
            let data = res;
            setProfile(data);
            setName(data.name)
            setPhone(data.phone)
            
            })
            .catch(err => {
            });
      };

      const onGetAddress = async () => {
        getAddress()
          .then(res => {
            let data = res;
            data.find((e) => {
              if(e.code == 79){
                // console.log('sadsad',e)
                setProvince([e])
              } 
            }) 
            setCity(data);   
            
          })
          .catch(err => {});
     }
     

     const onDistric =  () => {
        city.find((dist) =>{
          if(dist.code === selectedProvince){
            setDistrict(dist.districts)
            setTextCity(dist.name)
          }

          if(selectedProvince == 0){
            setDistrict([])
          }
          else{
            return null
          }
        })
      }

      const onWards =  () => {
        district.find((w) =>{
          if(w.code === selectedDistric){
            setWard(w.wards)
            setTextDistrict(w.name)
            if(selectedDistric == 764){
              setFeeDelivery(15000)
            }else{
              setFeeDelivery(25000)
            }
          } 
          else{
            return null
          }
        })

        if(!province) return null;
        if(!profile) return null
        // ward.find((w) =>{
        //   if(w.name === "G?? V???p"){
        //     setFeeDelivery(15000)
        //   }else{
        //     return null
        //   }
        // })
      }
      // console.log(selectedProvince)

      // if(selectedWards == 'G?? V???p'){
      //   setFeeDelivery(15000)
      // }else{
      //   setFeeDelivery(25000)
      // }

      // console.log('=>>>>', textDistrict)

      const onOrderAddress = async () => {
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if (
          !name ||
          !phone ||
          !numAddress ||
          name.trim().length == 0 ||
          phone.trim().length == 0 ||
          numAddress.trim().length == 0
        ) {
          Alert.alert('?????a ch??? giao h??ng', 'Vui l??ng nh???p ?????y ????? th??ng tin', [
            {text: 'X??c nh???n',}
          ])
          return;
        }else if(vnf_regex.test(phone) == false){
          Alert.alert('?????a ch??? giao h??ng', 'S??? ??i???n tho???i kh??ng ????ng ?????nh d???ng', [
            {text: 'X??c nh???n',}
          ])
        }
         else{

                const res = {
                  name: name,
                  phone: phone,
                  address: numAddress, 
                  addressCity:  textCity,
                  addressDistrict: textDistrict,
                  addressWard: selectedWards,
                  feeDelivery: feeDelivery,
                  moneyDiscount: 0, // Tien giam gia
                  moneyTotal: cartStore.CalculateTotal,
                  moneyFinal: cartStore.CalculateTotal + feeDelivery
                }
              orderStore.orderInfoArray(res)
              navigation.navigate("OrderConfirmation")
              // console.log('>>>>', res)
            } 
      };

  return (
    <View style = {styles.container}>
      <View style = {styles.headerContainer}>
            <View style= {styles.itemHeaderContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.textTitle}>?????a ch??? giao h??ng</Text>
                <View></View>
            </View>
        </View>

        <ScrollView
        style = {{}}
        showsVerticalScrollIndicator={false}
        >

        <View style = {styles.titleContainer}>
            <Image style={{width: "50%", height:150}} source={require("../../../assets/shipper-address.png")} />
        </View>

        <View style = {styles.nameContainer}>
            <View style={{flexDirection: 'row'}}>
            <Text style ={{color: '#231F20'}}>H??? t??n ng?????i nh???n h??ng:</Text>
            <Text style={{color: 'red'}}> *</Text>
            </View>
            <TextInput
            placeholder="Nh???p t??n ng?????i nh???n h??ng"
            value={name}
            onChangeText={setName}
            style={styles.TextInput}
          />
        </View>

        <View style = {styles.phoneContainer}>
            <View style={{flexDirection: 'row'}}>
            <Text style ={{color: '#231F20'}}>S??? ??i???n tho???i:</Text>
            <Text style={{color: 'red'}}> *</Text>
            </View>
            <TextInput
            keyboardType = 'number-pad'
            placeholder="Nh???p s??? ??i???n tho???i ng?????i nh???n h??ng"
            value={phone}
            onChangeText={setPhone}
            style={styles.TextInput}
          />
        </View>

        <View style={styles.Provincetainer}>
            <View style={{flexDirection: 'row'}}>
            <Text style ={{color: '#231F20'}}>T???nh/Th??nh Ph???:</Text>
            <Text style={{color: 'red'}}> *</Text>
            </View>

            <View style={styles.pickerContainer}>
                <RNPickerSelect
                value={selectedProvince}
                onValueChange={(itemValue, itemIndex) =>{
                  setSelectedProvince(itemValue)
                  setSelectedDistric(0)
                }}
                placeholder={{ label: "Ch???n t???nh/ th??nh ph???", value: 0,color: '#C9C2C0' }}
                items={
                  province ? 
                    province.map((item) => (
                        { label: item.name, value: item.code, key: 'index', color: 'black' }
                    ))
                    : null
                }
                >
                </RNPickerSelect>
            </View>
        </View>

        <View style={styles.Provincetainer}>
            <View style={{flexDirection: 'row'}}>
            <Text style ={{color: '#231F20'}}>Qu???n/Huy???n:</Text>
            <Text style={{color: 'red'}}> *</Text>
            </View>

            <View style={styles.pickerContainer}>
                <RNPickerSelect
                value={selectedDistric}
                onValueChange={(itemValue, itemIndex) =>{
                  setSelectedDistric(itemValue)
                  setSelectedWards(0)
                }}
                placeholder={{ label: "Ch???n qu???n/ huy???n", value: null,color: '#C9C2C0' }}
                items={
                    district ? 
                    district.map((item) => (
                        { label: item.name, value: item.code, key: 'index', color: 'black' }
                    ))
                    : null
                }
                >
                </RNPickerSelect>
            </View>
        </View>

        <View style={styles.Provincetainer}>
            <View style={{flexDirection: 'row'}}>
            <Text style ={{color: '#231F20'}}>Ph?????ng/X??:</Text>
            <Text style={{color: 'red'}}> *</Text>
            </View>

            <View style={styles.pickerContainer}>
                <RNPickerSelect
                value={selectedWards}
                onValueChange={(itemValue, itemIndex) =>{
                  setSelectedWards(itemValue)
                }}
                placeholder={{ label: "Ch???n ph?????ng/ x??", value: 0, color: '#C9C2C0' }}
                items={
                    ward ? 
                    ward.map((item) => (
                        { label: item.name, value: item.name, key: 'index', color: 'black' }
                    ))
                    : null
                }
                >
                </RNPickerSelect>
            </View>
        </View>

        <View style = {styles.phoneContainer}>
            <View style={{flexDirection: 'row'}}>
            <Text style ={{color: '#231F20'}}>?????a ch???:</Text>
            <Text style={{color: 'red'}}> *</Text>
            </View>
            <TextInput
            placeholder="VD: 1 ???????ng Tr?????ng Chinh"
            value={numAddress}
            onChangeText={setNumAddress}
            style={styles.TextInput}
          />
        </View>

        <View style={styles.buttonNextContainer}>
            <TouchableOpacity onPress={()=> onOrderAddress()}>
                <View style={styles.buttonNext}>
                    <Text style={styles.textNext}>Ti???p theo</Text>
                </View>
            </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
  )
}

export default PaymentAddress

const styles = StyleSheet.create({
    textNext:{
        color: "white",
        fontSize: 16,
        fontStyle: "normal",
        flexGrow: 0,
        fontWeight: '700'
    },

    buttonNext:{
        width: 177,
        height: 50,
        backgroundColor: "#CD6600",
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
    },
 
    buttonNextContainer:{
        alignItems: "center",
        padding: 10,
    },

    pickerContainer:{
        marginTop: 5,
        height: 50,
        width: 350,
        borderRadius:7,
        borderWidth: 1,
        borderColor: '#C9C2C0'
    },

    phoneContainer:{
        marginLeft: 20,
        marginTop: 20,
    },
    Provincetainer:{
        marginTop: 20,
        marginLeft: 20,
    },

    TextInput: {
        paddingRight: 35,
        padding: 10,
        width: 350,
        height: 50,
        marginVertical: 4,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#C9C2C0'
      },

      nameContainer:{
        marginTop: 10,
        marginLeft: 20,
      },

    titleContainer:{
        alignItems: 'center',
        // backgroundColor:'red'
        paddingTop: 10,
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

    container:{
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: 'white',
    },
})