import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import Marketplace1 from "./Marketplace1";

const Marketplace = (props) => {

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={Styles.headview}>
                    <Text style={Styles.headtext}>Marketplace </Text>
                    <Image source={require('../images/whitesearch.png')} style={Styles.image3}/>
               <TouchableOpacity><Image source={require('../images/cart2.png')} style={Styles.image4}/>
               </TouchableOpacity> 
                   </View>
<View style={{flexDirection:'row',marginLeft:40}}>
    <View style={Styles.button}>
        <Text style={{paddingLeft:10,paddingTop:8,fontWeight:'bold'}}>Sort By</Text>
        
        <Image source={require('../images/dropdown1.png')} style={Styles.image1}/>
    </View>
    <View style={Styles.button}>
        
        <Image source={require('../images/leftright.png')} style={Styles.image2}/>
        <Text style={{paddingLeft:65,paddingTop:8,fontWeight:'bold'}}>Filter</Text>
    </View>
</View>
<View style={Styles.bookview}>
    <View style={Styles.listview}>
    <Image source={require('../images/book.png')} style={Styles.bookimage}/>
  <TouchableOpacity onPress={()=>props.navigation.navigate("Marketplace1")}><Text style={Styles.indtext}>Indian Polity for civil and Other State Examination</Text>
    </TouchableOpacity> 
    <Text style={Styles.$text}>$100</Text>
    </View>
    <View style={Styles.listview}>
    <Image source={require('../images/book.png')} style={Styles.bookimage}/>
    <Text style={Styles.indtext}>Indian Polity for civil and Other State Examination</Text>
    <Text style={Styles.$text}>$100</Text>
    </View>
</View>
<View style={Styles.bookview}>
    <View style={Styles.listview}>
    <Image source={require('../images/book.png')} style={Styles.bookimage}/>
    <Text style={Styles.indtext}>Indian Polity for civil and Other State Examination</Text>
    <Text style={Styles.$text}>$100</Text>
    </View>
    <View style={Styles.listview}>
    <Image source={require('../images/book.png')} style={Styles.bookimage}/>
    <Text style={Styles.indtext}>Indian Polity for civil and Other State Examination</Text>
    <Text style={Styles.$text}>$100</Text>
    </View>
</View>
<View style={Styles.bookview}>
    <View style={Styles.listview}>
    <Image source={require('../images/book.png')} style={Styles.bookimage}/>
    <Text style={Styles.indtext}>Indian Polity for civil and Other State Examination</Text>
    <Text style={Styles.$text}>$100</Text>
    </View>
    <View style={Styles.listview}>
    <Image source={require('../images/book.png')} style={Styles.bookimage}/>
    <Text style={Styles.indtext}>Indian Polity for civil and Other State Examination</Text>
    <Text style={Styles.$text}>$100</Text>
    </View>
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
   image1:{
    height:12,
    width:15,
    resizeMode:'stretch',
    position:'absolute',
    right:10,
    top:14
   },
   image2:{
    height:25,
    width:35,
    resizeMode:'stretch',
    position:'absolute',
    left:20,
    top:5
   },
   image3:{
    height:30,
    width:30,
    marginTop:14,
    marginLeft:150
   },
   image4:{
    height:30,
    width:30,
    marginTop:14,
    marginLeft:8
   },
   bookview:{
    flexDirection:'row',
    borderBottomWidth:1,
    marginTop:10,
    borderColor:'#cfc5c4'
   },
   bookimage:{
    height:70,
    width:60,
    resizeMode:'stretch',
    marginLeft:30
   },
   listview:{
    width:150,
marginLeft:20
   },
   indtext:{
    fontWeight:'600',
    paddingLeft:8,
    paddingTop:5,
    paddingBottom:10
   },
   $text:{
    color:'#ffa500',
    paddingLeft:110,
    paddingBottom:18
   }
});
export default Marketplace;