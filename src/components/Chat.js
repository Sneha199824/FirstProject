import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import Chatscreen from "./Chatscreen";

const Chat=(props)=>{
    return(
        <SafeAreaView>
            <ScrollView>
                <View style={Styles.headview}>
                    <Text style={Styles.chattext}>Chats</Text>
                    <Image source={require('../images/search.png')} style={Styles.searchimage} />
                    <View style={Styles.headview1}>
                    
                        <Text style={Styles.chattext1}>Chat</Text>
                   
                        <Text style={Styles.ongotext}>Ongoing</Text>
                   
                        <Text style={Styles.ongotext}>Completed</Text>  
                </View>
                </View>
                <View style={Styles.VIEWBOX}>
                    <View style={{flexDirection:'row',}}>
                    <Image source={require('../images/person.png')} style={Styles.person} />  
                  <TouchableOpacity onPress={()=>props.navigation.navigate("Chatscreen")}><Text style={Styles.name}>Vikash Sharma</Text>
                  </TouchableOpacity>
                    <Text style={Styles.class}>Dance Classes</Text>
                    <Text style={Styles.time}>12.52pm</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={Styles.hello}>Hello</Text>
                       <Text style={Styles.count}>2</Text>
                    </View>

                </View>
                <View style={Styles.VIEWBOX}>
                    <View style={{flexDirection:'row', }}>
                    <Image source={require('../images/person.png')} style={Styles.person} />  
                    
                    <Text style={Styles.class1}>Gym Trainer</Text>
                    <Text style={Styles.time}>              12.52pm</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={Styles.hello}>Hey</Text>
                      
                    </View>

                </View>
                <View style={Styles.VIEWBOX}>
                    <View style={{flexDirection:'row',}}>
                    <Image source={require('../images/person.png')} style={Styles.person} />  
                    <Text style={Styles.name}>Sonu Kumar</Text>
                    <Text style={Styles.class}>cricket Trainer</Text>
                    <Text style={Styles.time}>    12.52pm</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={Styles.hello}>Hii</Text>
                      
                    </View>

                </View>
                <View style={Styles.VIEWBOX}>
                    <View style={{flexDirection:'row',}}>
                    <Image source={require('../images/person.png')} style={Styles.person} />  
                    <Text style={Styles.name}>Shreya Kumari</Text>
                    <Text style={Styles.class}>Acting Classes</Text>
                    <Text style={Styles.time}>12.52pm</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={Styles.hello1}>Hello I'm intrested in Your service</Text>
                       
                    </View>

                </View>
                <View style={Styles.VIEWBOX}>
                    <View style={{flexDirection:'row',}}>
                    <Image source={require('../images/person.png')} style={Styles.person} />  
                    <Text style={Styles.name}>Palak Sharma</Text>
                    <Text style={Styles.class}>Modeling Classes</Text>
                    <Text style={Styles.time}>12.52pm</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={Styles.hello1}>I'm intrested in your service</Text>
                      
                    </View>

                </View>
                <View style={Styles.VIEWBOX}>
                    <View style={{flexDirection:'row',}}>
                    <Image source={require('../images/person.png')} style={Styles.person} />  
                    <Text style={Styles.name}>Mohit Nara</Text>
                    <Text style={Styles.class}>Gym Trainer</Text>
                    <Text style={Styles.time}>12.52pm</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={Styles.hello2}>I'm intrested in your service Please give 
                        me suitable time to talk</Text>
                      
                    </View>

                </View>
                <View style={Styles.VIEWBOX}>
                    <View style={{flexDirection:'row',}}>
                    <Image source={require('../images/person.png')} style={Styles.person} />  
                    <Text style={Styles.name}>Amit Dhankhar</Text>
                    <Text style={Styles.class}>Dance Classes</Text>
                    <Text style={Styles.time}>12.52pm</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={Styles.hello1}>I'm intrested in your service</Text>
                      
                    </View>

                </View>
                <View style={Styles.VIEWBOX}>
                    <View style={{flexDirection:'row',}}>
                    <Image source={require('../images/person.png')} style={Styles.person} />  
                    <Text style={Styles.name}>Ajay Kumar</Text>
                    <Text style={Styles.class}>Acting Classes</Text>
                    <Text style={Styles.time}>12.52pm</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={Styles.hello1}>I'm intrested in your service</Text>
                      
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
};
const Styles= StyleSheet.create({
    headview:{
        borderBottomWidth:1,
        height:120,
        backgroundColor:'#ffa500',
        bodercolor:'#ffa500',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    searchimage:{
        height:20,
        width:20,
        marginLeft:320,
        
    },
    chattext:{
        color:'white',
        paddingTop:20,
        paddingLeft:18,
        fontSize:18
    },
    headview1:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:10
    },
    chattext1:{
        borderWidth:1,
        borderColor:'white',
        backgroundColor:'white',
        height:30,
        width:80,
        textAlign:'center',
        borderRadius:5,
        fontSize:15,
        paddingTop:3,
        fontWeight:'bold',
        color:'#ffa500'
    },
    ongotext:{
        borderWidth:1,
        borderColor:'white',
        height:30,
        width:80,
        textAlign:'center',
        borderRadius:5,
        fontSize:15,
        paddingTop:3,
        fontWeight:'bold',
        color:'white'
    },
    VIEWBOX:{
        borderBottomWidth:1,
        margin:8,
        borderColor:'#d1cebd',
        height:80,
        width:350
    },
    name:{
        fontSize:15,
        fontWeight:'400',
        paddingRight:15,
        paddingTop:16
    },
    class:{
        borderWidth:1,
        borderColor:'#d1cebd',
        backgroundColor:'#d1cebd',
        height:25,
       fontSize:12,
        fontWeight:'400',marginTop:15
,borderRadius:10,   
width:90,
padding:5,
marginRight:15,
marginLeft:0
 },
 class1:{
    borderWidth:1,
    borderColor:'#d1cebd',
    backgroundColor:'#d1cebd',
    height:25,
   fontSize:12,
    fontWeight:'400',marginTop:15
,borderRadius:10,   
width:90,
padding:5,

marginLeft:90
},
 time:{
    fontSize:11,
    marginTop:16,
    paddingLeft:30
 },
 person:{
    height:60,
    resizeMode:'stretch',
    width:50,
    marginTop:10,
    marginLeft:5
 },
 hello:{
    fontSize:17,fontWeight:'400',position:'absolute',
    left:60,
    bottom:5,
 },
 hello1:{
   fontWeight:'400',position:'absolute',
    left:60,
    bottom:5,
 },
 hello2:{
   fontWeight:'400',position:'absolute',
    left:60,
    bottom:5,

 },
 count:{
 position:'absolute',
 right:15,
 bottom:16,
 borderWidth:1,
 borderRadius:15,
 width:20,
 backgroundColor:'black',
 color:'white',
 textAlign:'center'

}
})
export default Chat;