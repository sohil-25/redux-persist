import { LOGIN_DATA} from "../actiontypes/ActionType"


const intialState={
    loginData:[],
}

export const LoginReducer=(state=intialState,action)=>{
switch(action.type){
    case LOGIN_DATA:
        return{...state,
            loginData:action.payload
        }
    default:
        return state;
}
}