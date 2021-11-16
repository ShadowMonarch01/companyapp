import React, {useState} from 'react';
import {View, Text, ScrollView,TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';
import ProjectScreen from './ProjectScreen'



const HomeScreen = ({navigation}) =>{
  
  const [items, setItems] = useState({
    '2020-11-29': [{name:'aaca'},{name:'aaca'}],
  });

 

  const submitHandler = (keys,text) =>{
     
    setItems((prevKeys) =>{
      //const n1 =keys
      var temp = {...prevKeys}

      
     
      if(keys in temp){
      temp[keys].push({name:text})
      
      return temp
      }
      
      else
        temp[keys]= [{name:text}]
        return temp
    })
   }
  const renderItem = (item) => {

    return(
      <TouchableOpacity>
        <View style={{flexDirection:'row', justifyContent: 'space-between',alignItems:'center', backgroundColor:'#FFFFFF',borderRadius:10,padding:5,height:50,marginTop:10,marginBottom:10}}>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )

  }


  return(
  <View style={{flex: 1}}>
    
    <View style={{borderRadius: 10,width:'100%', height:500}}>
    <Agenda
      items={items}
      selected={'2020-11-29'}
      renderItem={renderItem}
     
    />
    </View>
    <ProjectScreen submitHandler={submitHandler}/>
    
  <Text style={{marginTop:100}}>Home Screen</Text>

  <TouchableOpacity
          //onPress={() => navigation.navigate('SignUpScreen')}
          style={{borderRadius:50,marginTop:100, backgroundColor:'blue',borderRadius: 10,width:280, height:48}}>
          <Text style={{color:'white', alignSelf:'center', marginTop:12}}>Login With Facebook</Text>
        </TouchableOpacity>

        
        
          
  </View>
  );
}

export default HomeScreen;