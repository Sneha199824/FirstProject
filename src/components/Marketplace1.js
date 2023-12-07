import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import Swiper from 'react-native-swiper'

import Chat from "./Chat";
import Ordersummary from "./Ordersummary";
import Mycart from "./Mycart";

const Marketplace1 = (props) => {

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={Styles.headview}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Marketplace")}>
                        <Image source={require('../images/arrowleft.png')} style={Styles.arrowleft}></Image>
                    </TouchableOpacity>
                    <Image source={require('../images/whitesearch.png')} style={Styles.image3}/>
               <TouchableOpacity onPress={()=>props.navigation.navigate("Mycart")}><Image source={require('../images/cart2.png')} style={Styles.image4}/>
               </TouchableOpacity> 
                   </View>
                   <Swiper style={Styles.swiper}  activeDot={<View style={{backgroundColor:'black', width: 8, height: 8,borderRadius: 4,marginVertical:20 }} />}>
                    <Image source={require('../images/book.png')} style={Styles.bookimage} />
                    <Image source={require('../images/book.png')} style={Styles.bookimage}/>
                    <Image source={require('../images/book.png')} style={Styles.bookimage}/>
                    <Image source={require('../images/book.png')} style={Styles.bookimage}/>
                    
                   </Swiper>
                   <View style={Styles.indview}>
                    <Text style={Styles.indtext}>Indian Polity for Civil Services and Other State Examination</Text>
                    <Text style={Styles.$text}>$700</Text>
                   </View>
                   <View style={Styles.dotview}>
                    <Text style={Styles.hightext}>Highlights</Text>
                   <View style={{flexDirection:'row'}}>
                    <Text style={Styles.dot}>.</Text><Text style={Styles.dottext}>Author:xxxxxx</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={Styles.dot}>.</Text><Text style={Styles.dottext}>486 Pages</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={Styles.dot}>.</Text><Text style={Styles.dottext}>Language: English</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={Styles.dot}>.</Text><Text style={Styles.dottext}>Publisher:xxxxxxxx</Text>
                    </View>
                    </View>
                   <View style={Styles.buttonview}>
                   <TouchableOpacity><Text style={{paddingLeft:70,fontWeight:'bold',paddingTop:8}}>Add to Cart</Text></TouchableOpacity>

                   <TouchableOpacity onPress={()=>props.navigation.navigate("Ordersummary")}><Text style={Styles.buy}>Buy Now</Text></TouchableOpacity>
                   </View>
                   </ScrollView>
        </SafeAreaView>
    )
}
const Styles = StyleSheet.create({
    headview: {
        flexDirection:'row',
        backgroundColor: '#ffa500',
        position: 'relative',
        height: 55,
        textAlign: 'center',
        color: 'white',
        borderBottomWidth: 1,
        borderColor: 'orange',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginTop: 1,
        marginBottom: 15
    },
    headtext: {
        paddingLeft: 40,
        color: '#f7f5f5',
        fontSize: 16,
        paddingTop: 13,
        fontWeight: 'bold'
    },
   button:{
    borderWidth:1,
    height:40,
    width:120,
    borderColor:'#cfc5c4',
    borderRadius:8,
    margin:10
   },
   image3:{
    height:30,
    width:30,
    right:45,
    top:15,
   position:'absolute'
   },
   image4:{
    height:30,
    width:30,
    top:15,
    position:'absolute',
    left:320
   },
  bookimage:{
    height:140,
    width:110,
    resizeMode:'stretch',
    marginLeft:120
  },
  swiper:{
    height:220
  },
  arrowleft: {
    position: 'absolute',
    height: 20,
    width: 25,
    bottom: 10,
    left: 10
},
   dotview:{
    borderWidth:1,
    borderColor:'#dadfe8',
    height:270
  
   },
   dot:{
   fontSize:40,
   paddingLeft:20,
   color:'black',
   
   },
   dottext:{
    paddingLeft:8,
   color:'black',
   paddingTop:30

   },
   hightext:{
    color:'black',
    fontWeight:'bold',
    paddingLeft:25,
    paddingTop:20
   },
   $text:{
    borderWidth:1,
    paddingLeft:20,
    color:'orange',
    height:30,
    paddingTop:6,
    fontWeight:'bold',
    borderColor:'#dadfe8',
    backgroundColor:'#dadfe8',
    borderRadius:5,
    marginBottom:20
   },
   indview:{
    borderWidth:1,
    height:120,
    marginBottom:10,
    borderColor:'#dadfe8'

   },
   indtext:{
    padding:15,
    fontWeight:'500',
    width:240
   },
   buttonview:{
    flexDirection:'row',
    borderWidth:1,
    borderColor:'#dadfe8',
    marginTop:150,
    marginBottom:2
   },
   buy:{
    borderLeftWidth:1,
    borderBottomWidth:1,
    borderTopWidth:1,
    backgroundColor:'black',
    color:'white',
    marginLeft:30,
    width:185,
    height:35,
    textAlign:'center',
    paddingTop:6,
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5

   }
});
export default Marketplace1;