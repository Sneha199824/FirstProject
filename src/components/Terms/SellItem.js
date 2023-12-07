import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import Styles from '../Style/Styles';


const { height, width } = Dimensions.get('window');
const OrderData = [
     {
        id: '1',
        image: require('../../images/book.png'),
        title: 'Indian Polity',
        price: ' price:$700',
        Category: ' Category:B.A',
        button: 'View Order'
    },
     {
        id: '2',
        image: require('../../images/book.png'),
        title: 'Indian Polity',
        price: ' price:$700',
        Category: ' Category:B.A',
        button: 'View Order'
    },
    {
        id: '3',
        image: require('../../images/book.png'),
        title: 'Indian Polity',
        price: ' price:$700',
        Category: ' Category:B.A',
        button: 'View Order'
    },
    {
        id: '4',
        image: require('../../images/book.png'),
        title: 'Indian Polity',
        price: ' price:$700',
        Category: ' Category:B.A',
        button: 'View Order'
    }
]

const SellItem = (props) => {
    return (
        <SafeAreaView>

            <View>
                <View >
                    <TouchableOpacity onPress={() => props.navigation.navigate("Logout")} style={Styles.HeadView}>
                        <Image source={require('../../images/arrowleft.png')} style={Styles.HeadImage}></Image>

                        <Text style={Styles.HeadText} > On Sale item(s)</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <FlatList
                data={OrderData}
                renderItem={({ item, id }) =>
                    <View style={Style.bookView}>
                        <Image source={item.image} style={Style.book} />
                        <View>
                            <Text style={Style.title}>{item.title}</Text>
                            <Text style={Style.price}>{item.price}</Text>
                            <Text style={Style.price}>{item.Category}</Text>
                        </View>
                        <View>
                            <Text style={Style.button}>{item.button}</Text>
                        </View>
                    </View>
                }

                keyExtractor={(item) => item.id}
            />

        </SafeAreaView>
    )
};
const Style = StyleSheet.create({
    bookView: {
        flexDirection: 'row',
        height: height * 0.14, 
        marginLeft:20,
        marginRight:20,
        marginTop:10,
        borderWidth: 1,
        borderRadius: 5, borderColor: '#d4d5d6', elevation: 3, shadowOpacity: '0.2', shadowColor: '#d4d5d6'

    },
    book: {
        height: height * 0.1,
        width: width * 0.13, marginTop: 10, marginLeft: 10
    },
    title: {
        fontSize: 19,
        fontWeight: '600',
        color: 'black', paddingLeft: 18, paddingTop: 5
    },
    price: {
        paddingLeft: 18,
        paddingTop: 3
    }, button: {
        borderWidth: 1, backgroundColor: 'black', color: 'white',
        borderRadius: 10, marginTop: 35, marginLeft: 50, fontSize: 12,
        textAlign: 'center', paddingTop: 3, paddingBottom: 3, paddingLeft: 14, paddingRight: 14
    }
})

export default SellItem;