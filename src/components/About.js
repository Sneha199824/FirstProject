import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import Logout from "./Logout";
import Setting from "./Setting";


const About = (props) => {
    console.log("props fitness>>",props)
    return (

        <SafeAreaView>
            <ScrollView>
                <View style={Styles.headview}>
                    <Text style={Styles.headtext}>About</Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate("Setting")}>
                    <Image source={require('../images/arrowleft.png')} style={Styles.arrowleft}></Image>
                    </TouchableOpacity>

                </View>
                <View style={Styles.loremview}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>
                </View>
                </ScrollView>
        </SafeAreaView>



    )
}
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
    loremview:{
        display:'flex',
        flexDirection:'row',
        padding:20,
        color:'black'
    }
})
export default About;