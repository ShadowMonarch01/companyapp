import * as React from 'react';
import { Button, View, Text } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('SignUpScreen')}
      />
    </View>
  );
}

export default LoginScreen;