

import axios from 'axios'
import {Teacherscard}  from './TeachersCard'

import {get_teachers_api} from '../Redux/Teacher/action'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'






export const Home=()=>{

    const dispatch=useDispatch()
   
    const teachers=useSelector((store)=>store.teacher.teachers[0])||[]

    console.log(teachers)

    useEffect(()=>{

      dispatch(get_teachers_api())
    },[])





return (
    <>

{teachers.map((ele)=><Teacherscard name={ele.name} gender={ele.gender} age={ele.age} classlength={ele.classes.length} img={ele.img}/>)        }



</>
)

}