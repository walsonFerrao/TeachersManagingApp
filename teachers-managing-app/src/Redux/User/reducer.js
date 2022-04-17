import {ADD_USER} from "./action"



const initstate={

user:"",
token:"",
isloading:false,
iserror:false

}


export const userreducer=(store=initstate,{type,payload})=>{

switch (type) {
    case ADD_USER:
        
       return {...store,user:payload.user,token:payload.token}

    default:
        return store;
}






}




