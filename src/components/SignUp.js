import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View, Image, ScrollView } from 'react-native';

const SignUp = (props) => {
    const [name, setName] = useState('');
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
                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 30, padding: 15 }}>Sign Up</Text>

                <View style={styles.input}>
                    <TextInput placeholder=' Name' value={name} onChangeText={setName} style={styles.innerinput} placeholderTextColor={"#d1cebd"}></TextInput>
                    <Image source={require('../images/user1.png')} style={styles.userimage} />
                </View>

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
                <Text style={styles.text}>By registration process, you accept our
                    <Text style={{ color: 'black', fontWeight: 'bold' }} onPress={() => props.navigation.navigate("Privacy")}> Privacy Policy </Text>
                    <Text style={{ padding: 5 }}>and</Text>
                    <Text style={{ color: 'black', fontWeight: 'bold' }} onPress={() => props.navigation.navigate("Terms")}> Terms of Services</Text></Text>

                <TouchableOpacity onPress={() => {
                    validateForm()
                    props.navigation.navigate('Otp')
                }}>

                    <View style={styles.buttonsignin}>
                        <Text style={styles.buttonsignup} >Sign Up</Text>
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

                <Text style={styles.text} onPress={() => props.navigation.navigate("SignIn")}>Already have an account? <Text style={{ color: 'orange', fontWeight: 'bold' }} >sign in</Text></Text>
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
        height: 50
    },
    innerinput: {

        paddingTop: 1,
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
        width: 27,
        resizeMode: 'stretch',
        position: 'absolute',
        top: 10,
        left: 11,
    },
    userimage: {
        height: 22,
        width: 22,
        resizeMode: 'stretch',
        position: 'absolute',
        top: 9,
        left: 14
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
        resizeMode: 'stretch',
        position: 'absolute',
        top: 9,
        left: 15
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
        marginRight: 10,
        marginTop: 25,
        padding: 10,

        textAlign: 'center'
    },
    googleimage: {
        height: 27,
        width: 27,
        position: 'absolute',
        top: 32,
        left: 25,
        resizeMode: 'stretch'
    },

    facebook: {
        borderRadius: 10,
        borderColor: '#d1cebd',
        borderWidth: 2,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 25,
        padding: 10,
        color: '#d1cebd',
        textAlign: 'center'
    },
    facebookimage: {
        height: 38,
        width: 41,
        resizeMode: 'stretch',
        position: 'absolute',
        top: 25,
        left: 19,
    },
});

export default SignUp;