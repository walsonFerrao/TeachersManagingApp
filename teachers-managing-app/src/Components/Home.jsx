
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {Teacherscard}  from './TeachersCard'
import styled from 'styled-components'

import {get_teachers_api,get_teachers} from '../Redux/Teacher/action'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react'

const genders = [
    {
      value: 'male',
      label: 'male',
    },
    {
      value: 'female',
      label: 'female',
    },
    {
      value: 'transgender',
      label: 'transgender',
    },
    {
      value: 'other',
      label: 'other',
    },
  ];


const Buttonwrapper=styled.div`

display:flex;
width:100%;
gap:10%;
height:40px;
justify-content:center;
margin-top:10px;
margin-bottom:15px;


`




export const Home=()=>{
    const [params, setparams] = useState({
       gender:"all",
       sortby:""

    });
    

    const dispatch=useDispatch()
   
    const teachers=useSelector((store)=>store.teacher.teachers)||[]

    console.log(teachers)

    useEffect(()=>{

      dispatch(get_teachers_api())
    },[])

    const handleChange = (value) => {
        setparams({...params,gender:value});
        // getitem()
    }
    const handlesorting = (value) => {
        setparams({...params,sortby:value});
        // getitem()
    }


     function getitem()
     {

        fetch(`https://the-teachers-app.herokuapp.com/teacher?filterby=${params.gender}&sortby=${params.sortby}`)
        .then((res)=>res.json())
        .then((res)=>{console.log(res);dispatch(get_teachers(res))})
        .catch((err)=>{console.log(err)})

     }
     useEffect(()=>{

        getitem()

     },[params])

     const navigate=useNavigate()

return (
    <>

 <Buttonwrapper >
 <Button variant="contained" disableElevation onClick={()=>{handlesorting("asc")}}>
      Sort Age In Ascending
    </Button>

    <Button variant="contained" disableElevation onClick={()=>{handlesorting("dsc")}}>
      Sort Age In Descending
    </Button>

    
<div style={{height:"30px"}}>
<label htmlFor="">All</label><input type="checkbox" checked={params.gender=="all"} onClick={()=>{handleChange("all")}}/>
    <label htmlFor="">male</label><input type="checkbox" checked={params.gender=="male"} onClick={()=>{handleChange("male")}}/>
    <label htmlFor="">female</label><input type="checkbox" checked={params.gender=="female"} onClick={()=>{handleChange("female")}}/>
    <label htmlFor="">other</label><input type="checkbox" checked={params.gender=="other"} onClick={()=>{handleChange("other")}}/>
</div>

<Button variant="contained" disableElevation onClick={()=>{navigate("/add")}}>
      Add More Teachers
    </Button>

 </Buttonwrapper>


{teachers.map((ele)=><Link  style={{ textDecoration: 'none',color:"black" }} to={`/teacher/${ele._id}`}><Teacherscard name={ele.name} gender={ele.gender} age={ele.age} classlength={ele.classes.length} img={ele.img}/></Link>)        }



</>
)

}