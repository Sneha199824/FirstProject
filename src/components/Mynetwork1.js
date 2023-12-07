import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import Campus from "./Campus";
import Logout from "./Logout";

const Mynetwork1 = (props) => {

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={Styles.headview}>
                    <Text style={Styles.headtext}>My  Network</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate(Campus)}>
                        <Image source={require('../images/arrowleft.png')} style={Styles.arrowleft}></Image>
                    </TouchableOpacity></View>
                <View style={Styles.request}>
                    <TouchableOpacity>
                        <Text style={Styles.request2}>New Request</Text>
                    </TouchableOpacity>
                    <View>

                        <Text style={Styles.massege1} >Connected</Text>

                    </View>

                </View>
                <View style={Styles.view1}>
                    <Image source={require('../images/person.png')} style={Styles.imageperson} />
                    <View>
                        <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>Vikash</Text>

                        <Text style={{ paddingTop: 3 }}> java trainer</Text>
                        <Text style={{ paddingTop: 3, fontSize: 10 }}>connect 2 days ago</Text>
                    </View>
                    <View style={{ marginLeft: 110 }}>
                        <Image source={require('../images/threedots1.png')} style={Styles.imagecross} />
                    </View>
                    <View>
                        <Image source={require('../images/send.png')} style={Styles.imagecross} />
                    </View>
                </View>
                <View style={Styles.view1}>
                    <Image source={require('../images/person.png')} style={Styles.imageperson} />
                    <View>
                        <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>Akash</Text>

                        <Text style={{ paddingTop: 3 }}> web developer</Text>
                        <Text style={{ paddingTop: 3, fontSize: 10 }}>connect 2 days ago</Text>
                    </View>
                    <View style={{ marginLeft: 110 }}>
                        <Image source={require('../images/threedots1.png')} style={Styles.imagecross} />
                    </View>
                    <View>
                        <Image source={require('../images/send.png')} style={Styles.imagecross} />
                    </View>
                </View>
                <View style={Styles.view1}>
                    <Image source={require('../images/person.png')} style={Styles.imageperson} />
                    <View>
                        <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>Ajay</Text>

                        <Text style={{ paddingTop: 3 }}> developer</Text>
                        <Text style={{ paddingTop: 3, fontSize: 10 }}>connect 2 days ago</Text>
                    </View>
                    <View style={{ marginLeft: 110 }}>
                        <Image source={require('../images/threedots1.png')} style={Styles.imagecross} />
                    </View>
                    <View>
                        <Image source={require('../images/send.png')} style={Styles.imagecross} />
                    </View>
                </View>
                <View style={Styles.view1}>
                    <Image source={require('../images/person.png')} style={Styles.imageperson} />
                    <View>
                        <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>Mohit</Text>

                        <Text style={{ paddingTop: 3 }}> web designer</Text>
                        <Text style={{ paddingTop: 3, fontSize: 10 }}>connect 2 days ago</Text>
                    </View>
                    <View style={{ marginLeft: 110 }}>
                        <Image source={require('../images/threedots1.png')} style={Styles.imagecross} />
                    </View>
                    <View>
                        <Image source={require('../images/send.png')} style={Styles.imagecross} />
                    </View>
                </View>
                <View style={Styles.view1}>
                    <Image source={require('../images/person.png')} style={Styles.imageperson} />
                    <View>
                        <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>Amit</Text>

                        <Text style={{ paddingTop: 3 }}> ui/ux designer</Text>
                        <Text style={{ paddingTop: 3, fontSize: 10 }}>connect 2 days ago</Text>
                    </View>
                    <View style={{ marginLeft: 110 }}>
                        <Image source={require('../images/threedots1.png')} style={Styles.imagecross} />
                    </View>
                    <View>
                        <Image source={require('../images/send.png')} style={Styles.imagecross} />
                    </View>
                </View>
                <View style={Styles.view1}>
                    <Image source={require('../images/person.png')} style={Styles.imageperson} />
                    <View>
                        <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>Krishana</Text>

                        <Text style={{ paddingTop: 3 }}> Graphic desiner</Text>
                        <Text style={{ paddingTop: 3, fontSize: 10 }}>connect 2 days ago</Text>
                    </View>
                    <View style={{ marginLeft: 110 }}>
                        <Image source={require('../images/threedots1.png')} style={Styles.imagecross} />
                    </View>
                    <View>
                        <Image source={require('../images/send.png')} style={Styles.imagecross} />
                    </View>
                </View>
                <View style={Styles.view1}>
                    <Image source={require('../images/person.png')} style={Styles.imageperson} />
                    <View>
                        <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>Mona</Text>

                        <Text style={{ paddingTop: 3 }}> java trainer</Text>
                        <Text style={{ paddingTop: 3, fontSize: 10 }}>connect 2 days ago</Text>
                    </View>
                    <View style={{ marginLeft: 110 }}>
                        <Image source={require('../images/threedots1.png')} style={Styles.imagecross} />
                    </View>
                    <View>
                        <Image source={require('../images/send.png')} style={Styles.imagecross} />
                    </View>
                </View>
                <View style={Styles.view1}>
                    <Image source={require('../images/person.png')} style={Styles.imageperson} />
                    <View>
                        <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>Pawan</Text>

                        <Text style={{ paddingTop: 3 }}> java trainer</Text>
                        <Text style={{ paddingTop: 3, fontSize: 10 }}>connect 2 days ago</Text>
                    </View>
                    <View style={{ marginLeft: 110 }}>
                        <Image source={require('../images/threedots1.png')} style={Styles.imagecross} />
                    </View>
                    <View>
                        <Image source={require('../images/send.png')} style={Styles.imagecross} />
                    </View>
                </View>
                <View style={Styles.view1}>
                    <Image source={require('../images/person.png')} style={Styles.imageperson} />
                    <View>
                        <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>Pawan</Text>

                        <Text style={{ paddingTop: 3 }}> java trainer</Text>
                        <Text style={{ paddingTop: 3, fontSize: 10 }}>connect 2 days ago</Text>
                    </View>
                    <View style={{ marginLeft: 110 }}>
                        <Image source={require('../images/threedots1.png')} style={Styles.imagecross} />
                    </View>
                    <View>
                        <Image source={require('../images/send.png')} style={Styles.imagecross} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const Styles = StyleSheet.create({
    headview: {
        backgroundColor: '#ffa500',
        position: 'relative',
        height: 65,
        textAlign: 'center',
        color: 'white',
        borderBottomWidth: 1,
        borderColor: 'orange',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginTop: 1,
        marginBottom: 20
    },
    headtext: {
        paddingLeft: 40,
        color: '#f7f5f5',
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
    massege1: {
        borderWidth: 1,
        height: 38,
        width: 165, borderRadius: 5,
        borderColor: '#ffa500',
        backgroundColor: '#ffa500',
        color: 'white',
        paddingLeft: 19,
        textAlign: 'center',
        paddingTop: 7,
        fontWeight: 'bold'
    },
    request: {
        flexDirection: 'row',
        height: 40,
        width: 330,
        borderRadius: 5,
        textAlign: 'center',
        marginLeft: 10,
        marginBottom: 10
    },

    request2: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        height: 38,
        width: 160, borderRadius: 5,
        paddingTop: 7,
        marginTop: 1,
        fontWeight: 'bold',
        borderColor: '#d1cebd',
        textAlign: 'center',
        marginLeft: 8

    },

    imagecross: {
        height: 25,
        width: 25,
        marginTop: 23,


    },
    view1: {
        flexDirection: 'row',

        borderColor: '#d1cebd',
        backgroundColor: '#d1cebd',
        borderWidth: 1,

        borderRadius: 8,
        marginLeft: 13,
        marginRight: 13,
        marginBottom: 5
    },
    imageperson: {
        height: 60,
        width: 60,
        resizeMode: 'stretch',
        margin: 5
    }
});
export default Mynetwork1;