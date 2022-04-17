import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {Teacherscard} from './Components/TeachersCard'
import {Login} from "./Components/Login"
import {Addteachers} from "./Components/Addteachersform"
import {Routes,Route} from 'react-router-dom'
import {Home} from './Components/Home'
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

    </Routes>



    </>
  );
}

export default App;
