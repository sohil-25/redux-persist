import React from "react";
import {Text} from 'react-native';

export const TextCommon=(props)=>{
    return(
        <Text style={props.style}>{props.text}</Text>
    )
}