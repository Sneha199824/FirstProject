import React,{useEffect} from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { encode as base64encode } from 'base-64';
import axios from 'axios';
export const Home = () => {
    const navigation = useNavigation();
    console.log("navigation>>",navigation)
    const goToScannerScreen = () => {
        navigation.navigate('ScannerScreen')
    }

    const url = 'http://103.83.37.50:2052/FPISANDBOX/WS/ALP%20FPI%20PARTS%20PRIVATE%20LIMITED/Codeunit/WSManagement';
    const username = 'abby.rehman';
    const password = 'I9@yIi=9THV3xq3N=xayOEIkLH8V&Paz@0542';
    const base64Credentials = base64encode(username + ':' + password);
   axios(url, {
        method: 'GET', // or 'POST' if required
        headers: {
          'Authorization': 'Basic ' + base64Credentials,
        },
      })
      .then((response) => {
        console.log("response>>",response)
        if (response.status === 200) {
          // Successfully authenticated and received data
          return response.json(); // or response.text(), etc. depending on the response content type
        } else {
          // Handle authentication error or other HTTP status codes
          console.error('Authentication failed');
        }
      })
      .then((data) => {
        // Handle the response data
        console.log("data>>",data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });


    return (
        <View>
            <Text>This is a Home Screen</Text>
            <Pressable onPress={goToScannerScreen}>
                <Text>
                    Press HERE
                </Text>
            </Pressable>
        </View>
    )
}