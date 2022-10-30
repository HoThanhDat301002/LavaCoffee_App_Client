import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useFonts, Montserrat_600SemiBold, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { Entypo, Feather, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const Contact = (props) => {

    const { navigation } = props;

    let [fontsLoaded, error] = useFonts({
        Montserrat_600SemiBold,
        Montserrat_500Medium
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View>
            <View style={styles.appBarContainer}>
                <Entypo onPress={() => navigation.goBack()} style={styles.back} name="chevron-left" size={18} color="black" />
                <Text style={styles.appBar}>Liên hệ và góp ý</Text>
            </View>
            <View style={styles.space}></View>
            <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.list}>
                        <View style={styles.listContainer}>
                            <Feather name="phone" size={18} color="black" />
                            <View style={styles.listTextContainer}>
                                <Text style={styles.listText}>Tổng đài</Text>
                                <Text style={[styles.listText, { paddingTop: 5 }]}>028 7308 8800</Text>
                            </View>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.listContainer}>
                            <Feather name="mail" size={18} color="black" />
                            <View style={styles.listTextContainer}>
                                <Text style={styles.listText}>Email</Text>
                                <Text style={[styles.listText, { paddingTop: 5 }]}>caodang@fpt.edu.vn</Text>
                            </View>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.listContainer}>
                            <FontAwesome5 name="globe-asia" size={18} color="black" />
                            <View style={styles.listTextContainer}>
                                <Text style={styles.listText}>Website</Text>
                                <Text style={[styles.listText, { paddingTop: 5 }]}>caodang.fpt.edu.vn</Text>
                            </View>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.listContainer}>
                            <Entypo name="facebook" size={18} color="black" />
                            <View style={styles.listTextContainer}>
                                <Text style={styles.listText}>Facebook</Text>
                                <Text style={[styles.listText, { paddingTop: 5 }]}>facebook.com/caodang.fptpoly</Text>
                            </View>
                        </View>
                        <View style={styles.line}></View>
                        <TouchableOpacity onPress={() => navigation.navigate('Feedback')} style={styles.listContainer}>
                            <MaterialCommunityIcons name="comment-alert-outline" size={18} color="black" />
                            <View style={styles.listTextContainer}>
                                <Text style={styles.listText}>Gửi góp ý về ứng dụng</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    line: {
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 0.7,
        marginHorizontal: 15
    },
    listText: {
        fontSize: 14,
        fontFamily: 'Montserrat_500Medium'
    },
    listTextContainer: {
        paddingLeft: 15
    },
    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },
    list: {
        backgroundColor: 'white',
        paddingBottom: 5
    },
    container: {
        width: '100%',
        height: '100%',
        marginBottom: 90
    },
    space: {
        height: 15
    },
    appBar: {
        position: 'absolute',
        bottom: 15,
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 18,
    },
    back: {
        position: 'absolute',
        bottom: 15,
        left: 15
    },
    appBarContainer: {
        position: 'relative',
        backgroundColor: 'white',
        width: '100%',
        height: 75,
        alignItems: 'center'
    },
})