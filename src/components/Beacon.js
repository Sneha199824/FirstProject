import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import Campus from "./Campus";
import Logout from "./Logout";

const Beacon = (props) => {

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={Styles.headview}>
                    <Text style={Styles.headtext}>Beacon</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate(Campus)}>
                        <Image source={require('../images/arrowleft.png')} style={Styles.arrowleft}></Image>
                    </TouchableOpacity></View>
                <View style={Styles.request}>
                   
                        <Text style={Styles.massege1}> Request</Text>
                   
                    <View>
<TouchableOpacity>
                        <Text style={Styles.request2} >Accepted</Text>
</TouchableOpacity>
                    </View>

                </View>
               <View style={Styles.mainview}>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../images/person.png')}></Image>
                    <Text style={{fontWeight:'bold',paddingTop:18,paddingLeft:5}}>Mohit Nara</Text>
                </View>
                <View style={Styles.viewid} >
                    <View>
                        <Text style={Styles.id}>ID</Text>
                        <Text>CC121</Text>
                    </View>
                    <View>
                        <Text style={Styles.id}>Beacon Name</Text>
                        <Text>Gym Training</Text>
                    </View>
                    <View>
                        <Text style={Styles.id}>Start Date</Text>
                        <Text>10/03/2023</Text>
                    </View>

                </View>
               <Text style={{padding:10,fontWeight:'500',fontSize:18}}>Description</Text>
               <Text style={Styles.texthi}>Hi,I want Gym Training</Text>
               <View  style={Styles.viewid1}>
                <TouchableOpacity><Text style={Styles.decline}>Decline</Text></TouchableOpacity>
                <TouchableOpacity><Text style={Styles.Accept}>Accept</Text></TouchableOpacity>
               </View>
               </View>
               <View style={Styles.mainview}>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../images/person.png')}></Image>
                    <Text style={{fontWeight:'bold',paddingTop:18,paddingLeft:5}}>Mohit Nara</Text>
                </View>
                <View style={Styles.viewid} >
                    <View>
                        <Text style={Styles.id}>ID</Text>
                        <Text>CC121</Text>
                    </View>
                    <View>
                        <Text style={Styles.id}>Beacon Name</Text>
                        <Text>Gym Training</Text>
                    </View>
                    <View>
                        <Text style={Styles.id}>Start Date</Text>
                        <Text>10/03/2023</Text>
                    </View>

                </View>
               <Text style={{padding:10,fontWeight:'500',fontSize:18}}>Description</Text>
               <Text style={Styles.texthi}>Hi,I want Gym Training</Text>
               <View  style={Styles.viewid1}>
                <TouchableOpacity><Text style={Styles.decline}>Decline</Text></TouchableOpacity>
                <TouchableOpacity><Text style={Styles.Accept}>Accept</Text></TouchableOpacity>
               </View>
               </View>
               <View style={Styles.mainview}>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../images/person.png')}></Image>
                    <Text style={{fontWeight:'bold',paddingTop:18,paddingLeft:5}}>Mohit Nara</Text>
                </View>
                <View style={Styles.viewid} >
                    <View>
                        <Text style={Styles.id}>ID</Text>
                        <Text>CC121</Text>
                    </View>
                    <View>
                        <Text style={Styles.id}>Beacon Name</Text>
                        <Text>Gym Training</Text>
                    </View>
                    <View>
                        <Text style={Styles.id}>Start Date</Text>
                        <Text>10/03/2023</Text>
                    </View>

                </View>
               <Text style={{padding:10,fontWeight:'500',fontSize:18}}>Description</Text>
               <Text style={Styles.texthi}>Hi,I want Gym Training</Text>
               <View  style={Styles.viewid1}>
                <TouchableOpacity><Text style={Styles.decline}>Decline</Text></TouchableOpacity>
                <TouchableOpacity><Text style={Styles.Accept}>Accept</Text></TouchableOpacity>
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
        height: 55,
        textAlign: 'center',
        color: 'white',
        borderBottomWidth: 1,
        borderColor: 'orange',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginTop: 1,
        marginBottom: 15
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
       
        textAlign: 'center',
        paddingTop: 7,
        fontWeight: 'bold',
        marginLeft:12
    },
    request: {
        flexDirection: 'row',
        height: 40,
        width: 330,
        borderRadius: 5,
        textAlign: 'center',
        marginLeft: 10,
        marginBottom: 3
    },

    request2: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        height: 38,
        width: 160, borderRadius: 5,
        paddingTop: 7,
        marginTop: 1,
        fontWeight: 'bold',
        borderColor: '#d1cebd',
        textAlign: 'center',
        
    },
    
    imageperson: {
        height: 60,
        width: 60,
        resizeMode: 'stretch',
        margin: 5
    },
    viewid:
    {flexDirection:'row',
    justifyContent:'space-around',
    borderBottomWidth:1,
    paddingBottom:5,
    borderColor:'#d1cdcd',
},
viewid1:{
    flexDirection:'row',
    
},
decline:{
    borderWidth:1,
    borderColor:'#d1cdcd',
    backgroundColor:'#d1cdcd',
    width:130,
    height:30,
    textAlign:'center',
    paddingTop:4,
    borderRadius:7,
    marginLeft:10,
    marginTop:10,
    marginBottom:15
},
Accept:{
    width:130,
    height:30,
    textAlign:'center',
    paddingTop:4,
    borderRadius:7,
    borderWidth:1,
    borderColor:'black',
    backgroundColor:'black',
    color:'white',
    marginLeft:45,
    marginTop:10,
    marginBottom:15
},
texthi:{
    borderWidth:1,
    borderColor:'#ebe8e8',
    backgroundColor:'#ebe8e8',
    height:40,
    padding:10,
    borderRadius:5
   
},
mainview:{
    borderWidth:1,
    margin:15,borderColor:'white',backgroundColor:'white',borderRadius:10,
    elevation:8,
    marginBottom:1
},
id:{
    fontWeight:'bold'
}
});
export default Beacon;