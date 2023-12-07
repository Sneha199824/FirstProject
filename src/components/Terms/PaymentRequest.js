import React,{useState} from "react";
import { View,Text,Image,StyleSheet,Dimensions,TouchableOpacity } from "react-native";
import person from '../../images/person.png'
import whitearrow from '../../images/whitearrow.png'
import Icon from "../../assets/icons/Icon";
import threedots1 from "../../images/threedots1.png"
import rightwhitearrow from '../../images/rightwhitearrow.png'
import { TextInput } from "react-native-paper";
import { ChatScreen1 } from "./ChatScreen1";
const { height, width } = Dimensions.get('window');
 export const PaymentReuest=(props)=>{
  const[show,setShow]=useState(false);
  const[value,setValue]=useState('');
      return(
        <View>
        <View style={Style.headerView}>
        <TouchableOpacity onPress={()=>props.navigation.navigate("ChatScreen1")}>
        <Image source={Icon.crossicon} style={Style.crossicon}/>
        </TouchableOpacity>
        <Image source={threedots1} style={Style.threedotImage}/>
        </View>
        <View style={Style.personView}>
            <Image source={person}  style={Style.personImage}/>
            <Text  style={Style.requestText}>Reuesting from Vikash Sharma</Text>
            <View style={{flexDirection:'row'}}>
            <Text  style={Style.$Text}>$</Text><TextInput placeholder="0" onChangeText={(text)=>setValue(text)}
             style={Style.input}></TextInput>
            </View>
            <Text style={Style.addText}>Add a Service Name</Text>
            <TouchableOpacity onPress={()=>setShow(!show)}>
            {!show?
            <Image source={rightwhitearrow} style={Style.whitearrowimage}/>
            :null}
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate(ChatScreen1)}>
            <View style={{marginTop:230}}>
            {show? <Text style={Style.reuestedButton}>Requested ${value}</Text>:null}
            </View>
            </TouchableOpacity>
            
        </View>
        </View>
      )
}
const Style = StyleSheet.create({
  headerView:{
    display:'flex',
    marginBottom:20,flexDirection:'row',
    marginTop:10
  },
  threedotImage:{
    height:height*0.07,
    width:width*0.07,
    marginLeft:290
  },
  crossicon:{
    marginLeft:20,marginTop:10
  },
  personView:{
    alignItems:'center',justifyContent:'center',
    marginTop:80,
  },
  requestText:{
    color:'black',paddingTop:10
  },
  $Text:{
    fontSize:35,
    color:"black",paddingTop:25
  },
  addText:{
    color:"black",
    borderWidth:1,padding:5,borderRadius:7,
    fontSize:10,marginTop:30,
    backgroundColor:'#dcdedc',
    borderColor:'#dcdedc'
  },
  whitearrowimage:{
    height:height*0.05,
    width:width*0.16,
    marginLeft:270,
    resizeMode:'contain',
    borderWidth:1,borderColor:'black',
    backgroundColor:'black',
    borderRadius:6,marginTop:50,
    
  },
  input:{
    backgroundColor:"#faf7f5",fontSize:26,
    height:30,marginTop:30,textAlign:'center',paddingTop:5,
    
  },
  reuestedButton:{
    borderWidth:1,backgroundColor:'black',
    color:'white',textAlign:'center',paddingLeft:120,paddingRight:120,
    fontSize:15,
    paddingTop:4,paddingBottom:6,margin:15,borderRadius:10
  }
})
