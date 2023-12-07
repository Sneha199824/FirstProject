import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet, View,TouchableOpacity,Image,Text,Dimensions,TextInput,ScrollView} from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { SafeAreaView } from 'react-native-safe-area-context'
const { height, width } = Dimensions.get('window');
import Styles from '../Style/Styles';
import person from '../../images/person.png'
import Icon from '../../assets/icons/Icon';

export const LiveChat=()=> {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello ',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  return (
    <SafeAreaView>
    <ScrollView>
    <View>
                <View >
                    <TouchableOpacity onPress={() => props.navigation.navigate("Logout")} style={Styles.HeadView}>
                        <Image source={require('../../images/arrowleft.png')} style={Styles.HeadImage}></Image>

                        <Text style={Styles.HeadText} > Vikash Sharma</Text>
                        <Image source={person}/>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={Style.containt}>
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
     <View style={Style.massageview}>
            <TouchableOpacity>
                <Text style={Style.requesttext}>Request</Text>
            </TouchableOpacity>
            <TouchableOpacity>
           <TextInput placeholder='Massage' style={Style.textinput}/>
           <Image source={Icon.sendmassage} style={Style.iconmassage}/>
           </TouchableOpacity>
         </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
};
const Style= StyleSheet.create({
    containt:{
        height:300,marginTop:40
    },
    massageview:{
        flexDirection:'row',
        marginTop:20,justifyContent:'space-around',
        position:'relative',marginBottom:40
        
       },requesttext:{
        borderWidth:1,
        backgroundColor:"black",
        color:'white',paddingLeft:30,borderRadius:10,
        paddingRight:30,paddingTop:8,paddingBottom:8,
        marginTop:2
       
       },
       iconmassage:{
        position:'absolute',
        right:10,resizeMode:'contain',
        top:10,
       },textinput:{
        paddingRight:60,height:height*0.06,borderWidth:1,borderRadius:10,backgroundColor:'#d3d3d3',
        borderColor:'#d3d3d3',width:width*0.57,

       }

})