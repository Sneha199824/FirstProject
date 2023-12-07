import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './src/components/SignUp';
import SignIn from './src/components/SignIn';
import ForgotPassword from './src/components/ForgotPassword';
import Privacy from './src/components/Privacy';
import { Home } from './src/components/Home';
import First from './src/components/ImageSliderFirst';
import Otp from './src/components/Otp';
import ImageSliderFirst from './src/components/ImageSliderFirst';
import Profile from './src/components/Profile';
import Campus from './src/components/Campus';
import Fitness from './src/components/Fitness';
import Logout from './src/components/Logout';
import Mywallet from './src/components/Mywallet';
import Mywallet1 from './src/components/Mywallet1';
import Detailed from './src/components/Detailed';
import Detailed1 from './src/components/Detailed1';
import Chat from './src/components/Chat';
import BottomTabNavigator from './src/components/tab';
import Chatscreen from './src/components/Chatscreen';
import Mynetwork from './src/components/Mynetwork';
import Mynetwork1 from './src/components/Mynetwork1';
import Beacon from './src/components/Beacon';
import Mynetwork2 from './src/components/Mynetwork2';
import Beaconrequest from './src/components/Beaconrequest';
import Marketplace from './src/components/Marketplace';
import Marketplace1 from './src/components/Marketplace1';
import Ordersummary from './src/components/Ordersummary';
import Payment from './src/components/Payment';
import Mycart from './src/components/Mycart';
import ResetPassword from './src/components/ResetPassword';
import Setting from './src/components/Setting';
import About from './src/components/About';

import TermsCondtion from './src/components/Terms/TermsCondition';
import PrivacyPolicy from './src/components/Terms/PrivacyPolicy';
import Sell from './src/components/Terms/Sell';
import SellItem from './src/components/Terms/SellItem';
import { SellNow } from './src/components/Terms/SellNow';
import { Profile1 } from './src/components/Terms/Profile1';
import Notification from './src/components/Terms/Notification';
import { ChatScreen1 } from './src/components/Terms/ChatScreen1';
import { LiveChat } from './src/components/Terms/LiveChat';
import { PaymentReuest } from './src/components/Terms/PaymentRequest';
import { demoFetch } from './src/components/API/demoFetch';
import { FetchRequest, fetchRequest } from './src/components/API/fetchRequest';
import { Axios } from 'axios';
import { Axois } from './src/components/API/Axois';
import { AddToCartHeader } from './src/components/redux/AddToCartHeader';


const Stack = createNativeStackNavigator();

function App() {
  return (
  
      <NavigationContainer>
        <Stack.Navigator>


          
          <Stack.Screen name='tab' component={BottomTabNavigator} options={{ headerShown: false }} /> 
          <Stack.Screen name='Notifiaction' component={Notification} options={{ headerShown: false }} />
         
           <Stack.Screen name='PaymentReuest' component={PaymentReuest} options={{ headerShown: false }} /> 
        
          <Stack.Screen name='AddToCartHeader' component={AddToCartHeader} options={{ headerShown: false }} />

          <Stack.Screen name='Axois' component={Axois} options={{ headerShown: false }} />

          <Stack.Screen name='fetchRequest' component={FetchRequest} options={{ headerShown: false }} />

          <Stack.Screen name='SellNow' component={SellNow} options={{ headerShown: false }} />


          <Stack.Screen name='ImageSliderFirst' component={ImageSliderFirst} options={{ headerShown: false }} />


          <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name='Otp' component={Otp} options={{ headerShown: false }} />
          <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
          <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name='CHAT' component={Chat} options={{ headerShown: false }} />

          <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{ headerShown: false }} />
          <Stack.Screen name='Campus' component={Campus} options={{ headerShown: false }} />
          <Stack.Screen name='Logout' component={Logout} options={{ headerShown: false }} />

          <Stack.Screen name='Fitness' component={Fitness} options={{ headerShown: false }} />
          <Stack.Screen name='Mywallet' component={Mywallet} options={{ headerShown: false }} />
          <Stack.Screen name='Mywallet1' component={Mywallet1} options={{ headerShown: false }} />
          <Stack.Screen name='Detailed' component={Detailed} options={{ headerShown: false }} />
          <Stack.Screen name='Detailed1' component={Detailed1} options={{ headerShown: false }} />
          <Stack.Screen name='Mynetwork' component={Mynetwork} options={{ headerShown: false }} />
          <Stack.Screen name='Mynetwork1' component={Mynetwork1} options={{ headerShown: false }} />
          <Stack.Screen name='Beacon' component={Beacon} options={{ headerShown: false }} />
          <Stack.Screen name='Mynetwork2' component={Mynetwork2} options={{ headerShown: false }} />
          <Stack.Screen name='Beaconrequest' component={Beaconrequest} options={{ headerShown: false }} />
          <Stack.Screen name='Marketplace' component={Marketplace} options={{ headerShown: false }} />
          <Stack.Screen name='Ordersummary' component={Ordersummary} options={{ headerShown: false }} />
          <Stack.Screen name='Marketplace1' component={Marketplace1} options={{ headerShown: false }} />
          <Stack.Screen name='Payment' component={Payment} options={{ headerShown: false }} />
          <Stack.Screen name='Mycart' component={Mycart} options={{ headerShown: false }} />
          <Stack.Screen name='ResetPassword' component={ResetPassword} options={{ headerShown: false }} />
          <Stack.Screen name='Setting' component={Setting} options={{ headerShown: false }} />
          <Stack.Screen name='About' component={About} options={{ headerShown: false }} />
          <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} options={{ headerShown: false }} />
          <Stack.Screen name='TermsCondition' component={TermsCondtion} options={{ headerShown: false }} />

          <Stack.Screen name='Sell' component={Sell} options={{ headerShown: false }} />
          <Stack.Screen name='SellItem' component={SellItem} options={{ headerShown: false }} />
          <Stack.Screen name='SaleNow' component={SellNow} options={{ headerShown: false }} />
        
          <Stack.Screen name='Profile1' component={Profile1} options={{ headerShown: false }} />
          {/* <Stack.Screen name='PaymentReuest' component={PaymentReuest} options={{ headerShown: false }} />
         */}
          <Stack.Screen name='ChatScreen1' component={ChatScreen1} options={{ headerShown: false }} />

          <Stack.Screen name='livechat' component={LiveChat} options={{ headerShown: false }} />


        </Stack.Navigator>
      </NavigationContainer>

    
  );
  0
}

export default App;
