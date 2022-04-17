

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

import styled from "styled-components";



const Container=styled.div`
width:60%;
margin-left:40%;
margin-top:50px;
background-color:"#4a6fae";

`


export const Login=()=>{




return (


    

<Container>
<TextField id="filled-basic" label="Email" variant="filled" />
<br />
<TextField id="filled-basic" label="Password" variant="filled" type="password" />
<br />
<Button variant="contained">Login</Button>

</Container>
  






)





}
