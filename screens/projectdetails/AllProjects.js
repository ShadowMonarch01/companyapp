import React, {useState, useEffect, useCallback} from 'react';
import {View, Text,StyleSheet} from 'react-native';

// For OPTION 2
// import { useIsFocused } from "@react-navigation/native"

const AllProjectsScreen = ({navigation}) =>{

     	const [projects, setProjects] = useState([]);

       useFocusEffect(
        useCallback(()={
              const getData = () =>{

                fetch('https://rpyendapp.herokuapp.com/getprojects')
                .then((response) => response.json())
                .then((response) => {
                   setProjects(response.data)
                })
                .catch((error) => {
                    console.error(error);
                });
              }
            
            
          })
        )
     
      // OPTION 2 = THIS USES REACT NAVIGATION useIsFocused
      // let isFocused = useIsFocused();
      // useEffect(()=> {
      //       fetch('https://rpyendapp.herokuapp.com/getprojects')
      //       .then((response) => response.json())
      //       .then((response) => {
      //          setProjects(response.data)
      //       })
      //       .catch((error) => {
      //           console.error(error);
      //       });

      // },[isFocused])


      // OPTION 3 = THIS USES REACT NAVIGATION focus event
     	// useEffect(()=> {
      //     const getData = navigation.addListener("focus", ()=>{

      //       fetch('https://rpyendapp.herokuapp.com/getprojects')
      //       .then((response) => response.json())
      //       .then((response) => {
      //          setProjects(response.data)
      //       })
      //       .catch((error) => {
      //           console.error(error);
      //       });
      //     })
          
      //     return getData;
     	// },[navigation])

     

       const ListItem = ({props) => {
          <View>
            <Text>{props.name}</Text>
            <Text>{props.details}</Text>
          </View> 
      }


      const renderItem = ({item}) => {
          <ListItem name={item.name} details={item.details}/>
      }


    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>All Projects</Text>
          <FlatList
            data={projects}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
       </View>
    );
}

export default AllProjectsScreen;