import React from 'react';
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native';
import Logout from '../Logout';
const Button=({ props,border,
    color,
    text,
    height,
    onPress,
    radius,
    width})=>{
    
    return(
        <View>
        <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text} >{text}</Text>
    </TouchableOpacity>
        
    </View>
)
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        padding:10,
        margin:20,
        width:'90%',
        borderRadius:8,
        alignItems:'center'
    },
    textBox:{
        textAlign:"center",
        fontSize:35,
        fontWeight:'bold',
        color:'black',
        
        padding:10
    },
    text:{
        fontWeight:'bold', 
        color:'white', 
        fontSize:15
    },
});
export default Button;