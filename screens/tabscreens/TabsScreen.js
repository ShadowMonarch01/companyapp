import React from 'react';
import {View, Text, Button,Image,TextInput,StyleSheet} from 'react-native';
//import SendScreen from './screens/uploadscreen/SendScreen';
import DocumentTab from './docs/documenttab';
import TaskTab from './tasktab';
import PhotoTab from './photo/phototab';
import PhotoStaker from './photo/PhotoStaker';
import DocStaker from './docs/DocStaker';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

const TabsScreen = ({navigation}) =>{
    //const [text,setText] = useState('');
    //const [text1,setText1] = useState('');
    //const [showContent,setShowContent] = useState('Docs');

   
    return(
        <View style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
                <Text style={{ borderRadius:10,padding:5,height:50,marginTop:10,marginBottom:10}}>Project details</Text>
            </View>

            <View style={{flex:4}}>
                <Tab.Navigator>
                    <Tab.Screen name="DOCUMENTS" component={DocStaker} />
                    <Tab.Screen name="TASKS" component={TaskTab} />
                    <Tab.Screen name="PHOTOS" component={PhotoStaker} />
                </Tab.Navigator>
            </View>
         
        </View>
    );
}

export default TabsScreen;