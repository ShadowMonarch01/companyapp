import React,{useState} from 'react';
import {View, Text,TextInput, Button,StyleSheet} from 'react-native';


const InnerNav = (props) =>{
    
    const handleOnPress = (val) =>{
        props.setState(val);
    }

    return(
      
          // Inner Nav JS
            <View style={{display: 'flex'}}>
             <Button 
              style={state === "Docs" ? styles.active : styles.inactive}
              title="Documents"
              onPress={()=> handleOnPress("Docs")}
            />  
            <Button
            style={state === "Pics" ? styles.active : styles.inactive}
            title="Pictures"
              onPress={()=> handleOnPress("Pics")}
            />  
            <Button
            style={state === "Tasks" ? styles.active : styles.inactive}
            title="Tasks"
              onPress={()=> handleOnPress("Tasks")}
            />
           {/* <TouchableOpacity>
                          <Image/>
                        </TouchableOpacity>*/ } 
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
    active:{
        backgroundColor: red
    }
    inactive:{
        backgroundColor: transparent
    }
})