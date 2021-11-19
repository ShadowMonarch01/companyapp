import React,{useState} from 'react';
import {View, FlatList, Text,TextInput, Button,StyleSheet} from 'react-native';

const ProjectDocs = (props) =>{


    return(
        <View>
            <Text>Projects Screen</Text>
     
            <FlatList
                data={[
                {key: 'Devin'},
                {key: 'Dan'},
                {key: 'Dominic'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
            {/* <Button
             title = "Go to details"
             onPress={() => submitHandler(text1,text)}
            /> */}
        </View>
    );
}

export default ProjectDocs;

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})