import * as React from 'react';
import { useState } from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {View, Text, ScrollView,TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';
import FirstScreen from './hometabs/FirstScreen'
import SecondScreen from './hometabs/SecondScreen'
import ThirdScreen from './hometabs/ThirdScreen'
import FourthScreen from './hometabs/FourthScreen'
import  Icon  from 'react-native-vector-icons/Ionicons';



const HTab = createBottomTabNavigator();


const HomeScreen = ({navigation}) =>{
  
  const [name, setName] = useState('ibdib')
  


  return(
    <View style={{flex:1}}>
      <HTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HOMEC') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'AGENDAC') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            }  else if (route.name === 'PROFILEC') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            } else if (route.name === 'SETTINGSC') {
              iconName = focused ? 'ios-power' : 'ios-power-outline';
            } 

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
          <HTab.Screen name="HOMEC" component={FirstScreen} />
          <HTab.Screen name="AGENDAC" component={SecondScreen} />
          <HTab.Screen name="PROFILEC" children={(props)=> <ThirdScreen {...props} name={name}/>}/>
          <HTab.Screen name="SETTINGSC" component={FourthScreen} />
      </HTab.Navigator>
    </View>
  );
}

export default HomeScreen;