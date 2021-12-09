import React , {useState,useEffect} from 'react';
import {View, Text,StyleSheet, ScrollView,TouchableOpacity,Button} from 'react-native';
import {Agenda} from 'react-native-calendars';
import { useIsFocused } from '@react-navigation/native';

const SecondScreen = ({navigation}) =>{

    const [items, setItems] = useState({
        '2021-12-03': [{name:'aaca'},{name:'aaca'}],
        //'2020-11-29': [{name:'bbbb'},{name:'cccc'}],
      });
      
   
      
      let isFocused = useIsFocused();

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
        <View style={{ flex: 1 }}>
          
        <Agenda
        items={items}
        selected={'2021-12-08'}
        renderItem={renderItem}
        
        />
    
       </View>
    );
}

export default SecondScreen;