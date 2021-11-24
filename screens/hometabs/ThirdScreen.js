import React,{useState} from 'react';
import {View, Text,StyleSheet,Modal,TouchableOpacity,Alert,ActivityIndicator} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const ThirdScreen = ({navigation}) =>{

    const [sta,setSta]= useState({isVis:false})


    // initial state
    const state = {
        isVisible: false
    };

    // hide show modal
    // hide show modal
   const displayModal=(show)=>{
    setSta({isVis: show})
  }
    
    
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Third home tab screen</Text>

          <View style = { styles.container }>
              
        <Modal
            animationType = {"fade"}
            transparent={true}
            visible={sta.isVis}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>

             <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                 <View style={{width:'40%',height:'20%',backgroundColor:'white',borderRadius:20, alignItems: 'center', justifyContent: 'center'}}>
                 <ActivityIndicator size="large" color="#0000ff"  />
                    
                 <Text 
                        style={styles.closeText}
                        onPress={() => {
                        setSta({isVis: false})}}>Close Modal</Text>
                  </View>          
              </View>
          </Modal>
                        

                        {/*
          <Spinner
          //visibility of Overlay Loading Spinner
          visible={sta.isVis}
          //Text with the Spinner
          textContent={'Loading...'}
          //Text style of the Spinner Text
          textStyle={{color: '#FFF'}}
        />
                        */}
          <TouchableOpacity
              style={styles.button}
              onPress={() => {displayModal(true);
              }}>
              <Text style={styles.buttonText}>Show Modal</Text>
          </TouchableOpacity>          
        </View>
       </View>
    );
}

export default ThirdScreen;

const styles = StyleSheet.create({
    container: {
      padding: 25,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      display: 'flex',
      height: 60,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#2AC062',
      shadowColor: '#2AC062',
      shadowOpacity: 0.5,
      shadowOffset: { 
        height: 10, 
        width: 0 
      },
      shadowRadius: 25,
    },
    closeButton: {
      display: 'flex',
      height: 60,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FF3974',
      shadowColor: '#2AC062',
      shadowOpacity: 0.5,
      shadowOffset: { 
        height: 10, 
        width: 0 
      },
      shadowRadius: 25,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 22,
    },
    
    text: {
      fontSize: 24,
      marginBottom: 30,
      padding: 40,
    },
    closeText: {
      fontSize: 24,
      color: '#00479e',
      textAlign: 'center',
    }
  });