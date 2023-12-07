import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity  } from 'react-native';

const Terms=(props)=>{
    return(
        <View>
            <Text style={styles.textBox}>Terms Of Services</Text>
            <Text style={styles.text1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>

            <Text style={styles.text1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            
            <Text style={styles.text1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            
            <Text style={styles.text1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            <TouchableOpacity style={styles.container} >
            <Text style={styles.text} onPress={()=>props.navigation.navigate('HomeScreen')}>Accept</Text>
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
        text:{
            fontWeight:'bold', 
            color:'white', 
            fontSize:15
        },
        textBox:{
            textAlign:"center",
            fontSize:25,
            color:'black',
            padding:20
        },
        text1:{
            margin:10,
            paddingLeft:5 ,      
            color:'black',
            textAlign:'center'
        }
    });
export default Terms;