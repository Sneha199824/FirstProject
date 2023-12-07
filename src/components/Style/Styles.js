import React from 'react';
import { StyleSheet,Dimensions } from 'react-native';
const {height,width}=Dimensions.get('window');

const Styles = StyleSheet.create({
    HeadView: {
    flexDirection:'row',
        backgroundColor: '#ffa500',
        borderBottomWidth: 1,
        borderColor: 'orange',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginTop: 1,
        
    },
    HeadText: {
        padding:20,
      fontSize:18,
     color:'white',
      fontFamily:'Roboto-Bold'
    },
    // HeadImageView: {

    //   height:height*0.1,
    //   width:width*0.1,
    // },
    HeadImage:{
        height:20,
        width:30,
       marginTop:24,
       marginLeft:20
    },
     dotView:{
      flexDirection:'row',
      
      
     },
     textImageView:{
        flexDirection:'row',
        width:"70%",
       
       
       },
       gymImage:{
        height:height*0.22,
        width:width*0.2,
        resizeMode:'contain',
        borderWidth:1,
        borderRadius:10,
        marginLeft:5
        
       },
      
       
       
       mainTextImgeView:{
       
        backgroundColor:'white',
        height:height*0.22,
        borderWidth:1,
        borderRadius:10,
        marginLeft:20,
      marginRight:10,
        borderWidth:1,
        marginTop:10,borderColor:'#dfebe5',
        shadowColor: '#dfebe5',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 2,
       },
       dot1:{
        height:13,
        width:13,
        borderWidth:1,
        borderRadius:9,
        borderColor:'#dce0dd',backgroundColor:'#dce0dd',marginTop:10,marginLeft:10,
       },
       dot2:{
        height:6,
        width:6,
        borderWidth:1,
        borderRadius:9,
        marginLeft:205,marginTop:10,
        borderColor:'#dce0dd',backgroundColor:'#dce0dd'

       },
       dot3:{
        height:10,
        width:10,
        borderWidth:1,
        borderRadius:9,
        marginBottom:10,marginLeft:20,marginTop:5,
        borderColor:'#dce0dd',backgroundColor:'#dce0dd'
       },
       dot4:{
        height:10,
        width:10,
        borderWidth:1,
        borderRadius:9,
        marginLeft:195,marginBottom:20,
        borderColor:'#dce0dd',backgroundColor:'#dce0dd',
       },
       boundryText:{
        fontFamily:'Roboto-Regular',
        fontSize:10,color:'black',
        paddingLeft:10,
        paddingTop:8
        
       },
       titleText:{
       fontFamily:'Roboto-Bold',
       fontSize:28,color:'black',
       paddingLeft:10,
       paddingTop:8
       },
       emailText:{
        fontFamily:'Roboto-Regular',
        fontSize:10,color:'black',
        paddingLeft:10,
        paddingRight:49,paddingTop:10
       },
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
});
export default Styles;