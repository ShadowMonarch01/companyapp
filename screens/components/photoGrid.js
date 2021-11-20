import React,{useState} from 'react';
import {View, Image, Text,TextInput, Button,StyleSheet} from 'react-native';

const ProjectPics = (props) =>{


    return(
        <View>
            <Text>Picutees Screen</Text>
            
            { /*<Image
                            source={require('../ims2.png')}
                            />
                            <Image
                            source={require('../ims2.png')}
                            />
                            <Image
                            source={require('../ims2.png')}
                            /> */ }
            {/* <Button
             title = "Go to details"
             onPress={() => submitHandler(text1,text)}
            /> */}
        </View>
    );
}

export default ProjectPics;

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})