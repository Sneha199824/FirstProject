import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';


const Detailed1 = (props) => {
    
    return (

        <SafeAreaView>
            <ScrollView>
                <View style={Styles.headview}>
                    <Text style={Styles.headtext}>Detailed Profile</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate(Campus)}>
                        <Image source={require('../images/arrowleft.png')} style={Styles.arrowleft}></Image>
                    </TouchableOpacity>

                </View>
                <View>
                    <View style={Styles.personview}><Image source={require('../images/person.png')} style={Styles.personimage}></Image>
                        <View >
                            <Text style={{ textAlign: 'center', paddingTop: 50, color: 'black' }}>Mohit</Text>
                            <Text style={{ textAlign: 'center', paddingTop: 5 }}>Web Developer</Text></View>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={Styles.text2}>Completed</Text>
                            <Text style={Styles.text2}> Ratings</Text>
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={Styles.text1}>10</Text>
                            <Text style={Styles.text1}>4.5*</Text>
                        </View>

                        <Text style={Styles.connecttext}>Connect me</Text>
                    </View>
                </View>
                
                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-around' }}>
                <TouchableOpacity>
                    <Text style={Styles.reviewtext}>About</Text>
                    </TouchableOpacity>
                        <Text style={Styles.abouttext}>Review</Text>
                  

                    <Text style={Styles.reviewtext}>Products</Text>
                </View>
                <View style={Styles.viewbox4}>
                    <View>
                    <View style={{flexDirection:'row'}}>
                    <Image source={require('../images/person.png')} ></Image>
                       <View>
                    <Text style={Styles.name}>  Mohit</Text>
                        <Text style={Styles.star}>*****</Text>
                        </View>
                        <Text style={Styles.day}>2 days ago</Text></View>
                       
                        <Text style={{paddingLeft:20,paddingRight:9}}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>
                    </View>

                </View>
                <View style={Styles.viewbox4}>
                    <View>
                    <View style={{flexDirection:'row'}}>
                    <Image source={require('../images/person.png')} ></Image>
                       <View>
                    <Text style={Styles.name}>  Mohit</Text>
                        <Text style={Styles.star}>*****</Text>
                        </View>
                        <Text style={Styles.day}>2 days ago</Text></View>
                       
                        <Text style={{paddingLeft:20,paddingRight:9}}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>
                    </View>

                </View>
                <View style={Styles.viewbox4}>
                    <View>
                    <View style={{flexDirection:'row'}}>
                    <Image source={require('../images/person.png')} ></Image>
                       <View>
                    <Text style={Styles.name}>  Mohit</Text>
                        <Text style={Styles.star}>*****</Text>
                        </View>
                        <Text style={Styles.day}>2 days ago</Text></View>
                       
                        <Text style={{paddingLeft:20,paddingRight:9}}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
};
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
    headtext: {
        paddingLeft: 40,
        color: 'white',
        fontSize: 16,
        paddingTop: 13,
        fontWeight: 'bold'
    },
    arrowleft: {
        position: 'absolute',
        height: 20,
        width: 25,
        bottom: 0,
        left: 10
    },
    personview: {
        borderWidth: 1,
        borderColor: '#e0dfdc',
        height: 250,
        width: 320,
        marginLeft: 20,
        marginTop: 65,
        borderRadius: 10
    },
    personimage: {
        position: 'absolute',
        bottom: 210,
        left: 115,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 60,
        height: 90, width: 90
    },
    text1: {
        paddingLeft: 90,
        fontSize: 18,
        paddingTop: 10
    },
    text2: {
        paddingLeft: 60,
        paddingTop: 10,

    },
    connecttext: {
        borderWidth: 1,
        backgroundColor: '#ffa500',
        borderColor: '#ffa500',
        color: 'white',
        height: 38,
        textAlign: 'center',
        paddingTop: 8,
        marginTop: 20,
        width: 100,
        borderRadius: 8,
        marginLeft: 103
    },
    abouttext: {
        borderWidth: 1,
        backgroundColor: '#ffa500',
        borderColor: '#ffa500',
        height: 35,
        width: 90,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 8,
        borderRadius: 8
    },
    reviewtext: {
        height: 35,
        width: 90,
        borderWidth: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 8,
        borderRadius: 8,
        backgroundColor: '#e0dfdc',
        borderColor: '#e0dfdc'
    },
    viewbox4: {

        borderWidth: 1, backgroundColor: '#e0dfdc',
        borderColor: '#e0dfdc',
        height: 225,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 7,
        borderRadius: 5
    },
    day:{ paddingLeft:80,paddingTop:60},
    star:{color:'#ffa500',fontSize:35,paddingLeft:20},
    name:{ fontWeight: 'bold', fontSize: 16, paddingLeft: 20,paddingTop:10 }
})
export default Detailed1;