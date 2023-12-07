import React, { useState } from 'react';
  import { StyleSheet, Text, View,Image } from 'react-native';
  
  import { Dropdown } from 'react-native-element-dropdown';
import Icon from '../../assets/icons/Icon';
  
  const data = [
    { label: 'Gen', value: '1' },
    { label: 'SC', value: '2' },
    { label: 'BC', value: '3' },
    { label: 'Other', value: '4' },
   
  ];

  const Dropdown1 = ({placeholder, onChangeText,value,onChange}) => {
   
    

    return (
      <View style={styles.container}>
        
        <Dropdown
          style={styles.dropdown }
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={placeholder}
          searchPlaceholder="Search..."
          value={value}
          
          onChange={onChangeText}
         
          
         
          renderRightIcon={() => (
            <Image source={Icon.down}
              style={styles.icon}
              
            />
          )}
        />
      </View>
    );
  };
 
  export default Dropdown1;

  const styles = StyleSheet.create({
    container: {
     
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: 'black',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left:20,
     
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 14,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      
    },
  });