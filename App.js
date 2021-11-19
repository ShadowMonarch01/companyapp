/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState, useEffect } from 'react';
import {View, Text,Image} from 'react-native';
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
import SendScreen from './screens/uploadscreen/SendScreen';

import LinearGradient from 'react-native-linear-gradient';

const AppStack = createStackNavigator();
//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProjectStack = createStackNavigator();
const SendStack = createStackNavigator();


//Home screen to navigate between screens
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

//Project screen to navigate between screens
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

// Removed for now screen where file picker was implemented
 const SendStackScreen = ({navigation}) => (
  <SendStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#00BFFF'
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }}>
    <SendStack.Screen name="Send" component={SendScreen} options={{
      title:'Send Data'
    }}/>
  </SendStack.Navigator>
); 


//Drawer navigation for home and project screen
// <Drawer.Screen name="SendS" component={SendStackScreen} /> ~ Removed from implimentation for now
const Mill = () => {
  return(
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="HomeS" component={HomeStackScreen} />
        <Drawer.Screen name="ProjectS" component={ProjectStackScreen} />
        <Drawer.Screen name="SendS" component={SendStackScreen} />
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
//Welcome screens that show only when the user first installs the app
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
     
       //Starting with welcome screens 
      <AppStack.Navigator
        headerMode="none">
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AppStack.Screen name="Root" component={Mulla} />

      </AppStack.Navigator>

     
    
    );
  } else {
    //Starting without welcome screens
    return <Mulla/>
  }

}




function App (){

//Splash Screen lasts only 2 Seconds
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);

  //Splash screen implementation would be changed in time Currently takes to longer than it should to load

  return splash ? 
  (
   <LinearGradient colors={['#d1f4ff', '#85e0ff', '#38cdff']} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
   <Image source={require('./onboardAssets/image_29.png')} style={{alignSelf:'center'}}/>
   
   </LinearGradient>
  ) : (
    <NavigationContainer>
    <Metab/>
  </NavigationContainer>
  );

 
  
}

export default App;
