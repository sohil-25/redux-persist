import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";


const Stack=createStackNavigator();

export const StackNav=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{headerShown:false}}
            >
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}