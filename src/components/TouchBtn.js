import React from "react";
import { TouchableOpacity,Text,StyleSheet } from "react-native";
import { create } from "react-test-renderer";
import { fontScale, heightScale, widthScale } from "../utils/Utils";

export const TouchBtn=(props)=>{
    return(
        <TouchableOpacity style={[styles.touchview,props.style]} onPress={props.onPress} >
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
touchview:{
backgroundColor:'blue',
height:heightScale(50),
width:widthScale(300),
justifyContent:'center',
alignItems:'center',
alignSelf:'center',
borderRadius:10,
},
text:{
 color:'white',
 fontSize:fontScale(20)
},
})