import React from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';

const DocumentTab = ({route,navigation,name}) =>{
    
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:16,marginTop:5}}>Document Screen {name}</Text>
        <View style={{marginTop:10}}>
        <Button
           title = "Upload Document"
           onPress={() => navigation.navigate('Dupscreen')}
          />
        </View>

     </View>
    );
}

export default DocumentTab;