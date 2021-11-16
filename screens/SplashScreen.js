import React from 'react';
import {View, Text, Button, StyleSheet, TextInput,Image, TouchableOpacity} from 'react-native';

function SplashScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../onboardAssets/image on screen 5.png')} style={{flex:1}}/>

        <TouchableOpacity
                onPress={() => navigation.navigate('SignInScreen')}
                style={{marginTop:164, backgroundColor:'#ff0000',borderRadius: 10,width:280, height:48}}>
                <Text style={{color:'white', alignSelf:'center', marginTop:12}}>Login With Google</Text>
                <Image source={require('../onboardAssets/icons8-google-48.png')} style={{backgroundColor:'white', marginLeft:235,marginTop:-28, height:42, width:42, borderRadius:10}}/>
              </TouchableOpacity>
              
        <TouchableOpacity
          onPress={() => navigation.navigate('SignInScreen')}
          style={{marginTop:10, backgroundColor:'blue',borderRadius: 10,width:280, height:48}}>
          <Text style={{color:'white', alignSelf:'center', marginTop:12}}>Login With Facebook</Text>
          <Image source={require('../onboardAssets/icons8-facebook-48.png')} style={{backgroundColor:'white', marginLeft:235,marginTop:-28, height:42, width:42, borderRadius:10}}/>
        </TouchableOpacity>
      </View>
    );
  }
  

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});