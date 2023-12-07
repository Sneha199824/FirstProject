import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import Payment from "./Payment";
import Marketplace1 from "./Marketplace1";


const Mycart = (props) => {

    return (

        <SafeAreaView>
            <ScrollView>
                <View style={Styles.headview}>
                    <Text style={Styles.headtext}>My Cart</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Payment")}>
                        <Image source={require('../images/arrowleft.png')} style={Styles.arrowleft}></Image>

                    </TouchableOpacity>

                </View>
                <View style={Styles.mainview}>
                <View style={Styles.bookview}>
                    <Image source={require('../images/book.png')} style={Styles.book} />
                    <View>
                        <Text style={Styles.indtext}>Indian Polity for Civil Services and Other State Examination</Text>
                        <Text style={{ paddingLeft: 10, fontWeight: 'bold' }}>$700</Text>
                    </View></View>

                    <View style={Styles.deleteview}>
                        <Image source={require('../images/delete.png')} style={Styles.deleteimage}></Image>
                        <Text style={Styles.deletetext}>Remove</Text>
                    </View>
                
                </View>
                <View style={Styles.mainview}>
                <View style={Styles.bookview}>
                    <Image source={require('../images/book.png')} style={Styles.book} />
                    <View>
                        <Text style={Styles.indtext}>Indian Polity for Civil Services and Other State Examination</Text>
                        <Text style={{ paddingLeft: 10, fontWeight: 'bold' }}>$700</Text>
                    </View></View>

                    <View style={Styles.deleteview}>
                        <Image source={require('../images/delete.png')} style={Styles.deleteimage}></Image>
                        <Text style={Styles.deletetext}>Remove</Text>
                    </View>
                
                </View>
                <View style={Styles.mainview}>
                <View style={Styles.bookview}>
                    <Image source={require('../images/book.png')} style={Styles.book} />
                    <View>
                        <Text style={Styles.indtext}>Indian Polity for Civil Services and Other State Examination</Text>
                        <Text style={{ paddingLeft: 10, fontWeight: 'bold' }}>$700</Text>
                    </View></View>

                    <View style={Styles.deleteview}>
                        <Image source={require('../images/delete.png')} style={Styles.deleteimage}></Image>
                        <Text style={Styles.deletetext}>Remove</Text>
                    </View>
                
                </View>
                <View style={Styles.mainview}>
                <View style={Styles.bookview}>
                    <Image source={require('../images/book.png')} style={Styles.book} />
                    <View>
                        <Text style={Styles.indtext}>Indian Polity for Civil Services and Other State Examination</Text>
                        <Text style={{ paddingLeft: 10, fontWeight: 'bold' }}>$700</Text>
                    </View></View>

                    <View style={Styles.deleteview}>
                        <Image source={require('../images/delete.png')} style={Styles.deleteimage}></Image>
                        <Text style={Styles.deletetext}>Remove</Text>
                    </View>
                
                </View>
                <View style={Styles.bottomview}>
                        <Text style={Styles.$7}>$2800</Text>
                      <TouchableOpacity onPress={()=>props.navigation.navigate("Mycart")}><Text style={Styles.continue}>place order</Text>
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
        marginTop: 1,
        marginBottom:9
    },
    arrowleft: {
        position: 'absolute',
        height: 20,
        width: 25,
        bottom: 0,
        left: 10
    },
    headtext: {
        paddingLeft: 40,
        color: 'white',
        fontSize: 16,
        paddingTop: 13,
        fontWeight: 'bold'
    },

    book: {
        height: 60,
        width: 45,
        resizeMode: 'stretch',
        marginLeft: 25,
        marginBottom: 20,
        marginTop: 20
    },
    bookview: {
        flexDirection: 'row',
    },
    indtext: {
        width: 200,
        paddingLeft: 7,
        fontWeight: "500",
        paddingTop: 20,
        paddingBottom: 8
    },
    deleteimage:{
        height: 20,
        width: 18,
        resizeMode:'stretch',
        marginLeft:140,
        marginTop:12,
        
    },
    deleteview:{
        flexDirection:'row',
        borderColor: '#bdb9b9',
        marginBottom:20,
        alignItems:'center',
        borderTopWidth:1,
        height:28
        },
        deletetext:{
         paddingTop:9,
         fontWeight:'bold',
         color:'#bdb9b9'
        },
    mainview:{
        borderWidth: 1,
        marginTop: 5,
        borderColor: '#bdb9b9',
        height:140
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
})
export default Mycart;