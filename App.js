/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import OnboardingScreen from './screens/OnboardingScreen'
import HomeScreen from './screens/HomeScreen'
import ProjectScreen from './screens/ProjectScreen'
import SignUpScreen from './screens/SignUpScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from './screens/SplashScreen';
import SignInScreen from './screens/SignInScreen';
import SetPasswordScreen from './screens/SetPasswordScreen';
import ForgotPassword from './screens/ForgotPasswordScreen';

const AppStack = createStackNavigator();
//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProjectStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#00BFFF'
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title:'Overview'
    }}/>
  </HomeStack.Navigator>
);


const ProjectStackScreen = ({navigation}) => (
  <ProjectStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#00BFFF'
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }}>
    <ProjectStack.Screen name="Project" component={ProjectScreen} options={{
      title:'Overview'
    }}/>
  </ProjectStack.Navigator>
);



const Mill = () => {
  return(
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Project" component={ProjectStackScreen} />
      </Drawer.Navigator>
  );
}

const Mulla = () => {
  return(
    <RootStack.Navigator headerMode='none'>
      <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
      <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
      <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
      <RootStack.Screen name="ForgotPassword" component={ForgotPassword}/>
      <RootStack.Screen name="SetPasswordScreen" component={SetPasswordScreen}/>
      <RootStack.Screen name="ElHome" component={Mill}/>
    </RootStack.Navigator>
  );
}


const Metab = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
     AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else{
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if(isFirstLaunch == null){
    return null;
  } else if(isFirstLaunch == true){
    return(
     
        
      <AppStack.Navigator
        headerMode="none">
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AppStack.Screen name="Root" component={Mulla} />

      </AppStack.Navigator>

     
    
    );
  } else {
    return <Mulla/>
  }

}




function App (){
  return(
    <NavigationContainer>
    <Metab/>
  </NavigationContainer>
  );
  
  
}

export default App;
