import styled from "styled-components"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import { display, fontSize } from "@mui/system";
import axios from "axios";


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

  const classes = [
    {
      value: '1st',
      label: '1st',
    },
    {
      value: '2nd',
      label: '2nd',
    },
    {
      value: '3rd',
      label: '3rd',
    },
    {
      value: '3rd',
      label: '3rd',
    },
    {
      value: '4rth',
      label: '4rth',
    },
    {
      value: '5th',
      label: '5th',
    },
    {
      value: '6th',
      label: '6th',
    },
    {
      value: '7nth',
      label: '7nth',
    },
    {
      value: '8th',
      label: '8th',
    },
    {
      value: '9th',
      label: '9th',
    },
    {
      value: '10nth',
      label: '10nth',
    },
    {
      value: '11nth',
      label: '11nth',
    },
    {
      value: '12th',
      label: '12th',
    },
    {
      value: 'lkg',
      label: 'lkg',
    },
  ];







  const sections = [
    {
      value: 'A',
      label: 'A',
    },
    {
      value: 'B',
      label: 'B',
    },
    {
      value: 'C',
      label: 'C',
    },
    {
      value: 'D',
      label: 'D',
    },
    {
      value: 'E',
      label: 'E',
    },
    {
      value: 'F',
      label: 'F',
    },
  ];






  const subjects = [
    {
      value: 'Mathe',
      label: 'Mathe',
    },
    {
      value: 'English',
      label: 'English',
    },
    {
      value: 'Social Sciences',
      label: 'Social Sciences',
    },
    {
        value: 'Economics',
        label: 'Economics',
      },
      {
        value: 'DSA',
        label: 'DSA',
      },
      {
        value: 'Computer Basics',
        label: 'Computer Basics',
      },
      {
        value: 'Coding',
        label: 'Coding',
      },
      {
        value: 'Javascript',
        label: 'Javascript',
      },
  ];


const BUTTON=styled.button`

background-color:black;
color:white;
height:50px;
width:15%;

`



const Wrappper=styled.div`

width:80%;
margin:auto;
display:flex;
gap:1%;
padding:20px;
background-color:rgb(240,240,240);
margin-top:30px;


`
const Container=styled.div`

width:100%;
margin:auto;
background-color:rgb(240,240,240);
padding-bottom:30px;
height:380px;

`


const Displaydiv=(props)=>{
console.log(props,"propps")
    






return(
  <div style={{display:"flex" ,gap:"20px",alignItems:"center",backgroundColor:"grey",justifyContent:"space-between",marginTop:"5px"}}>
<div>Grade: {props.classname}</div>
<div>Section: {props.section}</div>
<div>Subject: {props.subject}</div>
<button onClick={()=>{props.deleteteachers(props.index)}}  style={{backgroundColor:"black",color:"white"}}>Delete</button>
</div>
)


}



export const Addteachers=()=>{

const[classarray,setclassarray]=useState([]);
const [classname,setclassname]=useState("1st");
const [gender, setgender] = useState('male');
const [subject,setsubject]=useState('Mathe')
const [section,setsection]=useState("A")
const [teachername,setteachername]=useState("")
const [teacherage,setteacherage]=useState("")
const [teacherimg,setteacherimg]=useState("")

    const handleChange = (event) => {
        setgender(event.target.value);
    };
    const handleChangesubject = (event) => {
        setsubject(event.target.value);
    };
    const handleChangesection = (event) => {
      setsection(event.target.value);
  };
  const handleChangeclass = (event) => {
    setclassname(event.target.value);
};

    const addclassname=()=>{

        setclassarray([...classarray,{grade:classname,section:section,subject:subject}])
        
        // setclassname("")

    }


    function deleteteachers(index)
    {
      setclassarray([...classarray.splice(index,0)])

    
    }

    // function to post the data
    function addtodatabase()
    {
    let payload={
      name:teachername,
      img:teacherimg,
      age:teacherage,
      gender:gender,
      classes:classarray
    }
    console.log(payload)

    fetch('http://localhost:8080/teacher',{
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    }


return (
  <Container>
    <Wrappper>

<div style={{backgroundColor:"transparent",width:"40%"}}>
<TextField id="filled-basic" label="name" variant="filled" onChange={(e)=>{setteachername(e.target.value)}}/>
<br />
<TextField id="filled-basic" label="Age" variant="filled" onChange={(e)=>{setteacherage(e.target.value)}}/>
<br />
<TextField id="filled-basic" label="img" variant="filled" onChange={(e)=>{setteacherimg(e.target.value)}}/>
<br />
<br />
<div>

<TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={gender}
          onChange={handleChange}
          helperText="Please select gender"
        >
          {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
</div>
</div>

<div style={{backgroundColor:"transparent",width:"50%"}} >

<div style={{backgroundColor:"transparent",display:"flex",gap:"10px"}}>
{/* <TextField id="filled-basic" label="class grade" variant="filled" value={clasname}  onChange={(e)=>{setclassname(e.target.value)}} /> */}


<TextField
          id="outlined-select-subject"
          select
          label="Select"
          value={classname}
          onChange={handleChangeclass}
          helperText="Please select class"
        >
          {classes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>



<TextField
          id="outlined-select-subject"
          select
          label="Select"
          value={section}
          onChange={handleChangesection}
          helperText="Please select section"
        >
          {sections.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>


<br />
<br />
<div>
<TextField
          id="outlined-select-subject"
          select
          label="Select"
          value={subject}
          onChange={handleChangesubject}
          helperText="Please select subject"
        >
          {subjects.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>

<BUTTON onClick={addclassname}>ADD</BUTTON>






</div>




{classarray.map((ele,index)=> <Displaydiv key={index} section={ele.section} classname={ele.grade} subject={ele.subject} setclassarray={setclassarray} deleteteachers={deleteteachers} index={index}/>)}
</div>



    </Wrappper>


    <Button size="large" variant="contained" style={{marginLeft:"40%"}} onClick={addtodatabase}>ADD To DATABASE</Button>

    </Container>
)







}
