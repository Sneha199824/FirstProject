import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions, FlatList,  } from 'react-native';
import Styles from '../Style/Styles';
import person from '../../images/person.png'
import Icon from '../../assets/icons/Icon';
import { TextInput } from 'react-native-paper';
import { PaymentReuest } from './PaymentRequest';
const { height, width } = Dimensions.get('window');
const Data=[
    {
        id:'1',
        Text:'Hello',
        time:'12.50pm',
        text1:'Hii',
        time1:'12.50pm',
        text2:'Lorem ipsum is placeholder text commonly used in the graphic, print,',
        time2:'12.50pm',
        text3:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries',
        time3:'12.50pm',
        text4:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        time4:'12.50pm',

        text5:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
        time5:'12.50pm',

    },
    
];
export const ChatScreen1 = (props) => {
   
    return (
        <SafeAreaView>
<ScrollView>
            <View>
                <View >
                    <TouchableOpacity onPress={() => props.navigation.navigate("Logout")} style={Styles.HeadView}>
                        <Image source={require('../../images/arrowleft.png')} style={Styles.HeadImage}></Image>

                        <Text style={Styles.HeadText} > Vikash Sharma</Text>
                        <Image source={person}/>
                    </TouchableOpacity>

                </View>
            </View>
           { Data.map((item,id) => {
        return (
           <View style={Style.container}>
           <View style={Style.textView1}>
            <Text style={Style.text}>{item.Text}</Text>
            <Text style={Style.time}>{item.time}</Text>
            <Text style={Style.text1}>{item.text1}</Text></View>
            <Text style={Style.time1}>{item.time1}</Text>
            <View style={Style.textView2}>
            <Text style={Style.text2}>{item.text2}</Text>
            <Text style={Style.time}>{item.time}2</Text>
            <Text style={Style.text3}>{item.text3}</Text>
            <Text style={Style.time1}>{item.time3}</Text>
            <Text style={Style.text3}>{item.text4}</Text></View>
            <Text  style={Style.time1}>{item.time4}</Text>
            <Text style={Style.text2}>{item.text5}</Text>
            <Text  style={Style.time}>{item.time5}</Text>
         
           </View>
        );
           })}

          
         <View style={Style.reuestcontainer}>
            <Text style={Style.textreuest}>Reuesting from You</Text>
            <Text style={Style.textgym}>Gym Training</Text>
            <Text style={Style.text$}>$1</Text>
            <View style={Style.clockview}>
            <Image source={Icon.whiteclock}/>
            <Text style={Style.update}>Update  -  11.50am </Text>
            <Image source={Icon.whiterightarrow}/>
            </View>
            <TouchableOpacity><Text style={Style.textcancle}>Cancle</Text></TouchableOpacity>

         </View>
         <View style={Style.massageview}>
            <TouchableOpacity onPress={()=>props.navigation.navigate(PaymentReuest)}>
                <Text style={Style.requesttext}>Request</Text>
            </TouchableOpacity>
            <TouchableOpacity>
           <TextInput placeholder='Massage' style={Style.textinput}/>
           <Image source={Icon.sendmassage} style={Style.iconmassage}/>
           </TouchableOpacity>
         </View>
         </ScrollView>
            </SafeAreaView>
            )}
            const Style = StyleSheet.create({
                container:{
                 flex:1,
                 display:'flex'
                
               
                },
                text1:{
                    
                    borderWidth:1,
                    textAlign:'center',
                    width:width*0.13,
                    height:height*0.05,
                    paddingTop:5,
                    marginleft:70,borderRadius:5,
                    backgroundColor:'black',color:'white',
                    marginLeft:310,marginTop:30
                   
                },
                text:{
                    padding:6,
                    borderWidth:1,
                    textAlign:'center',
                    width:width*0.15,
                    height:height*0.05,
                    borderRadius:5,
                    borderColor:'#cfd0d1',backgroundColor:'#cfd0d1',
                    marginLeft:15,
                    marginTop:20
                },
                text2:{
                    padding:10,
                    borderWidth:1,
                   
                    borderRadius:5,
                    borderColor:'#cfd0d1',backgroundColor:'#cfd0d1',
                    marginLeft:15,
                    marginTop:10,
                    width:width*0.63,
                },text3:{
                    padding:10,
                    borderWidth:1,
                  
                    borderRadius:5,
                    backgroundColor:'black',
                    marginLeft:125,
                    marginTop:10,
                    width:width*0.63,
                    color:'white'
                },
               time:{fontSize:10,marginLeft:15},
               time1:{fontSize:10,marginLeft:310},
               reuestcontainer:{
                padding:10,
                borderWidth:1,
              
                borderRadius:5,
                backgroundColor:'black',
                marginLeft:135,
                marginTop:15,
                width:width*0.6,
               
               },
               clockview:{
                flexDirection:'row',justifyContent:'space-evenly',marginTop:10
               },
               textreuest:{fontSize:16,color:'white'},
               textgym:{color:'white',padding:5},
               text$:{fontSize:38,color:'white',padding:5},
               update:{
                color:"white",fontSize:12,paddingRight:25,
                
               },
               textcancle:{
                color:'white',textAlign:'center',borderWidth:1,borderColor:'#eea827',
                backgroundColor:'#eea827',margin:20,padding:5,borderRadius:15,
               },
               massageview:{
                flexDirection:'row',
                marginTop:20,justifyContent:'space-around',
                position:'relative',
                
               },requesttext:{
                borderWidth:1,
                backgroundColor:"black",
                color:'white',paddingLeft:30,borderRadius:10,
                paddingRight:30,paddingTop:8,paddingBottom:8,
                marginTop:2
               
               },
               iconmassage:{
                position:'absolute',
                right:10,resizeMode:'contain',
                top:10,
               },textinput:{
                paddingRight:60,height:height*0.05,borderWidth:1,borderRadius:10,backgroundColor:'#d3d3d3',
                borderColor:'#d3d3d3',width:width*0.57,

               }

            });