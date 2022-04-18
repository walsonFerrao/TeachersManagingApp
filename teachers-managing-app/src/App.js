import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {Teacherscard} from './Components/TeachersCard'
import {Login} from "./Components/Login"
import {Addteachers} from "./Components/Addteachersform"
import {Routes,Route} from 'react-router-dom'
import {Home} from './Components/Home';
import {Teachermax} from './Components/Teacherfmax'
import {Updateteachers} from './Components/Updateachers'
function App() {
  return (
    <>
    <Navbar/>
    {/* <Teacherscard/>
    <Login/> */}


    <Routes>
    <Route path='/add' element={<Addteachers/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/teacher/:id' element={<Teachermax/>}/>
    <Route path='/updateteacher/:id' element={<Updateteachers/>}/>


    </Routes>



    </>
  );
}

export default App;
