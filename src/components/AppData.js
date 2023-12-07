import React, { useState,Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput, Text, View, Button, Image, FlatList, SectionList, Alert, StyleSheet, ScrollView } from 'react-native';
import AppData from './src/components/AppData'
import Update from './src/components/Update';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Student from './src/components/Student';
const App = () => {
  let name = "GEETA SANGWAN";
  const [Name, setName] = useState("");
  

  return (
    <SafeAreaView>
      <ScrollView>

        <Text style={{ backgroundColor: 'black', height: 20 }}></Text>
        <Text style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 22, backgroundColor: 'orange', color: 'white', padding: 10 }}>  Home  </Text>
          <Text style={{ fontSize: 22, backgroundColor: 'orange', color: 'white', padding: 10 }}>  About  </Text>
          <Text style={{ fontSize: 22, backgroundColor: 'orange', color: 'white', padding: 10 }}>  Services  </Text>
          <Text style={{ fontSize: 22, backgroundColor: 'orange', color: 'white', padding: 10 }}>  Contact </Text>

        </Text>
        <Text style={{ textAlign: 'center', fontSize: 20, backgroundColor: 'lightblue' }}>Handle text input</Text>
        <Text>   Your Name Is {Name}:</Text>
        <TextInput style={{ borderWidth: 2, fontSize: 15, marginTop: 10, height: 40, width: 200, marginLeft: 10, marginBottom: 20 }} placeholder='Enter Your Name'
          onChangeText={(text) => setName(text)} value={Name}

        />
        <Button title='Clear' onPress={() => setName('')}></Button>

        <AppData />

        <Button title='press' color={'red'} onPress={() => Alert.alert("Welcome on the page")}></Button>
        <Update />
        <User name={name} age={15} />
      </ScrollView>
    </SafeAreaView>
  )
};
const User = (props) => {
  
  
 
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [display, setDisplay] = useState("false")
  
  const EditData = () => {
    setDisplay("false");
    setEmail("");
    setPassword("");
    setName("");
  }
  const toggleShowPassword = () => {
    togglesetShowPassword(!showPassword);
  };
  
  const users = [
 
    {
      id: 1,
      name: "G"
    },
    {
      id: 2,
      name: "K"
    },
    {
      id: 3,
      name: "M"
    },
    {
      id: 1,
      name: "H"
    },
    {
      id: 2,
      name: "S"
    }


  ]
  const user1 = [
    {
      id: 1,
      name: "A",
      Email: "abc@gmail.com"
    },
    {
      id: 1,
      name: "B",
      Email: "abc@gmail.com"
    },
    {
      id: 1,
      name: "C",
      Email: "abc@gmail.com"
    }
  ]
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.textBox}>PROPS</Text>
        <Text style={styles.textBox1}>Name: {props.name}</Text>
        <Text style={styles.textBox1}>Age:  {props.age}</Text>
        <Text style={styles.textBox}></Text>

        <Text style={{ textAlign: 'center', padding: 10, backgroundColor: 'lightgreen', fontSize: 20 }}> Form With State</Text>
        <TextInput style={{ borderWidth: 2, margin: 7 }} placeholder='  Name' value={name} onChangeText={(text) => setName(text)} />
        <TextInput style={{ borderWidth: 2, margin: 7 }} placeholder='  Email' value={email} onChangeText={(text) => setEmail(text)} />

        <TextInput style={{ borderWidth: 2, margin: 7 }} placeholder='  Password' value={password} secureTextEntry={!showPassword} onChangeText={setPassword}
        />
        <MaterialCommunityIcons
          name={showPassword ? 'eye-off' : 'eye'}
          size={24}
          color={'blue'}
          onPress={toggleShowPassword}
        />

        <Button title='submit' color={'green'} onPress={() => setDisplay(true)}></Button><Button title='edit' onPress={EditData}></Button>
        <View>
          {
            display ?
              <View>
                <Text style={{ fontSize: 20, paddingLeft: 10 }}>{name}</Text>
                <Text style={{ fontSize: 20, paddingLeft: 10 }}>{email}</Text>
                <Text style={{ fontSize: 20, paddingLeft: 10 }}>{password}</Text>
              </View>
              : null
          }
        </View>
        <Text style={{ backgroundColor: 'orange', color: 'white', fontSize: 20, textAlign: 'center' }}>FlatList</Text>
        <FlatList data={users}
          renderItem={({ item }) => <Text style={{ fontSize: 20, paddingLeft: 15, backgroundColor: 'blue', borderWidth: 2, margin: 5, color: 'white' }}>{item.name}</Text>}

          keyExtractor={item => item.id}

        ></FlatList>
        <Text style={{ fontSize: 15, backgroundColor: 'gray', textAlign: 'center', color: 'white' }}> Flat list with map</Text>
        {
          users.map((item) => <Text style={{ fontSize: 15, borderWidth: 2, margin: 8, color: 'red', paddingLeft: 10, borderColor: 'blue' }}>{item.name}</Text>)

        }
        <Text style={{ textAlign: 'center', borderWidth: 4, borderColor: 'pink', backgroundColor: 'lightyellow', fontSize: 20 }}>static  Grid</Text>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginLeft: 10 }}>

          <Text style={styles.textBox2}>  1</Text>
          <Text style={styles.textBox2}>  2</Text>
          <Text style={styles.textBox2}>  3</Text>
          <Text style={styles.textBox2}>  4</Text>
          <Text style={styles.textBox2}>  5</Text>
          <Text style={styles.textBox2}>  6</Text>
          <Text style={styles.textBox2}>  7</Text>
          <Text style={styles.textBox2}>  8</Text>
          <Text style={styles.textBox2}>  9</Text>
          <Text style={styles.textBox2}>  10</Text>
          <Text style={styles.textBox2}>  11</Text>
          <Text style={styles.textBox2}>  12</Text>
          <Text style={styles.textBox2}>  13</Text>
          <Text style={styles.textBox2}>  14</Text>
        </View>
        <Text style={{ textAlign: 'center', borderWidth: 4, borderColor: 'pink', backgroundColor: 'yellow', fontSize: 20 }}> Dynamic Grid</Text>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginLeft: 10 }}>
          {
            users.map((key) => <Text style={styles.key}>{key.name}</Text>)

          }
        </View>
         <View>
{
      user1.map((item)=><View style={styles.viewBox}>
        <Text style={styles.item1}>{item.name}</Text>
        <Text style={styles.item1}>{item.Email}</Text>
      </View>)
    }
  </View> 
    <Text style={{ fontSize: 20, backgroundColor: 'green ', color: "white", textAlign: 'center' }}>Component in loop with flatlist</Text>
        <View  style={styles.viewBox1}>
          
          <FlatList data={user1}
            renderItem={({ item }) => <UserData item={item} />} />
        </View> 
        <Text style={{fontSize:25, textAlign:'center',borderColor:'yellow',borderWidth:5, margin:5, color:'green'}}> props and state in class component</Text>
        
        <Student />
      </ScrollView>
    </SafeAreaView>

  )
};
 {/* class Student1 extends Component{ */}
//    constructor(){
//     super();
//   this.state={
//     name:"Sneha"
//   }
//    }
//    updateName(val){
//     this.setState({name:val})
//    }
//     render(){
//         return(
//             <View>
//             <Text  style={{fontSize:20, color:'red', padding:15, }}>{ this.state.name}</Text>
//                 <TextInput placeholder='Class component' style={{borderWidth:1, fontSize:20, margin:10,borderColor:'green'}}></TextInput>
//                 <Button title='press' onPress={(text)=> this.state.name(text)}></Button>
//                 <Student name={this.state.name}  />
//             </View>

//         )
//     }
// };
//export default Student1;
const UserData = (props) => {
  const item = props.item;
  return (
    <View>
      <Text style={styles.item3}>{item.name}</Text>
      <Text style={styles.item3}>{item.Email}</Text>
    </View>

  );

};



const styles = StyleSheet.create({
  textBox: {
    backgroundColor: 'yellow',
    textAlign: 'center',
  },
  textBox1: {
    textAlign: 'center'
  },
  textBox2: {
    fontSize: 25,
    backgroundColor: 'lightblue',
    borderWidth: 5,
    borderColor: 'pink',
    margin: 5,
    padding: 10
  },
  item: {
    fontSize: 25,
    backgroundColor: 'red',
    borderWidth: 5,

    margin: 5,
    padding: 10
  },
  item1: {
    fontSize: 20,
    color: 'blue',
    flex: 1,
    margin: 2,
    backgroundColor: 'pink', textAlign: 'center'
  },
  viewBox: {
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  item3:{
    fontSize: 20,
    color: 'blue',
    flex: 1,
    margin: 2,
    backgroundColor: 'pink', textAlign: 'center'
  },
  
})
export default App;

