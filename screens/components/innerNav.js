import React,{useState} from 'react';
import {View, Text,TextInput, Button,StyleSheet,TouchableOpacity} from 'react-native';


const InnerNav = (props) =>{
    
    const handleOnPress = (val) =>{
        props.setState(val);
    }

    return(
      
          // Inner Nav JS
            <View style={{display: 'flex'}}>
<<<<<<< HEAD
             <TouchableOpacity
=======
             <Button 
              style={state === "Docs" ? styles.active : styles.inactive}
>>>>>>> bd73503cc2484dda89f19241ccabf46c3e52d394
              title="Documents"
              onPress={()=> handleOnPress("Docs"),()=>{state === "Docs" ? styles.active : styles.inactive}}
            />  
<<<<<<< HEAD
            <TouchableOpacity
            //state={state === "Pics" ? styles.active : styles.inactive}
            title="Pictures"
              onPress={()=> handleOnPress("Pics"),()=>{state === "Docs" ? styles.active : styles.inactive}}
            />  
            <TouchableOpacity
           // state={state === "Tasks" ? styles.active : styles.inactive}
            title="Tasks"
              onPress={()=> handleOnPress("Tasks"),()=>{state === "Docs" ? styles.active : styles.inactive}}
=======
            <Button
            style={state === "Pics" ? styles.active : styles.inactive}
            title="Pictures"
              onPress={()=> handleOnPress("Pics")}
            />  
            <Button
            style={state === "Tasks" ? styles.active : styles.inactive}
            title="Tasks"
              onPress={()=> handleOnPress("Tasks")}
>>>>>>> bd73503cc2484dda89f19241ccabf46c3e52d394
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
    },
    active:{
        backgroundColor: 'red'
    },
    inactive:{
        backgroundColor: 'transparent'
    }
    active:{
        backgroundColor: red
    }
    inactive:{
        backgroundColor: transparent
    }
})