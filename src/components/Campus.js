import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput, FlatList } from 'react-native';
import Swiper from 'react-native-swiper'
import Fitness from "./Fitness";
import Styles from '../components/Style/Styles';
import Icon from "../assets/icons/Icon";


const Arr = [
    {
      
        rate: '4.5*',
        name: 'Mohit',
        skill: 'Web Developer',
        rank: 'Expertise',
        lang: 'HTML'
    },
    {
       
        rate: '4.5*',
        name: 'Mohit',
        skill: 'Web Developer',
        rank: 'Expertise',
        lang: 'HTML'
    },
    {
       
        rate: '4.5*',
        name: 'Mohit',
        skill: 'Web Developer',
        rank: 'Expertise',
        lang: 'HTML'
    },
    {
       
        rate: '4.5*',
        name: 'Mohit',
        skill: 'Web Developer',
        rank: 'Expertise',
        lang: 'HTML'
    },
    {
       
        rate: '4.5*',
        name: 'Mohit',
        skill: 'Web Developer',
        rank: 'Expertise',
        lang: 'HTML'
    },
    {
      
        rate: '4.5*',
        name: 'Mohit',
        skill: 'Web Developer',
        rank: 'Expertise',
        lang: 'HTML'
    },
]

const Campus = (props) => {
    return (

        <SafeAreaView>

            <View style={styles.headview}>
                <Text style={styles.headtext}>Campus Connect</Text>
                <TouchableOpacity><Image source={require('../images/user.png')} style={styles.headimage1}></Image>
                </TouchableOpacity>
                <TouchableOpacity><Image source={require('../images/Bell.png')} style={styles.headimage2}></Image>
                </TouchableOpacity>
            </View>
            <Image sousrce={Icon.iconSearch} style={styles.searchimage}></Image>
            <TextInput style={styles.input}></TextInput>
            <ScrollView>
              
                        <Swiper style={styles.swiper} activeDot={<View style={{ backgroundColor: 'black', width: 8, height: 8, borderRadius: 4 }} />}
                        >
                            <View style={Styles.mainTextImgeView}>


                                <View style={Styles.textImageView}>
                                    <View style={Styles.textView}>
                                        <View style={Styles.dotView}>
                                            <View style={Styles.dot1}></View>
                                            <View style={Styles.dot2}></View>
                                        </View>
                                        <Text style={Styles.boundryText}>NO BOUNDARIES.NO LIMITS.NO MORE EXCUSES.</Text>
                                        <Text style={Styles.titleText}>COMMING SOON</Text>
                                        <Text style={Styles.emailText}>Leave us your e-mail address and we'll let you know when we're ready</Text>
                                        <View style={Styles.dotView}>
                                            <View style={Styles.dot3}></View>
                                            <View style={Styles.dot4}></View>
                                        </View>
                                    </View>
                                    <View style={Styles.imageView}>
                                        <Image source={require('../images/gym.png')} style={Styles.gymImage}></Image>
                                    </View>
                                </View>

                            </View>
                      
                            <View style={Styles.mainTextImgeView}>


                                <View style={Styles.textImageView}>
                                    <View style={Styles.textView}>
                                        <View style={Styles.dotView}>
                                            <View style={Styles.dot1}></View>
                                            <View style={Styles.dot2}></View>
                                        </View>
                                        <Text style={Styles.boundryText}>NO BOUNDARIES.NO LIMITS.NO MORE EXCUSES.</Text>
                                        <Text style={Styles.titleText}>COMMING SOON</Text>
                                        <Text style={Styles.emailText}>Leave us your e-mail address and we'll let you know when we're ready</Text>
                                        <View style={Styles.dotView}>
                                            <View style={Styles.dot3}></View>
                                            <View style={Styles.dot4}></View>
                                        </View>
                                    </View>
                                    <View style={Styles.imageView}>
                                        <Image source={require('../images/gym.png')} style={Styles.gymImage}></Image>
                                    </View>
                                </View>

                            </View>
                       
                            <View style={Styles.mainTextImgeView}>


                                <View style={Styles.textImageView}>
                                    <View style={Styles.textView}>
                                        <View style={Styles.dotView}>
                                            <View style={Styles.dot1}></View>
                                            <View style={Styles.dot2}></View>
                                        </View>
                                        <Text style={Styles.boundryText}>NO BOUNDARIES.NO LIMITS.NO MORE EXCUSES.</Text>
                                        <Text style={Styles.titleText}>COMMING SOON</Text>
                                        <Text style={Styles.emailText}>Leave us your e-mail address and we'll let you know when we're ready</Text>
                                        <View style={Styles.dotView}>
                                            <View style={Styles.dot3}></View>
                                            <View style={Styles.dot4}></View>
                                        </View>
                                    </View>
                                    <View style={Styles.imageView}>
                                        <Image source={require('../images/gym.png')} style={Styles.gymImage}></Image>
                                    </View>
                                </View>

                            </View>
                       
                            <View style={Styles.mainTextImgeView}>


                                <View style={Styles.textImageView}>
                                    <View style={Styles.textView}>
                                        <View style={Styles.dotView}>
                                            <View style={Styles.dot1}></View>
                                            <View style={Styles.dot2}></View>
                                        </View>
                                        <Text style={Styles.boundryText}>NO BOUNDARIES.NO LIMITS.NO MORE EXCUSES.</Text>
                                        <Text style={Styles.titleText}>COMMING SOON</Text>
                                        <Text style={Styles.emailText}>Leave us your e-mail address and we'll let you know when we're ready</Text>
                                        <View style={Styles.dotView}>
                                            <View style={Styles.dot3}></View>
                                            <View style={Styles.dot4}></View>
                                        </View>
                                    </View>
                                    <View style={Styles.imageView}>
                                        <Image source={require('../images/gym.png')} style={Styles.gymImage}></Image>
                                    </View>
                                </View>

                            </View>
                        </Swiper>
                
                   
                <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 20, color: 'black', paddingTop: 10 }}>Services</Text>
                <View style={{ flexDirection: 'row' }}>

                    <View style={styles.serviseview}>
                        <Image source={require('../images/fitgym.png')} style={styles.fitimage}></Image>
                        <Text style={{ color: 'white', paddingTop: 0, fontWeight: 'bold' }}>Fitness</Text>
                        <Image source={require('../images/yellowarrow.png')} style={styles.yellowimage}></Image>
                    </View>
                    <View style={styles.serviseview1}>
                        <Image source={require('../images/fit.png')} style={styles.tutionimage}></Image>
                        <Text style={{ color: 'black',paddingTop:8 }}>Tution</Text>
                    </View>
                    <View style={styles.serviseview2}>
                        <Image source={require('../images/mover.png')} style={styles.moveimage}></Image>
                        <Text style={{ color: 'black',paddingTop:8 }}>Movers</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>

                    <Text style={styles.activetext}>Active Users</Text>
                    <View>
                        <Text style={styles.detailtext}>View Detailed</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate(Fitness)}>
                            <Image source={require('../images/arrow.png')} style={styles.arrowimage}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <FlatList
                        data={Arr}
                        renderItem={({ item, id }) =>
                            <TouchableOpacity>
                                <View style={styles.personview}><Image source={require('../images/person.png')} style={styles.personimage}></Image>
                                    <View ><Text style={styles.ratetext}>{item.rate}</Text>
                                        <Text style={{ textAlign: 'center', paddingTop: 10, color: 'black' }}>{item.name}</Text>
                                        <Text style={{ textAlign: 'center' }}>{item.skill}</Text></View>
                                    <View style={styles.personview1}>
                                        <Text style={styles.experttext}>{item.rank}</Text>
                                        <Text style={styles.htmltext}>{item.lang}</Text></View>
                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor={(item) => item.id} 
                            numColumns={2}
                        />
                        
                </View>
            </ScrollView>
        </SafeAreaView>



    )
}
const styles = StyleSheet.create({
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
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        paddingTop: 15,
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 1,
        margin: 15,
        padding: 10,
        borderRadius: 10,
        borderColor: '#bdb9b9',
    },
    searchimage: {
      
    },
    swiper: {
        height: 220
    },
   
    fitimage: {
        height: 42,
        width: 30,
    },
    yellowimage: {
        height: 20,
        width: 20,
      

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
        height: 20,
        width: 30,
        resizeMode: 'stretch',
        marginTop:10
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
    moveimage: {
        height: 20,
        width: 40,
        resizeMode: 'stretch',
        marginTop:10
    },
    arrowimage: {
        height: 10,
        width: 10,
        resizeMode: 'stretch',
        position: 'absolute',
        left: 240,
        bottom: 4

    },
    detailtext: {
        paddingLeft: 150,
        paddingTop: 10
    },
    activetext: {
        paddingLeft: 20,
        paddingTop: 10,
        color: 'black'
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
        marginTop: 80
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
       position:'absolute',
       left:49,
       bottom:70,
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

    }
})
export default Campus;