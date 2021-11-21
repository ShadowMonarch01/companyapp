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

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>All Projects</Text>
          {projects.map(item => <Text>{item.name}</Text>)}
       </View>
    );
}

export default AllProjectsScreen;