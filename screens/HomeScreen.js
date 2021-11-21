import React, {useState} from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {View, Text, ScrollView,TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';
import FirstScreen from './hometabs/FirstScreen'
import SecondScreen from './hometabs/SecondScreen'
import ThirdScreen from './hometabs/ThirdScreen'
import FourthScreen from './hometabs/FourthScreen'



const HTab = createBottomTabNavigator();


const HomeScreen = ({navigation}) =>{
  
  


  return(
    <View style={{flex:1}}>
      <HTab.Navigator>
          <HTab.Screen name="HOMEC" component={FirstScreen} />
          <HTab.Screen name="AGENDAC" component={SecondScreen} />
          <HTab.Screen name="PROFILEC" component={ThirdScreen} />
          <HTab.Screen name="SETTINGSC" component={FourthScreen} />
      </HTab.Navigator>
    </View>
  );
}

export default HomeScreen;