import { CLEAR_DATA, LOGIN_DATA, REGISTER_DATA } from "../actiontypes/ActionType"

export const saveRegisterData=(data)=>{
    return{
        type:REGISTER_DATA,
        payload:data
    }
}

export const saveLoginData=(data)=>{
    return{
        type:LOGIN_DATA,
        payload:data
    }
}

export const clearData=()=>{
    return{
        type:CLEAR_DATA,
    }
}