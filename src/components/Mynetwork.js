import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import Campus from "./Campus";
import Logout from "./Logout";

const Mynetwork = (props) => {
    
    return (
          <SafeAreaView>
            <ScrollView>
                <View style={Styles.headview}>
                    <Text style={Styles.headtext}>My  Network</Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate(Campus)}>
                    <Image source={require('../images/arrowleft.png')} style={Styles.arrowleft}></Image>
                    </TouchableOpacity></View>
                    <View style={Styles.request}>
                   <View>
                    <Text style={Styles.massege1}>New Request</Text>
                    <Text style={Styles.ten}>10</Text></View>
                    <View>
                    <TouchableOpacity>
                        <Text style={Styles.request2} >Connected</Text>
                    </TouchableOpacity>
                   
                 </View>

                </View>
                <View style={Styles.view1}>
                  <Image source={require('../images/person.png')} style={Styles.imageperson}/>
                  <Text style={{fontWeight:'bold', paddingTop:23,paddingLeft:19,paddingRight:22}}>Mohit</Text>
                  
                  <Text style={{ paddingTop:23,paddingRight:19,}}> is  inviting  you  to  connect</Text>
                  <Image source={require('../images/cross.png')} style={Styles.imagecross}/>
                  <Image source={require('../images/yellowcorrect.png')} style={Styles.imagecross}/>
                </View>
                <View style={Styles.view1}>
                  <Image source={require('../images/person.png')} style={Styles.imageperson}/>
                  <Text style={{fontWeight:'bold', paddingTop:23,paddingLeft:19,paddingRight:22}}>Amit</Text>
                  
                  <Text style={{ paddingTop:23,paddingRight:19,}}> is  inviting  you  to  connect</Text>
                  <Image source={require('../images/cross.png')} style={Styles.imagecross}/>
                  <Image source={require('../images/yellowcorrect.png')} style={Styles.imagecross}/>
                </View>
                <View style={Styles.view1}>
                  <Image source={require('../images/person.png')} style={Styles.imageperson}/>
                  <Text style={{fontWeight:'bold', paddingTop:23,paddingLeft:19,paddingRight:22}}>Ajitabh</Text>
                  
                  <Text style={{ paddingTop:23,paddingRight:19,}}> is  inviting  you  to  connect</Text>
                  <Image source={require('../images/cross.png')} style={Styles.imagecross}/>
                  <Image source={require('../images/yellowcorrect.png')} style={Styles.imagecross}/>
                </View>
                <View style={Styles.view1}>
                  <Image source={require('../images/person.png')} style={Styles.imageperson}/>
                  <Text style={{fontWeight:'bold', paddingTop:23,paddingLeft:19,paddingRight:22}}>Sonu</Text>
                  
                  <Text style={{ paddingTop:23,paddingRight:19,}}> is  inviting  you  to  connect</Text>
                  <Image source={require('../images/cross.png')} style={Styles.imagecross}/>
                  <Image source={require('../images/yellowcorrect.png')} style={Styles.imagecross}/>
                </View>
                <View style={Styles.view1}>
                  <Image source={require('../images/person.png')} style={Styles.imageperson}/>
                  <Text style={{fontWeight:'bold', paddingTop:23,paddingLeft:19,paddingRight:22}}>Mukesh</Text>
                  
                  <Text style={{ paddingTop:23,paddingRight:19,}}> is  inviting  you  to  connect</Text>
                  <Image source={require('../images/cross.png')} style={Styles.imagecross}/>
                  <Image source={require('../images/yellowcorrect.png')} style={Styles.imagecross}/>
                </View>
                <View style={Styles.view1}>
                  <Image source={require('../images/person.png')} style={Styles.imageperson}/>
                  <Text style={{fontWeight:'bold', paddingTop:23,paddingLeft:19,paddingRight:22}}>Ajit</Text>
                  
                  <Text style={{ paddingTop:23,paddingRight:19,}}> is  inviting  you  to  connect</Text>
                  <Image source={require('../images/cross.png')} style={Styles.imagecross}/>
                  <Image source={require('../images/yellowcorrect.png')} style={Styles.imagecross}/>
                </View>
                <View style={Styles.view1}>
                  <Image source={require('../images/person.png')} style={Styles.imageperson}/>
                  <Text style={{fontWeight:'bold', paddingTop:23,paddingLeft:19,paddingRight:22}}>Ajay</Text>
                  
                  <Text style={{ paddingTop:23,paddingRight:19,}}> is  inviting  you  to  connect</Text>
                  <Image source={require('../images/cross.png')} style={Styles.imagecross}/>
                  <Image source={require('../images/yellowcorrect.png')} style={Styles.imagecross}/>
                </View>
                <View style={Styles.view1}>
                  <Image source={require('../images/person.png')} style={Styles.imageperson}/>
                  <Text style={{fontWeight:'bold', paddingTop:23,paddingLeft:19,paddingRight:22}}>Vishal</Text>
                  
                  <Text style={{ paddingTop:23,paddingRight:19,}}> is  inviting  you  to  connect</Text>
                  <Image source={require('../images/cross.png')} style={Styles.imagecross}/>
                  <Image source={require('../images/yellowcorrect.png')} style={Styles.imagecross}/>
                </View>
                <View style={Styles.view1}>
                  <Image source={require('../images/person.png')} style={Styles.imageperson}/>
                  <Text style={{fontWeight:'bold', paddingTop:23,paddingLeft:19,paddingRight:22}}>Krishana</Text>
                  
                  <Text style={{ paddingTop:23,paddingRight:19,}}> is  inviting  you  to  connect</Text>
                  <Image source={require('../images/cross.png')} style={Styles.imagecross}/>
                  <Image source={require('../images/yellowcorrect.png')} style={Styles.imagecross}/>
                </View>
                <View style={Styles.view1}>
                  <Image source={require('../images/person.png')} style={Styles.imageperson}/>
                  <Text style={{fontWeight:'bold', paddingTop:23,paddingLeft:19,paddingRight:22}}>Mohit</Text>
                  
                  <Text style={{ paddingTop:23,paddingRight:19,}}> is  inviting  you  to  connect</Text>
                  <Image source={require('../images/cross.png')} style={Styles.imagecross}/>
                  <Image source={require('../images/yellowcorrect.png')} style={Styles.imagecross}/>
                </View>
                </ScrollView>
</SafeAreaView>
    )}  
const Styles=StyleSheet.create({
  headview: {
    backgroundColor: '#ffa500',
    position: 'relative',
    height: 65,
    textAlign: 'center',
    color: 'white',
    borderBottomWidth: 1,
    borderColor: 'orange',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginTop: 1,
    marginBottom:20
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
massege1:{
  borderWidth:1,
  height:38,
  width:165,borderRadius:5,
  borderColor:'#ffa500',
  backgroundColor:'#ffa500',
  color:'white',
  paddingLeft:19,
  marginLeft:10,
  paddingTop:7,
  fontWeight:'bold'
},
request:{
flexDirection:'row',
height:40,
width:330,
borderRadius:5,
textAlign:'center',
marginLeft:10,
marginBottom:10
},

request2:{
  borderTopWidth:1,
  borderBottomWidth:1,
  borderRightWidth:1,
  height:38,
  width:160,borderRadius:5,
  paddingTop:7,
  marginTop:1,
  fontWeight:'bold',
  borderColor: '#d1cebd',
  textAlign:'center',
  
},
ten:{
  borderWidth:1,
  borderRadius:12,
  position:'absolute',
  right:25,
  backgroundColor:'white',
  color:'#ffa500',
  top:7,
  height:20,
  width:20,
  borderColor:'#ffa500',
  padding:1
 
},
imagecross:{
  height:25,
  width:25,
  marginTop:23,
  marginRight:15,
  marginLeft:10
},
view1:{
  flexDirection:'row',
  justifyContent:'space-around',
 borderColor:'#d1cebd',
 backgroundColor:'#d1cebd',
  borderWidth:1,
 
  borderRadius:8,
  marginLeft:13,
  marginRight:13,
  marginBottom:5
},
imageperson:{
  height:60,
  width:60,
  resizeMode:'stretch',
  margin:9
}
});
export default Mynetwork;