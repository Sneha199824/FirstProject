import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import Logout from "./Logout";
import Campus from "./Campus";
const Mywallet1=( props)=>{
    return(
        <SafeAreaView>
        <ScrollView>
        <View style={Styles.headview}>
                    <Text style={Styles.headtext}>My wallet</Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate(Campus)}>
                    <Image source={require('../images/arrowleft.png')} style={Styles.arrowleft}></Image>
                    </TouchableOpacity>

                </View>
       <View style={Styles.viewbox}>
        <Text style={Styles.viewtext}>Applicable balance</Text>
        <Text style={Styles.viewtext1}>$10,000</Text>
       </View>
        <View style={Styles.viewbox1}>
          <View >
          <Image  source={require('../../src/images/plus.png')}style={{height:35,width:35,borderWidth:1,backgroundColor:'#e0dfdc',marginLeft:30,resizeMode:"stretch",borderRadius:5}} />
          
            {/* <Image source={require('../images/plus1.png')} style={Styles.plus}></Image> */}
            <Text style={{textAlign:'center',color:'black',paddingTop:15}}>Add Account Detail</Text>
          </View>
          <View>
            <Image source={require('../images/downarrow.png')} style={{height:35,width:35,borderWidth:1,backgroundColor:'#e0dfdc',marginLeft:30,resizeMode:"stretch",borderRadius:5}} />
            <Text style={{textAlign:'center',color:'black',paddingTop:15}}>Request money</Text>
          </View>
        </View>
        <View style={Styles.viewbox2}>
        <TouchableOpacity>
          <Text style={{ textAlign:'center',color:'black',padding:12,fontWeight:'bold',marginLeft:28}}>Credit History</Text>
           </TouchableOpacity>
            <View  style={{marginLeft:20,marginRight:0}}>
          <Text style={Styles.creditview}>Withdraw History</Text>
          </View>
        </View>
        <View style={{marginBottom:60}}>
        <View style={Styles.viewbox3}>
          <View>
            <Text style={{fontWeight:'bold',fontSize:16,padding:3}}>Dance Academy </Text>
            <Text>28 Sep,2023 - 02:30</Text>
          </View>
          <Text style={Styles.text$}>$7000</Text>
        </View>
        <View style={Styles.viewbox4}>
          <View>
            <Text  style={{fontWeight:'bold',fontSize:16,padding:3}}>Training Academy</Text>
            <Text>12 Aug,2023 - 02:40</Text>
          </View>
          <Text style={Styles.text$}>$7000</Text>
        </View>
        <View style={Styles.viewbox4}>
          <View>
            <Text  style={{fontWeight:'bold',fontSize:16,padding:3}}>Sports Academy</Text>
            <Text>22 Aug,2023 - 02:40</Text>
          </View>
          <Text style={Styles.text$}>$7000</Text>
        </View>
        <View style={Styles.viewbox4}>
          <View >
            <Text  style={{fontWeight:'bold',fontSize:16,padding:3}}>Music Academy</Text>
            <Text>22 Aug,2023 - 02:40</Text>
          </View>
          <Text style={Styles.text$}>$7000</Text>
        </View>
        <View style={Styles.viewbox4}>
          <View>
            <Text  style={{fontWeight:'bold',fontSize:16,padding:3}}>Dance Academy</Text>
            <Text>22 Aug,2023 - 02:40</Text>
          </View>
          <Text style={Styles.text$}>$7000</Text>
        </View>
        </View>
        </ScrollView>
</SafeAreaView>
    )
};
const Styles=StyleSheet.create({
  headview: {
    backgroundColor: '#ffa500',
    position: 'relative',
    height: 165,
    textAlign: 'center',
    color: 'white',
    borderBottomWidth: 1,
    borderColor: 'orange',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginTop: 1,
    marginBottom:50
},
headtext: {
  paddingLeft:40,
  color: '#f7f5f5',
  fontSize: 16,
  paddingTop: 13,
  fontWeight: 'bold'
},
arrowleft:{
  position:'absolute',
  height:20,
  width:25,
 bottom:0,
  left:10
},
viewbox:{
  position:'absolute',
    borderWidth:1,
    borderColor:'white',
    height:100,
    margin:15,
    borderRadius:8,
    backgroundColor:'white',
    width:325,
    top:80,
   left:5
    
},
viewtext:{
    textAlign:'center',
    paddingTop:17,
    color:'black,'
},
viewtext1:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
    color:'black'
},
viewbox1:{
  flexDirection:'row',
  justifyContent:'space-around'  
},
viewbox2:{
  flexDirection:'row',
  justifyContent:'space-around',
  margin:20,
  borderWidth:1,backgroundColor:'#e0dfdc',
  borderColor:'#e0dfdc',

},
creditview:{
  borderLeftWidth:1,
  borderRadius:5,
  backgroundColor:'#ffa500',
 height:42,
  borderColor:'#ffa500',
 width:160,
 textAlign:'center',
 color:'white',
 paddingTop:10,fontWeight:'bold'
},
viewbox3:{
  flexDirection:'row',
  borderWidth:1,backgroundColor:'#e0dfdc',
  borderColor:'#e0dfdc',
  marginTop:8,
  justifyContent:'space-around',
  height:55,
  marginLeft:15,
  marginRight:15
},
text$:{
  fontWeight:'bold',
  paddingTop:15,
  paddingLeft:90,
  color:'#3adbc3'
},
viewbox4:{
  flexDirection:'row',
  borderWidth:1,backgroundColor:'#e0dfdc',
  borderColor:'#e0dfdc',
  justifyContent:'space-around',
  height:55,
  marginLeft:15,
  marginRight:15,
  marginTop:7
},
})
export default Mywallet1;