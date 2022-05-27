import React from "react";
import { TouchableOpacity,Text,StyleSheet } from "react-native";
import { fontScale } from "../utils/Utils";

export const TouchTxt=(props)=>{
    return(
        <TouchableOpacity style={[styles.touchview,props.style]} onPress={props.onPress} >
            <Text style={styles.txt}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    touchview:{
    alignItems:'center',
    },
    txt:{
        color:'blue',
        fontSize:fontScale(15)
    },
})