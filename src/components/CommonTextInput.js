import React from 'react';
import {TextInput,Text,View,StyleSheet} from 'react-native';
import { heightScale, widthScale } from '../utils/Utils';

export const CommonTextInput = props => {
  return (
    <View style={[styles.view, props.style]}>
      <Text style={styles.text}>{props.titlename}</Text>
      <TextInput
        style={[styles.textinput]}
        maxLength={props.maxLength}
        keyboardType={props.keyboardType}
        placeholder={props.placeholder}
        placeholderTextColor="grey"
        secureTextEntry={props.secureTextEntry}
        value={props.value}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        ref={props.reffocus}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    view:{
        backgroundColor:'white',
        marginHorizontal:widthScale(10),
        marginVertical:heightScale(5)
    },
  text: {
      marginLeft:widthScale(5),
      color:'black'
  },
  textinput: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    color: 'black',
  },
});
