import React,{useState} from 'react';
import {View, Text,TextInput, Button,StyleSheet} from 'react-native';


const InnerNav = (props) =>{
    
    const handleOnPress = (val) =>{
        props.setState(val);
    }

    return(
      
          // Inner Nav JS
            <View>
             <Button 
              title="Documents"
              onPress={()=> handleOnPress("Docs")}
            />  
            <Button
            title="Documents"
              onPress={()=> handleOnPress("Tasks")}
            />  
            <Button
            title="Documents"
              onPress={()=> handleOnPress("Tasks")}
            />
            <TouchableOpacity>
              <Image/>
            </TouchableOpacity>  
            </View>    
    );
}

export default InnerNav;

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})