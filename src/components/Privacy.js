import React from 'react';
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native';
const Privacy=(navigation)=>{
    
    return(
        <View>
            <Text style={styles.textBox}>Privacy Policy</Text>
            <Text style={styles.text1}>
           <Text><Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
           </Text> 
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            </Text>
            <TouchableOpacity style={styles.container} >
            <Text style={styles.text} onPress={()=>navigation.navigate('HomeScreen')}>Accept</Text>
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
            fontSize:25,
            fontWeight:'bold',
            color:'black',
            
            padding:10
        },
        text:{
            fontWeight:'bold', 
            color:'white', 
            fontSize:15
        },
        text1:{
            textAlign:'center',
            color:'black',
            margin:10,
            fontSize:16
        }
    });
export default Privacy;