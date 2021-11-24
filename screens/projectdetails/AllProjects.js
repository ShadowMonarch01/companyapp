import React, {useState, useEffect} from 'react';
import {View, Text,StyleSheet,FlatList,TouchableOpacity,Image} from 'react-native';

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
    
     	})

       

      const renderItem = ({item}) => {
        return(
          <TouchableOpacity
            onPress={() => navigation.navigate('Fdetails',{name:item.id, details:item.details })}
          >
              <View style={{flexDirection:'column', justifyContent: 'space-between', backgroundColor:'#FFFFFF',borderRadius:10,padding:18,marginTop:10,marginBottom:10}}>
                 <View style={{flexDirection:'row'}}>
                    <Image
                      style={{height: 40,
                          width: 40,
                          margin: 12,borderWidth: 1,backgroundColor:'blue'}}
                    />
                    <View style={{flexDirection:'column'}}>
                        <Text style={{marginTop:8}}>{item.name}</Text>
                        <Text style={{marginTop:6}}>Dropped by...</Text>
                     </View>
                 </View>
                <Text>{item.details}</Text>
              </View>
        </TouchableOpacity>
        )
      }


    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>All Projects</Text>
          <FlatList
            data={projects}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          <View></View>
       </View>
    );
}

export default AllProjectsScreen;