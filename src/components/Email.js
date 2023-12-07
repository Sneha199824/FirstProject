import React, { useState, Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Linking } from 'react-native';
const Email=()=>{

    return(
        <View>
             <TextInput  placeholder='NAME'   />
            
            <TextInput  placeholder='Password' ></TextInput>
        </View>
    )
}
export default Email;