import React, {useState,useEffect} from 'react';
import {View, Text, ScrollView,TouchableOpacity,Button} from 'react-native';
import {Agenda} from 'react-native-calendars';
//import ProjectScreen from './ProjectScreen'
import { useIsFocused } from '@react-navigation/native';



const FHomeScreen = ({navigation}) =>{
  
  const [items, setItems] = useState({
    '2021-12-03': [{name:'aaca'},{name:'aaca'}],
    //'2020-11-29': [{name:'bbbb'},{name:'cccc'}],
  });
  
  
  
  
  
  let isFocused = useIsFocused();

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


  useEffect(()=> {
    
      
  //setProjects([])

  getAllData();
    //onRefresh()

    
  },[isFocused])

  const getAllData =()=>{
  fetch('https://rpyendapp.herokuapp.com/getagendas')
  .then((response) => response.json())
  .then((response) => {
      setItems(response.info)
    // setRefreshing(false)
    
  })
  .catch((error) => {
      console.error(error);
  });
  };

 

  
   
  const renderItem = (item) => {

    return(
      <TouchableOpacity>
        <View style={{flexDirection:'row', justifyContent: 'space-between',alignItems:'center', backgroundColor:'#FFFFFF',borderRadius:10,padding:5,marginTop:10,marginBottom:10}}>
             <View style={{padding:5}}>
                <Text>Project:{item.kr}</Text>
                <Text>Task:{item.name}</Text>
                <Text>Start time:{item.fyjrd}</Text>
                <Text>Stop time:{item.sto}</Text>
                <Text>Done by:{item.dfgae}</Text>
              </View>
        </View>
      </TouchableOpacity>
    )

  }


  return(
  <View style={{flex: 1}}>
    
    <View style={{borderRadius: 6,width:'100%', height:470}}>
    <Agenda
      items={items}
      selected={'2021-12-08'}
      renderItem={renderItem}
     
    />
    </View>
    
    
    {/* <Text style={{marginTop:2}}>Home Screen</Text> */}
    {/* <View style={{marginTop:10}}>
            <Button
              title = "Go to all projects"
              onPress={() => navigation.navigate('Fproject')}
              />
    </View> */}
    {/*<ProjectScreen style={{flex:1}}/>*/}
     <TouchableOpacity
        onPress={() => navigation.navigate('Fproject')}
        style={{marginTop:26, backgroundColor:'#00BFFF',borderRadius: 10,width:280, height:48,alignSelf:'center'}}>
        <Text style={{color:'white', alignSelf:'center', marginTop:12}}>GO TO ALL PROJECTS</Text>
      </TouchableOpacity>
          
          
  </View>
  );
}

export default FHomeScreen;