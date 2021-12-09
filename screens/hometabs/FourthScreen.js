import React,{useContext} from 'react';
import {View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { AuthContext } from '../../theauth/context';

const FourthScreen = ({navigation}) =>{
    
   const {signOut} = useContext(AuthContext)

    const handleExit = async () =>{
        try{
            await AsyncStorage.clear()
            AsyncStorage.setItem('alreadyLaunched', 'true');
            //AsyncStorage.setItem('token','false')
            //navigation.navigate('SignInScreen')
            signOut()
        } catch (eer) {
            console.log(eer)
        }
        
    }
    
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {/* <Text>Fourth home tab screen</Text> */}

          <TouchableOpacity
              style ={{marginTop:40,backgroundColor:"#00BFFF",borderRadius: 6,padding:5}}
              onPress={handleExit}
              >
              <Text style={{fontSize:20}}>Exit</Text>
          </TouchableOpacity>
       </View>
    );
}

export default FourthScreen;