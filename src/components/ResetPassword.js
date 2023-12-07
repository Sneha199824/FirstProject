import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View, Image, ScrollView } from 'react-native';

const ResetPassword = (props) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    return (
        <ScrollView>
         <View style={styles.container}>
                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20, padding: 15 }}>Reset Password</Text>

        <View style={styles.input}>
                    <TextInput style={styles.innerinput} value={password} secureTextEntry={!showPassword} onChangeText={setPassword} placeholder='New Password' placeholderTextColor={"#d1cebd"}></TextInput>
                    <Image source={require('../images/pass1.png')} style={styles.passimage} />
                    </View>
                    <View style={styles.input}>
                    <TextInput style={styles.innerinput} value={password} secureTextEntry={!showPassword} onChangeText={setPassword} placeholder='Confirm Password' placeholderTextColor={"#d1cebd"}></TextInput>

                    <Image source={require('../images/pass1.png')} style={styles.passimage} />
                    </View>
                    </View>
                    <TouchableOpacity onPress={()=>props.navigation.navigate("SignIn")}>
                    <View style={styles.buttonsubmit}>
                        <Text style={styles.textsubmit} >Submit</Text>
                    </View></TouchableOpacity>
                     </ScrollView>
                     );
                 };
                 const styles = StyleSheet.create({
                    container: {
                        backgroundColor: '#fff',
                        flex: 1,
                        paddingTop: 60,
                        paddingLeft:10
                       
                    },
                    input: {
                        borderRadius: 10,
                
                        borderColor: '#898b8c',
                        borderWidth: 2,
                        marginTop: 11,
                        marginBottom:3,
                        marginLeft:10,
                        paddingLeft: 49,
                        width: 320,
                        paddingTop: 8,
                        paddingBottom: 5,
                        height:50
                    },
                    innerinput: {
                       
                       paddingTop:1,
                        paddingLeft: 11,
                       borderColor:'#898b8c',
                        borderLeftWidth: 2,
                        fontSize: 13,
                        
                       
                    },
                    passimage: {
                        height: 20,
                        width: 20,
                        resizeMode:'stretch',
                        position: 'absolute',
                        top: 10,
                        left: 15
                    },
                    buttonsubmit: {
                        alignItems: 'center',
                        backgroundColor: 'black',
                        padding: 9,
                        borderRadius: 10,
                        marginTop: 43,
                        marginLeft:18,
                        marginRight:18
                    },
                    textsubmit: {
                        color: 'white',
                        fontWeight: 'bold'
                    },
                });

                export default ResetPassword;
                