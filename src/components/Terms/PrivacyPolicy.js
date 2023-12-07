import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';

import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import About from '../About';
import Styles from '../Style/Styles';
import Setting from '../Setting';

const { hight, width } = Dimensions.get('window');

const Data = [
    {
        id: '1',
        title: 'Privacy Policy',
        text: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockupsLorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups'
    },
    {
        id: '2',
        title: 'Information Collection',
        text: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockupsLorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups'
    },

];
const PrivacyPolicy = (props) => {
    return (
        <SafeAreaView>

            <View>
                <View >
                    <TouchableOpacity onPress={() => props.navigation.navigate("Setting")} style={Styles.HeadView}>
                        <Image source={require('../../images/arrowleft.png')} style={Styles.HeadImage}></Image>

                        <Text style={Styles.HeadText} >Privacy Policy</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <FlatList
                data={Data}
                renderItem={({ item, id }) =>
                    <View style={Styles.ParaView}>

                        <View>
                            <Text style={Styles.Title}>{item.title}</Text>
                            <Text style={Styles.TitleText}>{item.text}</Text>
                        </View>
                    </View>
                }

                keyExtractor={(item) => item.id}
            />

        </SafeAreaView>
    )
}

export default PrivacyPolicy;
