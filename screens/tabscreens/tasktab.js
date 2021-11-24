import React,{useState} from 'react';
import {View, Text,StyleSheet} from 'react-native';

const TaskTab = ({navigation,name}) =>{
    
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Task Screen {name}</Text>
       </View>
    );
}

export default TaskTab;