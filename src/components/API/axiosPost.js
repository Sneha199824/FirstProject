import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const YourComponent = () => {
  const [postData, setPostData] = useState({
   
    username: '',
    password: '',
  });

  const handlePostRequest = async () => {
    try {
     
      const apiUrl = 'https://example.com/api';

      
      const response = await axios.post(apiUrl, postData);

      
      console.log('Response:', response.data);
      Alert.alert('Success', 'POST request successful!');
    } catch (error) {
    
      console.error('Error:', error.message);
      Alert.alert('Error', 'Something went wrong.');
    }
  };

  return (
    <View>
      
      <TextInput
        placeholder="Username"
        value={postData.username}
        onChangeText={(text) => setPostData({ ...postData, username: text })}
      />
      <TextInput
        placeholder="Password"
        value={postData.password}
        onChangeText={(text) => setPostData({ ...postData, password: text })}
        secureTextEntry
      />

      
      <Button title="Submit" onPress={handlePostRequest} />
    </View>
  );
};

export default YourComponent;
