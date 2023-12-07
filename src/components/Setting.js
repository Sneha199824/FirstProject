import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import Logout from "./Logout";
import About from "./About";
import TermsCondtion from "./Terms/TermsCondition";
import PrivacyPolicy from "./Terms/PrivacyPolicy";


const Setting = (props) => {
    console.log("props fitness>>",props)
    return (

        <SafeAreaView>
            <ScrollView>
                <View style={Styles.headview}>
                    <Text style={Styles.headtext}>Setting</Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate("Logout")}>
                    <Image source={require('../images/arrowleft.png')} style={Styles.arrowleft}></Image>
                    </TouchableOpacity>

                </View>
                <View style={{marginTop:20}}>
               
               <TextInput placeholder="About" style={Styles.input}></TextInput>
               
               <TouchableOpacity onPress={()=>props.navigation.navigate("About")}>
               <Image source={require('../images/arrow.png')}style={Styles.arrowimage1}></Image>
               </TouchableOpacity>
               <TextInput placeholder="Term & Condition" style={Styles.input}></TextInput>
               <TouchableOpacity onPress={props.navigation.navigate("TermsCondtion")}>
               
               <Image source={require('../images/arrow.png')}style={Styles.arrowimage1}></Image>
               </TouchableOpacity>
               <TextInput placeholder="Privacy Policy" style={Styles.input}></TextInput>
               <TouchableOpacity onPress={()=>props.navigation.navigate("PrivacyPolicy")}>
               <Image source={require('../images/arrow.png')}style={Styles.arrowimage1}></Image>
               </TouchableOpacity>
               <TextInput placeholder="Help us" style={Styles.input}></TextInput>
              
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
   
    input:{
        borderWidth:1,
        height:50,
        margin:5,
        paddingLeft:15,
        borderRadius:10,
        backgroundColor:'#e0dfdc',
        borderColor:'#e0dfdc'
       
    },
    arrowimage1:{
        position:'absolute',
        height:13,
        width:13,
        right:17,
        bottom:24
     },
})
export default Setting;