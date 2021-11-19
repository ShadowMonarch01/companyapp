import React,{useState} from 'react';
import DocumentPicker from "react-native-document-picker"
import {View, Text,TextInput, Button,StyleSheet} from 'react-native';
import InnerNav from "./components/innerNav"
import ProjectDocs from "./components/doclist"
import ProjectPics from "./components/photoGrid"
import ProjectTasks from "./components/taskslist"


const ProjectScreen = ({navigation,submitHandler}) =>{
    const [text,setText] = useState('');
    const [text1,setText1] = useState('');
    const [showContent,setShowContent] = useState('Docs');
    
    const convertToBase64 = (image = false) => {
      try {
        // Include type definition
        if (image) {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.images]
            allowMultiSelection: false})
        } else {

        const res = await DocumentPicker.pick({allowMultiSelection: true})
        }

      if (res.uri) {
        let base64 = null;
        let fileReader = new FileReader()
        fileReader.onload = function(e) {
          // body...
          base64 = e.target.result
        }
        fileReader.readAsDataURL(res.uri)
        return base64;
      }
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          // Picker was cancelled
        }
      }
    }

  
    return(
        <View>
            <View>
            <Text>Top stauff</Text>
        </View>
          <View>
          // Inner Nav JS
            <InnerNav state={innerNav} setState={setInnerNav}/>

            // Show Selection
            {
              showContent === "Tasks" ? (<ProjectTasks/>) : showContent === "Pics" ? (<ProjectPics/>) :  (<ProjectDocs/>)
            }

            // Upload button
            {
              showContent === "Tasks" ? (
                  <Button
              onPress={()=>{
                console.log("dd")
              }}
              title="Add Task"
            /> 
                ) : showContent === "Pics" ? (
                  <Button
              onPress={()=>{
                
                convertToBase64(true)
              }}
              title="Upload"
            /> 
                ) :  (

            <Button
              onPress={()=>{
                convertToBase64()
              }}
              title="Upload"
            /> 
                )
            }
          </View>
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