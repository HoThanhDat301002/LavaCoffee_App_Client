import { StyleSheet, Text, View, Pressable, Image, ScrollView, Dimensions, FlatList } from 'react-native';
import React from 'react';
import { useFonts, Montserrat_600SemiBold, Montserrat_500Medium, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import endow from '../types/dataEndow';

const EndowScreen = (props) => {

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

  const renderItem = (item) => {
    return (
      <View style={styles.endowContainer}>
        <Image style={styles.endowImage} source={{ uri: item.item.image }} resizeMode={'cover'} />
        <View style={styles.endowTextContainer}>
          <Text style={styles.endowText}>{item.item.content}</Text>
          <Text style={styles.endowText}>Hết hạn {item.item.date}</Text>
        </View>
      </View>
    )
  }

  return (
    <View>
      <View style={styles.appBarContainer}>
        <Text style={styles.appBar}>Phiếu ưu đãi của bạn</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={
            <>
              <Text style={styles.readyText}>Sẵn sàng sử dụng</Text>
            </>
          }
          bounces={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          data={endow}
          showsVerticalScrollIndicator={false}
        />

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