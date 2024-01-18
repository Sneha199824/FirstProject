import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions, FlatList,  } from 'react-native';
import Styles from '../Style/Styles';
import { useNavigation } from '@react-navigation/native';
import { PaymentReuest } from './PaymentRequest';
import Payment from '../Payment';
import Privacy from '../Privacy';


const DATA = [
    {
        id: 1,
        image: require('../../images/person.png'),
        name: 'Ajitabh Pandey',
        title: ' hired you for',
        hobby: 'Gym training',
        isTouchable: true
    },
    {
        id: 2,
        image: require('../../images/person.png'),
        name: 'Mohit nara',
        title: ' inviting you',
        hobby: 'Connect'
    },
    {
        id: 3,
        image: require('../../images/person.png'),
        name: 'Ajitabh Pandey',
        title: ' hired you for',
        hobby: 'Gym training'
    },
    {
        id: 4,
        image: require('../../images/person.png'),
        name: 'Mohit nara',
        title: ' inviting you',
        hobby: 'Connect'
    },
    {
        id: 5,
        image: require('../../images/person.png'),
        name: 'Ajitabh Pandey',
        title: ' hired you for',
        hobby: 'Gym training'
    },
    {
        id: 6,
        image: require('../../images/person.png'),
        name: 'Mohit nara',
        title: ' inviting you',
        hobby: 'Connect'
    },
    {
        id: 7,
        image: require('../../images/person.png'),
        name: 'Ajitabh Pandey',
        title: ' hired you for',
        hobby: 'Gym training'
    },
    {
        id: 8,
        image: require('../../images/person.png'),
        name: 'Mohit nara',
        title: ' inviting you',
        hobby: 'Connect'
    },
]

const renderItem = ({ item, id }) => (
      <TouchableOpacity
     onPress={item.id === 1 ? () => props.navigation.navigate(Privacy) : null}

      >
        <View style={style.container}>
            <View style={style.sideline}></View>

            <Image source={item.image} style={style.imagestyle} />
            <View styel={style.textview}>
                <View>
                    <Text style={style.name}>{item.name}</Text>
                    <Text style={style.title}>{item.title}</Text>
                </View>
                <View>
                    <Text style={style.hobby}>{item.hobby}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
);


const Notification = () => {
    const navigation = useNavigation();

    return (

        <SafeAreaView >
  

            <View>
                <View >
                    <TouchableOpacity onPress={() => props.navigation.navigate("Logout")} style={Styles.HeadView}>
                        <Image source={require('../../images/arrowleft.png')} style={Styles.HeadImage}></Image>

                        <Text style={Styles.HeadText} > Notification</Text>
                    </TouchableOpacity>

                </View>
            </View>
            
            <View style={style.contentview}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()} />
                </View>
        </SafeAreaView>
    )
};

const style = StyleSheet.create({
  
    container: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 12,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        height: 90,
        display: 'flex',
        flex: 1,
    },
    contentview:{
marginBottom:160,
flexDirection:'row'
    },
    sideline: {
        backgroundColor: '#ffa500',
        width: 10,
        borderRadius: 30,
    },
    imagestyle: {
        height: 60,
        width: 60,
        borderRadius: 25,
        marginTop: 10,
        marginLeft: 5
    },
    textview: {
    },
    name: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 12,paddingTop:12
    },
    title: {
        color: 'black',
        fontSize: 12,paddingLeft:140
    },
    hobby: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 12
    }
});
export default Notification;