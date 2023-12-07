import React, { useState, Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';
import Otp from './Otp';



   
const ForgotPassword = (props) => {
    
       
   
    const [email, setEmail] = useState("");
    
    
    return (
        
        <View style={{marginTop:"20%"}}>
        
       
            <Text style={{ fontWeight: 700, padding: 10, fontSize: 20, color:"black"}}> Forgot Password</Text>
            <Text style={styles.mailtext}>Email</Text>
            <View style={styles.input} >
            
            <TextInput value={email} onChangeText={setEmail} placeholder=' Enter Email' style={styles.innerinput} placeholderTextColor={"#d1cebd"}></TextInput>
                    <Image source={require('../images/Email.png')} style={styles.Emailimage} />
                    </View>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Otp")}style={styles.container} >
                <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
            
            <Text style={styles.text2}>Back to<Text style={{fontWeight:"bold",textAlign:"center",color:"black" }} onPress={()=>props.navigation.navigate('SignIn')}> sign in</Text>
            </Text>
         </View>
         
    )
}

const styles = StyleSheet.create({
   
    container: {
        backgroundColor: 'black',
        padding: 10,
        margin: 20,
        width: '90%',
        borderRadius: 8,
        alignItems: 'center'
    },
    input: {
        borderRadius: 10,

        borderColor: '#898b8c',
        borderWidth: 2,
        marginTop: 11,
        marginLeft:22,
        paddingLeft: 49,
        width: 320,
        paddingTop: 8,
        paddingBottom: 8,
        height:50
    },
    innerinput: {
       color:'#898b8c',
       paddingTop:2,
        paddingLeft: 12,
        borderLeftColor: '#898b8c',
        borderLeftWidth: 2,
        fontSize: 16,
       
    },
    Emailimage: {
        height: 22,
        width: 25,
        position: 'absolute',
        top: 10,
        left: 11,
        resizeMode:'stretch'
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15
    },icon:{
        color:"red",height:20,
        width:20
    },
    text2:{
        margin:5,
        fontWeight:"bold",
        textAlign:"center",
        color:"black"
    },
    mailtext:{
        paddingLeft:23,fontWeight:'600',
        paddingTop:20
    }
    
})
export default ForgotPassword;