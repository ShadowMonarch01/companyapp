import React from 'react';
import {View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const FourthScreen = ({navigation}) =>{

    const handleExit = async () =>{
        try{
            await AsyncStorage.clear()
            navigation.navigate('SignInScreen')
        } catch (eer) {
            console.log(eer)
        }
        
    }
    
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Fourth home tab screen</Text>

          <TouchableOpacity
              style ={{marginTop:40,backgroundColor:'#2AC062',borderRadius: 6,padding:5}}
              onPress={handleExit}
              >
              <Text style={{fontSize:20}}>Exit</Text>
          </TouchableOpacity>
       </View>
    );
}

export default FourthScreen;