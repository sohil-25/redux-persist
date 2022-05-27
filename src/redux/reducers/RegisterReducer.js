import { CLEAR_DATA, REGISTER_DATA } from "../actiontypes/ActionType"


const intialState={
    registerData:[],
}

export const RegisterReducer=(state=intialState,action)=>{
switch(action.type){
    case REGISTER_DATA:
        let {email,name,pan,password,phonenum}=action.payload
        return{...state,
            registerData:[...state.registerData,{
                email:email,name:name,pan:pan,password:password,phonenum:phonenum
            }]
        }
    case CLEAR_DATA:
        return{...state,
        registerData:[]
        }
    default:
        return state;
}
}