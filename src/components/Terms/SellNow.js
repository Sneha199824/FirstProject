import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import Styles from '../Style/Styles';
import { Input } from '../common/Input';
import Dropdown1 from '../common/Dropdown1';
import Button from '../constant/Button';
import Icon from '../../assets/icons/Icon';
import { connect } from 'react-redux';
import { Action } from '../../components/redux/Action';
import { bindActionCreators } from 'redux';


const { height, width } = Dimensions.get('window');
export const SellNow = (props) => {
    const [show,setShow]=useState(false);
     const [name,setName]=useState("true");
    const [category,setCategory]=useState([]);
    const [sub,setSub]=useState([]);
    const [price,setPrice]=useState("true");
    const [description,setDescription]=useState("true");
   
   
    return (
        <SafeAreaView>
        <ScrollView>

            <View>
                <View >
                    <TouchableOpacity onPress={() => props.navigation.navigate("Logout")} style={Styles.HeadView}>
                        <Image source={require('../../images/arrowleft.png')} style={Styles.HeadImage}></Image>

                        <Text style={Styles.HeadText} > Sell Now</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={Style.productView}>
            <Text style={Style.producttext}>Product Name</Text>
            <Input  placeholder="Enter Product Name" onChangeText={(text)=>setName(text)}/>
            <Text style={Style.producttext}>Categories</Text>
            <Dropdown1  onChangeText={(text)=>
           
            setCategory(text.label)} placeholder='Choose Category'/>
            <Text style={Style.producttext}>Sub Categories</Text>
            <Dropdown1  onChangeText={(text)=>
            
            setSub(text.label)}  placeholder='Choose Sub Category'/>
            <Text style={Style.producttext}>Price</Text>
            <Input  placeholder="Enter Price"  onChangeText={(text)=>setPrice(text)}/>
            <Text style={Style.producttext}>Description</Text>
            <Input  placeholder="Enter Description"  onChangeText={(text)=>setDescription(text)}/>
            <Text style={Style.producttext}>Add Image</Text>
            <TouchableOpacity style={Styles.button} 
                > 
            <View style={Style.addImageView}>
            <Image source={require('../../images/cloud.png')} style={Style.cloudImage}/>
            <View style={{flexDirection:'row'}}>
                <Image source={Icon.upload}/>
                <Text style={Style.dropText}>Drop Your Image Here</Text>

            </View>
            </View>
            </TouchableOpacity> 
           
            <Button text='sellnow' onPress={()=>setShow(!show)}/>
            </View>
            
            {show? <View><Text>Product Name:{name}</Text>
                <Text>Category:{category}</Text>
                <Text>Subcategory:{sub}</Text>
                <Text>Price:{price}</Text>
                <Text>Description:{description}</Text></View>:null}
            </ScrollView>
            </SafeAreaView>
    )
};
const Style = StyleSheet.create({
    producttext:{
        paddingLeft:15,
        fontFamily:'Roboto-Regular',color:'black'
    },
    productView:{
        marginTop:20
    },addImageView:{
     alignItems:'center',
     borderWidth:1,
     borderColor:'black',
     margin:20,
     marginLeft:60,
     marginRight:60,
     justifyContent:'center',
     height:height*0.35
    },
    cloudImage:{
        height:height*0.3,
        width:width*0.4,
        resizeMode:'stretch',
        marginBottom:0
        
    },
    dropText:{
        paddingLeft:12
    },
    imageContainer: { 
        borderRadius: 8, 
        marginBottom: 16, 
        shadowColor: "#000000", 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.4, 
        shadowRadius: 4, 
        elevation: 5, 
    }, 
    image: { 
        width: 200, 
        height: 200, 
        borderRadius: 8, 
    }, 
    errorText: { 
        color: "red", 
        marginTop: 16, 
    }, 
    button: { 
        backgroundColor: "#007AFF", 
        padding: 10, 
        borderRadius: 8, 
        marginBottom: 16, 
        shadowColor: "#000000", 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.4, 
        shadowRadius: 4, 
        elevation: 5, 
    }, 
});