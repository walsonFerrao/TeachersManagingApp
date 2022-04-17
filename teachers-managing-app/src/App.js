import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {Teacherscard} from './Components/TeachersCard'
import {Login} from "./Components/Login"
import {Addteachers} from "./Components/Addteachersform"
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Navbar/>
    {/* <Teacherscard/>
    <Login/> */}


    <Routes>
    <Route path='/add' element={<Addteachers/>}/>

    </Routes>



    </>
  );
}

export default App;
