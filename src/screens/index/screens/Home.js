import { StyleSheet, Text, View, Image, TextInput, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import { useFonts, Montserrat_600SemiBold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native-virtualized-view';

const Home = (props) => {

    let [fontsLoaded, error] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold
    });

    if (!fontsLoaded) {
        return null;
    }

    const renderItem = ({ item }) => {

        const { image, name, price } = item;

        return (
            <View style={styles.productContainer}>
                <Image style={styles.productImage} resizeMode='cover' source={{ uri: image }} />
                <View style={styles.productText}>
                    <Text numberOfLines={1} style={styles.productName}>{name}</Text>
                    <Text style={styles.productPrice}>{price} VNĐ</Text>
                </View>
            </View>
        )
    }

    const BannerItem = ({ item }) => {
        const { image } = item;
        return (
            <View style={styles.bannerContainer}>
                <Image style={styles.banner} resizeMode='cover' source={{ uri: image }} />
            </View>
        );
    }

    return (
        <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>

                <View style={styles.tittle}>
                    {/** Chữ "Chào Jen!" */}
                    <View style={styles.helloContainer}>
                        <Image style={styles.helloImage} resizeMode='cover' source={require('../../../assets/images/logomini.png')} />
                        <Text style={styles.helloText}>Chào Jen!</Text>
                    </View>

                    {/** Icon chuông */}
                    <View style={styles.bellContainer}>
                        <Feather name="bell" size={24} color="black" />
                    </View>
                </View>

                <View style={styles.searchContainer}>
                    {/** Thanh tìm kiếm */}
                    <TextInput
                        style={styles.search}
                        placeholder='Tìm kiếm' />

                    {/** Icon kính lúp */}
                    <Feather name="search" size={24} color="black" />
                </View>

                {/** Banner */}
                <View style={styles.slider}>
                    <FlatList
                        horizontal
                        data={data}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => Math.random()}
                        pagingEnabled
                        renderItem={({ item }) => {
                            return <BannerItem item={item} />
                        }} />

                    <View style={styles.dotView}>
                        {
                            data.map((e, index) => {
                                return <Text
                                    key={index}
                                    style={styles.imgActive == index ? styles.dotActive : styles.dot}
                                >
                                    ●
                                </Text>
                            })
                        }

                    </View>
                </View>

                {/** Chữ "Menu phổ biến" */}
                <View style={styles.menuTittleContainer}>
                    <Text style={styles.menuTittle}>Menu phổ biến</Text>
                </View>

                {/** List Menu phổ biến */}
                <FlatList
                    data={data}
                    keyExtractor={item => Math.random()}
                    renderItem={renderItem}
                />


            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    dot: {
        margin: 3,
        color: '#888'
    },
    dotActive: {
        margin: 3,
        color: 'black'
    },
    dotView: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    slider: {
        position: 'relative',
        width: '100%',
        marginTop: 28,
    },
    productPrice: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 12,
        lineHeight: 17,
        letterSpacing: -0.3,
    },
    productName: {
        flexShrink: 1,
        marginBottom: 10,
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 16,
        lineHeight: 23,
        letterSpacing: -0.3,
    },
    productText: {
        marginLeft: 8,
        width: Dimensions.get('window').width - 144
    },
    productImage: {
        borderRadius: 20,
        width: 84,
        height: 84
    },
    productContainer: {
        marginBottom: 14,
        marginHorizontal: 18,
        padding: 8,
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 20,
    },
    menuTittle: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 16,
        lineHeight: 23,
        letterSpacing: -0.3
    },
    menuTittleContainer: {
        marginHorizontal: 18,
        marginTop: 28,
        marginBottom: 14
    },
    banner: {
        width: Dimensions.get('window').width - 36,
        height: 220,
        borderRadius: 10,

    },
    bannerContainer: {
        paddingHorizontal: 18,
        // width: Dimensions.get('window').width - 10
    },
    search: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 16,
        lineHeight: 23,
        letterSpacing: -0.3
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 18,
        marginTop: 18,
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 30,
    },
    bellContainer: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 40
    },
    helloText: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 16,
        lineHeight: 23,
        letterSpacing: -0.3
    },
    helloImage: {
        width: 20,
        height: 20
    },
    helloContainer: {
        minWidth: 145.5,
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 20
    },
    tittle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50,
        marginHorizontal: 18,
    },
    container: {
        backgroundColor: '#F7C33C',
        width: '100%',
        height: '100%'
    }
})

var data = [
    {
        "_id": "001",
        "image": "https://i.pinimg.com/564x/22/89/88/228988a36bd49678eeffe6ee8d37130d.jpg",
        "name": "Trà Đào Cam Sả",
        "price": "55.000"
    },
    {
        "_id": "002",
        "image": "https://i.pinimg.com/564x/17/fa/9e/17fa9ed3c688bc76e8a2d32181fa4297.jpg",
        "name": "Trà Chanh Mật Ong",
        "price": "29.000"
    },
    {
        "_id": "003",
        "image": "https://i.pinimg.com/564x/c3/93/ff/c393ff9abd1a8d59bfe5f9db8fc3d7d9.jpg",
        "name": "Cà Phê Sữa Dừa",
        "price": "49.000"
    },
    {
        "_id": "004",
        "image": "https://i.pinimg.com/564x/64/5c/a4/645ca406c75f3976158a3b17a6fc03bd.jpg",
        "name": "Latte (nóng)",
        "price": "69.000"
    },
    {
        "_id": "005",
        "image": "https://i.pinimg.com/564x/f1/f8/50/f1f850c985dfcab90e8b41b0beb39d18.jpg",
        "name": "Capuchino",
        "price": "59.000"
    },

];