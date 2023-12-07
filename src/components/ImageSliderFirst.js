import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper'

import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
const Data =[
  {
    image:require('../images/mirror2.png'),
    title:'Get paid for helping your classmates',
    text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  },
  {
    image:require('../images/mirror2.png'),
    title:'Get paid for helping your classmates',
    text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  },
  {
    image:require('../images/mirror2.png'),
    title:'Get paid for helping your classmates',
    text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  },
  {
    image:require('../images/mirror2.png'),
    title:'Get paid for helping your classmates',
    text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  },
]

const ImageSliderFirst = (props) => {
  return (

<ScrollView style={{backgroundColor:'white'}}>
<SafeAreaView>
    <Swiper  activeDot={<View style={{backgroundColor:'orange', width: 8, height: 8,borderRadius: 4,marginVertical:20 }} />} >
    {
      Data.map((Item)=>

      <View style={styles.slide}>
        <Image
          source={Item.image}
          style={styles.image}
        /><View style={styles.viewbox}>
        <Text style={styles.headtext}>{Item.title}</Text>
        <Text style={styles.text1}>{Item.text}</Text>
        </View>
      </View>
      )
    }
</Swiper>
    <TouchableOpacity style={styles.container} onPress={()=> props.navigation.navigate('SignUp')} >
            <Text style={styles.text}>Get started</Text>
        </TouchableOpacity>
        </SafeAreaView>
</ScrollView>

  );
};

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: 'black',
    padding: 10,
    marginLeft:20,
    marginRight:20,
    marginBottom:40,
   
    width: '90%',
    borderRadius: 8,
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    
  },
  image: {
    width: 120,
    height: 250,
    resizeMode: 'stretch',
    marginTop:100


  },
  headtext: {
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 15
    },
    text1: {
  
  
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingLeft: 30,
      paddingRight: 20,
  
      fontSize: 13
    },
    viewbox:{
      marginTop:50,
    }
  
});
export default ImageSliderFirst;