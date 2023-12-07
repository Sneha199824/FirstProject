import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import Payment from "./Payment";
import Marketplace1 from "./Marketplace1";


const Ordersummary = (props) => {
   
    return (

        <SafeAreaView>
            <ScrollView>
                <View style={Styles.headview}>
                    <Text style={Styles.headtext}>Order Summary</Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate("Marketplace1")}>
                    <Image source={require('../images/arrowleft.png')} style={Styles.arrowleft}></Image>
                    </TouchableOpacity>

                </View>
                <Text style={Styles.textbox}>Full Name</Text>
                    <TextInput style={Styles.inputbox} ></TextInput>
                    <Text style={Styles.textbox}>Phone number</Text>
                    <TextInput style={Styles.inputbox} ></TextInput>
                    <Text style={{paddingLeft:20,fontWeight:'bold',paddingTop:6}}>Item Details</Text>
                    <View style={Styles.bookview}>
                        <Image source={require('../images/book.png')} style={Styles.book} />
                        <View>
                            <Text style={Styles.indtext}>Indian Polity for Civil Services and Other State Examination</Text>
                            <Text style={{paddingLeft:10,fontWeight:'bold'}}>$700</Text>
                        </View>
                    </View>
                    <View style={Styles.priceview}>
                    <Text style={{paddingLeft:20,paddingTop:5,paddingBottom:5,fontWeight:'800'}}>Price Details</Text>
                        <View style={{flexDirection:'row',}}>
                        <Text style={Styles.pricetext}>Price(1 item)</Text><Text style={Styles.$text}>$700</Text>
                        </View>
                        <View style={{flexDirection:'row',}}><Text style={Styles.pricetext}>Tax</Text><Text style={Styles.$text1}>$7</Text></View>
                        <View style={Styles.totaltext}><Text style={Styles.pricetext}> Total Amount</Text><Text style={Styles.$text2}>$707</Text></View>
                        
                        </View>
                        
                    <View style={Styles.bottomview}>
                        <Text style={Styles.$7}>$707</Text>
                      <TouchableOpacity onPress={()=>props.navigation.navigate("Payment")}><Text style={Styles.continue}>Continue</Text>
                      </TouchableOpacity>
                    </View>
                </ScrollView>
        </SafeAreaView>



    )
}
const Styles = StyleSheet.create({
    headview: {
        backgroundColor: '#ffa500',
        position: 'relative',
        height: 55,
        textAlign: 'center',
        color: 'white',
        borderBottomWidth: 1,
        borderColor: 'orange',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: 1
    },
    arrowleft:{
        position:'absolute',
        height:20,
        width:25,
       bottom:0,
        left:10
    },
    headtext: {
        paddingLeft:40,
        color: 'white',
        fontSize: 16,
        paddingTop: 13,
        fontWeight: 'bold'
    },
    inputbox:{
        borderWidth:1,
        padding:10,
        marginLeft:20,
        marginRight:20,
        marginTop:10,
        borderRadius:10,
        borderColor:'#bdb9b9',
        backgroundColor:'#ebe8e8',
        fontSize:12
    },
    textbox:{
        paddingLeft:20,
        paddingTop:13
    },
    book:{
        height:60,
        width:45,
        resizeMode:'stretch',
        marginLeft:25,
        marginBottom:20,
        marginTop:20
    },
    bookview:{
        borderWidth:1,
        flexDirection:'row',
        marginBottom:10,
        marginTop:10,
        borderColor:'#bdb9b9',
    },
    indtext:{
        width:200,
        paddingLeft:7,
        fontWeight:"500",
        paddingTop:20,
        paddingBottom:8
    },
    pricetext:{
        paddingLeft:20,
        color:'#9ea0a3',
        fontWeight:'bold',

    },
    $text:{
        paddingLeft:200,
       
    },
    $text1:{
        paddingLeft:260,
        paddingTop:3
    },
  priceview:{
    borderWidth:1,
    borderColor:'#bdb9b9',
    height:115,
    marginBottom:80
  },  
  totaltext:{
    borderTopWidth:1,
    borderColor:'#bdb9b9',
    flexDirection:'row',
    paddingTop:5,
    paddingBottom:5,
    marginTop:5
  },
  $text2:{
    paddingLeft:196
  },
  continue:{
    borderTopWidth:1,
    borderBottomWidth:1,
    borderLeftWidth:1,
    backgroundColor:'black',
    color:'white',
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5,
    textAlign:'center',
    height:35,
    width:155,
    marginLeft:149,
    paddingTop:6

  },
  bottomview:{
    flexDirection:'row',
    borderWidth:1,
    borderColor:'#bdb9b9',
    marginTop:47
  },
  $7:{
    paddingTop:5,
    fontWeight:'bold',
    paddingLeft:19
  }
})
export default Ordersummary;