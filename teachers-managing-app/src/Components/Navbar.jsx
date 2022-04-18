import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Link}  from 'react-router-dom'
import axios from 'axios';
import { elementTypeAcceptingRef } from '@mui/utils';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar() {

const [searched,setsearched]=React.useState([])

function findteachers(e)
{

if(e.target.value=="")
{
  setsearched([])
}
  
  axios.get(`https://the-teachers-app.herokuapp.com/teacher/searching/${e.target.value}`)
  .then((res)=>{console.log(res);setsearched([...res.data])})
  .catch((err)=>{console.log(err)})

}



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            TEACHERS-PRO
          </Typography>
          <Link to={"/"}><button style={{marginRight:"25px",backgroundColor:"blue",height:"25px",color:"white"}}>Home</button></Link>

          <Link to={"/login"}><button style={{marginRight:"25px",backgroundColor:"blue",height:"25px",color:"white"}}>Login</button></Link>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase onChange={findteachers}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>


      <div style={{width:"20%",position:"fixed",marginLeft:"78%",backgroundColor:"grey",borderRadius:"10px"}}>

   {searched.length!=0?searched.map((ele)=><Link style={{textDecoration:"none",color:"black"}} to={`/teacher/${ele._id}`}><div  style={{marginLeft:"20px",height:"25px"}}>{ele.name}</div></Link> ):""}

      </div>



    </Box>
  );
}


