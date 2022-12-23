import { StyleSheet, Text, View, Pressable, Image, ScrollView, Dimensions, FlatList ,RefreshControl, ActivityIndicator} from 'react-native';
import React,{useState,useEffect,useContext} from 'react'
import { useFonts, Montserrat_600SemiBold, Montserrat_500Medium, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { getVoucher } from '../ProductSevice';

const EndowScreen = (props) => {

  const { navigation } = props;
  const [endow, setEndow] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    onGetEndow()
  }, []);
  const onGetEndow = async () => {
    getVoucher()
      .then(res => {
        let data = res;
        setEndow(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log('ErorrGetVoucher: ', err)
      });
 }
 const onRefresh = () =>{
  setIsLoading(true);
  onGetEndow();
}

 console.log(endow)

 const formatCash = (str) => {
  return str.split('').reverse().reduce((prev, next, index) => {
      return ((index % 3) ? next : (next + '.')) + prev
  })
}

  let [fontsLoaded, error] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_400Regular
  });

  if (!fontsLoaded) {
    return null;
  };
  console.log(endow)

  const renderItem = ({item}) => {
    return (
      <Pressable onPress={()=> navigation.navigate("DetailEndow",{id: item._id})}>
        <View style={styles.endowContainer}>
        <Image style={styles.endowImage} source={{ uri: item.image }} resizeMode={'cover'} />
        <View style={styles.endowTextContainer}>
          <Text style={styles.endowText}>{item.body}</Text>
          <Text style={styles.endowText}>{formatCash(item.discount.toString())}đ</Text>
          <Text style={styles.endowText}>Hết hạn {item.end_date}</Text>
        </View>
      </View>
      </Pressable>
    )
  }

  return (
    <View>
      <View style={styles.appBarContainer}>
        <Text style={styles.appBar}>Phiếu ưu đãi của bạn</Text>
      </View>
      <View style={styles.container}>
        {
           isLoading ? 
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <ActivityIndicator size="large" color="#CD6600" />
           </View> :
                   <FlatList
                   ListHeaderComponent={
                     <>
                       <Text style={styles.readyText}>Sẵn sàng sử dụng</Text>
                     </>
                   }
                   bounces={false}
                   keyExtractor={(item) => item._id.toString()}
                   renderItem={renderItem}
                   data={endow}
                   showsVerticalScrollIndicator={false}
                   refreshControl={
                     <RefreshControl
                       refreshing={refresh}
                       onRefresh={onRefresh}
                     />
                   }
                 />
        }
      </View>
    </View>
  )
}

export default EndowScreen

const styles = StyleSheet.create({
  endowText: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14
  },
  endowTextContainer: {
    justifyContent: 'space-between',
    marginLeft: 20,
    width: Dimensions.get('window').width - 140
  },
  endowImage: {
    width: 80,
    height: 80
  },
  endowContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10
  },
  readyText: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
    marginTop: 30,
    marginBottom: 15
  },
  container: {
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 150
  },
  appBar: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 18,
  },
  appBarContainer: {
    position: 'relative',
    backgroundColor: 'white',
    width: '100%',
    height: 75
  },
})