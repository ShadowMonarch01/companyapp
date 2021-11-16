import React,{useState} from 'react';
import {View, Text,TextInput, Button,StyleSheet} from 'react-native';

const ProjectScreen = ({navigation,submitHandler}) =>{
    const [text,setText] = useState('');
    const [text1,setText1] = useState('');
    
    

    const changeHandler = (val) =>{
        setText(val);
    }
    const changeHandler1 = (val) =>{
        setText1(val);
    }

    return(
        <View>
            <Text>Projects Screen</Text>
            <TextInput
              style={styles.input}
              placeholder='new tods...'
              onChangeText={changeHandler}
            />
            <TextInput
              style={styles.input}
              placeholder='date'
              onChangeText={changeHandler1}
            />
            
            <Button
             title = "Go to details"
             onPress={() => submitHandler(text1,text)}
            />
        </View>
    );
}

export default ProjectScreen;

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})