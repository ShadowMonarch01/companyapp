import React ,{useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput,TouchableOpacity ,SafeAreaView,Image} from 'react-native';

function SignInScreen({navigation}) {
  //const [text, onChangeText] = React.useState("Useless Text");
  //const [number, onChangeNumber] = React.useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');


  const handleSubmitPress = () => {
    setErrortext('');
    if (!email) {
      alert('Please fill Email');
      return;
    }
    if (!password) {
      alert('Please fill Password');
      return;
    }
    //setLoading(true);
    var dataToSend = {
      email: email,
      password: password,
    };

    fetch('https://rpyendapp.herokuapp.com/login', {
      method: 'POST',
      headers: {
        //Header Defination
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password
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
          console.log(response.email);
          navigation.replace('ElHome');
        } else {
          setErrortext(response.msg);
          console.log('Please check your email id or password');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };



    return (
      <View style={{ flex: -11, alignItems: 'center', justifyContent: 'center'}}>
          <View style ={{alignSelf:'stretch',height:226, backgroundColor:'#00BFFF'}}>
          
          <Text style={{fontWeight:'bold',fontSize:50, fontFamily:'Cochin' ,alignSelf:'center',marginTop:50, color:'white'}}>SPEKTRE <Text style={{fontSize:35}}>TASK</Text></Text>
          <Text style={{alignSelf:'center', marginTop:20, fontSize:24,color:'white'}}>Welcome Back!</Text>
            

          </View>
          <View style={{backgroundColor:'#FFFFFF',width:'88%', position:'relative',marginTop: -35,borderRadius: 10, shadowColor:"#000", shadowOffset:{width:0,height:3}, shadowOpacity:0.27,shadowRadius:4.65,elevation:6}}>
                
               
                  
              <TextInput
                style={styles.input}
                //onChangeText={onChangeText}
                onChangeText={(Email) => setEmail(Email)}
                //value={number}
                placeholder="Email Address"
               />
              

              <TextInput
                style={styles.input}
                //onChangeText={onChangeNumber}
                //value={number}
                onChangeText={(Password) => setPassword(Password)}
                placeholder="Password"
              />

              <Text  onPress={() => navigation.navigate('ForgotPassword')} style={{marginLeft:210, color:'#0000ff',fontSize:12}}> Forgot Password</Text>
              <TouchableOpacity
                onPress={ handleSubmitPress /*() => navigation.navigate('ElHome')*/}
                style={styles.roundButton1}>
                <Image source={require('../onboardAssets/icons8-right-64.png')} style={{ marginLeft:3,marginTop:1, height:42, width:42, borderRadius:10}}/>
              </TouchableOpacity>
              
        </View>
        <TouchableOpacity
                onPress={() => navigation.navigate('SignUpScreen')}
                style={{marginTop:164, backgroundColor:'#ff0000',borderRadius: 10,width:280, height:48}}>
                <Text style={{color:'white', alignSelf:'center', marginTop:12}}>Login With Google</Text>
                <Image source={require('../onboardAssets/icons8-google-48.png')} style={{backgroundColor:'white', marginLeft:235,marginTop:-28, height:42, width:42, borderRadius:10}}/>
              </TouchableOpacity>
              
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUpScreen')}
          style={{marginTop:10, backgroundColor:'blue',borderRadius: 10,width:280, height:48}}>
          <Text style={{color:'white', alignSelf:'center', marginTop:12}}>Login With Facebook</Text>
          <Image source={require('../onboardAssets/icons8-facebook-48.png')} style={{backgroundColor:'white', marginLeft:235,marginTop:-28, height:42, width:42, borderRadius:10}}/>
        </TouchableOpacity>
        
        <Text style={{marginTop:30}}>Don't have an account?<Text  onPress={() => navigation.navigate('SignUpScreen')} style={{color:'#87ceeb'}}> Sign up</Text></Text>
        
        
      </View>
    );
  }
  

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
      height: 40,
      marginTop:20,
      margin: 12,
      borderWidth: 0,
      borderBottomWidth:1,
      borderBottomColor:'#a9a9a9',
      padding: 10,
      
    },
    roundButton1: {
      width: 65,
      height: 65,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: '#00BFFF',
      position:'relative',
      marginBottom:-34,
      alignSelf:'center',
      borderWidth:7,
      borderColor:'#FFFFFF',
    },
});