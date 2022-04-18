
import axios from "axios"
export const GET_TEACHERS="GET_TEACHERS"

export const get_teachers=(payload)=>({type:GET_TEACHERS,payload})
















export const get_teachers_api=()=>(dispatch)=>{


    axios.get("https://the-teachers-app.herokuapp.com/teacher?filterby=all&sortby=asc")
    .then((res)=>{console.log(res);dispatch(get_teachers(res.data))})
    .catch((err)=>{console.log(err)})




}