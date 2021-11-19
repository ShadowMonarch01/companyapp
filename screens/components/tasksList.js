import React,{useState} from 'react';
import {View, Text,TextInput, Button,StyleSheet} from 'react-native';

const ProjectTasks = ({navigation,submitHandler}) =>{
   
    return(
        <View>
            <Text>Projects Screen</Text>
            
        </View>
    );
}

export default ProjectTasks;

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})