import styled from "styled-components"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import { display, fontSize } from "@mui/system";


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
<button style={{backgroundColor:"black",color:"white"}}>Delete</button>
</div>
)


}



export const Addteachers=()=>{

const[classarray,setclassarray]=useState([]);
const [classname,setclassname]=useState("1st");
const [gender, setgender] = useState('male');
const [subject,setsubject]=useState('Mathe')
const [section,setsection]=useState("A")

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





return (
  <Container>
    <Wrappper>

<div style={{backgroundColor:"transparent",width:"40%"}}>
<TextField id="filled-basic" label="name" variant="filled" />
<br />
<TextField id="filled-basic" label="Age" variant="filled" />
<br />
<TextField id="filled-basic" label="Filled" variant="filled" />
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




{classarray.map((ele,index)=> <Displaydiv key={index} section={ele.section} classname={ele.grade} subject={ele.subject}/>)}
</div>



    </Wrappper>


    <Button size="large" variant="contained" style={{marginLeft:"40%"}}>ADD To DATABASE</Button>

    </Container>
)







}
