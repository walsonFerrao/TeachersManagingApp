
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Teacherscard}  from './TeachersCard'




 export const Teachermax=()=>{

const {id}=useParams()
const  [payload,setpayload]=useState({
    name:"",
    img:"",
    age:"",
    gender:"",
    classes:"",
  })

  const Displaydiv=(props)=>{
    console.log(props,"propps")
        
    
    
    
    
    
    
    return(
      <div style={{display:"flex",width:"45%",height:"40px",gap:"30px",alignItems:"center",backgroundColor:"grey",marginTop:"5px",fontSize:"20px"}}>
    <div>Grade: {props.classname}</div>
    <div>Section: {props.section}</div>
    <div>Subject: {props.subject}</div>
    </div>
    )
    
    
    }





function attachdata(data)
{
    console.log(payload.name,"name")

setpayload({...payload,name:data.name,img:data.img,age:data.age,gender:data.gender,classes:data.classes})




}




useEffect(()=>{


axios.get(`http://localhost:8080/teacher/${id}`)
.then((res)=>{console.log(res.data);attachdata(res.data)})
.catch((err)=>{console.log(err)})


},[])


return (


<div style={{marginLeft:"30%"}}>

<br />
<br />
{payload.name!=""?<Teacherscard name={payload.name} gender={payload.gender} age={payload.age} classlength={payload.classes.length} img={payload.img} />:""}

{payload.classes!=""?payload.classes.map((ele,index)=><div><Displaydiv key={index} section={ele.section} classname={ele.grade} subject={ele.subject}  index={index}/></div>):""}

</div>






)
   





}
