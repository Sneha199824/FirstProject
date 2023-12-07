import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View, Image, ScrollView } from 'react-native';
import ForgotPassword from './ForgotPassword';

const SignIn = (props) => {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setpasswordError] = useState(false);
    const [image, setImage] = useState('eye');
    const validateForm = () => {
        const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email');
        } else {
            setEmailError('');
        }
        const passRegex = /^[a-za-z0-9!@#$%^&*]{6,16}&/;
        if (!passRegex.test(password)) {
            setpasswordError('Please enter a vilid password');
        } else {
            setpasswordError('')
        }
    }
    const handleShowPassword = () => {
        if (image === 'eye') {
            setImage('eye-off');
            setShowPassword(!showPassword);
        } else if (image === 'eye-off') {
            setImage('eye');
            setShowPassword(!showPassword);
        }
    };
   
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 30, padding: 15 }}>Sign In</Text>

                

                <View style={styles.input} ><TextInput value={email} onChangeText={setEmail} placeholder='Email' style={styles.innerinput} placeholderTextColor={"#d1cebd"}></TextInput>
                    <Image source={require('../images/Email.png')} style={styles.Emailimage} />
                    </View>
                    {/* {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
                */}
                <View style={styles.input}>
                    <TextInput style={styles.innerinput} value={password} secureTextEntry={!showPassword} onChangeText={setPassword} placeholder='Password' placeholderTextColor={"#d1cebd"}></TextInput>
                    <Image source={require('../images/pass1.png')} style={styles.passimage} />
                    <TouchableOpacity onPress={() => handleShowPassword()}>

                        <Image style={styles.eyeimage} source={require("../images/eye.png")} /></TouchableOpacity>
</View>
                    {/* {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
                 */}
                <TouchableOpacity  onPress={()=>props.navigation.navigate(ForgotPassword)}><Text style={styles.forgot}>ForgotPassword</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    validateForm()
                    props.navigation.navigate('Campus')
                }}>

                    <View style={styles.buttonsignin}>
                        <Text style={styles.buttonsignup} >Sign In</Text>
                    </View></TouchableOpacity>

                <Text style={styles.text}>or sign up with</Text>

                <View>
                    <Text style={styles.google}>Continue with google</Text>
                    <Image source={require('../images/googleimage.png')} style={styles.googleimage} />
                </View>

                <View>
                    <Text style={styles.google}>Continue with facebook</Text>
                    <Image source={require('../images/facebook.png')} style={styles.facebookimage} />
                </View>

                <Text style={styles.text} onPress={() => props.navigation.navigate("SignUp")}>don't have an account? <Text style={{ color: 'orange', fontWeight: 'bold' }} >sign Up</Text></Text>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    textsign: {
        margin: 5,
        color: 'black',

    },
    text: {
        margin: 6,
        color: 'black',
        textAlign: 'center'
    },
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 10,
    },
    buttonsignin: {
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 9,
        borderRadius: 10,
        margin: 9
    },
    input: {
        borderRadius: 10,

        borderColor: '#898b8c',
        borderWidth: 2,
        margin: 11,
        paddingLeft: 49,
        width: 320,
        paddingTop: 8,
        paddingBottom: 8,
        height:50
    },
    innerinput: {
       
       paddingTop:1,
        paddingLeft: 11,
        borderLeftColor: '#898b8c',
        borderLeftWidth: 2,
        fontSize: 16,
       
    },
    buttonsignup: {
        color: 'white',
        fontWeight: 'bold'
    },
    Emailimage: {
        height: 22,
        width: 22,
        position: 'absolute',
        top: 10,
        left: 11,
        resizeMode:'stretch'
    },
    
    eyeimage: {
        height: 18,
        width: 20,
        position: 'absolute',
        left: 235,
        bottom: 5
    },
    passimage: {
        height: 20,
        width: 20,
        position: 'absolute',
        top: 7,
        left: 15,
        resizeMode:'stretch'
    },
    error: {
        color: 'red',
        left: 17
    },
    google: {
        borderRadius: 10,
        borderColor: '#898b8c',
        borderWidth: 2,
        marginLeft: 10,
        marginTop: 25,
        marginRight:10,
        padding: 8,
        color: '#d1cebd',
        textAlign: 'center',
        height:48
        
    },
    googleimage: {
        height: 25,
        width: 27,
        resizeMode:'stretch',
        position: 'absolute',
        top: 35,
        left: 25,
    },

    facebook: {
        borderRadius: 10,
        borderColor: '#898b8c',
        borderWidth: 2,
        margin: 10,
        marginTop: 25,
        padding: 8,
        height:48,
       
        textAlign: 'center',
       
    },
    facebookimage: {
        height: 33,
        width: 39,
        resizeMode:'stretch',
        position: 'absolute',
        top: 30,
        left: 19,
    },
    forgot:{
        fontWeight:'bold',
        color:'black',
        textAlign:'right',
        padding:5
        
    }
});

export default SignIn;
