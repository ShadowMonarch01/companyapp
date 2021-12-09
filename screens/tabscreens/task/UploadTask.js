import React,{useState} from 'react';
import {View, Text, Button,PermissionsAndroid,Image,TextInput,StyleSheet,Alert,TouchableOpacity} from 'react-native';



const UploadTask = ({route,navigation}) =>{

    const {ids} = route.params;
   
    const [Id, setId] = useState(ids);
    const [text,setText] = useState('');


    const handleUpload = () => {
        setId(ids)
        {/*
          if (!Id) {
            alert('Please enter project id');
            return;
          }
        */}
  
          if (!text) {
            alert('Please Enter a Task');
            return;
          }
          
          
          fetch('https://rpyendapp.herokuapp.com/taskupload', {
             method: 'POST',
             headers: {
                  //Header Defination
                  'Accept':'application/json',
                  'Content-Type':'application/json',
              },
              body: JSON.stringify({
                  "id": Id,
                  "task": text
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
               console.log(response.data);
               setText('')
               setId('')
               
              navigation.navigate('Tscreen');
              alert(response.status,
                  {   title: "OK",
                      onPress: navigation.navigate("Tscreen")})           
               return;
              } 
          })
          .catch((error) => {
              //Hide Loader
              //setLoading(false);
              console.error(error);
          });
          
      }


    return(
        <View style={{flex:1}}>
            <Text style={{fontSize:24,color:"#000000",alignSelf:'center'}}>Post Task</Text>
            <View style={{alignItems:'center',marginTop:100}}>
                <TextInput 
                  style={{borderWidth: 0,borderBottomWidth:1,width:"60%",borderBottomColor:'#a9a9a9',color:"#000000"}}
                  onChangeText={(ids) => setText(ids)}
                  placeholder="Enter task"
                  placeholderTextColor="#C0C0C0"
                />
            </View>
            <View style={{flexDirection:'column',width:200,alignSelf:'center',justifyContent:'space-between',marginTop:25}}>
            <Button
             
             title = "Post task"
             color= "#00BFFF"
             onPress={handleUpload}
            />
            </View>
        </View>
    );
}
export default UploadTask;