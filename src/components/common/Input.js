import React from "react";
import { TextInput, View, StyleSheet, Text,Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');
export const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, autoCorrect }) => {
   
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput style={styles.inputStyle}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                onChangeText={onChangeText}
                autoCorrect={autoCorrect}
                value={value}>
            </TextInput>
        </View>
    )
}
const styles=  StyleSheet.create({
    containerStyle:{
       
        margin:15,
        borderRadius:9,
        height:50,
        borderColor:'gray',borderWidth:1
    },
inputStyle:{
    fontSize:12,
    paddingLeft:20,color:'#cdcfd1'
    
},
labelStyle:{
    color:'black',
    paddingLeft:30,
    flex:1
}
});