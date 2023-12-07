import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';

import Campus from "./Campus";
import Logout from "./Logout";

const Fitness = (props) => {
    console.log("props fitness>>",props)
    return (

        <SafeAreaView>
            <ScrollView>
                <View style={Styles.headview}>
                    <Text style={Styles.headtext}>Fitness</Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate(Campus)}>
                    <Image source={require('../images/arrowleft.png')} style={Styles.arrowleft}></Image>
                    </TouchableOpacity>

                </View>
                <View style={Styles.swiperview}>
                    <Image source={require('../images/dot.png')} style={Styles.dotimage}></Image>
                    <Image source={require('../images/dot.png')} style={Styles.dotimage1}></Image>

                    <Text style={Styles.swipertext1}>NO BOUNDARIES.NO LIMITS.NO MORE EXCUSES.</Text>
                    <Text style={Styles.swipertext2}>COMMING SOON</Text>
                    <Text style={Styles.swipertext3}>Leave us your e-mail address and we'll let you know when we're ready</Text>
                    <Image source={require('../images/gym.png')} style={Styles.gymimage}></Image>
                    
                    <Image source={require('../images/dot.png')} style={Styles.dotimage2}></Image>

                    <Image source={require('../images/dot.png')} style={Styles.dotimage3}></Image>
                </View>
                <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity onPress={()=>props.navigation.navigate(Logout)}><Text style={Styles.activetext}>Active Users</Text>
                </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row',marginBottom:70 }}>
                    <TouchableOpacity>
                        <View style={Styles.personview}><Image source={require('../images/person.png')} style={Styles.personimage}></Image>
                            <View ><Text style={Styles.ratetext}>4.5*</Text>
                                <Text style={{ textAlign: 'center', paddingTop: 10, color: 'black' }}>Mohit</Text>
                                <Text style={{ textAlign: 'center' }}>Web Developer</Text></View>
                            <View style={Styles.personview1}>
                                <Text style={Styles.experttext}>Expertise</Text>
                                <Text style={Styles.htmltext}>HTML</Text></View>
                        </View>
                    </TouchableOpacity>
                    <View style={Styles.personview}><Image source={require('../images/person.png')} style={Styles.personimage}></Image>
                        <View ><Text style={Styles.ratetext}>4.5*</Text>
                            <Text style={{ textAlign: 'center', paddingTop: 10, color: 'black' }}>Mohit</Text>
                            <Text style={{ textAlign: 'center' }}>Web Developer</Text></View>

                        <View style={Styles.personview1}>
                            <Text style={Styles.experttext}>Expertise</Text>
                            <Text style={Styles.htmltext}>HTML</Text></View>
                    </View>
                </View>
                <Text style={{paddingLeft:25,paddingTop:10,color:'black',fontWeight:'bold'}}>All Listed User</Text>
                <View style={{ flexDirection: 'row',marginBottom:10 }}>
                    <View style={Styles.personview}><Image source={require('../images/person.png')} style={Styles.personimage}></Image>
                        <View ><Text style={Styles.ratetext}>4.5*</Text>
                            <Text style={{ textAlign: 'center', paddingTop: 10, color: 'black' }}>Mohit</Text>
                            <Text style={{ textAlign: 'center' }}>Web Developer</Text></View>

                        <View style={Styles.personview1}>
                            <Text style={Styles.experttext}>Expertise</Text>
                            <Text style={Styles.htmltext}>HTML</Text></View>
                    </View>
                    <View style={Styles.personview}><Image source={require('../images/person.png')} style={Styles.personimage}></Image>
                        <View ><Text style={Styles.ratetext}>4.5*</Text>
                            <Text style={{ textAlign: 'center', paddingTop: 10, color: 'black' }}>Mohit</Text>
                            <Text style={{ textAlign: 'center' }}>Web Developer</Text></View>
                        <View style={Styles.personview1}>
                            <Text style={Styles.experttext}>Expertise</Text>
                            <Text style={Styles.htmltext}>HTML</Text></View>
                    </View></View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <View style={Styles.personview}><Image source={require('../images/person.png')} style={Styles.personimage}></Image>
                        <View ><Text style={Styles.ratetext}>4.5*</Text>
                            <Text style={{ textAlign: 'center', paddingTop: 10, color: 'black' }}>Mohit</Text>
                            <Text style={{ textAlign: 'center' }}>Web Developer</Text></View>
                        <View style={Styles.personview1}>
                            <Text style={Styles.experttext}>Expertise</Text>
                            <Text style={Styles.htmltext}>HTML</Text></View>
                    </View>
                    <View style={Styles.personview}><Image source={require('../images/person.png')} style={Styles.personimage}></Image>
                        <View ><Text style={Styles.ratetext}>4.5*</Text>
                            <Text style={{ textAlign: 'center', paddingTop: 10, color: 'black' }}>Mohit</Text>
                            <Text style={{ textAlign: 'center' }}>Web Developer</Text></View>
                        <View style={Styles.personview1}>
                            <Text style={Styles.experttext}>Expertise</Text>
                            <Text style={Styles.htmltext}>HTML</Text></View>
                    </View></View>
                    <View style={{ flexDirection: 'row', marginTop: 20,marginBottom:10 }}>
                    <View style={Styles.personview}><Image source={require('../images/person.png')} style={Styles.personimage}></Image>
                        <View ><Text style={Styles.ratetext}>4.5*</Text>
                            <Text style={{ textAlign: 'center', paddingTop: 10, color: 'black' }}>Mohit</Text>
                            <Text style={{ textAlign: 'center' }}>Web Developer</Text></View>
                        <View style={Styles.personview1}>
                            <Text style={Styles.experttext}>Expertise</Text>
                            <Text style={Styles.htmltext}>HTML</Text></View>
                    </View>
                    <View style={Styles.personview}><Image source={require('../images/person.png')} style={Styles.personimage}></Image>
                        <View ><Text style={Styles.ratetext}>4.5*</Text>
                            <Text style={{ textAlign: 'center', paddingTop: 10, color: 'black' }}>Mohit</Text>
                            <Text style={{ textAlign: 'center' }}>Web Developer</Text></View>
                        <View style={Styles.personview1}>
                            <Text style={Styles.experttext}>Expertise</Text>
                            <Text style={Styles.htmltext}>HTML</Text></View>
                    </View></View>
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
    headimage1: {
        height: 22,
        width: 25,
        resizeMode: 'stretch',
        position: 'absolute',
        bottom: 0,
        left: 15,

    },
    headimage2: {
        height: 23,
        width: 20,
        resizeMode: 'stretch',
        position: 'absolute',
        right: 15,
        bottom: 0
    },
    headtext: {
        paddingLeft:40,
        color: 'white',
        fontSize: 16,
        paddingTop: 13,
        fontWeight: 'bold'
    },
   
    dotimage: {
        position: 'absolute',
        height: 12,
        width: 12,
        margin: 20,
        bottom: 80,

        resizeMode: "stretch"

    },
    dotimage1: {
        position: 'absolute',
        height: 4,
        width: 4,
        margin: 20,
        right: 80,
        bottom: 80,
        resizeMode: "stretch"
    },
    dotimage2: {
        position: 'absolute',
        height: 6,
        width: 6,
        margin: 20,
        resizeMode: "stretch",
        top: 80
    },
    dotimage3: {
        position: 'absolute',
        height: 6,
        width: 6,
        margin: 20,
        right: 80,
        top: 80
    },

    swipertext1: {
        fontSize: 9,
        paddingTop: 25,
        paddingLeft: 9,
        fontWeight: "bold",
        color: "black"

    },
    swipertext2: {
        fontSize: 20,
        paddingLeft: 9,
        fontWeight: 'bold',
        color: "black",

    },
    swipertext3: {
        fontSize: 10,
        paddingLeft: 9,
        paddingRight: 95,

        fontWeight: "bold",
        color: "black"
    },
    swiperview: {
        borderWidth: 1,
        height: 120,
        textAlign: "left",
        marginTop: 25,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 15,

        borderColor: '#d4d2d2'
    }, gymimage: {
        position: 'absolute',
        right: 0,
        height: 117,
        width: 90,
        borderWidtrh: 1,
        borderRadius: 10,
        resizeMode: "stretch"

    },
    fitimage: {
        height: 40,
        width: 40,
    },
    yellowimage: {
        height: 20,
        width: 20,
        paddingTop: 0

    },
    serviseview: {
        borderWidth: 1,
        backgroundColor: "#f5af2f",
        width: 100,
        height: 72,
        margin: 10,
        alignItems: 'center',
        borderColor: "#f5af2f",
        borderRadius: 7
    },
    serviseview1: {
        borderWidth: 1,
        width: 100,
        height: 72,
        backgroundColor: '#e0dfdc',
        borderRadius: 7,
        borderColor: '#e0dfdc',
        alignItems: 'center',
        padding: 6,
        margin: 10
    },
    tutionimage: {
        height: 40,
        width: 40,
    },
    serviseview2: {
        borderWidth: 1,
        width: 100,
        height: 72,
        backgroundColor: '#e0dfdc',
        borderRadius: 7,
        borderColor: '#e0dfdc',
        alignItems: 'center',
        padding: 6,
        margin: 10
    },
   
    activetext: {
        paddingLeft: 20,
        paddingTop: 10,
        color: 'black',
        fontWeight:'bold'
    },
    personview: {
        borderTopWidth: 1,
        borderColor: '#e0dfdc',
        height: 100,
        width: 150,
        marginLeft: 20,
        backgroundColor: '#e0dfdc',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: 60
    },
    personview1: {
        borderColor: '#cfc9c8',
        borderTopWidth: 1,
        width: 150,
        padding: 10,
        height: 50,
        marginTop: 22,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: '#e0dfdc',

    },
    experttext: {
        borderWidth: 1,
        borderColor: '#e0dfdc',
        width: 70,
        paddingLeft: 10,
        borderRadius: 10,
        position: 'absolute',
        bottom: 40,
        left: 13,
        backgroundColor: '#f7f5f5',
        fontSize: 12
    },
    personimage: {
        position: 'absolute',
        bottom: 70,
        left: 45,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 40,
        resizeMode: 'stretch',
        height: 50,
        width: 50
    },
    ratetext: {
        paddingLeft: 115,
        color: 'black',
        marginTop: 8,
        fontSize: 15
    },
    htmltext: {
        borderWidth: 1,
        borderColor: '#e0dfdc',
        backgroundColor: '#d4d2d2',
        width: 40,
        fontSize: 10,
        textAlign: 'center',
        borderRadius: 20,
        color: 'black',
        marginTop: 13

    },
    arrowleft:{
        position:'absolute',
        height:20,
        width:25,
       bottom:0,
        left:10
    }
})
export default Fitness;