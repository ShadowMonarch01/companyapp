import React from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';

import RNFetchBlob from 'react-native-fetch-blob'

const PhotoTab = ({navigation}) =>{
    
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{fontSize:16,marginTop:5}}>Photo Screen</Text>
          <View style={{marginTop:10}}>
          <Button
             title = "Upload photo"
             onPress={() => navigation.navigate('Uscreen')}
            />
          </View>

       </View>
    );
}

export default PhotoTab;