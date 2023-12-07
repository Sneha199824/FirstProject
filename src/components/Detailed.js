import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';


const Detailed = (props) => {
    console.log("props fitness>>",props)
    return (

        <SafeAreaView>
            <ScrollView>
                <View style={Styles.headview}>
                    <Text style={Styles.headtext}>Detailed Profile</Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate(Campus)}>
                    <Image source={require('../images/arrowleft.png')} style={Styles.arrowleft}></Image>
                    </TouchableOpacity>

                </View>
                <View>
                <View style={Styles.personview}><Image source={require('../images/person.png')} style={Styles.personimage}></Image>
                   <View >
                    <Text style={{textAlign:'center',paddingTop:50,color:'black'}}>Mohit</Text>
                    <Text style={{textAlign:'center',paddingTop:5}}>Web Developer</Text></View>
                   <View style={{flexDirection:'row',}}>
                    <Text style={Styles.text2}>Completed</Text>
                    <Text style={Styles.text2}> Ratings</Text>
                   </View> 
                   <View style={{flexDirection:'row',}}>
                    <Text style={Styles.text1}>10</Text>
                    <Text  style={Styles.text1}>4.5*</Text>
                   </View>
                 
                  <Text style={Styles.connecttext}>Connect me</Text>
                  </View>
                  </View>
                  <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-around'}}>
                    <Text style={Styles.abouttext}>About</Text>
                    <TouchableOpacity>
                    <Text style={Styles.reviewtext}>Review</Text>
                    </TouchableOpacity>
                    
                    <Text style={Styles.reviewtext}>Products</Text>
                  </View>
        <View style={Styles.viewbox4}>
          <View>
            <Text  style={{fontWeight:'bold',fontSize:16,padding:3}}>  Collage</Text>
            <Text>  chaudhary charan singh university </Text>
          </View>
          
        </View>
        <View style={Styles.viewbox4}>
          <View>
            <Text style={{fontWeight:'bold',fontSize:16,padding:3}}>  Skills</Text>
            <Text>   C, C++, Java</Text>
          </View>
          
        </View>
        <View style={Styles.viewbox4}>
          <View>
            <Text style={{fontWeight:'bold',fontSize:16,padding:3}}>  Experience</Text>
            <Text>   worked as a freelancer</Text>
          </View>
          
        </View>
                </ScrollView>
                </SafeAreaView>
    )
};
const Styles = StyleSheet.create({
    headview: {
        backgroundColor: '#ffa500',
        position: 'relative',
        height: 55,
        textAlign: 'center',
        color: 'white',
        borderBottomWidth: 1,
        borderColor: 'orange',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginTop: 1
    },
    headtext: {
        paddingLeft:40,
        color: 'white',
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
    personview:{
        borderWidth:1,
         borderColor:'#e0dfdc',
         height:250,
         width:320,
         marginLeft:20,
         marginTop:65,
         borderRadius:10
     },
     personimage:{
        position:'absolute',
        bottom:210,
        left:115,
        borderWidth:1,
        borderColor:'white',
        borderRadius:60,
        height:90,width:90
       },
     text1:{
        paddingLeft:90,
        fontSize:18,
        paddingTop:10
     },
     text2:{
        paddingLeft:60,
        paddingTop:10,
        
     },
     connecttext:{
        borderWidth:1,
        backgroundColor: '#ffa500',
        borderColor:'#ffa500',
        color:'white',
        height:38,
        textAlign:'center',
        paddingTop:8,
        marginTop:20,
        width:100,
        borderRadius:8,
        marginLeft:103
     },
     abouttext:{
        borderWidth:1,
        backgroundColor: '#ffa500',
        borderColor:'#ffa500',
        height:35,
        width:90,
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        paddingTop:8,
        borderRadius:8
    },
    reviewtext:{
        height:35,
        width:90,
        borderWidth:1,
        textAlign:'center',
        fontWeight:'bold',
        paddingTop:8,
        borderRadius:8,
        backgroundColor:'#e0dfdc',
        borderColor:'#e0dfdc'
    },
    viewbox4:{
      
        borderWidth:1,backgroundColor:'#e0dfdc',
        borderColor:'#e0dfdc',
        height:55,
        marginLeft:15,
        marginRight:15,
        marginTop:7,
        borderRadius:5
      },

})
export default Detailed;