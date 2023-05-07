import React, { useState } from "react";
import { View, StyleSheet, Text,TouchableOpacity} from "react-native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';
import EntypoIcons from "react-native-vector-icons/Entypo"
import { darkBlue,lightBlue } from "../Constants";


const KidProfilePhotos = (props) => {
  const [photo, setPhoto] = useState(null);
  const handleChoosePhoto = () =>{
    const options={
      noData:true
    };
    launchImageLibrary(options,response =>{
      console.log("response",response);
      if(response.uri){
        setPhoto(response);
      }
    });
  };

  return (

      
      <TouchableOpacity style={styles.uploadPhoto}  onPress={() => handleChoosePhoto()}>
        <EntypoIcons
          name={"camera"}
          size={30}
          color={darkBlue}
          style= {{alignItems:'center',justifyContent:'center',flex:1}}
        />
        {photo &&(
          <Image
          source = {{uri:photo.uri}}
          style={{height:130,
            width:170}}
          />
        )}
      </TouchableOpacity>
   
  );
};

const styles = StyleSheet.create({
  uploadPhoto:{
    top:250,
    left:180,
    height:130,
    width:170,
    padding:45,
    alignItems: 'center',
    borderRadius:35,
    backgroundColor:lightBlue,

  }
});

export default KidProfilePhotos;
