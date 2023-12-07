import React,{Component} from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image,Dimensions,FlatList } from 'react-native';

import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import About from '../About';
import Styles from '../Style/Styles';

const {hight,width}=Dimensions.get('window');

const Data = [
    {
        id:'1',
        title: 'Campus Connect Terms & Condtions',
        text: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockupsLorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups'
    },
    {
        id:'2',
        title: 'Terms Of Services',
        text: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockupsLorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups'
    },
    {
        id:'3',
        title: 'Campus Connect Services',
        text: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockupsLorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups'
    },
    {
        id:'4',
        title: 'Campus Connect Services',
        text: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockupsLorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups'
    }
];
const TermsCondtion = (props) => {
    return (
        <SafeAreaView>
           
                <View>
                    <View >
                        <TouchableOpacity onPress={() => props.navigation.navigate(About)} style={Styles.HeadView}>
                           <Image source={require('../../images/arrowleft.png')} style={Styles.HeadImage}></Image>
                          
                            <Text style={Styles.HeadText} >Terms & Condition</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <FlatList 
        data={Data}
        renderItem={({ item , id}) => 
                <View style={page.ParaView}>
              <View>
                    <Text style={page.Title}>{item.title}</Text>
                    <Text style={page.TitleText}>{item.text}</Text>
                        </View>
                        </View> }
keyExtractor={(item) => item.id}
/>
        </SafeAreaView>
    )
}
const page = StyleSheet.create({
    
    ParaView: {
        flex: 2
    },
    Title: {
        fontFamily: 'Roboto-Medium',
        color: 'black',
        fontSize: 18,
        paddingLeft: 20,
        paddingTop: 10,
        paddingRight: 50

    },
    TitleText: {
        fontFamily: 'Roboto-Regular',
        color: 'black',
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 10
    }
})
export default TermsCondtion;
