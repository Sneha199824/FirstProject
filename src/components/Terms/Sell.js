import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';

import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import About from '../About';
import Styles from '../Style/Styles';
import Setting from '../Setting';
import Logout from '../Logout';
import Button from '../constant/Button';
import SellItem from './SellItem';

const { hight, width } = Dimensions.get('window');


const Sell = (props) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View >
                        <TouchableOpacity onPress={() => props.navigation.navigate("Logout")} style={Styles.HeadView}>
                            <Image source={require('../../images/arrowleft.png')} style={Styles.HeadImage}></Image>

                            <Text style={Styles.HeadText} >Sell</Text>
                        </TouchableOpacity>

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
                            <Image source={require('../../images/gym.png')} style={Styles.gymImage}></Image>
                        </View>
                    </View>

                </View>
                <View style={Style.startView}>
                    <Text style={Style.textView}> Start Selling with us</Text>
                    <Text style={Style.sellView}>Selling your staff to juniors is very easy now</Text>
                </View>
                <Button />
                <View style={Style.endView}>
                <TouchableOpacity onPress={()=>props.navigation.navigate("SellItem")}>
                    <Text style={Style.endText1}>On Sale Item(S)</Text>
                    </TouchableOpacity>
                    <Text style={Style.endText2}>Pending item(S)</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};
const Style = StyleSheet.create({
    startView: {
        justifyContent: 'center', alignItems: 'center', margin: 20
    },
    textView: {
        fontFamily: 'Roboto-Bold',
        fontSize: 25, color: 'black'
    },
    sellView: {
        fontWeight: '600', textAlign: 'center', paddingLeft: 60, paddingRight: 60
    },
    endView: {
        flexDirection: 'row',


        justifyContent: 'center', alignItems: 'center', margin: 20
    },
    endText1: {
        borderWidth: 1, paddingTop: 10, paddingBottom: 10, paddingLeft: 40, paddingRight: 40, textAlign: 'center', fontSize: 15, width: 150,
        borderColor: '#ffa500', elevation: 2,
        shadowColor: '#ffa500', borderRadius: 2, color: 'black'
    },
    endText2: {
        borderWidth: 1, paddingTop: 10, paddingBottom: 10, paddingLeft: 30, paddingRight: 30, textAlign: 'center', fontSize: 15, width: 150, marginLeft: 15, borderColor: '#ffa500', elevation: 1,
        shadowColor: '#ffa500', borderRadius: 2, color: 'black'
    }
})

export default Sell;
