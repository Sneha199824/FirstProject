import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import Swiper from 'react-native-swiper';
import Mywallet from "./Mywallet";
import Campus from "./Campus";
import Fitness from "./Fitness";
import Setting from "./Setting";
import Sell from "./Terms/Sell";

const Logout=(props)=>{
    console.log("logout>>>",props)
    return(
        <SafeAreaView>
        <ScrollView>
            <View style={Styles.headview}>
           
                <Image source={require('../images/person.png')} style={Styles.personimage}></Image>
               
                <Text style={Styles.headtext}>Mohit Nara</Text>
                <Text style={Styles.viewtext}>view profile</Text>
                <TouchableOpacity>
                <Image source={require('../images/whitearrow.png')}style={Styles.arrowimage}></Image>
                </TouchableOpacity></View>
                <View style={{marginTop:20}}>
               
                <TextInput placeholder="Beacon" style={Styles.input}></TextInput>
                
                <TouchableOpacity>
                <Image source={require('../images/arrow.png')}style={Styles.arrowimage1}></Image>
                </TouchableOpacity>
                <TextInput placeholder="My network" style={Styles.input}></TextInput>
                <TouchableOpacity>
                <Image source={require('../images/arrow.png')}style={Styles.arrowimage1}></Image>
                </TouchableOpacity>
                <TextInput placeholder="My wallet" style={Styles.input}></TextInput>
                <TouchableOpacity>
                <Image source={require('../images/arrow.png')}style={Styles.arrowimage1}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.navigation.navigate("Sell")}>
                <TextInput placeholder="Sell" style={Styles.input}></TextInput>
               
                <Image source={require('../images/arrow.png')}style={Styles.arrowimage1}></Image>
                </TouchableOpacity>
</View>
           
            <TouchableOpacity>
                <Text style={StyleSheet.buttontext}>LogOut</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate('Setting')}>
                <Text style={StyleSheet.buttontext1}>Setting</Text>
            </TouchableOpacity>
          
            </ScrollView>
            </SafeAreaView>
    )
};
const Styles=StyleSheet.create({
    headview:{
        backgroundColor:'#ffa500',
        position:'relative',
       height:120
    },
    arrowimage:{
        position:'absolute',
        height:10,
        width:10,
        left:100,
        bottom:2
    },
    personimage:{
       marginTop:15,
       marginLeft:25,
       
        resizeMode: 'stretch',
        height: 50,
        width: 50
    },
    headtext:{
        color:'white',
        marginBottom:5,
        marginLeft:25,
        fontWeight:'bold',
        fontSize:18
    },
    viewtext:{
        color:'white',
        paddingLeft:28,
        
    },
    input:{
        borderWidth:1,
        height:50,
        margin:5,
        paddingLeft:15,
        borderRadius:10,
        backgroundColor:'#e0dfdc',
        borderColor:'#e0dfdc'
       
    },
    arrowimage1:{
       position:'absolute',
       height:13,
       width:13,
       right:17,
       bottom:24
    },
    buttonview:{
       flexDirection:'row'
    },
    buttontext:{
        padding:10,
        color:'red'
    }
})
export default Logout;