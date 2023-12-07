import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';

import Ordersummary from "./Ordersummary";
import Mycart from "./Mycart";


const Payment = (props) => {
    const [checked, setChecked] = React.useState('first');

    return (

        <SafeAreaView>
            <ScrollView>
                <View style={Styles.headview}>
                    <Text style={Styles.headtext}>Payment</Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate("Ordersummary")}>
                    <Image source={require('../images/arrowleft.png')} style={Styles.arrowleft}></Image>
                    </TouchableOpacity>

                </View>
              <View style={{flexDirection:'row'}}>
              <View style={Styles.radio} >

      <RadioButton />
     
    </View>
                <View >
                    <Text  style={Styles.credittext1}>Credit/Debit/Atm Card</Text>
                    <Text  style={Styles.statement}>Add and secure your card as per RBI guidlines</Text>
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={Styles.radio}>
                <RadioButton  /></View>
                <View>
                    <Text  style={Styles.credittext1}>Net Banking</Text>
                    <Text style={Styles.statement}>This instrument has low success,use UPI or card for better experience </Text>
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
                      <TouchableOpacity onPress={()=>props.navigation.navigate("Mycart")}><Text style={Styles.continue}>Pay</Text>
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
    marginTop:267
  },
  $7:{
    paddingTop:5,
    fontWeight:'bold',
    paddingLeft:19
  },
 radio:{
   marginLeft:20,
   marginTop:5
   
 },
 credittext1:{
    fontWeight:'bold',
    paddingTop:8

 },
 statement:{
 width:290,
 color:'#bdb9b9',
 paddingTop:5,
 paddingBottom:5,
 fontWeight:'600',
 fontSize:13
 
  
 }
})
export default Payment;