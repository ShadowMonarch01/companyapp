import React,{useState} from 'react';
import {View, Text, Button,PermissionsAndroid,Image,TextInput,StyleSheet,Alert} from 'react-native';
import DocumentPicker from 'react-native-document-picker'
import RNFetchBlob from 'react-native-fetch-blob'



const UploadPhoto = ({route,navigation}) =>{
    
    const {ids} = route.params;

    const [image,setImage] = useState({img:null})
    const [upimage,setupImage] = useState({img:null})
    const [Id, setId] = useState('');
    const [errortext, setErrortext] = useState('');

    const selectFile = async () => {
          setId(ids)

        try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                'title': 'Example App',
                'message': 'Example App access to your location '
              }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                try {
                    const res = await DocumentPicker.pick({
                      type: [DocumentPicker.types.images],
                    });

                    const e = res[0].uri
                    setImage({img:e})
                    //converting...

                    const result = await RNFetchBlob.fs.readFile(e,'base64')
                    
                    setupImage({img:result})
                     console.log('URI : ' + result);
                    
                    console.log(
                     e,
                     JSON.stringify(res)
                    )
                  } catch (err) {
                    if (DocumentPicker.isCancel(err)) {
                      // User cancelled the picker, exit any dialogs or menus and move on
                    } else {
                      throw err
                    }
                  }
            } else {
              console.log("location permission denied")
              alert("Location permission denied");
            }
          } catch (err) {
            console.warn(err)
          }
  
    }

    //SEND SCREEN

    const handleUpload = () => {
      {/*
        if (!Id) {
          alert('Please enter project id');
          return;
        }
      */}

        if (!upimage.img) {
          alert('Please Select an image');
          return;
        }
        
        
        fetch('https://rpyendapp.herokuapp.com/uploadimage', {
           method: 'POST',
           headers: {
                //Header Defination
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                "id": Id,
                "image": upimage.img
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
             setImage({img:null})
             setupImage({img:null})
             setId('')
             
            navigation.navigate('Pscreen');
            alert(response.status,
                {   title: "OK",
                    onPress: navigation.navigate("Pscreen")})           
             return;
            } else {
            setErrortext(response.data);
            console.log('An error occured try again');
            }
        })
        .catch((error) => {
            //Hide Loader
            //setLoading(false);
            console.error(error);
        });
        
    }



    //SEND SCREEN

    return(
        <View style={{flex:1}}>
            <Text style={{marginBottom:10}}>Selection Screen</Text>

            <Image
            source={{
              uri: image.img,
            }}
            style={{height: 250,
                width: 250,
                resizeMode: 'stretch',}}
          />

            
           {/* <TextInput
                style={styles.input}
                //onChangeText={onChangeText}
                onChangeText={(ids) => setId(ids)}
                keyboardType="numeric"
                placeholder="project id"
                value={Id}
               />               
           */}
           
            <Button
             title = "Pick image"
             onPress={selectFile}
             
            />

            <Button
             
             title = "Upload image"
             onPress={handleUpload}
            />
        </View>
    );
}

export default UploadPhoto;

const styles = StyleSheet.create({
    
    input: {
      height: 40,
      marginTop:20,
      margin: 12,
      borderWidth: 0,
      borderBottomWidth:1,
      borderBottomColor:'#a9a9a9',
      padding: 10,
      
    },
   
});