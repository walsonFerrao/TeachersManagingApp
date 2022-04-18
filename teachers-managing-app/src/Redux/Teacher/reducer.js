import {GET_TEACHERS} from './action'



const initstate={


teachers:[],
searchedteachers:[]


}



export const teacherreducer=(store=initstate,{type,payload})=>{

switch (type) {
    case GET_TEACHERS:
        
        return {...store,teachers:[...payload]};

    default:
      return  store;
}

}