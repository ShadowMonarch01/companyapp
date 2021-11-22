import React, {useState, useEffect} from 'react';
import {View, Text,StyleSheet} from 'react-native';

const AllProjectsScreen = ({navigation}) =>{

     	const [projects, setProjects] = useState([])

     	useEffect(()=> {

	      fetch('https://rpyendapp.herokuapp.com/getprojects')
	      .then((response) => response.json())
	      .then((response) => {
	         setProjects(response.data)
	      })
	      .catch((error) => {
	          console.error(error);
	      });
    
     	},[])

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