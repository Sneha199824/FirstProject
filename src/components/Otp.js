import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import ResetPassword from "./ResetPassword";
const Otp = (props) => {
    return (
        <View style={{ marginTop: 20, }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 30,color:'black' }}>Enter OTP</Text>
            <Text style={{ fontSize: 12, paddingTop: 10, paddingLeft: 30,color:'black' }}>Enter the code we sent to your mail</Text>
            <Text style={{ fontWeight: 'bold', color: 'orange', fontSize: 10, paddingLeft: 30, paddingTop: 15 }}>CODE</Text>
            <OTPInputView style={styles.otpbox} pinCount={6}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
            ></OTPInputView>

            <TouchableOpacity style={styles.container} onPress={()=>props.navigation.navigate("ResetPassword")} >
                <Text style={styles.text} >Submit</Text>
            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        padding: 10,
        margin:20,
        width: '90%',
        borderRadius: 8,
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15,

    },
    otpbox: {
        height: 90,
        width: '80%',
        paddingLeft:30,
        fontSize:10,
       
},
underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "black",
    color:'black'
  },
});
export default Otp;