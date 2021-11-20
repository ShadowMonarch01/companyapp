import React from 'react';
import {View, Text, Button,Image,TextInput,StyleSheet} from 'react-native';
import PhotoTab from './phototab';
import UploadPhoto from './UploadPhoto';
import { createStackNavigator } from '@react-navigation/stack';


const PStack = createStackNavigator();

const PhotoStaker = ({navigation}) =>{
    
    return(
        <View style={{ flex: 1}}>
            <PStack.Navigator headerMode='none'>
                <PStack.Screen name="Pscreen" component={PhotoTab}/>
                <PStack.Screen name="Uscreen" component={UploadPhoto}/>
            </PStack.Navigator>
       </View>
    );
}

export default PhotoStaker;


