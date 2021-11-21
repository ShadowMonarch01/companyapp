import React,{useState} from 'react';
import DocumentPicker from "react-native-document-picker"
import {View, Text,TextInput, Button,StyleSheet} from 'react-native';


const ProjectScreen = ({navigation}) =>{
  const [text,setText] = useState('');
  const [details,setDetails] = useState('');
  
  const handleProjectUpload = () => {

    if (!text) {
      alert('Please enter project name');
      return;
    }

    if (!details) {
      alert('Please enter project details');
      return;
    }
    
    
    fetch('https://rpyendapp.herokuapp.com/newproject', {
       method: 'POST',
       headers: {
            //Header Defination
            'Accept':'application/json',
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            name: text,
            details: details
        })
    })
    .then((response) => response.json())
        .then((response) => {
            //Hide Loader
            //setLoading(false);
            console.log(response);
            // If server response message same as Data Matched
            if (response.status === 'success') {
            //AsyncStorage.setItem('user_id', responseJson.data.email);
             console.log(response.info);
             setText('')
             setDetails('')
             //setId('')
           
             
            //navigation.replace('ElHome');
             alert(response.status)           
             return;
            } else {
            setErrortext(response.msg);
            console.log('An error occured try again');
            }
        })
        .catch((error) => {
            //Hide Loader
            setLoading(false);
            console.error(error);
        });
        
    }
 // const { data, isFetching } = useGetProjectsQuery();
// Replcae with Loader later 
// if (isFetching) return <Loading />;
//if (isFetching) return "Hi";
  return(
    <View style={{ flex: 1, backgroundColor:'#FFFFFF' }}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize:24,marginTop:5}}>Create New Project</Text>
        <TextInput style={{height: 40,marginTop:20,margin: 12,borderWidth: 0,borderBottomWidth:1,borderBottomColor:'#a9a9a9',padding: 10,width:300}}
         placeholder="Enter Project Name"
         value={text}
         onChangeText={(ids) => setText(ids)}
         ></TextInput>

        <TextInput
          multiline
          numberOfLines={10}
          style={{margin: 12,borderWidth: 1,width:300}}
          onChangeText={(ls) => setDetails(ls)}
          value={details}
          placeholder="Enter Project details"
        />
        <View style={{marginTop:10}}>
        <Button
           title = "Create Project"
           onPress={handleProjectUpload}
          />
        </View>
      </View>
    </View>
  );
}

export default ProjectScreen;
