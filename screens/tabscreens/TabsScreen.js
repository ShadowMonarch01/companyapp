import React ,{useState}from 'react';
import {View, Text, Button,Image,TextInput,StyleSheet} from 'react-native';
//import SendScreen from './screens/uploadscreen/SendScreen';
import DocumentTab from './docs/documenttab';
import TaskTab from './tasktab';
import PhotoTab from './photo/phototab';
import PhotoStaker from './photo/PhotoStaker';
import DocStaker from './docs/DocStaker';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

const TabsScreen = ({route,navigation}) =>{
    //const [text,setText] = useState('');
    //const [text1,setText1] = useState('');
    //const [showContent,setShowContent] = useState('Docs');
    const {name,details} = route.params;

   
    return(
        <View style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'#FFFFFF'}}>
               {/* <View>
                    <Text style={{ borderRadius:10,padding:5,height:50,marginTop:10,marginBottom:10}}>Project details</Text>
                    <Text>ll:{name}</Text>
               </View> */}

            <View style={{flexDirection:'column', justifyContent: 'space-between', backgroundColor:'green',borderRadius:10,padding:10,marginTop:1,marginBottom:10}}>
                 <View style={{flexDirection:'row'}}>
                    <Image
                      style={{height: 40,
                          width: 40,
                          margin: 12,borderWidth: 1,backgroundColor:'blue'}}
                    />
                    <View style={{flexDirection:'column'}}>
                        <Text style={{marginTop:8}}>{name}</Text>
                        <Text style={{marginTop:3}}>Sub project</Text>
                        <Text style={{marginTop:3}}>Location</Text>
                        <Text style={{marginTop:3}}>Duration</Text>
                        
                     </View>
                 </View>
                
              </View>
                <Button
             title = "Back to project"
             onPress={() => navigation.navigate('Fproject')}
            />
            </View>

            <View style={{flex:4}}>
                <Tab.Navigator>
                    <Tab.Screen name="DOCUMENTS" children={(props)=> <DocStaker {...props} name={name}/>}/>
                    <Tab.Screen name="TASKS" children={(props)=> <TaskTab {...props} name={name}/>}/>
                    <Tab.Screen name="PHOTOS" children={(props)=> <PhotoStaker {...props} name={name}/>}/>
                </Tab.Navigator>
            </View>
         
        </View>
    );
}

export default TabsScreen;