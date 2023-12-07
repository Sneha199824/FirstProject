import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';

    
const Beaconrequest = (props) => {
    const[value,setValue]=useState();
    
    return (
        <ScrollView>
            <SafeAreaView>
            <View style={Styles.headview}>
                    <Text style={Styles.headtext}>Beacon</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate(Campus)}>
                        <Image source={require('../images/arrowleft.png')} style={Styles.arrowleft}></Image>
                    </TouchableOpacity></View>
                <View style={{marginTop:5}}>
                    <Text style={Styles.textbox}>Beacon Name</Text>
                    <TextInput style={Styles.inputbox} placeholder="Enter Beacon Name"></TextInput>
                    <Text style={Styles.textbox}>Beacon Start Date</Text>
                    <TextInput style={Styles.inputbox} placeholder="Beacon Start Date"></TextInput>
                    
                    <Text style={Styles.textbox}>Categories</Text>
              <TextInput style={Styles.inputbox} placeholder=" choose category" ></TextInput>
             <View><Image source={require('../images/dropdown1.png')}style={Styles.imagedrop}></Image>
             </View>
                    <Text style={Styles.textbox}>Your Skills</Text>
                    <TextInput style={Styles.inputbox} placeholder="Choose Skills"></TextInput>
                    <View><Image source={require('../images/dropdown1.png')}style={Styles.imagedrop}></Image>
             </View>
             <Text style={Styles.textbox}>Description</Text>
                    <TextInput style={Styles.inputbox} placeholder="Lorem ipsum is placeholder text commonly used in the graphic, print,"></TextInput>
                   
             </View>
               
                <TouchableOpacity style={Styles.container} >
            <Text style={Styles.text} >Submit</Text>
        </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>

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
    arrowleft: {
        position: 'absolute',
        height: 20,
        width: 25,
        bottom: 0,
        left: 10
    },
    viewbox: {
        backgroundColor: 'orange',
        height: 250,
        alignItems: 'center',
        position: 'relative',
        borderBottomWidth: 1,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        borderColor: 'orange'
    },
    image1: {
        height: 100,
        width: 100,
        borderWidth: 1,
        borderRadius: 190,
        position: 'absolute',
        top: 70,
        color: 'black'


    },

    image2: {
        height: 22,
        borderWidth: 2,
        borderRadius: 155,
        width: 23,
        position: 'absolute',
        top: 150,
        right: 138,
        backgroundColor:'white'


    },
    inputbox:{
        borderWidth:1,
        padding:8,
        margin:10,
        borderRadius:10,
        borderColor:'#bdb9b9',
        backgroundColor:'#ebe8e8',
        fontSize:12
    },
    textbox:{
        paddingLeft:15
    },
    imagedrop:{
        height:12,
        width:14,
        position:'absolute',
        bottom:25,
        backgroundColor:'#ebe8e8',
        right:25,
        resizeMode:'stretch',
        color:'#bdb9b9'
    },
    container:{
        backgroundColor:'black',
        padding:10,
        margin:20,
        width:'90%',
        borderRadius:8,
        alignItems:'center'
    },
    text:{
        fontWeight:'bold', 
        color:'white', 
        fontSize:15
    },
});
export default Beaconrequest;