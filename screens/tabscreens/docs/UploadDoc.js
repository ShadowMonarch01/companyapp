import React,{useState} from 'react';
import {View, Text, Button,PermissionsAndroid,Image,TextInput,StyleSheet} from 'react-native';
import DocumentPicker from 'react-native-document-picker'
import RNFetchBlob from 'react-native-fetch-blob'



const UploadDoc = ({navigation}) =>{
    const [image,setImage] = useState({img:null})
    const [upPdf,setupPdf] = useState({pdf:null})
    const [Id, setId] = useState('');

    const selectFile = async () => {


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
                      type: [DocumentPicker.types.pdf],
                    });

                    const e = res[0].uri
                    setImage({img:e})
                    //converting...

                    const result = await RNFetchBlob.fs.readFile(e,'base64')
                    setupPdf({pdf:result})
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

        if (!Id) {
          alert('Please enter project id');
          return;
        }

        if (!upPdf.pdf) {
          alert('Please Select an image');
          return;
        }
        
        
        fetch('https://rpyendapp.herokuapp.com/pdfupload', {
           method: 'POST',
           headers: {
                //Header Defination
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                id: Id,
                pdf: upPdf.pdf
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
             setupPdf({pdf:null})
             setId('')
             
            //navigation.replace('ElHome');
             alert(response.data,
                {   title: "OK",
                    onPress: navigation.navigate("Dscreen")}).           
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

            
            <TextInput
                style={styles.input}
                //onChangeText={onChangeText}
                onChangeText={(ids) => setId(ids)}
                keyboardType="numeric"
                placeholder="project id"
                value={Id}
               />               
            
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

export default UploadDoc;

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