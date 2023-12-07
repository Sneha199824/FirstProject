import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';

    const data =[
        {lebal: 'Gen',value:'1'},
        {lebal: 'SC', value: '2'},
        {lebal: 'BC', value: '3'},
];
const Profile = (props) => {
    const[value,setValue]=useState();
    
    return (
        <ScrollView>
            <SafeAreaView>
                <View style={Styles.viewbox}>
                    <Text style={{ position: 'absolute', left: 20, top: 20, fontSize: 18, color: 'white' }}>Complete profile</Text>
                    <Image source={require('../images/profile.png')} style={Styles.image1}></Image>
                    <Image source={require('../images/camera.png')} style={Styles.image2}></Image>

                </View>
                <View style={{marginTop:20}}>
                    <Text style={Styles.textbox}>Full name</Text>
                    <TextInput style={Styles.inputbox} placeholder="Enter Full Name"></TextInput>
                    <Text style={Styles.textbox}>Enter Collage</Text>
                    <TextInput style={Styles.inputbox} placeholder="Enter Collage"></TextInput>
                    <Text style={Styles.textbox}>Work Experience</Text>
                    <TextInput style={Styles.inputbox} placeholder="Enter Work Experienced"></TextInput>
                    <Text style={Styles.textbox}>Categories</Text>
              <TextInput style={Styles.inputbox} placeholder=" choose category" ></TextInput>
             <View><Image source={require('../images/dropdown1.png')}style={Styles.imagedrop}></Image>
             </View>
                    <Text style={Styles.textbox}>Your Skills</Text>
                    <TextInput style={Styles.inputbox} placeholder="Choose Skills"></TextInput>
                    <View><Image source={require('../images/dropdown1.png')}style={Styles.imagedrop}></Image>
             </View>

                    <Text style={Styles.textbox}>Expert in</Text>
                    <TextInput style={Styles.inputbox} placeholder="Choose your experirnce"></TextInput>
                    <View><Image source={require('../images/dropdown1.png')}style={Styles.imagedrop}></Image>
             </View>
                </View>
                <TouchableOpacity style={Styles.container} >
            <Text style={Styles.text} >Save</Text>
        </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>

    )
};
const Styles = StyleSheet.create({
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
        backgroundColor:'#ebe8e8'
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
export default Profile;