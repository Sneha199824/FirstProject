import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Campus from './Campus';
import Chat from './Chat';

import {Image} from 'react-native';
import Icon from '../assets/icons/Icon';
import Marketplace1 from './Marketplace1';
import Beacon from './Beacon';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
     <Tab.Screen
    name="Campus"
    component={Campus}
    options={{
      tabBarLabel: 'Home',
      
      tabBarIcon: ({ color, size }) => (
       
        
        <Image source={Icon.home}/>
     
      ),
    }}
    
     
  />
      <Tab.Screen name="Chat" component={Chat}  options={{
      tabBarLabel: 'Chat',
      tabBarIcon: ({ color, size }) => (
        <Image source={Icon.comment}/>
        
      ),
    }} screenOptions={{ tabBarStyle:{
      backgroundColor:'black',
      height:100,
    },
    tabBarItemStyle:{
     backgroundColor:'black',
      margin:5,
      borderRadius:10,
    }}} 
     />
     <Tab.Screen name="Beacon" component={Beacon}  options={{
      tabBarLabel: 'Beacon',
      tabBarIcon: ({ color, size }) => (
        <Image source={Icon.add}/>
        
      ),
    }} 
    screenOptions={{ tabBarStyle:{
      backgroundColor:'black',
      height:100,
    },
    tabBarItemStyle:{
     
      margin:5,
      borderRadius:10,
    }}} 
    />
     <Tab.Screen name="Marketplace1" component={Marketplace1}  options={{
      tabBarLabel: 'MarketePlace',
      tabBarIcon: ({ color, size }) => (
        <Image source={Icon.box}/>
        
      ),
    }} screenOptions={{ tabBarStyle:{
      backgroundColor:'black',
      height:100,
    },
    tabBarItemStyle:{
     
      margin:5,
      borderRadius:10,
    }}} 
     />
     <Tab.Screen name="campus" component={Campus}  options={{
      tabBarLabel: 'History',
      tabBarIcon: ({ color, size }) => (
        <Image source={Icon.time}/>
        
      ),
    }}  screenOptions={{ tabBarStyle:{
      backgroundColor:'black',
      height:100,
    },
    tabBarItemStyle:{
     
      margin:5,
      borderRadius:10,
    }}}  />
     
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
