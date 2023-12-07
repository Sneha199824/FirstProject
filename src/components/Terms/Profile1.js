import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions, FlatList,  } from 'react-native';
import Styles from '../Style/Styles';
import person from '../../images/person.png'
import camera from '../../images/camera.png'
import Icon from '../../assets/icons/Icon';



const { height, width } = Dimensions.get('window');
const Data=[
    { id:'1',
    image1:Icon.pen,
    image: Icon.cap,
    title:'chaudhary charan sing university'},
    { id:'1',
    image: Icon.briefcase,
    title:'2 years'},
    { id:'1',
    image: Icon.mountain,
    title:'Training'},
    { id:'1',
    image: Icon.flower,
    title:'C,C++,Java'},
    { id:'1',
    image: Icon.Setting,
    title:'Java'},
    
]
export const Profile1 = (props) => {
   
    return (
        <SafeAreaView>
<ScrollView>
            <View>
                <View >
                    <TouchableOpacity onPress={() => props.navigation.navigate("Logout")} style={Styles.HeadView}>
                        <Image source={require('../../images/arrowleft.png')} style={Styles.HeadImage}></Image>

                        <Text style={Styles.HeadText} > Profile</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={Style.imageContainer}>
            <View style={Style.imageView}>
                <Image source={person} style={Style.personImage} />
                <Image source={camera} style={Style.cameraImage}/>
                </View>
                <View style={Style.textView}>
                <Image source={Icon.pen} style={Style.penImage1}/>
                    <Text  style={Style.nameText}>Mohit</Text>
                    <Text style={Style.webText}>Web developer</Text>
                   
                </View>
                
            </View>
            
               
            <View style={Style.buttonView}>
                <Text style={Style.aboutText}>About Me</Text>
                <Text style={Style.orderText}>My Order</Text>
                <Text style={Style.orderText}>Active Beacon</Text>
            </View>
            <View style={Style.endViewMain}>
             <FlatList data={Data}
                renderItem={({item,id})=>
                
                <View  style={Style.endView}>
               
                <Image source={item.image} style={Style.iconImage} />
                <Text style={Style.title}>{item.title}</Text>
                <Image source={item.image1} style={Style.penImage}/>
                </View>
                }
                keyExtractor={(item)=> item.id} 
                
                /></View>

            </ScrollView>

            </SafeAreaView>
    )
};
const Style = StyleSheet.create({
    imageContainer:{
        
    marginTop:90,
    },
    cameraImage:{
        height:height*0.04,width:width*0.08,
        resizeMode:'contain',
        backgroundColor:'white',
        borderRadius:60,position:'absolute',
        bottom:140,right:140
        

    },
    personImage:{
        height:height*0.14,
        width:width*0.26,
        resizeMode:'contain',
        backgroundColor:'white',
        borderRadius:60,
        borderWidth:1
        ,borderColor:'#dbdbd9',
        
        // position:'absolute',
        // bottom:140,
        // left:130,

    
    },
    textView:{
        position:'relative',
        height:height*0.24,borderWidth:3,
        margin:20,
        borderRadius:5,borderColor:'#dbdbd9',display:'flex',flex:1



    },
    nameText:{
        fontSize:28,color:'black',textAlign:'center',
        paddingTop:40,fontFamily:'Roboto-Bold'
    },
    webText:{
        textAlign:'center',
        paddingTop:10,fontSize:19
    },
    buttonView:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    endView:{
        flexDirection:'row',padding:6,
    },
    endViewMain:{
        borderWidth:3,height:height*0.25,
        margin:23,
        borderRadius:10,padding:7,
        borderColor:'#dbdbd9'
    },
    penImage:{
        marginLeft:40,resizeMode:'stretch',

    },
    title:{
        paddingLeft:10
    },
    aboutText:{
        color:'white',borderWidth:1,
        padding:6,fontSize:18,borderRadius:8
        ,backgroundColor:'#eea827',
        borderColor:'#eea827',
        fontFamily:'Roboto-Bold',
        marginLeft:15,
    },
     orderText:{
        borderWidth:1,
        padding:12,borderRadius:8,
        backgroundColor:'#e3e3e3',
        borderColor:'#e3e3e3',
        marginRight:10
    },
    penImage1:{
        marginLeft:290,marginTop:12
    }
});