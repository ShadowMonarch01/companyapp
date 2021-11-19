import React ,{useState}from 'react';
import {View, Text, Button, StyleSheet, TextInput,TouchableOpacity ,SafeAreaView,Image} from 'react-native';

// Register here and use the login screen to navigate to home

function SignUpScreen({navigation}) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistraionSuccess,  setIsRegistraionSuccess] = useState(false);
  const [errortext, setErrortext] = useState('');

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) {
      alert('Please fill Name');
      return;
    }
    if (!email) {
      alert('Please fill Email');
      return;
    }
    if (!password) {
      alert('Please fill Password');
      return;
    }
    //Show Loader
    //setLoading(true);
    var dataToSend = {
      name: userName,
      email: email,
      password: password,
    };
    

    fetch('https://rpyendapp.herokuapp.com/register', {
      method: 'POST',
      headers: {
        //Header Defination
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        name: userName,
        password: password,
        email: email
      })
    })
      .then((response) => response.json())
      .then((response) => {
        //Hide Loader
        //setLoading(false);
        console.log(response);
        // If server response message same as Data Matched
        if (response.status === 'success') {
          setIsRegistraionSuccess(true);
          console.log(
            'Registration Successful. Please Login to proceed'
          );
        } else {
          setErrortext(respons.error);
        }
      })
      .catch((error) => {
        //Hide Loader
        //setLoading(false);
        console.error(error);
      });
  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        
        <Text style={{alignSelf:'center',marginBottom:20}} >
          Registration Successful
        </Text>
        <TouchableOpacity
          //style={}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={{alignSelf:'center', fontSize:26}} >Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }

    return (
      <View style={{ flex: -11, alignItems: 'center', justifyContent: 'center'}}>
          <View style ={{alignSelf:'stretch',height:226, backgroundColor:'#00BFFF'}}>
          
          <Text style={{fontWeight:'bold',fontSize:50, fontFamily:'Cochin' ,alignSelf:'center',marginTop:50, color:'white'}}>SPEKTRE <Text style={{fontSize:35}}>TASK</Text></Text>
          <Text style={{alignSelf:'center', marginTop:20, fontSize:24,color:'white'}}>Welcome to Spekre</Text>
            

          </View>
          <View style={{backgroundColor:'#FFFFFF',width:'88%', position:'relative',marginTop: -35,borderRadius: 10,shadowColor:"#000", shadowOffset:{width:0,height:3}, shadowOpacity:0.27,shadowRadius:4.65,elevation:6}}>
                
               
                  
              <TextInput
                style={styles.input}
                onChangeText={(UserName) => setUserName(UserName)}
                placeholder="User name"
                //value={text}
               />
              <TextInput
                style={styles.input}
                onChangeText={(Email) => setEmail(Email)}
                //value={number}
                placeholder="Email Address"
                //keyboardType="numeric"
              />

              <TextInput
                style={styles.input}
                onChangeText={(Password) => setPassword(Password)}
                //value={number}
                placeholder="Password"
                //keyboardType="numeric"
              />

              <TouchableOpacity
                onPress={handleSubmitButton}
                style={styles.roundButton1}>
                <Image source={require('../onboardAssets/icons8-right-64.png')} style={{ marginLeft:3,marginTop:1, height:42, width:42, borderRadius:10}}/>
              </TouchableOpacity>
        </View>
        <TouchableOpacity
                onPress={() => navigation.navigate('SignInScreen')}
                style={{marginTop:84, backgroundColor:'#ff0000',borderRadius: 10,width:280, height:48}}>
                <Text style={{color:'white', alignSelf:'center', marginTop:12}}>Login With Google</Text>
                <Image source={require('../onboardAssets/icons8-google-48.png')} style={{backgroundColor:'white', marginLeft:235,marginTop:-28, height:42, width:42, borderRadius:10}}/>
              </TouchableOpacity>
              
        <TouchableOpacity
          onPress={() => navigation.navigate('SignInScreen')}
          style={{marginTop:10, backgroundColor:'blue',borderRadius: 10,width:280, height:48}}>
          <Text style={{color:'white', alignSelf:'center', marginTop:12}}>Login With Facebook</Text>
          <Image source={require('../onboardAssets/icons8-facebook-48.png')} style={{backgroundColor:'white', marginLeft:235,marginTop:-28, height:42, width:42, borderRadius:10}}/>
        </TouchableOpacity>
        
        <Text style={{marginTop:30}}>You have an accoutn?<Text  onPress={() => navigation.navigate('SignInScreen')}  style={{color:'#87ceeb'}}> Sign in</Text></Text>
        
        
      </View>
    );
  }
  

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
      height: 40,
      marginTop:16,
      marginBottom:6,
      margin: 12,
      borderWidth: 0,
      borderBottomWidth:1,
      borderBottomColor:'#a9a9a9',
      padding: 10,
      
    },
    roundButton1: {
      marginTop:20,
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