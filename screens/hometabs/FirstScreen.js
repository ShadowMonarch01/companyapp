import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FHomeScreen from './first/FHomeScreen';
import FAllProjectsScreen from './first/FAllProjectsScreen';
import FProjectDetails from './first/FProjectDetails';



const FirstStack = createStackNavigator();

const FirstScreen = ({navigation}) =>{

    
    
    return(
        <FirstStack.Navigator headerMode='none'>
            <FirstStack.Screen name="Fhome" component={FHomeScreen}/>
            <FirstStack.Screen name="Fproject" component={FAllProjectsScreen}/>
            <FirstStack.Screen name="Fdetails" component={FProjectDetails}/>
        </FirstStack.Navigator>
    );
}

export default FirstScreen;
