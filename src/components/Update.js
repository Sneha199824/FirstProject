import React,{useState,useEffect} from 'react';
import{Button, Text, View} from 'react-native'
const Update=()=>{
    const[data,setData]=useState(100);
  const[count,setCount]=useState(0);

    useEffect(()=>{},    [count]);
    const[name, setName]= useState("   Sneha");
    function testName(){
        setName("jakhar")
    }
    return(
        <View>
            <Text style={{ textAlign:'center', fontSize:20, color:'green'}}>{ name}</Text>
            <Button title='update' onPress={testName}></Button>
            
        
        <Text style={{fontSize:25,paddingLeft:30,borderWidth:3, color:'red'}}>USE EFFECTS AS COMPONENTDIDUPDATE</Text>
        <Text style={{textAlign:'center', fontSize:20}}>componentDidUpdate- :{count}</Text>
        <Button title='update count' onPress={()=>setCount(count+1)}></Button>
        <Text style={{textAlign:'center',fontSize:20}}>{data}</Text>
        <Button title='update data' onPress={()=> setData(data-1)}></Button>
        </View>
    )
}
export default Update;