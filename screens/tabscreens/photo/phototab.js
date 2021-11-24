import React,{useState,useEffect} from 'react';
import {View, Text,StyleSheet,Button,FlatList,TouchableOpacity,Image} from 'react-native';

const PhotoTab = ({route,navigation,name}) =>{
  
  const [id,setId] = useState(name)

  const [projects, setProjects] = useState([])

  

  useEffect(()=>{
     //setId(name)
     
     fetch('https://rpyendapp.herokuapp.com/getprojectimgs',{
          method: 'POST',
          headers: {
               //Header Defination
               'Accept':'application/json',
               'Content-Type':'application/json',
           },
           body: JSON.stringify({
               "id":id
           })
       })
	      .then((response) => response.json())
	      .then((response) => {
	         setProjects(response.data)
	      })
	      .catch((error) => {
	          console.error(error);
	      });

  },[id])

  const renderItem = ({item}) => {
    var tss ='data:image/png;base64,'
    var oss = tss.concat(item.images)
   return(
     <TouchableOpacity
       //onPress={() => navigate('Fdetails')}
     >
         <View style={{flexDirection:'column', justifyContent: 'space-between', backgroundColor:'#FFFFFF',borderRadius:10,padding:18,marginTop:10,marginBottom:10}}>
               <Image  
                 source={{uri: oss}}
                 style={{height: 80,
                     width: 80,
                     margin: 12,borderWidth: 1}}
               />
         </View>
   </TouchableOpacity>
   )
 }

 //()=>{setId(name)}
return(
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text>All Projects{id}</Text>
     <FlatList
       data={projects}
       renderItem={renderItem}
       keyExtractor={item => item.id}
     />
     <Button
        title = "Upload photo"
        onPress={() => navigation.navigate('Uscreen',{ids:id})}
       />
     
     
  </View>
);
{/*
return(
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text style={{fontSize:16,marginTop:5}}>Photo Screen {name}</Text>
     <View style={{marginTop:10}}>
     <Button
        title = "Upload photo"
        onPress={() => navigation.navigate('Uscreen')}
       />
     </View>

  </View>
); */}

   {/*
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:16,marginTop:5}}>Photo Screen {id}</Text>
        <View style={{marginTop:10}}>
        <Button
           title = "Upload Picture"
           onPress={() => navigation.navigate('Uscreen',{ids:id})}
           //onPress={() => navigation.navigate('Fdetails',{name:item.id, details:item.details })}
          />
        </View>

     </View>
    ); */}
}

export default PhotoTab;