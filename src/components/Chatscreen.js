import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
const Chatscreen = (props) => {
    
    return (

        <SafeAreaView>
            <ScrollView>
                <View style={Styles.headview}>
                    <Text style={Styles.headtext}>Vikas Sharma </Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate(Campus)}>
                    <Image source={require('../images/arrowleft.png')} style={Styles.arrowleft}></Image>
                    </TouchableOpacity>
                    <Image source={require('../images/person.png')} style={Styles.image1}></Image>

                </View>
                <View style={{flexDirection:'row',}}>
                <View style={{}}>
                <Text style={Styles.hello}>Hello</Text>
                <Text style={{paddingLeft:15,fontSize:12}}>12.52pm</Text></View>
                <View style={Styles.HI}>
                <Text style={Styles.hitext}>Hi</Text>
                <Text style={{paddingLeft:230,fontSize:12}}>12.53pm</Text>
                 </View>
                 </View>
                 <Text style={Styles.hello2}>Lorem ipsum is placeholder text commonly used in the graphic,  industries .</Text>
                 <Text style={{paddingLeft:15,fontSize:12}}>12.53pm</Text>
                 <Text style={Styles.hello3}>Lorem ipsum is placeholder text commonly used in the graphic,  industries .</Text>
                 <Text style={Styles.hello4}>Lorem ipsum is placeholder text commonly used in the graphic,  industries
                 Lorem ipsum is placeholder text commonly used in the graphic,  industries .</Text>
                 <Text style={{paddingLeft:295,fontSize:12}}>12.53pm</Text>
                 <Text style={Styles.hello5}>Lorem ipsum is placeholder text commonly used in the graphic,  industries
                 Lorem ipsum is placeholder text commonly used in the graphic,  industries .</Text>
                 <Text style={{paddingLeft:12,fontSize:12}}>12.53pm</Text>
                 <Text style={Styles.hello4}>Lorem ipsum is placeholder text commonly used in the graphic,  industries
                 Lorem ipsum is placeholder text commonly used in the graphic,  industries .</Text>
                 <Text style={{paddingLeft:295,fontSize:12}}>12.53pm</Text>
                 <View style={{flexDirection:'row',margin:10}}>
                    <TouchableOpacity>
                        <Text style={Styles.request}>Request</Text>
                    </TouchableOpacity>
                    <View style={Styles.massege}>
                    <Text style={Styles.massege1}>Message</Text>
                    <Image source={require('../images/rightarrow.png')} style={Styles.image}></Image>
                    </View>
                 </View>
                </ScrollView>
        </SafeAreaView>



    )
}
const Styles = StyleSheet.create({
    headview: {
        backgroundColor: '#ffa500',
        position: 'relative',
        height: 85,
        textAlign: 'center',
        color: 'white',
        borderBottomWidth: 1,
        borderColor: 'orange',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
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
        fontSize: 18,
        paddingTop: 33,
        fontWeight: 'bold'
    },
    image1:{
       position:'absolute',
       right:15,
       top:5
        
    },
    hello:{
        borderWidth:1,
        borderColor: '#d1cebd',
        backgroundColor:'#d1cebd',
        marginLeft:15,
        textAlign:'center',
        height:30,
        borderRadius:5,
        fontSize:17,
        width:50,
        marginTop:10

    },
    hitext:{
        borderWidth:1,
        borderColor: '#d1cebd',
        backgroundColor:'#d1cebd',
        textAlign:'center',
        height:30,
        borderRadius:5,
        fontSize:17,
        width:50,
        marginLeft:230,
        marginTop:50

    },
    hello2:{
        borderWidth:1,
        borderColor: '#d1cebd',
        backgroundColor:'#d1cebd',
       padding:5,
       
        borderRadius:5,
        height:60,
        width:220,
        fontSize:14,
        marginLeft:15,
        borderRadius:7
    },
    hello3:{
        borderWidth:1,
        borderColor: 'black',
        backgroundColor:'black',
       padding:5,
       color:'white',
        borderRadius:5,
        height:60,
        width:220,
        fontSize:14,
        marginLeft:125,
        borderRadius:7
    },
    hello4:{
        borderWidth:1,
        borderColor: 'black',
        backgroundColor:'black',
       padding:5,
       color:'white',
        borderRadius:5,
        height:90,
        width:220,
        fontSize:14,
        marginLeft:125,
        borderRadius:7,
        marginTop:5
    },
    hello5:{
        borderWidth:1,
        borderColor: '#d1cebd',
        backgroundColor:'#d1cebd',
       padding:5,
      
        borderRadius:5,
        height:90,
        width:220,
        fontSize:14,
        marginLeft:12,
        borderRadius:7,
        marginTop:5
    },
   request:{
    borderWidth:1,
    borderWidth:1,
    borderColor: 'black',
    backgroundColor:'black',
   padding:5,
   color:'white',
    borderRadius:5,
    width:120,
    fontSize:18,textAlign:'center'
   },
   massege:{
    borderWidth:1,
    borderColor: '#d1cebd',
    backgroundColor:'#d1cebd',
    width:200,
    height:38,
    marginLeft:20,
    borderRadius:5
   },
   image:{
    height:20,
    width:20,
    resizeMode:'stretch',
   position:'absolute',
   right:10,
   top:8
   },
   massege1:{
    fontSize:20,
    paddingLeft:10,
    paddingTop:3
   }
})
export default Chatscreen;