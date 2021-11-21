import React, {useState} from 'react';
import {View, Text, ScrollView,TouchableOpacity,Button} from 'react-native';
import {Agenda} from 'react-native-calendars';
//import ProjectScreen from './ProjectScreen'



const FHomeScreen = ({navigation}) =>{
  
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
    
    <View style={{borderRadius: 6,width:'100%', height:470}}>
    <Agenda
      items={items}
      selected={'2020-11-29'}
      renderItem={renderItem}
     
    />
    </View>
    
    
    <Text style={{marginTop:2}}>Home Screen</Text>
    <View style={{marginTop:10}}>
            <Button
              title = "Go to all projects"
              onPress={() => navigation.navigate('Fproject')}
              />
    </View>
    {/*<ProjectScreen style={{flex:1}}/>*/}
          
          
  </View>
  );
}

export default FHomeScreen;